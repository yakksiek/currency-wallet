import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Arrow({ className }) {
    return <StyledArrow className={className} />;
}

Arrow.propTypes = {
    className: PropTypes.string.isRequired,
};

const StyledArrow = styled.span`
    margin: 0 10px 0 5px;

    &.arrow-up {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid var(--accent-color-1);
        transform: rotate(45deg);
    }

    &.arrow-down {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid var(--accent-color-2);
        transform: rotate(-45deg);
    }

    &.arrow-right {
        width: 0;
        height: 0;
        border-top: 60px solid transparent;
        border-bottom: 60px solid transparent;
        border-left: 60px solid green;
    }

    &.arrow-left {
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid blue;
    }
`;

export default Arrow;
