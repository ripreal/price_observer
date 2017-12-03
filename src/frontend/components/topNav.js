import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import '../css/app.css';

export default class ToolbarExamplesSimple extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div style={{marginBottom:'68px'}}>
                <Toolbar className='u-topCenter u-fixedTop'>
                    <ToolbarGroup firstChild={true}>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="All Broadcasts" />
                            <MenuItem value={2} primaryText="All Voice" />
                            <MenuItem value={3} primaryText="All Text" />
                            <MenuItem value={4} primaryText="Complete Voice" />
                            <MenuItem value={5} primaryText="Complete Text" />
                            <MenuItem value={6} primaryText="Active Voice" />
                            <MenuItem value={7} primaryText="Active Text" />
                        </DropDownMenu>
                    </ToolbarGroup>
                    <div className="page-header u-verticalCenter">
                        <h1><a href="#/products">R.I.P.real blog</a></h1>
                    </div>
                    <ToolbarGroup style="">
                        <FlatButton className="u-button" label="Products" primary={true} />
                        <FlatButton className="u-framedButton" label="About" primary={true} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}