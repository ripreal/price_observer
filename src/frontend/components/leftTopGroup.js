import React, { Component } from 'react';
import '../css/app.css';

import UserLogo from './auth/userLogo';

const style = {
    cursor: 'pointer'
}

export default class LeftTopGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {name: 'R.I.P.real'}
        }
    }

    render() {
        return (
            <div className='u-leftBarGroup' style={style}>
                <UserLogo/>
            </div>
        );
    }
}