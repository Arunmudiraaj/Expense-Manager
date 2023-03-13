import { createSlice } from "@reduxjs/toolkit";

const defaultExpenses = {items : [], totalAmount : 0, editId : null}
const expensesSlice = createSlice({
    name : 'expenses',
    initialState : defaultExpenses,
    reducers : {
        addExpense(state, action){
            state.items.push(action.payload)
            state.totalAmount= state.totalAmount + Number(action.payload.amount)
        },
        removeExpense(state, action){
            const id = action.payload
            const reqIndex = state.items.findIndex(item=>item.id === id)
            state.totalAmount = state.totalAmount - Number(state.items[reqIndex].amount)
            state.items.splice(reqIndex,1) 
        },

        editExpense(state, action){
            const id = action.payload.id
            const reqIndex = state.items.findIndex(item=>item.id === id)

            if (reqIndex!==-1){
                state.totalAmount = state.totalAmount - Number(state.items[reqIndex].amount) + Number(action.payload.item.amount)
                state.items[reqIndex] = {...action.payload.item, id : id}
            }
            
        },
        updateEditId(state, action){
            state.editId = action.payload
        },

        updateTotal(state, action){
            state.totalAmount = Number(action.payload)
        },
        initialExpenses(state, action){
            state.items = action.payload
        }
    }
})

export default expensesSlice.reducer
export const expensesActions = expensesSlice.actions