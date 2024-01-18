class CurrencyAPI {
    url = '/api/getRates';

    getRates(options, signal) {
        const { date, currency } = options;
        const dateQuery = date || 'latest';
        const fetchOptions = { signal };

        return fetch(`${this.url}?symbols=${currency}&base=EUR&date=${dateQuery}`, fetchOptions)
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
