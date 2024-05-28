import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todolistSlice";
function Todolist(){
    var [newtodos,setNewtodos]=useState("")
    var {todos}=useSelector(state=>state.todooo)
    var dispatch=useDispatch()
    console.log(todos);
    return (
        <div className="border border-warning m-2 p-2">
            <h1 className="text-success">
                STUDENTS:
            </h1>
            
           <input type="text" onChange={(e)=>{setNewtodos(e.target.value)}}/>
           <button className="btn btn-info" onClick={()=>{dispatch(addTodo(newtodos))}}>ADDTODO</button>
           {todos.map((ts)=>{return <li>{ts}</li>})}
        </div>
    )
}
export default Todolist