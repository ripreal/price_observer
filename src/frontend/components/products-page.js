
import React, {Component} from 'react';
import ProductList from './product-list';
const  AppStore = require ('../stores/app-store');

class ProductsPage extends Component {

    constructor(props) {
        super(props);
        
        var products = [
        {
            user: 'test',
            slug: "Les-Paul-electric-guitar",
            name: "Les Paul electric guitar",
            imageUrl: "img/guitar.jpg",
            stores: [
              {
                name: "Amazon",
                latestPrice: { amount: 12.432, currency: 'USD' },
                initialPrice: { amount: 14.123, currency: 'USD' },
                priceChangePercentage: 90,
                url: "http://localhost:3000/#/products",
                priceChangeNumeric: -4
              },
              {
                name: "Levis",
                latestPrice: { amount: 13, currency: 'USD' },
                initialPrice: { amount: 11, currency: 'USD' },
                priceChangePercentage: 12,
                url: "http://localhost:3000/#/products",
                priceChangeNumeric: -4
              },
              {
                name: "Backcountry",
                latestPrice: { amount: 130.7, currency: 'USD' },
                initialPrice: { amount: 130.7, currency: 'USD' },
                priceChangePercentage: -5,
                url: "http://localhost:3000/#/products",
                priceChangeNumeric: -4
              },
              {
                name: "REI",
                latestPrice: { amount: 130.7, currency: 'USD' },
                initialPrice: { amount: 14, currency: 'USD' },
                priceChangePercentage: 13,
                url: "http://localhost:3000/#/products",
                priceChangeNumeric: -4
              },
              {
                name: "CampSaver",
                latestPrice: { amount: 100, currency: 'USD' },
                initialPrice: { amount: 14, currency: 'USD' },
                priceChangePercentage: 70,
                url: "http://localhost:3000/#/products",
                priceChangeNumeric: -4
              },
            ]
          },
          
        ];
        this.state = {products: products};
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        //AppStore.removeChangeListener(this._onChange);
    }

    _onChange(products) {
        this.setState(products);
    }

    dispatch () {
        const ProductActions = require('../actions/product-actions');
        ProductActions.updateProducts([]);
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
