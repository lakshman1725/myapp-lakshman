import React from "react";
import { connect } from "react-redux";
import CounterReducer from "./counter.reducer";
function Counter(props){
    console.log(props)
    return(
        <div className='border border-2 border-success m-2 p-2'>
            <h1>
                counter:{props.count}
            </h1>
            <button className={"btn btn-info text-success"} onClick={()=>{props.inc()}}>INCREMENT</button>&nbsp;&nbsp;
            <button  className={"btn btn-info text-success"} onClick={()=>{props.dec()}}>DECREMENT</button>&nbsp;&nbsp;
            <button  className={"btn btn-danger"} onClick={()=>{props.res()}}>RESET</button>
        </div>
    )
}
export default connect(function(state){
    return state.counterreducer
},function(dispatch){
    return {
        inc:()=>{dispatch({type:"INCREMENT"})},
        dec:()=>{dispatch({type:"DECREMENT"})},
        res:()=>{dispatch({type:"RESET"})}
    }
})(Counter)
