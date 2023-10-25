import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Button({ handleClick, children }) {
    const { darkMode } = useSelector((store) => store.darkMode);

    return (
        <StyledButton className="button" onClick={handleClick} $darkMode={darkMode}>
            {children}
        </StyledButton>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

const StyledButton = styled.button`
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--button-radius);
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 50px;

    &:hover {
        color: white;
        cursor: pointer;
        transition: text-shadow 0.5s;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }
`;

export default Button;
