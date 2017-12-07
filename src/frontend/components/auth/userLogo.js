import React, { Component } from 'react';
import { TextField, Avatar, Button, IconSeparator, FontIcon, SVGIcon } from 'react-md';
import '../../css/app.css';
import AuthAPI from '../../api/authAPI';

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
        
        AuthAPI.addListener(
            (authResult) => {
                // Use the token in authResult to getUserInfo() and save it to localStorage
                lock.getUserInfo(authResult.accessToken, function(error, profile) {
                  if (error) {
                    // Handle errorthi
                    return;
                  }
                }
            }
        );
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