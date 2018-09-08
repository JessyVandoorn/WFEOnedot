import React from "react";
import Dictionary from "../models/Dictionary";
import { observer } from "mobx-react";

const AddDictionary = ({ store }) => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const dictionaryName = store.array.hasOwnProperty(form.name.value);
        console.log(dictionaryName);
        if (form.name.value) {
            const dictionary = new Dictionary(form.name.value, form.domain.value, form.range.value);
            store.addDictionary(dictionary, dictionaryName);
            form.reset();
        }


    }

    return (
        <div>
            <p>{store.errorDictionary}</p>
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">name
            <input type="text" name="name" />
            </label>
            
            <label htmlFor="">Domain
                <input type="text" name="domain" />
            </label>
            <p>{store.errorDomain}</p>
            <label htmlFor="">Range
                <input type="text" name="range" />
            </label>
            <p>{store.errorRange}</p>
            <input type="submit" value="add" />
        </form>
        </div>
    )
};

export default observer(AddDictionary);