import React, { Component } from 'react';
import './css/App.css';


class App extends Component {

  constructor(){
    super();
    this.state={dictionaries:{}};
  }

  render() {
    const {dictionaries} = this.state;
    return (
      <div className="App">
      <h1>Dictionaries</h1>
      </div>
    );
  }
}

export default App;
