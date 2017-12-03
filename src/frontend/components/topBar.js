/* Simple.jsx */
import React, { Component }from 'react';
import { Toolbar } from 'react-md';

export default class TopBar extends Component {
    render() {
        return (
            <div className="toolbars__examples">
                <Toolbar
                title="Transparent"
                />
            </div>
        )
    }
}