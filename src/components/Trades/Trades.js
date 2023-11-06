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
    const { loading, data } = useSelector((store) => store.currency.latest);
    const currencySymbolsArr = h.getCurrencySymbols(transactions);

    const dispatchUpdateRates = (currency, dataType) => {
        dispatch(fetchRates({ currency, dataType }));
    };

    useEffect(() => {
        // nie włączam na starcie, bo potem API wolno chodzi
        // dispatchUpdateRates(currencySymbolsArr, 'latest');
    }, []);

    // useEffect(() => {}, [transactions, data]);

    const updateRatesHandler = () => {
        dispatchUpdateRates(currencySymbolsArr, 'latest');
    };

    const renderUpdatedTimeMessage = data ? h.formatTimeDifference(data.timestamp) : '';

    return (
        <div className="element">
            <StyledHeader>
                <h2>Trades history</h2>
                {transactions.length !== 0 && (
                    <Button variant="transparent" className="sync-btn" handleClick={updateRatesHandler}>
                        {loading === 'pending' ? <Spinner /> : <UilSync />}
                        {renderUpdatedTimeMessage}
                    </Button>
                )}
            </StyledHeader>
            {transactions.length === 0 ? (
                <h4>No transactions added.</h4>
            ) : (
                <StyledTableContainer>
                    <Table headings={db.columnHeadings} tableData={transactions} latestRates={data} />
                </StyledTableContainer>
            )}
        </div>
    );
}

export default Trades;
