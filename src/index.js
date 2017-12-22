import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { hydrate } from "react-dom"
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './frontend/components/app.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './frontend/constants/theme';

hydrate(
    <BrowserRouter>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App/>
        </MuiThemeProvider>
    </BrowserRouter>
    , document.getElementById('app'));
    
registerServiceWorker();
