
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
        return (
            <div class="products"> <ProductList products = {this.state.products}/>
                <button onClick={this.dispatch.bind(this)} Style="float:right" id="test">load products</button>
            </div>
            
        );
    }
}

export default ProductsPage;
