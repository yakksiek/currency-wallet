/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CurrencyAPI from '../api/currencyProvider';

// const fakeLatestData = {
//     success: true,
//     timestamp: 1699300503,
//     base: 'PLN',
//     date: '2023-11-06',
//     rates: {
//         EUR: 0.224317,
//         USD: 0.234214,
//         GBP: 0.241231,
//     },
// };

// const fakeFormData = {
//     success: true,
//     timestamp: 1699055999,
//     historical: true,
//     base: 'PLN',
//     date: '2023-11-03',
//     rates: {
//         USD: 0.240874,
//     },
// };

const api = new CurrencyAPI();

const initialState = {
    historical: { data: null, loading: 'idle', error: null },
    latest: { data: null, loading: 'idle', error: null },
};

export const fetchRates = createAsyncThunk('data/fetchRates', async (options, { rejectWithValue }) => {
    const controller = new AbortController();
    const { signal } = controller;

    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const data = await api.getRates(options, signal);
        clearTimeout(timeoutId);
        return data;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            return rejectWithValue('Request cancelled.');
        }
        return rejectWithValue('Could not fetch rates. Try again later');
    }
});

export const currencySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        resetFetchError(state, action) {
            const { dataType } = action.payload;
            if (!dataType) throw Error('dataType in payload not found');

            state[dataType].error = null;
            state[dataType].loading = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRates.pending, (state, action) => {
                const { dataType } = action.meta.arg;
                if (!dataType) throw Error('dataType in payload not found');

                state[dataType].loading = 'pending';
            })
            .addCase(fetchRates.fulfilled, (state, action) => {
                const { dataType } = action.meta.arg;
                if (!dataType) throw Error('dataType in payload not found');
                state[dataType].loading = 'succeeded';
                state[dataType].data = action.payload;
                state[dataType].error = null;
            })
            .addCase(fetchRates.rejected, (state, action) => {
                const { dataType } = action.meta.arg;
                if (!dataType) throw Error('dataType in payload not found');

                state[dataType].loading = 'failed';
                state[dataType].error = action.payload;
            });
    },
});

export const currencyActions = currencySlice.actions;
