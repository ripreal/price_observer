
import React, { Component } from 'react';

const style = {
    outline: '1px dotted gray',
    marginTop: '60px'
};

export default class Article extends Component {

    render() {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}