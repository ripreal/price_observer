import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <HelloWorld Name="John"/>
        <HelloWorld Name="Mike"/>
      </div>
    );
  }

  setState() {

  }
}

export default App;
