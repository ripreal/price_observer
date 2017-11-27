
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
                    this.emitChange(action.data.products);
                    break;
                default:
            }
        });
    }
     
    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    emitChange(products) {
        alert("ok");
        this.emit(this.CHANGE_EVENT, products);
    }
}

module.exports = new AppStore();


