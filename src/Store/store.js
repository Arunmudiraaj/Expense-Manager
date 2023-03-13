import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";
import authReducer from "./authentication"
const store = configureStore({
    reducer : {
        expenses : expensesReducer,
        authentication : authReducer
    }
})

export default store