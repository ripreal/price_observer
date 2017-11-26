
const EventEmitter = require('events').EventEmitter
const Dispatcher = require('../dispatcher/dispatcher');

const CHANGE_EVENT = 'change';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.products = [];  
    }
     
    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    getProducts() {
        return this._products;
    }
}

module.exports = new AppStore();


