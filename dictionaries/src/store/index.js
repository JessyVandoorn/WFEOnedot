import {decorate, observable, action} from 'mobx';

class Store {
    dictionaries = [];

    addDictionary = dictionary => {
        this.dictionaries.push(dictionary);
        console.log(this.dictionaries);
    }

};

decorate(Store, {
    dictionaries: observable,
    addDictionary: action
})

const store = new Store();
export default store;