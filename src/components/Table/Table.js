/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { UilMultiply } from '@iconscout/react-unicons';
import { useSelector } from 'react-redux';

import Row from './Row';
import Arrow from '../Arrow';
import Button from '../Button';

function Table({ headings, tableData }) {
    const {
        data: { rates: currentRates },
    } = useSelector((store) => store.currency.latest);

    const calculateProfitLoss = (transaction) => {
        const { currency, price, amount } = transaction;
        const [_, symbol] = currency.split(' ');
        const rate = (1 / currentRates[symbol]).toFixed(4);

        const volume = parseFloat(amount);
        const totalPrice = parseFloat(price) * volume;
        const currentPrice = rate * volume;
        const profitLoss = currentPrice - totalPrice;

        return { profitLoss, symbol, currentPrice, totalPrice, currentRate: rate };
    };

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

    const handleItemDel = (id) => {
        console.log(id);
    };

    const renderRows = (dataArr) => {
        const rows = dataArr.map((transaction) => {
            const { currency, date, amount, price, id } = transaction;
            const formattedDate = formatDate(date);
            const { profitLoss, currentPrice, currentRate, totalPrice, symbol } = calculateProfitLoss(transaction);
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
                    handleClick={() => handleItemDel(id)}
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

    return (
        <StyledTable>
            <thead className="element-bg">
                <tr>{renderHeadings(headings)}</tr>
            </thead>
            <tbody>{renderRows(tableData)}</tbody>
        </StyledTable>
    );
}

const StyledTable = styled.table`
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    border-collapse: collapse;

    thead {
        color: var(--color-3);
        position: sticky;
        top: 0;
        z-index: 1;

        th {
            padding-bottom: 0.5rem;
        }
    }
`;

export default Table;
