/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import { StyledPopup, StyledButton } from './Popup.styled';

function Popup({ handleClick, children, className }) {
    return (
        <StyledPopup onClick={handleClick}>
            <div className="popup-content element" onClick={(e) => e.stopPropagation()}>
                <StyledButton className="close-button" onClick={handleClick}>
                    &times;
                </StyledButton>
                {children}
            </div>
        </StyledPopup>
    );
}

Popup.defaultProps = {
    className: '',
};

Popup.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Popup;
