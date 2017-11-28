
import Repository from '../repository/products';

class Handler {
    async on(event) {
        return Repository.list().then((products) => {
            return products;    
        })
        .catch((error) => {throw new Error(error)})
    }
}

module.export = new Handler();