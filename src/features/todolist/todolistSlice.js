import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[
        "lakshman","jagadeesh","suriii","dineesh"
    ]
}
 export const todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }

})
export const {addTodo}=todolistSlice.actions
export default todolistSlice.reducer