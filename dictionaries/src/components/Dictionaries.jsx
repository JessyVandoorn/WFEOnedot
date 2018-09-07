import React from "react";
import { observer } from "mobx-react";

const Dictionaries = ({ dictionaries, store }) => {

    const handleRemove = (e) => {
        const id = e;
        store.removeDictionary(e);
    }

    const handleRemoveDic = (e) => {
        console.log(e);
        store.removeObject(e);
    }

    return (
        <div>
            {Object.keys(store.array).map(items => {
                console.log(items);
                return (
                    <table>
                        <thead>
                            <tr>
                                <th key={items}>
                                    {items}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.array[items].map(obj => {
                                return (
                                    <tr key={obj.id}>
    

                                            <td>
                                            <input type="text" value={obj.domain}
                                                onChange={e => obj.changeDomain(e.currentTarget.value)} />
                                </td>
                                <td><input type="text" value={obj.range}
                                            onChange={e => obj.changeRange(e.currentTarget.value)}
                                        /></td>
                                        <td><button key={obj.id} onClick={() => handleRemove(obj)}>Remove Object</button></td>
                                        <td><button onClick={() => handleRemoveDic(items)}>Remove Dictionary</button></td>
                            </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )
            })}
            {/* {dictionaries.map(item => {
            return(
                <table>
                    <thead>
                        <tr>
                            <th>{item.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={item.id}>
                        <td><input type="text" value={item.domain}
                                        onChange={e => item.changeDomain(e.currentTarget.value)}
                                    /></td>
                                <td><input type="text" value={item.range}
                                        onChange={e => item.changeRange(e.currentTarget.value)}
                                    /></td>
                                <td><button key={item.id} onClick={() => handleRemove(item)}>Remove Object</button></td>
                                {/* <td><button onClick={ handleRemoveDic}>Remove Dictionary</button></td>  */}
            {/* </tr>
                    </tbody>
                </table>
            )
        })} */} */}
        </div>
    );
};

export default observer(Dictionaries);