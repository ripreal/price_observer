
import Handler from '../watcher/handler.js';

class StoresApi {
    async postProducts(callback) {
        try {
            let products = await Handler.getProductsPrices();
        } catch(error) {
            return callback(error);
        }
    }
}