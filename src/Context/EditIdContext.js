import React from "react";
const EditIdContext = React.createContext({
        id : '',
        editItem : {},
        updateId : (id)=>{},
        updateItem : (item)=>{}

})

export default EditIdContext