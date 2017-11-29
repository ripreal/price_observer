
import Repository from '../repository/products';

class Handler {
    async getProductsPrices(event) {
        return Repository.list().then((products) => {
            return products;    
        })
        .catch((error) => {throw new Error(error)})
    }
}

module.exports = new Handler();