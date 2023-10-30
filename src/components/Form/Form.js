/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formActions } from '../../features/formSlice';
import * as db from '../../data';
import DatePicker from '../DatePicker';
import Select from '../Select';
import Input from '../Input';


const formStyles = { display: 'flex', gap: '3rem', alignItems: 'flex-start', minWidth: '500px' };

function Form() {
    const { formData } = useSelector((store) => store.form);
    const dispatch = useDispatch();
    const { date, currency, price } = formData;

    useEffect(() => {
        if (date !== '' && currency !== '') {
            console.log('date');
            console.log(date);
            console.log('currency');
            console.log(currency);
            console.log('price');
            console.log(price);
        }
    }, [date, currency]);

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
