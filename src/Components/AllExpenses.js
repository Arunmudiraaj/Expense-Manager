import React from 'react'
import { Table } from 'react-bootstrap'

const AllExpenses = (props) => {
   
  return (
    <div className=''>
        <p className='text-center'>--Your List Of Expenses--</p>
        <Table>
            <thead>
                <tr>
                    <th className='text-center'>Amount 💵</th>
                    <th className='text-center'>Description 📝</th>
                    <th className='text-center'>Category 😎</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(props.expenses).map(key =><tr key={key}>
                    <td className='text-center'>{props.expenses[key].amount}</td>
                    <td className='text-center'>{props.expenses[key].title}</td>
                    <td className='text-center'>{props.expenses[key].category}</td>
                </tr>)}
               
            </tbody>
        </Table>
    </div>
  )
}

export default AllExpenses