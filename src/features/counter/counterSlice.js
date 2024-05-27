import { createSlice } from "@reduxjs/toolkit";
const intialstate={
    count:0
}
export const counterSlice=createSlice({
    name:"counter",
    intialstate,
    reducers:{
        inc:(state)=>{
            state.count++
        },
        dec:(state)=>{
            state.count--
        },
        reset:(state)=>{
            state.count=0
        }
    }
})
export var{inc,dec,reset}=counterSlice.actions
export default counterSlice.reducer
