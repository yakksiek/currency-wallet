import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { darkModeSlice } from '../features/darkModeSlice';
import { formSlice } from '../features/formSlice';
import { currencySlice } from '../features/currencySlice';
import { transactionsSlice } from '../features/transactionsSlice';

const rootReducer = combineReducers({
    darkMode: darkModeSlice.reducer,
    form: formSlice.reducer,
    currency: currencySlice.reducer,
    transactions: transactionsSlice.reducer,
});

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistantState', serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('persistantState');
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
