import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ dictionaries, store }) => {

    const handleRemove = (e) => {
        console.log(e);
        //console.log(id);
        const id = e;
        store.removeDictionary(e);
    }

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Domain</th>
                    <th>Range</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {dictionaries.map(item => {
                return(
                    <tr key={item.id}>
                        <td>{item.domain}</td>
                        <td>{item.range}</td>
                        <td><button key={item.id} onClick={() => handleRemove(item)}>Remove</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </div>
    );
};

export default observer(Dictionaries);