/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import '../css/app.css';

export const GroupPositions = {
    LEFT_GROUP: 'u-leftBarGroup',
    RIGHT_GROUP: 'u-rightBarGroup',
}

export default class TopBarGroup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            groupPosition: props.groupPosition,
            style: {
                maxHeight: props.height
            }
        }
    }

    render() {
        const { groupPosition, style } = this.state;
        return (
            <div className={groupPosition} style={style}>
                {this.props.children}
            </div>
        );
    }
}
