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
        let lastElement = store.array[store.nameDictionary]; 
        if(lastElement.length = 1){
            lastElement = store.array[store.nameDictionary];  
        } else {
           lastElement = store.array[store.nameDictionary]-1; 
        }
        lastElement.map(item => {
            if(item.domain === e.currentTarget.value){
                store.changeErrorDomain();
                store.changeButtonTrue();
            } else if (item.range === e.currentTarget.value){
                    store.changeErrorRange();
            store.changeButtonTrue();
            } else {
                store.changeButtonFalse();
            }
        })
    }

    const handleInputRange = (e) => {
        let lastElement = store.array[store.nameDictionary]; 
        if(lastElement.length = 1){
            lastElement = store.array[store.nameDictionary];  
        } else {
           lastElement = store.array[store.nameDictionary]-1; 
        }
        lastElement.map(item => {
            if(item.range === e.currentTarget.value){
                store.changeErrorDictionary();
                store.changeButtonTrue();
            } else {
                store.changeButtonFalse();
            }
        })
    }

    const handleName = (e) => {
        store.nameDictionary = e.currentTarget.value;
        console.log(e.currentTarget.value);
    }

    return (
        <div>
            <p>{store.errorDictionary}</p>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">Name Directionary
                <select name="name" id="" onChange={handleName}>
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
            <input type="submit" value="add" />
        </form>
        </div>
    )
};

export default observer(AddObjects);