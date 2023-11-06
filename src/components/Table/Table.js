/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { UilMultiply, UilTrashAlt, UilTimes } from '@iconscout/react-unicons';
import { useSelector, useDispatch } from 'react-redux';

import * as h from '../helpers';
import Row from './Row';
import Arrow from '../Arrow';
import Button from '../Button';
import Popup from '../Popup';
import Wrapper from '../Wrapper';
import { transactionsActions } from '../../features/transactionsSlice';

import StyledTable from './Table.styled';

function Table({ headings, tableData, latestRates }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const dispatch = useDispatch();

    const formatDate = (date) => {
        const transactionDate = new Date(date);
        const now = new Date();
        const monthsAgo = now.getMonth() - transactionDate.getMonth();
        const formattedDate = transactionDate.toLocaleDateString();

        const dataJSX = (
            <p>
                {formattedDate} <span className="date">({monthsAgo} months ago)</span>
            </p>
        );

        return dataJSX;
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
        const rows = dataArr.map((transaction) => {
            const { currency, date, amount, price, id } = transaction;
            const formattedDate = formatDate(date);
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

    return (
        <>
            {isPopupOpen && (
                <Popup handleClick={closeConfirmationPoup} classes="background">
                    {renderPopupMessage(itemToDelete)}
                </Popup>
            )}
            <StyledTable>
                <thead className="element-bg">
                    <tr>{renderHeadings(headings)}</tr>
                </thead>
                <tbody>{renderRows(tableData, latestRates)}</tbody>
            </StyledTable>
        </>
    );
}

export default Table;
