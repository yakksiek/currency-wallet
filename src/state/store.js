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

const store = configureStore({
    reducer: rootReducer,
});

export default store;
