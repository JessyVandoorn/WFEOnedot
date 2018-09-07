import Dictionary from '../models/Dictionary';
import {
    decorate,
    observable,
    action
} from 'mobx';

class Store {
    dictionaryArray = [];

    constructor() {
        this.addDictionary(new Dictionary( "stonegrey", "darkgrey"));
        this.addDictionary(new Dictionary( "darkstone", "greygrey"));
    }

    addDictionary = dictionary => {
        this.dictionaryArray.push(dictionary);
    }

    removeDictionary = dictionary => {
        const index = this.dictionaryArray.indexOf(dictionary);
        this.dictionaryArray.splice(index, 1);
    }

};

decorate(Store, {
    dictionaryArray: observable,
    addDictionary: action,
    addObject: action
})

const store = new Store();
export default store;