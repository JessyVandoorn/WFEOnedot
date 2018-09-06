import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ dictionaries, store }) => {
    const handleRemove = (e) => {
        console.log(e);
        store.removeDictionary(e);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Domain</th>
                    <th>Range</th>
                    <th>Remove</th>
                </tr>
            </thead>

            {Object.keys(dictionaries).map((item, dictionary) => {
                console.log(item);
                console.log(dictionaries[item]);
                    return (
                        <tbody>
                            {dictionaries[item].map(element => (
                            <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.domain}</td>
                                <td>{element.range}</td>
                                <td><button onClick={handleRemove}>Remove</button></td>
                            </tr>
                            ))}
                        </tbody>
                    )
            })}

        </table>
    );
};

export default observer(Dictionaries);