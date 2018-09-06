import React from 'react';

const AddElement = ({onAddElement}) => {

    const handleSubmitElement = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const value = new Element(form.domain.value, form.range.value);
        onAddElement(value);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmitElement}>
            <input type="text" name="domain" />
            <input type="text" name="range" />
            <input type="submit" value="Submit" />
        </form>
    )

};

export default AddElement();