
const _listeners = [];

class Dispatcher {

    static register(func) {
        _listeners.push(func);
    }

    static dispatch(action) {
        _listeners.forEach((func) => {
            if  (typeof func === 'function')
                func.call(this, action);
        });
    }
}

module.exports =  Dispatcher;