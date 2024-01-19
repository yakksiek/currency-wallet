/* eslint-disable no-return-await */
/* eslint-disable arrow-body-style */


// const fetch = require('node-fetch');

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: { apiKey: process.env.API_KEY },
// };

// const dataRates = {
//     success: true,
//     timestamp: 1705494843,
//     base: 'EUR',
//     date: '2024-01-17',
//     rates: {
//         USD: 1.087459,
//         PLN: 4.395905,
//         GBP: 0.857483,
//     },
// };

// // const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR&symbols=USD,PLN,GBP`;
// // const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR`;
// const url = `https://api.apilayer.com/exchangerates_data`;

// exports.handler = async (event, context) => {
//     // const symbols = event.queryStringParameters.symbols || 'USD,PLN,GBP';
//     // const date = event.queryStringParameters.date || 'latest';

//     // return await fetch(`${this.url}/${date}?symbols=${symbols}&base=EUR`, requestOptions)
//     //     .then((resp) => {
//     //         return resp.json();
//     //     })
//     //     .then((data) => {
//     //         console.log(data);
//     //         return {
//     //             statusCode: 200,
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(data),
//     //         };
//     //     });

//     return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataRates) };
// };

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

// const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY}&base=EUR&symbols=USD,PLN,GBP`;
const url = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_KEY_RATES}&base=EUR`;

exports.handler = async (event, context) => {
    // const symbols = event.queryStringParameters.symbols || 'USD,PLN,GBP'

    // return await fetch(`${url}&symbols=${symbols}`)
    //     .then(resp => {
    //         return resp.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         return {
    //             statusCode: 200,
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(data),
    //         };
    //     });

    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataRates) };
};
