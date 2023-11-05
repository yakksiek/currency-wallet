import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UilSync } from '@iconscout/react-unicons';

import * as h from '../helpers';
import * as db from '../../data';
import Table from '../Table';
import { fetchRates } from '../../features/currencySlice';
import Button from '../Button';
import Spinner from '../Spinner';

import { StyledTableContainer, StyledHeader } from './Trades.styled';

function Trades() {
    const dispatch = useDispatch();
    const { transactions } = useSelector((store) => store.transactions);
    const {
        loading,
        data: { timestamp },
    } = useSelector((store) => store.currency.latest);
    const currencySymbolsArr = h.getCurrencySymbols(transactions);

    const dispatchUpdateRates = (currency, dataType) => {
        dispatch(fetchRates({ currency, dataType }));
    };

    useEffect(() => {
        // nie włączam na starcie, bo potem API wolno chodzi
        // dispatchUpdateRates(currencySymbolsArr, 'latest');
    }, []);

    const updateRatesHandler = () => {
        dispatchUpdateRates(currencySymbolsArr, 'latest');
    };

    const renderUpdatedTimeMessage = h.formatTimeDifference(timestamp);

    return (
        <div className="element">
            <StyledHeader>
                <h2 className="element-header">Trades</h2>
                <Button variant="transparent" className="sync-btn" handleClick={updateRatesHandler}>
                    {loading === 'pending' ? <Spinner /> : <UilSync />}
                    {renderUpdatedTimeMessage}
                </Button>
            </StyledHeader>
            <StyledTableContainer>
                <Table headings={db.columnHeadings} tableData={transactions} />
            </StyledTableContainer>
        </div>
    );
}

export default Trades;
