import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React JS Classes, Introduction</h1>
        </header>
        <div className="App-intro">
          <h1> Welcome</h1>
        </div>

        <Sample />
        <Clock />
      </div>
    );
  }
}

export default App;
