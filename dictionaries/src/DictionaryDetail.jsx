import React from 'react';
//import AddElement from './AddElement';

const DictionaryDetail = ({onAddElement}) => {

    const handleSubmitElement = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.name.value;
        const domain = form.domain.value;
        const range = form.range.value;
        onAddElement(name, domain, range);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmitElement}>
            <label htmlFor="">Dictionaries
                <input type="text" name="name"/>
            </label>
            <label htmlFor="">Domain
                <input type="text" name="domain" />
            </label>
            <label htmlFor="">Range
            <input type="text" name="range" />
            </label>
            
            <input type="submit" value="Submit" />
        </form>
    )

};

export default DictionaryDetail;