/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as h from '../helpers';
import * as db from '../../data';
import Table from '../Table';
import { fetchRates } from '../../features/currencySlice';

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
                <Table headings={db.columnHeadings} tableData={transactions} />
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
