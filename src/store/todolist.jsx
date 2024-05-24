import { useState } from "react";
import reducer from "./reducer";
import { connect } from "react-redux";
import { Addtocart } from "./actions";
function Todos(props){
    console.log(props)
return(
        <div className="border border-warning">
            <h1>
                TODOLIST
                
            </h1>
            <input type="text" id="nt" />&nbsp;&nbsp;
            <button className="btn btn-success" onClick={()=>{props.Addtodo(document.getElementById("nt").value)}}>ADD TODOS</button>
            <ul>
            {
            props.students.map((k)=>{return<li>{k}</li>})
            }
            </ul>
            </div>
    )
}
function MapStateaddtoprops(state){
 return state.todolistreducer
}
function MapDispatchtoprops(dispatch){
    return {
        Addtodo:(nt)=>{dispatch({type:"addtodo",payload:nt})}
    }
}
export default connect(MapStateaddtoprops, MapDispatchtoprops)(Todos)
