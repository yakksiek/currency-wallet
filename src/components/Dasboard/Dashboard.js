import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

function Dashboard() {
    return (
        <StyledDasboard>
            <Header />
        </StyledDasboard>
    );
}

const StyledDasboard = styled.div`
    max-width: 1600px;
    margin: 1rem auto;
    background-color: transparent;
`;

export default Dashboard;
