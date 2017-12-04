/* eslint-disable react/prop-types */
import React from 'react';
import { Avatar, IconSeparator, FontIcon, SVGIcon } from 'react-md';
import { Button } from 'react-md';
import { TextField } from 'react-md';

const Item = ({ label, children }) => (
  <IconSeparator label={label} iconBefore component="li" className="md-cell md-cell--12">
    {children}
  </IconSeparator>
);

export default class LoggedUser extends React.Component {

  render() {
    return (
        <Item label="">
          <Avatar icon={<FontIcon iconClassName="fa fa-rocket" />} />
          <Button icon onClick={this.hide}>close</Button>
        </Item>
    );
  }
}
