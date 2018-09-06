import React from "react";
import Dictionary from "../models/Dictionary";

const AddDictionary = ({store}) => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.name.value){
            const dictionary = new Dictionary(form.name.value, form.domain.value, form.range.value);
            store.addDictionary(dictionary);
            form.reset();
        }
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">Name Directionary
                <input type="text" name="name"/>
            </label>
            <label htmlFor="">Domain
                <input type="text" name="domain"/>
            </label>
            
            <label htmlFor="">Range
                <input type="text" name="range"/>
            </label>
            <input type="submit" value="add"/>
        </form>
    )
};

export default AddDictionary;