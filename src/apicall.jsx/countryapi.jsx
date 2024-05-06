import { useState } from "react";
function Countryapi(props){
    return(
        <div>
            <h1>{ <li className='border boredr-2 border-secondary bg-success m-2 p-2'>{props.list.name}</li>}</h1>
        </div>
    )
}
export default Countryapi