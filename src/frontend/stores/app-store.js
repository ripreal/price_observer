
const ProductActions = require ('../actions/product-actions');
const EventEmitter = require('events').EventEmitter
const Dispatcher = require('../dispatcher/dispatcher');
const ActionTypes = require('../actions/action-types');

const CHANGE_EVENT = 'change';

class AppStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register((action) => {
            switch(action.actionType) {
                case ActionTypes.INITIALIZE:
                    this.emitChange();
                    break;
                case ActionTypes.PRODUCTS_LOADED:
                    this.emitChange(action.actionType, action.data.products);
                    break;
                default:
            }
        });
    }
     
    addChangeListener(callback) {
        this.on(ActionTypes.PRODUCTS_LOADED, callback);
    }

    emitChange(action, products) {
        this.emit(action, action, products);
    }

    updateProducts() {
        ProductActions.updateProducts();
    }

}

module.exports = new AppStore();


