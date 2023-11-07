/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CurrencyAPI from '../api/currencyProvider';

const fakeLatestData = {
    success: true,
    timestamp: 1699300503,
    base: 'PLN',
    date: '2023-11-06',
    rates: {
        EUR: 0.224317,
        USD: 0.234214,
        GBP: 0.241231,
    },
};

const fakeFormData = {
    success: true,
    timestamp: 1699055999,
    historical: true,
    base: 'PLN',
    date: '2023-11-03',
    rates: {
        USD: 0.240874,
    },
};

const api = new CurrencyAPI();

const initialState = {
    historical: { data: null, loading: 'idle', error: ' 401 (Unauthorized)' },
    latest: { data: null, loading: 'idle', error: null },
};

export const fetchRates = createAsyncThunk(
    'data/fetchRates',
    // eslint-disable-next-line consistent-return
    async (options, { rejectWithValue }) => {
        try {
            const data = await api.getRates(options);
            return data;
            // const { dataType } = options;
            // if (dataType === 'latest') {
            //     return fakeLatestData;
            // }

            // if (dataType === 'historical') {
            //     return fakeFormData;
            // }
        } catch {
            return rejectWithValue('Could not fetch rates. Try again later');
        }
    },
    {
        timeout: 10000,
    },
);

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
                console.log('fetching latests:');
                console.log(action.payload);
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
