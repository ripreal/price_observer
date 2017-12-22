
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button, DialogContainer, NavigationDrawer, SVGIcon } from 'react-md';
import '../css/app.css';
import WebFontLoader from 'webfontloader';
import inboxListItems from '../constants/inboxListItems';
import LoginForm from './loginForm';
import FloatToolBar from './floatToolBar';

export default class App extends PureComponent {
    constructor() {
        super();

        // Update the items so they have an onClick handler to change the current page
        this.navItems = inboxListItems.map((item) => {
            if (item.divider) {
                return item;
            }

            return {
                ...item,
                onClick: () => this.setPage(item.key, item.componentpage, item.primaryText),
            };
        });

        this.state = {
            renderNode: null,
            visible: true,
            visibleLoginForm: false,
            key: inboxListItems[0].key,
            page: inboxListItems[0].componentpage,
            primaryText: inboxListItems[0].primaryText
        };
    }

    setPage = (key, page, primaryText) => {
        this.navItems = this.navItems.map((item) => {
            if (item.divider) {
                return item;
            }

            return { ...item, active: item.key === key };
        });

        this.setState({ key, page, primaryText });
    };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false, renderNode: null });
    };

    handleShow = () => {
        this.setState({ renderNode: document.getElementById('navigation-drawer-demo') });
    };

    onLoginClick() {
        this.child.show();
    } 

    render() {
        const { visible, visibleLoginForm, page, renderNode, primaryText } = this.state;
        return (
            <div>
                <Button raised onClick={this.show}>Open the Demo</Button>
                <DialogContainer
                    id="navigation-drawer-demo"
                    aria-label="Navigation Drawer Demo"
                    visible={visible}
                    fullPage
                    focusOnMount={false}
                    onShow={this.handleShow}
                    onHide={this.hide}
                >
                    <NavigationDrawer
                        renderNode={renderNode}
                        navItems={this.navItems}
                        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                        toolbarTitle= {primaryText}
                        toolbarActions={<Button onClick={this.onLoginClick.bind(this)} flat secondary swapTheming>Login</Button>}
                        contentId="main-demo-content"
                        contentClassName="md-grid">
                            <h2 className="md-cell md-cell--12">{page} </h2>
                            <LoginForm onRef={ref => (this.child = ref)}/>
                    </NavigationDrawer>
                </DialogContainer>
            </div>
        );
    }
}
