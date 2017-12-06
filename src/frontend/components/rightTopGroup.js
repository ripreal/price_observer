
import React, { Component } from 'react';
import { Button, SVGIcon } from 'react-md';
import { TabsContainer, Tabs, Tab } from 'react-md';

import '../css/app.css';

export default class RightTopGroup extends Component {

    onTabChange(newTAbIndex, event) {
        let t1 = "";
        alert(newTAbIndex);
    }

    render() {
        return (
            <div className='u-rightBarGroup'>
                <Tabs onTabChange={this.onTabChange} tabId="simple-tab" className='u-rightIndent'>
                    <Tab label="All posts"/>
                    <Tab label='This post'/>
                </Tabs>
                <Button
                    className='u-rightIndent'
                    flat
                    primary
                    swapTheming
                    iconClassName="fa fa-hand-spock-o">About
                </Button>
            </div>
        );
    }
}
