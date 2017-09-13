import React, { Component } from 'react';
import './App.css';
import {DrillTable} from './drillTable.js'
import TestData from './test-data/test-data-001.json'
class App extends Component {
  render() {
    return (
      <div className="App">
        <DrillTable tableData={TestData}/>
      </div>
    );
  }
}

export default App;
