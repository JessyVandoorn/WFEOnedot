export default class Dictionary {

    nameDictionary = undefined;
    elements = undefined;
  
    constructor(nameDictionary, elements={}){
      this.nameDictionary = nameDictionary;
      this.elements = elements;
    }
  }