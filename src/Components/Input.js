import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { useRef } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { expensesActions } from '../Store/expenses'
import { useDispatch } from 'react-redux'
const Input = () => {
    const dispatch = useDispatch()
    const editId = useSelector(state => state.expenses.editId)
    const amountRef = useRef()
    const descRef = useRef()
    const categoryRef = useRef()
    const addExpenseHandler = async()=>{
        if(editId){
            const item = {
                title : descRef.current.value.trim(),
                amount : amountRef.current.value,
                category : categoryRef.current.value
            }
            try{
                const res = await axios.put(`https://expense-tracker-6ca30-default-rtdb.firebaseio.com/expenses/${editId}.json`,item)
                console.log(res)
                dispatch(expensesActions.updateEditId(null))
            dispatch(expensesActions.editExpense({id: editId, item: item}))
            console.log("Edited")
            }
            catch(err){
                console.log(err)
                alert("Something went wrong. Try Again")
            }
            
            return
        }

        else{
        const item = {
            title : descRef.current.value.trim(),
            amount : amountRef.current.value,
            category : categoryRef.current.value
        }
        const res = await axios.post('https://expense-tracker-6ca30-default-rtdb.firebaseio.com/expenses.json',item)
        if (res.statusText==="OK"){
            const serverItem = {...item, id: res.data.name}
            dispatch(expensesActions.addExpense(serverItem))
            console.log(serverItem)
        }
        
    }
    }
  return (
    <div className='m-2'>
        <Table className='my-4'>
            <thead className='m-2'>
                <tr>
                    <th>
                    <Form.Label>Enter the Amount</Form.Label>
                    <InputGroup className="">
                    <Form.Control
                        type='number'
                        placeholder='Amount'
                        ref={amountRef}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    </InputGroup>
                    </th>
                    <th>
                    <Form.Label>Enter the description</Form.Label>
                    <InputGroup className="">
                    <Form.Control
                        placeholder='Description'
                        ref={descRef}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    </InputGroup>
                    </th>
                    <th>
                    <Form.Label>Select the category</Form.Label>
                    <Form.Select aria-label="Default select example"
                        ref={categoryRef}>
                        
                        <option value={'food'}>Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="fuel">Fuel</option>
                        <option value="clothes">Clothes</option>
                        <option value="grocessary">Grocessary</option>
                        <option value="others">Others</option>
                    </Form.Select>
                    </th>
                    <th>
                    <Button onClick={addExpenseHandler} variant='dark'>Add</Button>
                    </th>
                </tr>
            </thead>
        </Table>
    

    </div>
  )
}

export default Input