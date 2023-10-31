import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { darkModeSlice } from '../features/darkModeSlice';
import { formSlice } from '../features/formSlice';
import { currencySlice } from '../features/currencySlice';

const rootReducer = combineReducers({
    darkMode: darkModeSlice.reducer,
    form: formSlice.reducer,
    currency: currencySlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
