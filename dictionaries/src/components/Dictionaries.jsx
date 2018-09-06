import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ dictionaries }) => {

    return (
        <table>
            <thead>
                <tr>
                    <td>Domain</td>
                    <td>Range</td>
                    <td>Remove</td>
                </tr>
            </thead>

            {Object.keys(dictionaries).map((item, dictionary) => {
                console.log(dictionaries[item].dictionary);
                return (
                    <tbody>
                        <tr key={dictionaries[item].dictionary.name} colSpan="2">
                            <td>{dictionaries[item].dictionary.name}</td>
                        </tr>
                        <tr key={dictionaries[item].dictionary.id}>
                            <input type="text" value={dictionaries[item].dictionary.domain}
                                onChange={e => dictionaries[item].dictionary.changeDomain(e.currentTarget.value)}
                            />
                            <input type="text" value={dictionaries[item].dictionary.range}
                                onChange={e => dictionaries[item].dictionary.changeRange(e.currentTarget.value)}
                            />
                            <td><button>Remove</button></td>
                        </tr>
                    </tbody>
                )
            })}

        </table>
    );
};

export default observer(Dictionaries);