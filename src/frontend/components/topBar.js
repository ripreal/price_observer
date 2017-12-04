/* Simple.jsx */
import React, { Component }from 'react';
import { Toolbar } from 'react-md';
import FlatButton from 'material-ui/FlatButton';

export default class TopBar extends Component {
    render() {
        return (
            <div className="toolbars__examples">
                <Toolbar
                title="Transparent"
                actions = {[<FlatButton className="u-button" label="Products" primary={true} />]}
                />
            </div>
        )
    }
}