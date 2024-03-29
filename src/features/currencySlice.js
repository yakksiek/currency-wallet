/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CurrencyAPI from '../api/currencyProvider';

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
                state[dataType].data = null;
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
