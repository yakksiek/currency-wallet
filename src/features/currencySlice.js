/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import CurrencyAPI from '../api/currencyProvider';

const api = new CurrencyAPI();

const initialState = {
    data: null,
    loading: 'idle',
    error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async (options, { rejectWithValue }) => {
    // w sumie to nie jestem pewien, czy dobrze to poniżej zrobiłem z await
    // może łatwiej/lepiej było zrobić z then().catch()
    try {
        const data = await api.getRates(options);
        return data;
    } catch {
        return rejectWithValue('Oh no, something went wrong');
    }
});

export const currencySlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        resetFetchError(state) {
            state.error = null;
            state.loading = 'idle';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log(action.payload);
                state.loading = 'failed';
                state.error = action.payload;
            });
    },
});

export const currencyActions = currencySlice.actions;
