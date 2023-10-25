import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ handleClick }) {
    return <StyledButton>Button</StyledButton>;
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

const StyledButton = styled.button``;

export default Button;
