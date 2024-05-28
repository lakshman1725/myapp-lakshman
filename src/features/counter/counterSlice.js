import { createSlice } from "@reduxjs/toolkit";
 const initialState={
    count:0
 }
 const counterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        inc:(state)=>{
            
            state.count=state.count+1
        },
        dec:(state)=>{
            state.count=state.count-1
        },
        reset:(state)=>{
            state.count=0
        }
    }

 })
 export const {inc,dec,reset}=counterSlice.actions
 const counterReducer =  counterSlice.reducer
 export default counterReducer