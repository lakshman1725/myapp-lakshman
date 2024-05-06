import { useState } from "react";
import Grandchild from "./grandchild";
function Child(props){
    console.log(props)
    var[gn,setGn]=useState("")
    return(
        <div className='border border-2 border-success m-2 p-2'>
            <h1>chlid:{props.r}</h1>
            <button onClick={()=>{props.x()}}>click here to alert parent</button>
            <Grandchild></Grandchild>
        </div>
    )
}
export default Child