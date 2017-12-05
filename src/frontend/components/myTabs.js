import React from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';

export default class MyTabs extends React.Component {
    render() {
        return (
    <Tabs tabId="simple-tab" mobile={false}>
      <Tab label="Tab one">
        <h3>Hello, World!</h3>
      </Tab>
      <Tab label="Tab two">
        <h3>Now look at me!</h3>
      </Tab>
    </Tabs>
        )
    }
}
