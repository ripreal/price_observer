import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from "react-dom"

import Categories from './frontend/components/categories-list';

hydrate(<Categories/>, document.getElementById('categories'));
//ReactDOM.render(<ProductsPage/>, document.getElementById('products'));

registerServiceWorker();
