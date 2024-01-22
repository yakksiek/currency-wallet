import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as h from '../components/helpers';
import { formActions } from '../features/formSlice';
import { fetchRates, currencyActions } from '../features/currencySlice';
import { transactionsActions } from '../features/transactionsSlice';
import * as db from '../data';

function useForm() {
    const { formData, formErrors, isPriceFocused } = useSelector((store) => store.form);
    const { loading, error: fetchError, data } = useSelector((store) => store.currency.historical);
    const dispatch = useDispatch();
    const [fetchPromise, setFetchPromise] = useState(null);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (formData.date !== '' && formData.currency !== '') {
            const [dateString] = formData.date.split('T');
            const [_, currencyString] = formData.currency.split(' ');

            dispatch(formActions.setFormData({ name: 'price', value: '' }));

            const promise = dispatch(
                fetchRates({ currency: currencyString, date: dateString, dataType: 'historical' }),
            );
            setFetchPromise(promise);
            const latestPromise = dispatch(fetchRates({ dataType: 'latest' }));

            return () => {
                promise.abort();
                latestPromise.abort();
            };
        }
    }, [formData.date, formData.currency]);

    // cancel form historical request if
    // price input in focus
    useEffect(() => {
        if (isPriceFocused && fetchPromise) {
            fetchPromise.abort();
        }
    }, [isPriceFocused, dispatch]);

    const liveValidation = (input) => {
        const { name } = input;
        const errorInState = formErrors[name];
        if (!errorInState) return;

        const inputError = h.validate(db.formFields, [input]);
        const isErrorObjEmpty = h.isObjectEmpty(inputError);
        if (!isErrorObjEmpty) return;

        dispatch(formActions.removeError({ name }));
    };

    const handleCustomInputSelection = (name, value) => {
        dispatch(formActions.setFormData({ name, value }));
        dispatch(formActions.removeError({ name }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        // input validation
        const inputElements = h.findInputElementsInForm(form);
        const fieldErrors = h.validate(db.formFields, inputElements);

        // custom validation
        const customInputsErrors = h.customValidation(db.formFields, formData);
        const updatedErrors = { ...fieldErrors, ...customInputsErrors };

        dispatch(formActions.setErrors(updatedErrors));

        const isFormClean = h.checkErrors([formErrors, updatedErrors]);
        if (!isFormClean) {
            return;
        }

        dispatch(transactionsActions.addTransaction({ transaction: formData }));
        dispatch(formActions.resetForm());
        document.body.style.overflow = '';
    };

    const handleFetchErrorReset = () => {
        dispatch(currencyActions.resetFetchError({ dataType: 'historical' }));
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        dispatch(formActions.setFormData({ name, value }));
        liveValidation(e.target);
    };

    const handleFocus = (name) => {
        if (name === 'price') {
            dispatch(formActions.setPriceFocused(true));
        }
    };

    const handleBlur = (name) => {
        if (name === 'price') {
            dispatch(formActions.setPriceFocused(false));
        }
    };

    return {
        formData,
        formErrors,
        loading,
        fetchError,
        liveValidation,
        handleCustomInputSelection,
        handleSubmit,
        handleFetchErrorReset,
        handleFieldChange,
        handleFocus,
        handleBlur,
    };
}

export default useForm;
