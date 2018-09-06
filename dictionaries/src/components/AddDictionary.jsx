import React from "react";
import Dictionary from "../models/Dictionary";

const AddDictionary = ({store}) => {

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = e.currentTarget;
        if(form.domain.value){
            const dictionary = new Dictionary(form.domain.value, form.range.value);
            store.addDictionary(dictionary);
            form.reset();
        }
    }

    return(
        <form onSubmit={handleSubmitForm}>
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