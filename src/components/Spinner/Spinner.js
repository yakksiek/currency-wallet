import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Spinner({ children }) {
    return (
        <StyledSpinner className="mac-spinner">
            <div className="spinner" />
            {children}
        </StyledSpinner>
    );
}

const StyledSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%; */

    .spinner {
        width: 20px;
        height: 20px;
        border: 4px solid var(--color-3);
        border-top: 2px solid transparent;
        border-radius: 50%;
        margin-right: 1em;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

Spinner.defaultProps = {
    children: '',
};

Spinner.propTypes = {
    children: PropTypes.node,
};

export default Spinner;
