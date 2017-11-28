
const amazon = require('amazon-product-api');

class Amazon {

    constructor() {
       const Credentials = require('../credentials.json');
        this._client = amazon.createClient({
            awsId: Credentials.AMAZON_STORE.AMAZON_ACCESS_KEY, //"aws ID",
            awsSecret: Credentials.AMAZON_STORE.AMAZON_SECRET_KEY, //"aws Secret",
            awsTag: Credentials.AMAZON_STORE.AMAZON_ASSOC_TAG //"aws Tag"
        });
    }

    async productsList(name) {
        let result = {
            items: [],
            error: ""
        };
        await this._client.itemSearch({
            searchIndex: name,
        }).then((results) => {
            result.items = result;
        }).catch((error) => {
            result.error = error;
        });
        return result;
    }
}

module.exports = new Amazon();