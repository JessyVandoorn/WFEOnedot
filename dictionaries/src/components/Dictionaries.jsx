import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ dictionaries, store }) => {
    const handleRemove = (e) => {
        console.log(e);
        //store.removeDictionary(e);
    }

    return (
        <table>
            <thead>
                <tr>
                    <td>Domain</td>
                    {/* <td>Range</td> */}
                    <td>Remove</td>
                </tr>
            </thead>

            {Object.keys(dictionaries).map((item, dictionary) => {
                console.log(item);
                console.log(dictionaries[item]);
                {dictionaries[item].map(element => {
                    console.log(element);
                    return (
                        <tbody>
                            <tr key={element.name}>
                                <td>{element.name}</td>
                                <td><button onClick={handleRemove}>Remove</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            })}

        </table>
    );
};

export default observer(Dictionaries);