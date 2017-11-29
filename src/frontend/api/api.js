
import ProductActions from '../actions/product-actions.js';
import Handler from '../actions/product-actions.js';

class Api {
    getProducts() {
        //here must be some get request from backend

        // here call to notify client
        ProductActions.updateProducts()
    }
}

module.exports = new Api();