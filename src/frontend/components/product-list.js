
import React, {Component} from 'react';
import ProductListItem  from './product-list-item';

class ProductList extends Component {

    render() {
        let productComponents;

        if (this.props.products) {
            productComponents = this.props.products.map(function(product) {
            return (
                <ProductListItem name={product.name} product_stores={product.stores} imageUrl={product.imageUrl} key={product.name}/>
            );
        });
        }
        else {
            productComponents = <div />;
        }
        return (
            <div className="container">
                <div className="row">
                    {productComponents}
                </div>
            </div>
        );
    }
}

export default ProductList;