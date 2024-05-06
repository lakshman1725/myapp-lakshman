import { useContext, useState } from "react";
import Chlid from "./chlid";
import { Mycontext } from "./context";

function Parent(props){
    var s=useContext(Mycontext)

    var[gn,setGn]=useState("")
    function def(){
        alert("Hiiiiiii")
    }
    return(
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Parent:{s.x.age}</h1>
            <button onClick={()=>{def()}}>click to see alert </button>
            <Chlid r={gn} x={def}></Chlid>
        </div>
    )
}

export default Parent