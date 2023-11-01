/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { fetchData } from './currencySlice';

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
    extraReducers: (builder) => {
        // nie wiem, czy to zrobiłem w dobry sposób,
        // zamysł był, żeby nastawić nasłuchwianie na
        // wykonianie obietnicy
        // celem załadowania na bieżąco ceny w formularzu
        builder.addCase(fetchData.fulfilled, (state, action) => {
            if (action.payload) {
                const value = Number(action.payload.rates.PLN).toFixed(4);
                state.formData.price = value;
            }
        });
    },
});

export const formActions = formSlice.actions;
