import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Trades from '../Trades';

function Dashboard() {
    return (
        <StyledDasboard>
            <Header />
            <Trades />
        </StyledDasboard>
    );
}

const StyledDasboard = styled.div`
    max-width: 1600px;
    margin: 1rem auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export default Dashboard;
