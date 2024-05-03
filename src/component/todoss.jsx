import React from "react";
function Todos(props){
    console.log(props)
    return(
        <li className=" d-flex justify-content-between m-2 p-2 border border-2 border-secondary bg-secondary">{props.todos}
        <button  className="btn btn-danger" onClick={()=>{props.del(props.id)}}>DELETE</button>
        
        </li>
    )
}
export default React.memo (Todos)