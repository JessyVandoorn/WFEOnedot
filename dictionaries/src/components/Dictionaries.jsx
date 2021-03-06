import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ store }) => {

    const handleRemoveObj = (obj) => {
        const id = obj;
        store.removeObject(id);
    }

    const handleRemoveDic = (items) => {
        store.removeDictionary(items);
    }

    return (
        <div>
            {Object.keys(store.array).map(items => {
                return (
                    <table key={items}>
                        <thead>
                            <tr>
                                <th key={items}>
                                    {items}
                                </th>
                                <th></th>
                                <th><button onClick={() => handleRemoveDic(items)}>Remove Dictionary</button></th>
                            </tr>
                            <tr>
                                <td>Domain</td>
                                <td>Range</td>
                            </tr>
                        </thead>
                        <tbody>
                            {store.array[items].map(obj => {
                                return(
                                <tr key={obj.id}>
                                    <td><input type="text" value={obj.domain}
                                onChange={e => obj.changeDomain(e.currentTarget.value)}
                            /></td>
                                    <td><td><input type="text" value={obj.range}
                                onChange={e => obj.changeRange(e.currentTarget.value)}
                            /></td></td>
                                    <td><button onClick={() => handleRemoveObj(obj)}>Remove Element</button></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )
            })}
        </div>
    );
};

export default observer(Dictionaries);