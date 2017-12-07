import React, { Component } from 'react';

import '../css/app.css';

import RightTopGroup from './rightTopGroup';
import LeftTopGroup from './leftTopGroup';
import { Toolbar } from 'react-md';
import { Button, SVGIcon } from 'react-md';

export default class TopBar extends Component {

    constructor(props) {
       super(props);

       this.state = {
            style: {
                height: props.height
            },
        }
    }
    render() {
        const { style } = this.state;
        return (
            <div className='u-fixedTopParent' style={{height: style.height + 5}}>
                <div className='u-fixedTop' style={style}>
                    <LeftTopGroup/>
                    <RightTopGroup/>
                </div>
            </div>
        );
       
    }

}