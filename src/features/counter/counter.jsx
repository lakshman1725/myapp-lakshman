import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc,dec,reset } from "./counterSlice";
function Counter(){
    var {count}=useSelector(function(store){return store.counter})
    console.log(count);
    var dispatch=useDispatch()
    
    return(
        <div className="border border-danger m-2 p-2">
            <h1 className="text-danger">couter:{count}</h1>
            <button className="btn btn-info"onClick={()=>{dispatch(inc())}}>increment</button>
            <button className="btn btn-warning"onClick={()=>{dispatch(dec())}}>decrement</button>
            <button className="btn btn-danger"onClick={()=>{dispatch(reset())}}>reset</button>
            
        </div>
    )
}
export default Counter