import  {configureStore} from '@reduxjs/toolkit';
//we have got this from core redux and not react-redux

import todoReducer from "./features/todo/todoSlice.js"
// since we done default export therefore we can change name of reducer

export const store = configureStore({
    reducer:todoReducer
})