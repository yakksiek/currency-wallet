/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as h from '../helpers';
import Table from '../Table';
import { fetchRates } from '../../features/currencySlice';

const columnHeadings = ['Date', 'Symbol', 'Volume', 'Rates', 'Current rates', 'Value', 'Current Value', 'Profit'];

function Trades() {
    const dispatch = useDispatch();
    const { transactions } = useSelector((store) => store.transactions);
    const currencySymbolsArr = h.getCurrencySymbols(transactions);

    useEffect(() => {
        dispatch(fetchRates({ currency: currencySymbolsArr, dataType: 'latest' }));
    }, []);

    return (
        <div className="element">
            <h2 className="element-header">Trades</h2>
            <StyledTableContainer>
                <Table headings={columnHeadings} tableData={transactions} />
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
