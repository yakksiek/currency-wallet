// ./src/components/App.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import theme from '../Styles/theme';
import ThemeSwitcher from './ThemeSwitcher';
import Dashboard from './Dasboard/Dashboard';

const App = function () {
    const { darkMode } = useSelector((state) => state.darkMode);

    return (
        <ThemeProvider theme={theme}>
            <ThemeSwitcher darkMode={darkMode}>
                <Dashboard />
            </ThemeSwitcher>
        </ThemeProvider>
    );
};

export default App;
