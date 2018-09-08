import React from "react";
import { observer } from "mobx-react";
import Dictionary from "../models/Dictionary";

const AddObjects = ({store}) => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.name.value) {
            const dictionary = new Dictionary(form.name.value, form.domain.value, form.range.value);
            store.addObject(dictionary);
            form.reset();
        }
    }

    const handleInputDomain = (e) => {
        const lastElement = store.dictionaryArray.length-1;
        if(store.dictionaryArray[lastElement].domain === e.currentTarget.value){
            store.changeErrorDomain();
            store.changeButtonTrue();
        } else if (store.dictionaryArray[lastElement].range === e.currentTarget.value){
            store.changeErrorRange();
            store.changeButtonTrue();
        } else {
            store.changeButtonFalse();
        }
    }

    const handleInputRange = (e) => {
        const lastElement = store.dictionaryArray.length-1;
        if(store.dictionaryArray[lastElement].range === e.currentTarget.value){
            store.changeErrorDictionary();
            store.changeButtonTrue();
        } else {
            store.changeButtonFalse(); 
        }
    }

    return (
        <div>
            <p>{store.errorDictionary}</p>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">Name Directionary
                <select name="name" id="">
                {Object.keys(store.array).map(item => {
                    return(
                        <option value={item} key={item} name={item}>{item}</option>
                    )
                })}
                </select>
            </label>
            <label htmlFor="">Domain
                <input type="text" name="domain" onInput={handleInputDomain}/>
            </label>
                <p>{store.errorDomain}</p>
            <label htmlFor="">Range
                <input type="text" name="range" onInput={handleInputRange}/>
            </label>
            <input type="submit" value="add" disabled={store.disabled}/>
        </form>
        </div>
    )
};

export default observer(AddObjects);