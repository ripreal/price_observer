
import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

  set  testProp (val) {}

  constructor(props) {
    super(props);
    this.state = {
      greetings: "Hello",
      greetings_2: "Hi"
    }

    this.changeLang = this.changeLang.bind(this);
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greetings_1} {this.props.name} 
        <br/>
        old greetings {this.state.greetings_2}
        <br/>
        <button onClick={this.changeLang}> change lang</button>
      </div>
    );
  }

  changeLang() {
    
    var old_greetings = this.state.greetings_1;
    
    this.setState({
      greetings_1: this.state.greetings_2,
      greetings_2: old_greetings
    });
  }
}

export default HelloWorld















