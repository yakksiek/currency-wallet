/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formActions } from '../../features/formSlice';
import { fetchData, currenyActions } from '../../features/currencySlice';
import Button from '../Button';
import * as db from '../../data';

const formStyles = { display: 'flex', gap: '3rem', alignItems: 'flex-start', minWidth: '500px' };

function Form() {
    const { formData } = useSelector((store) => store.form);
    const { data, loading, error: fetchError } = useSelector((store) => store.currency);
    const dispatch = useDispatch();
    const { date, currency, price } = formData;

    useEffect(() => {
        if (date !== '' && currency !== '') {
            const dateString = date.split('T')[0];
            const currencyString = currency.split(' ')[1];
            console.log(currencyString, dateString);

            dispatch(fetchData({ currency: currencyString, date: dateString }));
        }
    }, [date, currency]);

    useEffect(() => {
        console.log(fetchError);
    }, [fetchError]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleFieldChange = (name, value) => {
        dispatch(formActions.setFormData({ name, value }));
    };

    const renderInputs = (fields) => {
        const groupedFields = {};
        fields.forEach((field) => {
            const group = field.group || 'default';
            if (!groupedFields[group]) {
                groupedFields[group] = [];
            }

            groupedFields[group].push(field);
        });

        const inputGroups = Object.values(groupedFields).map((fieldSet, index) => (
            <div key={index} id={`item${index + 1}`} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {fieldSet.map((field) => {
                    const { name, element } = field;
                    // const error = formErrors[name];
                    const value = formData[name];
                    const fieldData = { ...field, onChange: handleFieldChange, value };
                    const TagEl = element;

                    return <TagEl key={name} fieldData={fieldData} />;
                })}
            </div>
        ));

        return inputGroups;
    };

    const handleFetchErrorReset = () => {
        dispatch(currenyActions.resetFetchError());
    };

    if (fetchError) {
        return (
            <div className="background">
                <h2>{fetchError}</h2>
                <hr />
                <p>Problem getting the data. Try again or enter value manually</p>
                <Button handleClick={handleFetchErrorReset} type="button">
                    OK!
                </Button>
            </div>
        );
    }

    return (
        <div className="background">
            <h2 style={{ margin: '0 0 1rem 0' }}>Add new transation</h2>
            <form action="" onSubmit={handleSubmit} style={formStyles}>
                {renderInputs(db.formFields)}
            </form>
        </div>
    );
}

export default Form;
