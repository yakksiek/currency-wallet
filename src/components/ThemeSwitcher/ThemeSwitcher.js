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

    .element {
        background-color: ${({ mode, theme }) => theme.palete[mode]['element-bg']};
    }
`;

export default ThemeSwitcher;
