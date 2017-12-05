import React, { PureComponent } from 'react';

import TopNav from './topNav';
import FloatToolBar from './floatToolBar';
import PageContent from './pageContent';
import Article from './article';
import TopBar from './topBar';
import UserLogo from './userLogo';
import MyTabs from './myTabs';
import inboxListItems from '../constants/inboxListItems';

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
                onClick: () => this.setPage(item.key, item.componentPage, item.primaryText),
            };
        });

        this.state = {
            renderNode: null,
            visible: true,
            key: inboxListItems[0].key,
            page: inboxListItems[0].componentPage,
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

    render() {
        const { visible, page, renderNode, primaryText } = this.state;
        return (
            /*
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
                        toolbarActions={[<Button icon onClick={this.hide}><FaDatabase/></Button>,  <Button icon onClick={this.hide}>close</Button>]}
                        contentId="main-demo-content"
                        contentClassName="md-grid">
                        <h2 className="md-cell md-cell--12">{page}</h2>
                        <section className="md-text-container md-cell md-cell--12">
                        </section>
                    </NavigationDrawer>
                </DialogContainer>
               
            </div>
            */

                <div>
                <TopBar 
                height={'50px'}
                leftItems={<UserLogo/>}
                />
                <p> text text text</p>
                <MyTabs/>
            </div>
        );
    }
}
