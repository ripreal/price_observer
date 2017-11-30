import React, {Component} from 'react';
import Products from './products-page';
import Categories from './categories-list';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
//import $ from 'jquery';

class Main extends Component {

    render () { 
        return (
            <div class="page-header">
                <h1><a href="#/products">Price tracker</a></h1>
                <Categories/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pr" component={Products}/>
                    </Switch>
                </BrowserRouter>
                <Products/>
            </div>
        )
    }
}

export default Main;