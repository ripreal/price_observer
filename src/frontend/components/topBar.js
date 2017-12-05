import React, { Component } from 'react';
import { Button, SVGIcon } from 'react-md';
import '../css/app.css';
import { TabsContainer, Tabs, Tab } from 'react-md';
import TopBarGroup, {GroupPositions} from './topBarGroup';
import UserLogo from './userLogo';

export default class TopBar extends Component {

    constructor(props) {
       super(props);

       this.state = {
            style: {
                height: props.height
            }
        }
    }
    render() {
        const { style } = this.state;
        return (
            <div className='u-fixedTop' style={style}>
                <TopBarGroup height={style.height} groupPosition={GroupPositions.LEFT_GROUP} className='u-rightIndent'>
                    <UserLogo/>
                </TopBarGroup>
                <TopBarGroup height={style.height} groupPosition={GroupPositions.RIGHT_GROUP}>
                    <Tabs tabId="simple-tab">
                        <Tab label="All posts">
                            <h3>All posts</h3>
                        </Tab>
                        <Tab label="This post">
                            <h3>This post</h3>
                        </Tab>
                    </Tabs>
                    <Button className='u-rightIndent' flat primary swapTheming iconClassName="fa fa-hand-spock-o">About</Button>
                </TopBarGroup>
            </div>
        );
    }

}