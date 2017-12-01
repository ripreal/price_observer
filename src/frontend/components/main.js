import React, {Component} from 'react';
import Products from './products-page';
import Categories from './categories-list';
import Toolbar from './toolbar.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: "products"};
    }

    render () { 
        return (
            <div className="page-header">
                <h1><a href="#/products">Price tracker</a></h1>
                <Categories onMenuChange = {this.onMenuChange.bind(this)}/>
                {this.renderPage()}
                <Toolbar/>
            </div>
        )
    }

    renderPage() {
        switch (this.state.menu) {
            case "products":
                return <Products key="products"/>;
                break;
            default: 
                return ""
        }
    }

    onMenuChange(menu) {
        this.state.menu = menu;
    }
}

export default Main;