const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: { apiKey: process.env.REACT_APP_API_KEY },
};

class CurrencyAPI {
    // url = '/api/getRates';
    // url = `http://api.exchangeratesapi.io/v1/latest?access_key=yNTrkLSSDM9aLwz8nJpLpMfUjDu5p5BF&base=EUR`;
    url = `https://api.apilayer.com/exchangerates_data`;

    getRates(options, signal) {
        const { date, currency } = options;
        const dateQuery = date || 'latest';
        const fetchOptions = { signal };

        return fetch(`${this.url}/${dateQuery}?symbols=${currency}&base=PLN`, requestOptions)
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
