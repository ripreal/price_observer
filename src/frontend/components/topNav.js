import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { Button, SVGIcon } from 'react-md';
import { Toolbar } from 'react-md';

import '../css/app.css';

const style = {
    boxShadow: 'initial',
    marginBottom: '60px'
}


class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
    state = {
        logged: false,
    };

    handleChange (event, logged) {
        this.setState({ logged: logged });
    };

    render() {
        return (
            <div>
             <Toolbar style={style}
            fixed={true}
            nav={[]}
            title="Colored"
            actions={[ <Button flat primary swapTheming>Hello</Button>, <Button icon primary>favorite</Button>]}
            />
            </div>
        );
    }
}

export default AppBarExampleComposition;