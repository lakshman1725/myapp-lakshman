import { useContext, useState } from "react";
import { Mycontext } from "./context";
function Grandchild(props){
    var k=useContext(Mycontext)
        var[gn,setGn]=useState("")
        console.log(k)
    return(
        <div className='border border-2 border-success m-2 p-2'>
            <h1>Grandchlid:{k.x.firstname}</h1>
            
        </div>
    )
}
export default Grandchild