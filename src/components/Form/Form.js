import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formActions } from '../../features/formSlice';
import * as db from '../../data';
import DatePicker from '../DatePicker';
import Select from '../Select';

const data = {
    label: 'Date',
    name: 'date',
    type: 'date',
    required: true,
    errorMessage: 'Wrong date format',
    element: 'DatePicker',
    value: '',
};

const currencyData = {
    label: 'Currency',
    name: 'currency',
    type: 'currency',
    required: true,
    errorMessage: 'Pick currency to load the price',
    element: 'Select',
    group: 2,
};

const formStyles = { display: 'flex', gap: '3rem', alignItems: 'flex-start', minWidth: '500px' };

function Form() {
    const {
        formData: { date, currency },
    } = useSelector((store) => store.form);
    const dispatch = useDispatch();
    const expandedData = { ...data, value: date };

    useEffect(() => {
        if (date !== '' && currency !== '') {
            console.log('date');
            console.log(date);
            console.log('currency');
            console.log(currency);
        }
    }, [date, currency]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (name, value) => {
        if (value === '') throw new Error('empty value');

        dispatch(formActions.setFormData({ name, value }));
    };

    return (
        <div className="background">
            <h2 style={{ margin: '0 0 1rem 0' }}>Add new transation</h2>
            <form action="" onSubmit={handleSubmit} style={formStyles}>
                <DatePicker fieldData={expandedData} />
                <Select
                    optionsList={db.currencies}
                    placeholder="choose currency"
                    name="currency"
                    value={currency}
                    changeHandler={handleChange}
                />
            </form>
        </div>
    );
}

export default Form;
