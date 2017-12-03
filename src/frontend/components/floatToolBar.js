import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { fullWhite } from 'material-ui/styles/colors';
import { greenA700, green600, darkBlack, white, fullBlack } from 'material-ui/styles/colors';
import { u_darkGreen } from '../constants/uColors';

const style = {
    position: 'fixed',
    margin: 'auto',
    left: '40px',
    top: '0',
    bottom: '0',
    width: '100px',
    height: '30px'
};

export default class FloatToolBar extends Component {
    render() {
        return (
            <div style={style}>
                <FlatButton fullwidth={false} className="u-roundButton" icon={<ActionAndroid color={greenA700} />} primary={true} />
                <FlatButton fullwidth={false} className="u-roundButton" icon={<ActionAndroid color={greenA700} />} primary={true} />
                <FlatButton fullwidth={false} className="u-roundButton" icon={<ActionAndroid color={greenA700} />} primary={true} />
            </div>
        )
    }
}