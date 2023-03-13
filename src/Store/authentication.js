import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        loginId : localStorage.getItem('loginId'),
        email : localStorage.getItem('email')
    },
    reducers : {
        updateAuth(state,action){
            state = action.payload
        }
    }
})

export default authSlice.reducer
export const authActions = authSlice.actions