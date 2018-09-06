import React from "react";

const Dictionaries = ({dictionaries}) => {
    return(
       <ul>
           {Object.keys(dictionaries).map(id => 
               <li>{dictionaries[id].nameDictionary}</li>
           )}
       </ul>
    )
};

export default Dictionaries;