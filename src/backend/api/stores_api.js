
import Handler from '../watcher/handler.js';
import Express from 'express';

class StoresApi {
    constructor() {
        this._express = new Express();

        this._express.get('/', (req, res) => {
            res.send("hello!");
        });
    }
    async postProducts(callback) {
        try {
            let products = await Handler.getProductsPrices();
        } catch(error) {
            return callback(error);
        }
    }
}