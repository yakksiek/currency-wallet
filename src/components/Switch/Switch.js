/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledFieldWrapper } from './Switch.styled';

function Switch({ handleClick, name }) {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
        handleClick();
    };

    return (
        <StyledFieldWrapper>
            <label htmlFor={name} className="toggle-switch">
                <input type="checkbox" id={name} name={name} checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
        </StyledFieldWrapper>
    );
}

Switch.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Switch;
