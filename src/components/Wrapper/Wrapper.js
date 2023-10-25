import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Wrapper({ children, as, row = '' }) {
    return (
        <StyledWrapper $as={as} $row={row.toString()}>
            {children}
        </StyledWrapper>
    );
}

const DefaultStyledWrapper = styled.div`
    /* display: flex;
    height: 600px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    flex-direction: ${({ $row }) => ($row === 'true' ? 'row' : 'row-reverse')};
    flex-direction: row;
    transition: all ease 1s;
    & > * {
        flex: 1;
    } */
`;

const StyledWrapper = styled(DefaultStyledWrapper)(({ theme, $as }) => theme.wrapper[$as]);

Wrapper.defaultProps = {
    as: '',
    row: false,
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    as: PropTypes.string,
    row: PropTypes.bool,
};

export default Wrapper;
