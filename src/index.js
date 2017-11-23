import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Categories from './frontend/components/categories-list';
import ProductsPage from './frontend/components/products-page';

ReactDOM.render(<Categories/>, document.getElementById('categories'));
ReactDOM.render(<ProductsPage/>, document.getElementById('products'));

registerServiceWorker();
