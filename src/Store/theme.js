import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'theme',
    initialState : {dark : false},
    reducers : {
        toggleTheme(state){
            state.dark = !state.dark
        }
    }
})

export default themeSlice.reducer
export const themeActions = themeSlice.actions