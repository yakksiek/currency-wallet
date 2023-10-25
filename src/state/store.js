import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { darkModeSlice } from '../features/darkModeSlice';
import { formSlice } from '../features/form';

const rootReducer = combineReducers({
    darkMode: darkModeSlice.reducer,
    form: formSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
