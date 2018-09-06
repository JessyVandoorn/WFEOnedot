import React, { Component } from 'react';
import '../css/App.css';
import AddDictionary from "../components/AddDictionary";
import AddObjects from "../components/AddObjects";
import Dictionaries from "../components/Dictionaries";
import {observer} from "mobx-react";

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
          <Dictionaries dictionaries={store.dictionaryArray} store={store}/>
        </article>
        <article>
          <h2>Add Objects to dictionary</h2>
          <AddObjects store={store} />
        </article>
      </div>
    );
  }
}

export default observer(App);
