/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */

const fetch = require('node-fetch');

const dataRates = {
    success: true,
    timestamp: 1705494843,
    base: 'EUR',
    date: '2024-01-17',
    rates: {
        USD: 1.087459,
        PLN: 4.395905,
        GBP: 0.857483,
    },
};

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: { apiKey: process.env.API_KEY },
// };

// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR&symbols=USD,PLN,GBP`;
const url = `http://api.exchangeratesapi.io/v1`;

exports.handler = async (event, context) => {
    const { date } = event.queryStringParameters;

    return await fetch(`${url}/${date}?access_key=${process.env.API_KEY_RATES}`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            };
        });

    // return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataRates) };
};
