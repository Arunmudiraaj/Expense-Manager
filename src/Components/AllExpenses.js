import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import EditIdContext from '../Context/EditIdContext'
import { useContext } from 'react'
const AllExpenses = (props) => {
    const editCtx = useContext(EditIdContext)
   const deleteItem = async(id)=>{
    console.log(id)
    const res = await axios.delete(`https://expense-tracker-6ca30-default-rtdb.firebaseio.com/expenses/${id}.json`)
    if (res.statusText==="OK"){
        console.log("Deleted successfully")
    }

   }
   const editItem = async(id)=>{
    
    console.log(editCtx.id)
    // const res = await axios.get(`https://expense-tracker-6ca30-default-rtdb.firebaseio.com/expenses/${editCtx.id}.json`)
        editCtx.updateId(id) 
   }
  return (
    <div className=''>
        <p className='text-center'>--Your List Of Expenses--</p>
        <Table>
            <thead>
                <tr>
                    <th className='text-center'>Amount 💵</th>
                    <th className='text-center'>Description 📝</th>
                    <th className='text-center'>Category 😎</th>
                    <th className='text-center'>Delete</th>
                    <th className='text-center'>Edit</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props.expenses).map(key =><tr key={key}>
                    <td className='text-center'>{props.expenses[key].amount}</td>
                    <td className='text-center'>{props.expenses[key].title}</td>
                    <td className='text-center'>{props.expenses[key].category}</td>
                    <td className='text-center'><AiFillDelete style={{'cursor':'pointer'}} onClick={()=>{ deleteItem(key) }}/></td>
                    <td className='text-center'><AiFillEdit style={{'cursor':'pointer'}} onClick={()=>{ editItem(key) }}/></td>
                </tr>)}
               
            </tbody>
        </Table>
    </div>
  )
}

export default AllExpenses