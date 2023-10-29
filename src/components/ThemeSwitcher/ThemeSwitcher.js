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
        border-radius: var(--element-radius);
        padding: var(--element-padding);
        &:hover {
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04);
        }
    }

    .text-color {
        color: ${({ mode, theme }) => theme.palete[mode].title};
    }

    .element-bg {
        background-color: ${({ mode, theme }) => theme.palete[mode]['element-bg']};
    }

    .header-color,
    .accent-color {
        color: ${({ mode, theme }) => theme.palete[mode]['btn-bg']};
    }

    .bg-color-hover:hover {
        background-color: ${({ mode, theme }) => theme.palete[mode]['btn-bg']};
        color: var(--color-1);
    }

    .active {
        background-color: ${({ mode, theme }) => theme.palete[mode]['btn-bg']};
        color: var(--color-2);
    }
`;

export default ThemeSwitcher;
