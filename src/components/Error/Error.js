import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function Error({ children }) {
    return <StyledError>{children}</StyledError>;
}

const StyledError = styled.div`
    margin-top: 0.5em;
    color: red;
    z-index: 100;
    font-size: 0.75rem;
`;

Error.defaultProps = {
    children: '',
};

Error.propTypes = {
    children: PropTypes.node,
};

export default Error;
