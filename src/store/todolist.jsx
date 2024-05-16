import { useState } from "react";
import reducer from "./reducer";
import { connect } from "react-redux";
function Todos(props){
    console.log(props)
return(
        <div className="border border-warning">
            <h1>
                TODOLIST
                
            </h1>
            <input type="text" id="nt" />&nbsp;&nbsp;
            <button className="btn btn-success" onClick={()=>{props.dispatch({type:"addtodo",payload:document.getElementById("nt").value})}}>ADD TODOS</button>
            <ul>
            {
            props.todolistreducer.students.map((k)=>{return<li>{k}</li>})
            }
            </ul>
            
           
           
        </div>
    )
}
export default connect(function(store){return(store)})(Todos)
