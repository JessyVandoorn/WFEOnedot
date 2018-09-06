import React from 'react';

const AddDictionary = ({onAddDictionary}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const value = form.nameDictionary.value;
        onAddDictionary(value);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name
            <input type="text" name="nameDictionary" />
            </label>
            
            <input type="submit" value="Submit" />
        </form>
    )
};

export default AddDictionary;