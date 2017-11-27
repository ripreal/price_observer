
const Dispatcher = require('../dispatcher/dispatcher');
const ActionTypes = require('../actions/action-types');

class ProductActions {

    updateProducts(products) {
        Dispatcher.dispatch({
            actionType: ActionTypes.PRODUCTS_LOADED,
            data: {
                products: products
            }
        });
    }

};

module.exports = new ProductActions();
