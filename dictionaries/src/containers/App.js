import React, { Component } from 'react';
import '../css/App.css';
import AddDictionary from "../components/AddDictionary";
import Dictionaries from "../components/Dictionaries";

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <div className="App">
        <article>
          <h2>Add dictionary</h2>
          <AddDictionary store={store} />
        </article>
        <article>
          <h2>Overview dictionaries</h2>
          <Dictionaries dictionaries={store.dictionaries}/>
        </article>
      </div>
    );
  }
}

export default App;
