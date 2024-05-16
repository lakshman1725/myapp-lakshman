import { useState } from "react";
import { connect } from "react-redux";
import reducer from "./reducer";
function Counter(props){
    console.log(props)
    return(
        <div className='border border-2 border-success m-2 p-2'>
            <h1>
                counter:{props.counterreducer.count}
            </h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>INCREMENT</button>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>DECREMENT</button>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"RES"})}}>RESET</button>
        </div>
    )
}
export default connect(function(store){return (store)})(Counter)