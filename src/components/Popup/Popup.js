/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledPopup, StyledButton } from './Popup.styled';

function Popup({ handleClick, children, classes }) {
    return (
        // <StyledPopup onClick={handleClick}>
        <StyledPopup>
            <div className={`popup-content ${classes}`}>
                <StyledButton className="close-button" onClick={handleClick}>
                    &times;
                </StyledButton>
                {children}
            </div>
        </StyledPopup>
    );
}

Popup.defaultProps = {
    classes: '',
};

Popup.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};

export default Popup;
