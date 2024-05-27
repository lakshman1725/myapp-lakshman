import { createSlice } from "@reduxjs/toolkit";
const initialstate={
    todos:["surendra","dineesh","ayyapa","sandeep"]
}
var todoSlice=createSlice({
    name:"todolist",
    initialstate,
    reducers:{
        addTodo:(state,action)=>{
            
        }
    }
})