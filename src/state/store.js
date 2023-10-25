import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { darkModeSlice } from '../features/darkModeSlice';

const rootReducer = combineReducers({
    darkMode: darkModeSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
