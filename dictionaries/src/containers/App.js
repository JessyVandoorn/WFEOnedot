import React, { Component } from 'react';
import '../css/App.css';
import AddDictionary from "../components/AddDictionary";
import Dictionaries from "../components/Dictionaries";
import AddObjects from "../components/AddObjects";
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
          <Dictionaries store={store}/>
        </article>
        <article>
          <h2>Add elements to dictionary</h2>
          <AddObjects store={store}/>
        </article>
      </div>
    );
  }
}

export default observer(App);
