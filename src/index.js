import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from "react-dom"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './frontend/components/app.js';

hydrate(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('categories'));
    

registerServiceWorker();
