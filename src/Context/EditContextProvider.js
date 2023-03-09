import React, { useState } from 'react'
import EditIdContext from './EditIdContext'
const EditContextProvider = (props) => {
    const [editId, setEditId] = useState('')
    const [editItem, setEditItem] = useState({})
    const updateEditId = (id)=>{
        setEditId(id)
    }
    const updateEditItem = (item)=>{
        setEditItem(item)
    }
    const editIdContext={
        id : editId,
        editItem : editItem,
        updateId : updateEditId,
        updateItem : updateEditItem
    } 
  return (
    <EditIdContext.Provider value={editIdContext}> {props.children} </EditIdContext.Provider>
  )
}

export default EditContextProvider