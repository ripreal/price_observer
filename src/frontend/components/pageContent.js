
import React, { Component } from 'react';

import PriceObserver from './articles/priceObserver/priceObserver';
import { Route, Switch } from 'react-router-dom';

const style = {
    marginTop: '80px'
};

export default class PageContent extends Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <div style={style}>
                <Switch>
                    <Route path='/PriceObserver' component={PriceObserver}/>
                </Switch>
            </div>
        )
    }
}