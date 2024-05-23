let initialState={

    count:0
    
}
function  CounterReducer(state=initialState,action){
   
   if(action.type==="INCREMENT"){
      return{count:state.count+1}
   }
   if(action.type==="DECREMENT"){
    return{count:state.count-1}
 }
 if(action.type==="RESET"){
    return{count:0}
 }
   
    return state
}
export default CounterReducer