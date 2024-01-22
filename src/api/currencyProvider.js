// import { responseData } from "../data";

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { apiKey: process.env.API_KEY_SLOW },
};



class CurrencyAPI {
    urlNetlify = '/api/getRates';

    urlApiRates = `http://api.exchangeratesapi.io/v1`;

    url = `https://api.apilayer.com/exchangerates_data`;

    // eslint-disable-next-line class-methods-use-this
    getRates(options, signal) {
        const { date } = options;
        const dateQuery = date || 'latest';
        const fetchOptions = { ...requestOptions, signal };

        // apilayer
        return fetch(`${this.url}/${dateQuery}&base=PLN`, fetchOptions)
            .then(this.handleErrors)
            .then((resp) => resp.json());

        // exchange rates
        // return fetch(`${this.urlApiRates}/${dateQuery}?access_key=${process.env.API_KEY_FAST}`)
        //     .then(this.handleErrors)
        //     .then((resp) => resp.json());

        // exchange rates AXIOS
        // return axios
        //     .get(`${this.urlApiRates}/${dateQuery}?access_key=${process.env.API_KEY_FAST}`)
        //     .then(this.handleErrors)
        //     .then((resp) => resp.json());

        // netlify functions
        // return fetch(`${this.urlNetlify}?date=${dateQuery}`)
        //     .then(this.handleErrors)
        //     .then((resp) => resp.json());

        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve(responseData);
        //     }, 2000); // 2000 milliseconds = 2 seconds
        // });
    }

    // eslint-disable-next-line class-methods-use-this
    handleErrors(resp) {
        if (!resp.ok) {
            throw Error('Problem fetching data');
        }

        return resp;
    }
}

export default CurrencyAPI;
