import React, { Component } from 'react';
import '../css/app.css';
import WebFontLoader from 'webfontloader';
import { Avatar, IconSeparator, FontIcon, SVGIcon } from 'react-md';

const style = {
    cursor: 'pointer'
}

export default class UserLogo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {name: 'R.I.P.real'}
        }
    }

    render() {
        return (
            <div className='u-leftBarGroup' style={style}>
                <Avatar
                    suffix='teal'
                    className='u-leftIndent'
                    random
                    icon={<FontIcon iconClassName="fa fa-rocket" />} />
                <span
                    style= {{marginLeft: '15px'}}>
                    <h4 style={{ marginBottom: '0px' }}>R.I.P. real utils</h4>
                </span>
            </div>
        );
    }
}