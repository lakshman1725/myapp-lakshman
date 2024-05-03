import React, { useCallback, useMemo } from "react";
import Todos from "./todoss";
function Todolist(){
    var[newtodo,setNewTodo]=React.useState()
var[todo,setTodo]= React.useState(["lakshman","jaggu","surrii","dinuu "])
var deltodo=useCallback(function(id){
   setTodo((oldtodo)=>{
        oldtodo.splice(id,1)
         return [...oldtodo]
        })
},[])

function addtodo(e){
setTodo([...todo,newtodo])
}
return(<div className='border boredr-2 border-danger m-2 p-2'>
    {
        <div>
            <input type="text" class=" form-control bg-light"  onChange={(e)=>{setNewTodo(e.target.value)}}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success" onClick={()=>{addtodo()}}>ADD TODO</button>
            <ul className="p-0">
                {todo.map((s,i)=>{
                    return <Todos id={i} todos={s} del={deltodo}></Todos>
                      
                })}
            </ul>
        </div>
    }
</div>

)
}
export default Todolist
