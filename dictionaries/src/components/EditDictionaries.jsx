import React from "react";
import {observer} from "mobx-react";

const EditDictionaries = ({dictionary}) => {
    return(
        <form action="">
            <label htmlFor="">Domain
                <input type="text" value={dictionary.domain}
                onChange={e => dictionary.changeDomain(e.currentTarget.value)}
                />
            </label>

            <label htmlFor="">Range
                <input type="text" value={dictionary.range}
                onChange={e => dictionary.changeRange(e.currentTarget.value)}
                />
            </label>
        </form>
    )
};

export default observer(EditDictionaries);