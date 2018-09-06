import React, { Component } from 'react';
import './css/App.css';

import Dictionary from './models/Dictionary';
import Element from './models/Element';

import Dictionaries from './Dictionaries';
import AddDictionary from './AddDictionary';
import DictionaryDetail from './DictionaryDetail';


class App extends Component {

  constructor(){
    super();
    this.state={dictionaries:{}};
  }

  handleAddDictionary = (value) => {
    const dictionary = new Dictionary(value);
    const dictionaries = {...this.state.dictionaries};
    const id = Date.now();
    dictionaries[id] = dictionary;
    this.setState({dictionaries});
  }

  handleAddElement = (name, domain, range) => {
    const element = new Element(name, domain, range);
    const dictionaries = {...this.state.dictionaries};
    const id = Date.now();
    dictionaries[id].elements[Date.now()] = element;
    this.setState({dictionaries});
    console.log(dictionaries);
  };

  render() {
    const {dictionaries} = this.state;
    return (
      <div className="App">
        <h1>Dictionaries</h1>
        <section>
          <h2>Dictionaries</h2>
          <Dictionaries dictionaries={dictionaries}/>
        </section>
        <section>
          <h2>Add ictionaries</h2>
          <AddDictionary onAddDictionary={this.handleAddDictionary}/>
          <DictionaryDetail onAddElement={this.handleAddElement}/>
        </section>
      </div>
    );
  }
}

export default App;
