import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as h from '../helpers';
import * as db from '../../data';
import Table from '../Table';
import { fetchRates } from '../../features/currencySlice';

import StyledTableContainer from './Trades.styled';

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

export default Trades;
