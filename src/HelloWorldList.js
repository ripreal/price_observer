import React, {Component} from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';
import RemoveGreeter from './RemoveGreeter';

class HelloWorldList extends Component {

  constructor(props) {
    super(props);
    this.state = { greetings: ['Mike','John'] } ;

    this.renderGreetings = this.renderGreetings.bind(this);
    this.addGreetings = this.addGreetings.bind(this);
    this.removeGreetings = this.removeGreetings.bind(this);
  }

  render() {
    return (
      <div className = "HelloWorldList">
        <AddGreeter addGreetings={this.addGreetings} removeGreetings={this.removeGreetings}/>
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

  removeGreetings(deleteElement) {
    let res = this.state.greetings.filter((el) => {return el != deleteElement} )
    this.setState({greetings: res});
  }

  addGreetings(newName) {
    this.setState({greetings: [...this.state.greetings, newName] });
  }
}

export default HelloWorldList;