import Dictionary from '../models/Dictionary';
import {
    decorate,
    observable,
    action
} from 'mobx';

class Store {
    dictionaryArray = [];
    array = {};
    errorDictionary = "";
    errorDomain = "";
    errorRange ="";
    disabled = true;

    constructor() {
        this.addDictionary(new Dictionary("colors", "stonegrey", "darkgrey"));
        this.addDictionary(new Dictionary("test", "darkstone", "greygrey"));
    }

    addDictionary = (dictionary, dictionaryName) => {
        if(dictionaryName){
            this.errorDictionary = "This Domain already exists, use the add element form";
            console.log(this.errorDictionary);
        } else {
            this.array[`${dictionary.name}`] = this.dictionaryArray;
        this.dictionaryArray.push( dictionary);
        console.log(this.array);
        }
        
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

    changeButtonFalse = () => {
        this.disabled = false;
    }

    changeButtonTrue = () => {
        this.disabled = true;
    }

    changeErrorDomain = () => {
        this.errorDomain = "You are creating a fork, please change your domain value";
    }

    changeErrorRange = () => {
        this.errorRange = "Oops seems like you created a cycle chain, change your domain value";
    }

    changeErrorDictionary = () => {
        this.errorDictionary = "Oops seems like you al ready entered these data, please change your values for an input";
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
    removeObject: action,
    errorDomain: observable,
    errorDictionary: observable,
    errorRange: observable,
    disabled: observable,
    changeButton: action
})

const store = new Store();
export default store;