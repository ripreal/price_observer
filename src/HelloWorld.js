
import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

	constructor(props) {
		super(props);
		this.state = {greetings: "Hello"}
	}

	render() {
		return (
			<div className="HelloWorld"> {this.state.greetings} {this.props.Name}</div>
		);
	}
}

export default HelloWorld