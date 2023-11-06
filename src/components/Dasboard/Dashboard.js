import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Trades from '../Trades';
import ChartRates from '../Chart';
import ProfitLossChart from '../ProfitLossChart';

function Dashboard() {
    return (
        <StyledDasboard>
            <Header />
            <Trades />
            <ProfitLossChart>
                <ChartRates />
            </ProfitLossChart>
        </StyledDasboard>
    );
}

const StyledDasboard = styled.div`
    max-width: 1200px;
    margin: 1rem auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export default Dashboard;
