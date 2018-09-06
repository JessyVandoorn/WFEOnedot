import {decorate, observable} from "mobx";

class Dictionary {
    constructor(domain, range){
        this.domain = domain;
        this.range = range;
    }
};

decorate(Dictionary,{
    domain: observable,
    range: observable
})

export default Dictionary;