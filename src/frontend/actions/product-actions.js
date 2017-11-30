
const Api = require ('../api/api');
const Dispatcher = require('../dispatcher/dispatcher');
const ActionTypes = require('../actions/action-types');

class ProductActions {

    updateProducts() {

        Dispatcher.dispatch({
            actionType: ActionTypes.PRODUCTS_LOADED,
            data: {
                products: Api.updateProducts()
            }
        });
    }

};

module.exports = new ProductActions();
