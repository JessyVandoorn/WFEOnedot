import Dictionary from '../models/Dictionary';
import {
    decorate,
    observable,
    action
} from 'mobx';

class Store {
    dictionaryArray = [];
    array = {};

    constructor() {
        this.addDictionary(new Dictionary("colors", "stonegrey", "darkgrey"));
        this.addDictionary(new Dictionary("test", "darkstone", "greygrey"));
    }

    addDictionary = dictionary => {
        this.array[`${dictionary.name}`] = this.dictionaryArray;
        this.dictionaryArray.push( dictionary);
        console.log(this.array);
        
    }

    removeDictionary = dictionary => {
        console.log(dictionary);
        const index = this.dictionaryArray.indexOf(dictionary);
        this.dictionaryArray.splice(index, 1);
    }

    removeObject = dictionary => {
        console.log(dictionary);
        delete this.array[dictionary];
        console.log(this.array);
    }

    addObject = dictionary => {
        console.log(dictionary);
        Object.keys(this.array).map(item => {
            if(item === dictionary.name) {
                console.log(item);
                console.log(this.dictionaryArray);
                this.dictionaryArray.push(dictionary);
                // this.array[item] = this.dictionaryArray;
                console.log(this.array[item]);
            }
        })
    }

};

decorate(Store, {
    dictionaryArray: observable,
    array: observable,
    addDictionary: action,
    addObject: action,
    removeObject: action
})

const store = new Store();
export default store;