import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UilSync, UilMultiply, UilTrashAlt, UilTimes } from '@iconscout/react-unicons';

import * as h from '../helpers';
import * as db from '../../data';
import Table from '../Table';
import { fetchRates } from '../../features/currencySlice';
import Button from '../Button';
import Spinner from '../Spinner';
import Arrow from '../Arrow';
import Row from '../Table/Row';
import Wrapper from '../Wrapper';
import Popup from '../Popup';
import { transactionsActions } from '../../features/transactionsSlice';

import { StyledTableContainer, StyledHeader, StyledErrorHeading } from './Trades.styled';

function Trades() {
    const dispatch = useDispatch();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const { transactions } = useSelector((store) => store.transactions);
    const {
        loading: ratesLoading,
        data: ratesData,
        error: ratesFetchError,
    } = useSelector((store) => store.currency.latest);

    const updateRatesHandler = () => {
        dispatch(fetchRates({ dataType: 'latest' }));
    };

    const calculatePercentage = (profitLoss, totalPrice) => ((profitLoss / totalPrice) * 100).toFixed(2);

    const renderHeadings = (headingsArr) => {
        const headingsJXS = headingsArr.map((heading) => <th key={heading}>{heading}</th>);
        return headingsJXS;
    };

    const openConfirmationPopup = (itemData) => {
        setIsPopupOpen(true);
        setItemToDelete(itemData);
    };

    const closeConfirmationPoup = () => {
        setIsPopupOpen(false);
        setItemToDelete(null);
    };

    const handleDeleteItem = (id) => {
        dispatch(transactionsActions.removeTransaction({ id }));
        closeConfirmationPoup();
    };

    const renderRows = (dataArr, currentRates) => {
        console.log(currentRates);
        const rows = dataArr.map((transaction) => {
            const { currency, date, amount, price, id } = transaction;
            const formattedDate = h.formatDateToMonthInfo(date);
            const { profitLoss, currentPrice, currentRate, totalPrice, symbol } = h.calculateProfitLoss(
                transaction,
                currentRates,
            );
            const percentage = calculatePercentage(profitLoss, totalPrice);
            const profitLossClassName = profitLoss > 0 ? 'summary profit' : 'summary loss';
            const arrowClassName = profitLoss > 0 ? 'arrow-up' : 'arrow-down';
            const profitLossJSX = (
                <p className={profitLossClassName}>
                    {`${Math.abs(percentage)}%`}
                    <Arrow className={`arrow ${arrowClassName}`} />
                    {`${symbol}${Math.abs(profitLoss).toFixed(2)}`}
                </p>
            );
            const buttonDelJSX = (
                <Button
                    className="btn-delete"
                    variant="transparent"
                    shape="circle"
                    handleClick={() => openConfirmationPopup({ date, currency, amount, id })}
                >
                    <UilMultiply />
                </Button>
            );

            const rowData = {
                id,
                date: formattedDate,
                currency,
                amount,
                price,
                currentRate,
                totalPrice: `PLN ${totalPrice.toFixed(2)}`,
                currentPrice: `PLN ${currentPrice.toFixed(2)}`,
                summary: profitLossJSX,
                button: buttonDelJSX,
            };

            return <Row key={id} data={rowData} />;
        });

        return rows;
    };

    const renderPopupMessage = (itemToDeleteData) => {
        const { date, currency, amount, id } = itemToDeleteData;
        return (
            <>
                <h2>Delete transaction?</h2>
                <h4>date: {date.split('T')[0]}</h4>
                <p>bought: {currency}</p>
                <p>amount: {amount}</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <Button handleClick={() => handleDeleteItem(id)}>
                        <Wrapper as="icon">
                            <UilTrashAlt />
                        </Wrapper>
                        DELETE
                    </Button>
                    <Button handleClick={closeConfirmationPoup}>
                        <Wrapper as="icon">
                            <UilTimes />
                        </Wrapper>
                        CANCEL
                    </Button>
                </div>
            </>
        );
    };

    const renderUpdatedTimeMessage = (data, error) => {
        if (error) {
            return error;
        }

        return data ? h.formatTimeDifference(data.timestamp) : '';
    };

    const header = (
        <StyledHeader>
            <h2>Trades history</h2>
            {(transactions.length > 0 || ratesFetchError) && (
                <Button variant="transparent" className="sync-btn" handleClick={updateRatesHandler}>
                    {ratesLoading === 'pending' ? <Spinner /> : <UilSync />}
                    {renderUpdatedTimeMessage(ratesData, ratesFetchError)}
                </Button>
            )}
        </StyledHeader>
    );

    if (transactions.length === 0) {
        return (
            <div className="element">
                {header}
                <h4>No transactions added.</h4>
            </div>
        );
    }

    if (ratesLoading === 'pending') {
        return (
            <div className="element">
                {header}
                <Spinner />
            </div>
        );
    }

    return (
        <div className="element">
            {header}
            {transactions.length > 0 && (
                <StyledTableContainer className="scroll">
                    {isPopupOpen && (
                        <Popup handleClick={closeConfirmationPoup} classes="background">
                            {renderPopupMessage(itemToDelete)}
                        </Popup>
                    )}
                    <Table
                        headings={renderHeadings(db.columnHeadings)}
                        tableData={renderRows(transactions, ratesData)}
                    />
                </StyledTableContainer>
            )}
            {!ratesData && <StyledErrorHeading>You are offline and cannot see profil & loss data!</StyledErrorHeading>}
        </div>
    );
}

export default Trades;
