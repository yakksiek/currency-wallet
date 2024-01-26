// eslint-disable-next-line import/no-cycle




class CurrencyAPI {
    urlNetlify = '/api/getRates';

    // eslint-disable-next-line class-methods-use-this
    getRates(options, signal) {
        const dateQuery = options.date || 'latest';
        // netlify functions
        return fetch(`${this.urlNetlify}?date=${dateQuery}`)
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
