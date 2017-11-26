import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from "react-dom"

import Categories from './frontend/components/categories-list';

hydrate(<Categories/>, document.getElementById('categories'));

registerServiceWorker();
