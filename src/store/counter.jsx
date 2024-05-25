import React from "react";
import { connect } from "react-redux";

import { Decrementcounter, Incrementcounter, Reset } from "./actions";
function Counter(props){
    console.log(props)
    return(
        <div className='border border-2 border-success m-2 p-2'>
            <h1>
                counter:{props.counterreducer.count}
            </h1>
            <button className={"btn btn-info text-success"} onClick={()=>{props.dispatch(Incrementcounter())}}>INCREMENT</button>&nbsp;&nbsp;
            <button  className={"btn btn-info text-success"} onClick={()=>{props.dispatch(Decrementcounter())}}>DECREMENT</button>&nbsp;&nbsp;
            <button  className={"btn btn-danger"} onClick={()=>{Reset(props.dispatch(Reset()))}}>RESET</button>
        </div>
    )
}
export default connect(store=>store)(Counter)