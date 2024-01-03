import API_KEY from '../API_KEY';

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { apiKey: API_KEY },
};

class CurrencyAPI {
    url = `https://api.apilayer.com/exchangerates_data`;

    getRates(options, signal) {
        const { date, currency } = options;
        const dateQuery = date || 'latest';
        const fetchOptions = {...requestOptions, signal}

        return fetch(`${this.url}/${dateQuery}?symbols=${currency}&base=PLN`, fetchOptions)
            .then(this.handleErrors)
            .then((resp) => resp.json());
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
