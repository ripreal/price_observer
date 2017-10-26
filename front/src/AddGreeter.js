import React, { Component} from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingsName: ''};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreetings = this.addGreetings.bind(this);
    this.removeGreetings = this.removeGreetings.bind(this);
  }

  handleUpdate(event) {
    this.setState({greetingsName: event.target.value});
  }

  render() {
    return (
      <div className="AddGreeter">
        <input type="text" onChange={this.handleUpdate} 
        value={this.state.greetingsName}/>
        <button onClick={this.addGreetings}>Add</button>
        <button onClick={this.removeGreetings}>Remove</button>
      </div>
    )
  }

  addGreetings() {
    this.props.addGreetings(this.state.greetingsName);
    this.setState({greetingsName: ''});
  }

  removeGreetings() {
    this.props.removeGreetings(this.state.greetingsName);
    this.setState({greetingsName:''});
  }

}

export default AddGreeter;