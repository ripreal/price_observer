
class Dispatcher {

    constructor() {
        this.listeners = [];
    }

    register(func) {
        this.listeners.push(func);
    }

    notify(action) {
        this.listeners.forEach((func) => {
            if  (typeof func === 'function')
                func.call(action);
        });
    }
}

module.exports = new Dispatcher();