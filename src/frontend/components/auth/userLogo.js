import React, { Component } from 'react';
import { TextField, Avatar, Button, IconSeparator, FontIcon, SVGIcon } from 'react-md';
import '../../css/app.css';

import Auth0LockPasswordless from 'auth0-lock-passwordless';

const style = {
    cursor: 'pointer'
}

const LoginStates = {
    NOT_LOGGED: 'NOT_LOGGED',
    LOGGED: 'LOGGED',
    ASK_AUTH: 'ASK_AUTH',
}

export default class UserLogo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {loginState: LoginStates.NOT_LOGGED};
    }

    render() {
        const { loginState } = this.state;
        switch(loginState) {
            case LoginStates.NOT_LOGGED:
                return this.renderLogin();
            case LoginStates.LOGGED:
                return this.renderLogged();
            case LoginStates.ASK_AUTH:
                return this.renderAuth();
            default:
                return this.renderLogin();
        }
    }

    renderLogged() {
        return ([
            <Avatar
                suffix='teal'
                className='u-leftIndent'
                random
                icon={<FontIcon iconClassName="fa fa-rocket" />} />
            ,
            <span
                style={{ marginLeft: '15px' }}>
                <h4 style={{ marginBottom: '0px' }}>R.I.P. real utils</h4>
            </span>]
        );
    }

    renderLogin() {
        return (
            <Button 
          //  onClick={() => this.setState({loginState: LoginStates.ASK_AUTH})}
            onClick={this.test}
            className='u-leftIndent' 
            flat primary>
                Login
            </Button>
        )
    }

    test() {
        const clientID = "0VryOL7K5T0bAF9fVOBYIrnQI6Qxs2qc";
        const domain = "ripreal.auth0.com";
        let lock = new Auth0LockPasswordless(clientID, domain);
        // invoke magiclink with options and callback
        lock.magiclink({closable: false,  oidcConformant: true}, function(error, email) {
            if (!error) {
                alert("A magic link has been sent to " + email);
            }
        });
    }

    renderAuth() {
        return ([
                <TextField 
                id="placeholder-only-title"
                    placeholder="mail@example.com" 
                    fullWidth = {true}
                    fixed = {true}
                    customSize={'500'}
                    style={{width:'100%'}}
                    className="md-cell md-cell--bottom" />
                    ,
                <Button 
                onClick={() => this.setState({loginState: LoginStates.ASK_AUTH})}
                flat primary>
                    Login
                </Button>
                ,
                <Button 
                onClick={() => this.setState({loginState: LoginStates.ASK_AUTH})}
                flat secondary swapTheming>
                    Register
                </Button>
            ]
        ) 
    }

}