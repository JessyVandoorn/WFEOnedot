export default class Element {
    domain = undefined;
    range = undefined;
    name = undefined;

    constructor(name, domain, range){
        this.name = name;
        this.domain = domain;
        this.range = range;
    }
}