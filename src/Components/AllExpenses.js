import React from 'react'
import { Table } from 'react-bootstrap'

const AllExpenses = () => {
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
                <tr>
                    <td className='text-center'>$ 100</td>
                    <td className='text-center'>Weekend movie</td>
                    <td className='text-center'>Entertainment</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default AllExpenses