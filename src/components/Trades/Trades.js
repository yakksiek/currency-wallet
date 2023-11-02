/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

import Table from '../Table';

const currentRates = {
    EUR: 4.49,
    USD: 4.2701,
    GBP: 5.172,
};

const data = [
    {
        date: '2023-10-11T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.5263',
        amount: '500',
        id: 'a9a8f6be-ad4d-4c89-881f-b3262a04a7e7',
    },
    {
        date: '2023-10-01T00:00:00.000Z',
        currency: '🇺🇸 USD',
        price: '4.3741',
        amount: '500',
        id: 'bf63028e-e5f9-4813-8d21-f6402c9058a9',
    },
    {
        date: '2023-08-01T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.4495',
        amount: '100',
        id: '55b52c41-5f67-4491-85a3-586da5a83058',
    },
    {
        date: '2023-10-09T00:00:00.000Z',
        currency: '🇬🇧 GBP',
        price: '5.2845',
        amount: '250',
        id: '81e292c0-39a1-4892-8a12-50480bb2515d',
    },
    {
        date: '2023-10-11T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.5263',
        amount: '500',
        id: 'a9a8fsssdf6be-ad4d-4c89-881f-b3262a04a7e7',
    },
    {
        date: '2023-10-01T00:00:00.000Z',
        currency: '🇺🇸 USD',
        price: '4.3741',
        amount: '500',
        id: 'bf6302fds38e-e5f9-4813-8d21-f6402c9058a9',
    },
    {
        date: '2023-08-01T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.4495',
        amount: '100',
        id: '55b52fsdf24c41-5f67-4491-85a3-586da5a83058',
    },
    {
        date: '2023-10-09T00:00:00.000Z',
        currency: '🇬🇧 GBP',
        price: '5.2845',
        amount: '250',
        id: '81e292cfsdf230-39a1-4892-8a12-50480bb2515d',
    },
    {
        date: '2023-10-11T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.5263',
        amount: '500',
        id: 'a9a8asdff6be-ad4d-4c89-881f-b3262a04a7e7',
    },
    {
        date: '2023-10-01T00:00:00.000Z',
        currency: '🇺🇸 USD',
        price: '4.3741',
        amount: '500',
        id: 'bf630adffew28e-e5f9-4813-8d21-f6402c9058a9',
    },
    {
        date: '2023-08-01T00:00:00.000Z',
        currency: '🇪🇺 EUR',
        price: '4.4495',
        amount: '100',
        id: '55b5we2c41-5f67-4491-85a3-586da5a83058',
    },
    {
        date: '2023-10-09T00:00:00.000Z',
        currency: '🇬🇧 GBP',
        price: '5.2845',
        amount: '250',
        id: '81e292ec0-39a1-4892-8a12-50480bb2515d',
    },
];

const columnHeadings = ['Date', 'Symbol', 'Volume', 'Rates', 'Current rates', 'Value', 'Current Value', 'Profit'];

function Trades() {
    return (
        <div className="element">
            <h2 className="element-header">Trades</h2>
            <StyledTableContainer>
                <Table headings={columnHeadings} tableData={data} />
            </StyledTableContainer>
        </div>
    );
}

const StyledTableContainer = styled.div`
    max-height: 400px;
    overflow-y: auto;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        width: 0.2em;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        margin-block-start: 2.5rem;
        margin-block-end: 1rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color-3);
        border-radius: 100vw;
    }
`;

export default Trades;
