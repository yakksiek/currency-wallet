/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CurrencyAPI from '../api/currencyProvider';

const api = new CurrencyAPI();

const initialState = {
    historical: { data: null, loading: 'idle', error: null },
    latest: { data: null, loading: 'idle', error: null },
};

export const fetchHistorical = createAsyncThunk('data/fetchHistorical', async (options, { rejectWithValue }) => {
    // w sumie to nie jestem pewien, czy dobrze to poniżej zrobiłem z await
    // może łatwiej/lepiej było zrobić z then().catch()
    try {
        const data = await api.getRates(options);
        return data;
    } catch {
        return rejectWithValue('Oh no, something went wrong');
    }
});

export const fetchLatest = createAsyncThunk('data/fetchLatest', async (options, { rejectWithValue }) => {
    try {
        const data = await api.getRates(options);
        return data;
    } catch {
        return rejectWithValue('Could not fetch latest rates. Try again later');
    }
});

export const currencySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        resetFetchError(state) {
            state.historical.error = null;
            state.historical.loading = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHistorical.pending, (state) => {
                state.historical.loading = 'pending';
            })
            .addCase(fetchHistorical.fulfilled, (state, action) => {
                console.log(action.payload);
                state.historical.loading = 'succeeded';
                state.historical.data = action.payload;
            })
            .addCase(fetchHistorical.rejected, (state, action) => {
                state.historical.loading = 'failed';
                state.historical.error = action.payload;
            })
            .addCase(fetchLatest.pending, (state) => {
                state.latest.loading = 'pending';
            })
            .addCase(fetchLatest.fulfilled, (state, action) => {
                console.log(action.payload);
                state.latest.loading = 'succeeded';
                state.latest.data = action.payload;
            })
            .addCase(fetchLatest.rejected, (state, action) => {
                state.latest.loading = 'failed';
                state.latest.error = action.payload;
            });
    },
});

export const currencyActions = currencySlice.actions;
