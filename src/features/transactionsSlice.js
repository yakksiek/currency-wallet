/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import * as h from '../components/helpers';

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
            const allTransactions = [...state.transactions, objWithID];
            const sortedTransactions = h.sortByKeyDateString(allTransactions);
            state.transactions = sortedTransactions;
        },
        removeTransaction(state, action) {
            const { id } = action.payload;
            const filteredTransaction = h.removeObjectById(id, state.transactions);
            state.transactions = filteredTransaction;
        },
    },
});

export const transactionsActions = transactionsSlice.actions;
