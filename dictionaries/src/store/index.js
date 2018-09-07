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
        //this.dictionaryArray[`${dictionary.name}`] = [dictionary];
        this.dictionaryArray.push(dictionary);
        console.log(this.dictionaryArray);
    }

    removeDictionary = dictionary => {
        console.log(dictionary);
        const index = this.dictionaryArray.indexOf(dictionary);
        this.dictionaryArray.splice(index, 1);
        console.log(this.dictionaryArray);
    }

    addObject = dictionary => {
        console.log(this.dictionaryArray);
        Object.keys(this.dictionaryArray).map(item => {
            if (item === dictionary.name) {
                console.log(item);
                // this.dictionaryArray[item] = Object.assign(this.dictionaryArray[item] , {dictionary});
                this.dictionaryArray[item].push(dictionary);
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