/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { fetchRates } from './currencySlice';

const initialState = {
    isOpen: false,
    formData: { date: '', currency: '', price: '', amount: '' },
    formErrors: {},
    isPriceFocused: false,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        toggleForm(state) {
            state.isOpen = !state.isOpen;
        },
        setFormData(state, { payload }) {
            const { name, value } = payload;
            state.formData[name] = value;
        },
        setErrors(state, { payload }) {
            state.formErrors = payload;
        },
        removeError(state, { payload }) {
            const { name } = payload;
            const { [name]: ommitedKey, ...filteredErrors } = state.formErrors;
            state.formErrors = filteredErrors;
        },
        setPriceFocused(state, { payload }) {
            state.isPriceFocused = payload;
        },
        resetForm() {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRates.fulfilled, (state, action) => {
            const { dataType } = action.meta.arg;
            if (!dataType) throw Error('dataType in payload not found');

            if (action.payload && dataType === 'historical') {
                const [_, currency] = state.formData.currency.split(' ');
                const value = Number(action.payload.rates[currency]);
                // const rate = (1 / value).toFixed(4);
                const rate = (value / 1).toFixed(4);
                state.formData.price = rate;
            }
        });
    },
});

export const formActions = formSlice.actions;
