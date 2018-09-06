import Dictionary from '../models/Dictionary';
import {
    decorate,
    observable,
    action
} from 'mobx';

class Store {
    dictionaryArray = [];

    constructor() {
        this.addDictionary(new Dictionary("colors", "stonegrey", "darkgrey"));
        this.addDictionary(new Dictionary("test", "darkstone", "greygrey"));
    }

    addDictionary = dictionary => {
        this.dictionaryArray[`${dictionary.name}`] = {
            dictionary
        };
        console.log(this.dictionaryArray);
    }

    removeDictionary = dictionary => {
        this.dictionaryArray.remove(dictionary);
        console.log(this.dictionaryArray);
    }

    addObject = dictionary => {
        console.log(this.dictionaryArray);
        Object.keys(this.dictionaryArray).map(item => {
            if (item === dictionary.name) {
                console.log(item);
                console.log(this.dictionaryArray[item]);
                Object.extend(item, {dictionary});
                console.log(this.dictionaryArray);
            }
        })
    }

};

decorate(Store, {
    dictionaryArray: observable,
    addDictionary: action,
    addObject: action
})

const store = new Store();
export default store;