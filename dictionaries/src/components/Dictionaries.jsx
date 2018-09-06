import React from "react";
import {observer} from "mobx-react";

const Dictionaries = ({dictionaries}) => {
    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Domain</td>
                    <td>Range</td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {Object.keys(dictionaries).map((item,dictionary) => {
                    console.log(dictionaries[item].dictionary);
                    return(
                        <tr key={dictionaries[item].dictionary.id}>
                            <td>{dictionaries[item].dictionary.name}</td>
                            <td>{dictionaries[item].dictionary.domain}</td>
                            <td>{dictionaries[item].dictionary.range}</td>
                            <td><button>Remove</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default observer(Dictionaries);