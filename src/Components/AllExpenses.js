import axios from 'axios'
import React from 'react'
import { Table } from 'react-bootstrap'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { expensesActions } from '../Store/expenses'
const AllExpenses = () => {
    const makeCsv = (arr)=>{
        const newArr = arr.map(item => [item.title, item.amount, item.category])
        newArr.unshift(["TITLE", "AMOUNT", "CATEGORY"])
        return newArr.map(row => row.join(",")).join("\n")
       }
     const email = useSelector(state=> state.authentication.email)  
    const dark = useSelector(state=> state.theme.dark)
    const dispatch = useDispatch()
   const allItems = useSelector(state => state.expenses.items)
   const getData = async()=>{
    const res = await axios.get(`https://expense-tracker-6ca30-default-rtdb.firebaseio.com/${localStorage.getItem('email')}.json`)
    const keys = Object.keys(res.data)
    const expenses = keys.map( key => { return {
        id : key,
        title : res.data[key].title,
        amount : res.data[key].amount,
        category : res.data[key].category
    }} )
    console.log(expenses)
    const prices = expenses.map(item=>item.amount)
    const initialTotal = prices.reduce((pre,cur)=>{return pre+ cur},0)
    dispatch(expensesActions.initialExpenses(expenses))
    dispatch(expensesActions.updateTotal(initialTotal))
    
  }

  useEffect(()=>{getData()},[])

   const deleteItem = async(id)=>{
    console.log(id)
    const res = await axios.delete(`https://expense-tracker-6ca30-default-rtdb.firebaseio.com/${email}/${id}.json`)
    if (res.statusText==="OK"){
        dispatch(expensesActions.removeExpense(id))
        console.log("Deleted successfully")
    }

   }

   const editItem = async(id)=>{
         dispatch(expensesActions.updateEditId(id))    
   }
  
   const blob = new Blob([makeCsv(allItems)])
  return (
    <div className=''>
        <p className='text-center'>--Your List Of Expenses--</p>
        <Table className={`${dark? 'bg-black text-white': ''}`}>
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
                {allItems.map(item =><tr key={item.id}>
                    <td className='text-center'>{item.amount}</td>
                    <td className='text-center'>{item.title}</td>
                    <td className='text-center'>{item.category}</td>
                    <td className='text-center'><AiFillDelete style={{'cursor':'pointer'}} onClick={()=>{ deleteItem(item.id) }}/></td>
                    <td className='text-center'><AiFillEdit style={{'cursor':'pointer'}} onClick={()=>{ editItem(item.id) }}/></td>
                </tr>)}
               
            </tbody>
        </Table>
        {dark && <div className='text-center'>
            <a download={'expenses.csv'} href={URL.createObjectURL(blob)} className={`${dark? 'text-warning': ''}`}>DownLoad</a>
        </div>}
    </div>
  )
}

export default AllExpenses