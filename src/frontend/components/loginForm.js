import React, { PureComponent } from 'react';
import { Button, DialogContainer, TextField, FontIcon, SVGIcon, Checkbox } from 'react-md';
import AuthAPI from '../api/authAPI';

export default class LoginForm extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { visible: false};
    }

    componentDidMount() {
        this.props.onRef(this)
      }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };

    login = () => {
        AuthAPI.login();
    }

    render() {
        const { visible } = this.state;
        // Actions can either be an object of props to build a Button,
        // or valid react components. When the action is a set of props,
        // it defaults to creating a flat button. Unique keys will automatically
        // be cloned into the buttons along with an additional class name for styling

        const actions = [];
        actions.push(<Button flat primary onClick={this.hide}>Cancel</Button>);
        actions.push(<Button flat secondary swapTheming onClick={this.login}>OK</Button>);

        return (
            <div>
                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={this.hide}
                    actions={actions}
                    width={350}
                    title="Login to app"
                    titleClassName='u-loginDialogHeader'
                    contentClassName='u-loginDialogBody'
                    footerClassName='u-loginDialogFooter'
                >
                    <TextField
                        id='Login_field'
                        placeholder='Login'
                        className='u-textField'
                        leftIcon={<FontIcon iconClassName="fa fa-user" />}
                    />
                    <TextField
                        id='Password_field'
                        placeholder='Password'
                        type="password"
                        className='u-textField'
                        leftIcon={<FontIcon iconClassName="fa fa-lock" />}
                    />
                    <div className='u-horizontalAlign u-textField'>
                        <Checkbox
                            id="RememberPsw_field"
                            name="RememberPsw_field"
                            label="Remember me"
                            value="material-design"
                        />
                       <a className='u-Danger' href="#">Forgot password?</a>
                    </div>
                </DialogContainer>
            </div>
        );
    }
}