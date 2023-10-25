// ./src/components/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../Styles/theme';
import GlobalStyles from '../Styles/Global';
import ThemeSwitcher from './ThemeSwitcher';
import Dashboard from './Dasboard/Dashboard';

const App = function () {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ThemeSwitcher mode={darkMode ? 'dark' : 'light'}>
                    <StyledElement className="element">
                        <h1>Działa</h1>
                        <p>
                            webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled,
                            Progress disabled, Overlay enabled.
                        </p>
                        <p className="red">15% $423 BUY</p>
                        <p className="green">15% $423 SELL</p>
                        <p className="grey">two months ago</p>
                    </StyledElement>
                    <Dashboard />
                </ThemeSwitcher>
            </ThemeProvider>
        </>
    );
};

const StyledElement = styled.div`
    max-width: 300px;
    padding: 1rem;
    border-radius: 1rem;

    .red {
        color: var(--accent-color-2);
    }

    .green {
        color: var(--accent-color-1);
    }

    .grey {
        color: var(--accent-color-3);
    }
`;

export default App;
