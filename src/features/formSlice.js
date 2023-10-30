/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: true,
    formData: { date: '', currency: '', price: '', amount: '' },
    formErrors: {},
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
        resetForm() {
            return initialState;
        },
    },
});

export const formActions = formSlice.actions;
