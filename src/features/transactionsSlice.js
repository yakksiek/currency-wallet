import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    transactions: [],
};

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction(state, action) {
            const { transaction } = action.payload;
            const objWithID = { ...transaction, id: uuid() };
            state.transactions.push(objWithID);
            console.log('added transaction');
        },
    },
});

export const transactionsActions = transactionsSlice.actions;
