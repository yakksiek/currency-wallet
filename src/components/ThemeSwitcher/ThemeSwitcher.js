import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ThemeSwitcher({ children, darkMode }) {
    const mode = darkMode ? 'dark' : 'light';
    return <StyledThemeSwticher mode={mode}>{children}</StyledThemeSwticher>;
}

ThemeSwitcher.propTypes = {
    children: PropTypes.node.isRequired,
    darkMode: PropTypes.bool.isRequired,
};

const StyledThemeSwticher = styled.div`
    min-height: 100vh;
    padding: 1rem;
    background-color: ${({ mode, theme }) => theme.palete[mode].body};
    color: ${({ mode, theme }) => theme.palete[mode].text};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ mode, theme }) => theme.palete[mode].title};
    }

    button:disabled {
        color: ${({ mode, theme }) => theme.palete[mode]['btn-disabled']};
        border-color: ${({ mode, theme }) => theme.palete[mode]['btn-disabled']};
        pointer-events: none;

        & > * {
            color: ${({ mode, theme }) => theme.palete[mode]['btn-disabled']};
        }
    }

    .background {
        background-color: ${({ mode, theme }) => theme.palete[mode].body};
    }

    .element {
        background-color: ${({ mode, theme }) => theme.palete[mode]['element-bg']};
    }

    .header-color {
        color: ${({ mode, theme }) => theme.palete[mode]['btn-bg']};
    }

    .active {
        background-color: ${({ mode, theme }) => theme.palete[mode]['btn-bg']};
        color: var(--color-2);
    }
`;

export default ThemeSwitcher;
