import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ExpandTable} from './expandableTable.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpandTable />
      </div>
    );
  }
}

export default App;
