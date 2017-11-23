
import React, {Component} from 'react';
import $ from 'jquery';
import StoreComponent from "./store-component.js";

//import '../sass/app.scss';
//import '../sass/stores.scss';
//import '../sass/rotating-card.scss';

//let AppStore = require('../stores/app-store');

class ProductListItem extends Component {

    handleClick (i, event) {
        let card = $(event.target).closest('.card-container');
        if(card.hasClass('hover')){
            card.removeClass('hover');
        } else {
            card.addClass('hover');
        }
    }

    render() {
        return (
        <div className="col-md-3 col-sm-6 col-xs-10" key={this.props.name}>
            <div className="card-container manual-flip">
            <div className="card">

                <div className="front">
                <div className="content">
                    <div className="v-center-container" style={{height:210 + 'px'}}>
                        <img className="img-responsive v-center-element" src={this.props.imageUrl} alt={this.props.name}/>
                    </div>
                    <h5> {this.props.name} </h5>
                    <hr/>
                    <StoreComponent product_stores={this.props.product_stores} cheapest={true} key={this.props.name}/>
                </div>
                <div className="footer">
                    <button className="btn btn-simple" onClick={this.handleClick.bind(this, null)}>
                    <i className="fa fa-bar-chart"></i> Price list
                    </button>
                </div>
                </div>

                <div className="back">
                <div className="content">
                    <h5> {this.props.name} </h5>
                    <hr/>
                    <StoreComponent product_stores={this.props.product_stores} cheapest={false} key={this.props.name}/>
                </div>
                <div className="footer">
                    <button className="btn btn-simple" onClick={this.handleClick.bind(this, null)}>
                    <i className="fa fa-chevron-left"></i> Back
                    </button>
                </div>
                </div>

            </div>
            </div>
        </div>
        );
    }
}

export default ProductListItem;
