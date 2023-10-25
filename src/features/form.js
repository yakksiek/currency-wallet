/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        toggleForm(state) {
            state.isOpen = !state.isOpen;
            console.log('form open:');
            console.log(state.isOpen);
        },
    },
});

export const formActions = formSlice.actions;
