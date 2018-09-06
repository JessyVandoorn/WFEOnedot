import React from "react";
import {observer} from "mobx-react";

const Dictionaries = ({dictionaries}) => {
    return(
        <table>
            <thead>
                <tr>
                    <td>Domain</td>
                    <td>Range</td>
                    <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {dictionaries.map((Dictionary) => 
                    <tr key={Dictionary.domain}>
                        <td>{Dictionary.domain}</td>
                        <td>{Dictionary.range}</td>
                        <td><button>Remove</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default observer(Dictionaries);