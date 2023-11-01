/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

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
];

const columnHeadings = ['Date', 'Symbol', 'Volume', 'Rates', 'Current rates', 'Current Value', 'Profit'];

function Trades() {
    const calculateProfitLoss = (transaction) => {
        const { currency, price, amount } = transaction;
        const [flag, symbol] = currency.split(' ');
        const rate = currentRates[symbol];

        // Calculate profit or loss
        const volume = parseFloat(amount);
        const totalPrice = parseFloat(price) * volume;
        const currentPrice = rate * volume;
        console.log(flag);
        console.log(parseFloat(price));
        console.log(totalPrice);
        console.log(currentPrice);
        const profitLoss = currentPrice - totalPrice;

        return { profitLoss, flag, currentPrice, totalPrice, currentRate: rate };
    };

    const formatDate = (date) => {
        const transactionDate = new Date(date);
        const now = new Date();
        const monthsAgo = now.getMonth() - transactionDate.getMonth();
        const formattedDate = transactionDate.toLocaleDateString();

        return `${formattedDate} (${monthsAgo} months ago)`;
    };

    const calculatePercentage = (profitLoss, totalPrice) => {
        return ((profitLoss / totalPrice) * 100).toFixed(2);
    };

    const renderItems = (dataArr, headingsArr) => {
        return (
            <table>
                <thead>
                    <tr>
                        {headingsArr.map((heading) => (
                            <th key={heading}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataArr.map((transaction) => {
                        const { currency, date, amount, price } = transaction;
                        const formattedDate = formatDate(date);
                        const { profitLoss, flag, currentPrice, currentRate, totalPrice } =
                            calculateProfitLoss(transaction);
                        const percentage = calculatePercentage(profitLoss, totalPrice);
                        const profitLossText =
                            profitLoss >= 0
                                ? `Profit: ${flag}${profitLoss.toFixed(2)} (${percentage}%)`
                                : `Loss: ${flag}${Math.abs(profitLoss).toFixed(2)} (${percentage}%)`;

                        return (
                            <tr key={transaction.id}>
                                <td>{formattedDate}</td>
                                <td>{currency}</td>
                                <td>{amount}</td>
                                <td>{price}</td>
                                <td>{currentRate}</td>
                                <td>PLN {`${totalPrice.toFixed(2)}`}</td>
                                <td>PLN {`${currentPrice.toFixed(2)}`}</td>
                                <td>{profitLossText}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    };

    return (
        <div className="element">
            <h2>Trades</h2>
            {renderItems(data, columnHeadings)}
        </div>
    );
}

export default Trades;
