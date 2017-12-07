import React, {Component} from 'react';
import ProductList from './product-list';

const  AppStore = require ('../stores/app-store');

class ProductsPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {products: []};
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        //AppStore.removeChangeListener(this._onChange);
    }

    _onChange(event, products) {
    
        this.setState({products: products});
    }

    dispatch () {
        AppStore.updateProducts();
    }

    render() {
        return ([
                <ProductList key="Products" products = {this.state.products}/>,
                <button key="ProductActions" onClick={this.dispatch.bind(this)}>load products</button>
            ]
        );
    }
}

export default ProductsPage;
