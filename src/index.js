import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from "react-dom"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Main from './frontend/components/main.js';


hydrate(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
        </Switch>
    </BrowserRouter>, document.getElementById('categories'));

registerServiceWorker();
