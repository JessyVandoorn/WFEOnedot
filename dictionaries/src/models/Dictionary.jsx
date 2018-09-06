import {decorate, observable, action} from "mobx";
import uniqid from "uniqid";

class Dictionary {
    constructor(name, domain, range){
        this.id = uniqid();
        this.name = name;
        this.domain = domain;
        this.range = range;
    }

    changeDomain = value => {
        this.domain = value;
        console.log(this.domain);
    }

    changeRange = value => {
        this.range = value;
        console.log(this.range);
    }
};

decorate(Dictionary,{
    name: observable,
    domain: observable,
    range: observable,
    changeDomain: action,
    changeRange: action
})

export default Dictionary;