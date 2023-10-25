import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledFieldWrapper } from './Switch.styled';

function Switch({ handleClick }) {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
        handleClick();
    };

    return (
        <StyledFieldWrapper>
            <label htmlFor="darkMode" className="toggle-switch">
                <input type="checkbox" id="darkMode" name="darkMode" checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
        </StyledFieldWrapper>
    );
}

Switch.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default Switch;
