import React, {Component} from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {

  constructor(props) {
    super(props);
    this.state = { greetings: ['Mike','John'] } ;

    this.renderGreetings = this.renderGreetings.bind(this);
    this.addGreetings = this.addGreetings.bind(this);
  }

  render() {
    return (
      <div className = "HelloWorldList">
        <AddGreeter addGreetings={this.addGreetings}/>
        {this.renderGreetings()}
      </div>
    );
  }

  renderGreetings() {

    let procMap =  this.state.greetings.map((name) => {
      return <HelloWorld key={name} name={name}/>
    });
    return procMap;

  }

  addGreetings(newName) {
    this.setState({greetings: [...this.state.greetings, newName] });
  }
}

export default HelloWorldList;