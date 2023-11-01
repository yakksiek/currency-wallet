import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as h from '../components/helpers';
import { formActions } from '../features/formSlice';
import { fetchData, currencyActions } from '../features/currencySlice';
import * as db from '../data';

function useForm() {
    const { formData, formErrors } = useSelector((store) => store.form);
    const { loading, error: fetchError } = useSelector((store) => store.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        if (formData.date !== '' && formData.currency !== '') {
            const dateString = formData.date.split('T')[0];
            const currencyString = formData.currency.split(' ')[1];

            dispatch(fetchData({ currency: currencyString, date: dateString }));
        }
    }, [formData.date, formData.currency]);

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
            console.log('errors');
            return;
        }

        console.log('submitted');
        console.log(formData);
        dispatch(formActions.resetForm());
    };

    const handleFetchErrorReset = () => {
        dispatch(currencyActions.resetFetchError());
    };

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        dispatch(formActions.setFormData({ name, value }));
        liveValidation(e.target);
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
        handleFieldChange
    };
}

export default useForm;
