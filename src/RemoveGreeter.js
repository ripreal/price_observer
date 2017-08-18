
import React, {Component} from 'react';
import './RemoveGreeter.css';

class RemoveGreeter extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<div className="RemoveGreeter">
      <input type="text" onclick={this.inputOnClick}></input>
      </div>
    );
  }
  
}

export default RemoveGreeter;