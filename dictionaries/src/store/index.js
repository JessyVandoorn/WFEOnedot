import Dictionary from '../models/Dictionary';
import {decorate, observable, action} from 'mobx';

class Store {
    dictionaryArray = [];

    constructor(){
        this.addDictionary(new Dictionary("colors", "stonegrey", "darkgrey"));
    }

    addDictionary = dictionary => {
        this.dictionaryArray[`${dictionary.name}`] = {dictionary};
        console.log(this.dictionaryArray);
    }

};

decorate(Store, {
    dictionaryArray: observable,
    addDictionary: action
})

const store = new Store();
export default store;