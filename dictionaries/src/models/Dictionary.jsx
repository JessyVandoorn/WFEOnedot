import {decorate, observable} from "mobx";
import uniqid from "uniqid";

class Dictionary {
    constructor(name, domain, range){
        this.id = uniqid();
        this.name = name;
        this.domain = domain;
        this.range = range;
    }
};

decorate(Dictionary,{
    name: observable,
    domain: observable,
    range: observable
})

export default Dictionary;