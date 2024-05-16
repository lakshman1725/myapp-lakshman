let initialState={

    count:0
    
}
function  CounterReducer(state=initialState,action){
   
   if(action.type==="INC"){
      return{count:state.count+1}
   }
   if(action.type==="DEC"){
    return{count:state.count-1}
 }
 if(action.type==="RES"){
    return{count:0}
 }
   
    return state
}
export default CounterReducer