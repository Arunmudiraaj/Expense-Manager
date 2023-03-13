import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";
import authReducer from "./authentication"
import themeReducer from "./theme"
const store = configureStore({
    reducer : {
        expenses : expensesReducer,
        authentication : authReducer,
        theme : themeReducer
    }
})

export default store