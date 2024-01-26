/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */

const fetch = require('node-fetch');

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { apiKey: process.env.API_KEY_SLOW },
};

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

const url = `http://api.exchangeratesapi.io/v1`;
const urlApiRates = `https://api.apilayer.com/exchangerates_data`;

exports.handler = async (event, context) => {
    const { date } = event.queryStringParameters;

    // exchange rates
    return await fetch(`${url}/${date}?access_key=${process.env.API_KEY_FAST}`)
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

    // apiLayer
    // return await fetch(`${urlApiRates}/${date}&base=EUR`, requestOptions)
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         return {
    //             statusCode: 200,
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(data),
    //         };
    //     });
    
    // return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataRates) };
};
