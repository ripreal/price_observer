import React, { Component } from 'react';
import '../css/app.css';
import WebFontLoader from 'webfontloader';
import { Avatar, IconSeparator, FontIcon, SVGIcon } from 'react-md';

export default class UserLogo extends Component {

    render() {
        return ([
                 <Avatar random icon={<FontIcon iconClassName="fa fa-rocket" />}/>,
                 <span>R.I.P. real blog</span>
            ]
        );
    }
}