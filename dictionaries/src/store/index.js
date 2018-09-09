import Dictionary from '../models/Dictionary';
import {decorate, observable, action, extendObservable} from 'mobx';

class Store {
    array = {};
    errorDictionary = "";
    errorDomain = "";
    errorRange = "";
    disabled = false;
    nameDictionary = "";

    constructor() {
        this.addDictionary(new Dictionary("colors", "stonegrey", "darkgrey"));
        this.addDictionary(new Dictionary("test", "darkstone", "greygrey"));
    }

    addDictionary = (dictionary, dictionaryName) => {
        if (dictionaryName) {
            this.errorDictionary = "This Domain already exists, use the add element form";
        } else {
            
            this.array[`${dictionary.name}`] = [];
            extendObservable(this.array[`${dictionary.name}`], this.array[`${dictionary.name}`].push(dictionary));
            //this.array[`${dictionary.name}`].push(dictionary);
            console.log(this.array);
        }

    }

    removeObject = dictionary => {
        Object.keys(this.array).map(item => {
            if (item === dictionary.name) {
                const index = this.array[item].indexOf(dictionary);
                this.array[item].splice(index, 1);
            }
        })
    }

    removeDictionary = dictionary => {
        delete this.array[dictionary];
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
        //this.array[`${dictionary.name}`].push(dictionary);
        console.log(this.array[`${dictionary.name}`]);
        extendObservable(this.array[`${dictionary.name}`], this.array[`${dictionary.name}`].push(dictionary));
    }

};

decorate(Store, {
    addDictionary: action,
    addObject: action,
    removeObject: action,
    errorDomain: observable,
    errorDictionary: observable,
    errorRange: observable,
    disabled: observable,
    changeButton: action, 
    array: observable,
    changeDomain: action,
    changeRange: action
})

const store = new Store();
export default store;