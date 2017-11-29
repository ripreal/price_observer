
import Repository from '../repository/products';

class Handler {
    async getProductsPrices(callback) {
        let result = [];
        let result = await Repository.list();
    }
}

module.exports = new Handler();