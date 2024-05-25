let initialState={

    
     students:["shiva",
    "venkata lakshmi",
    "maha",
    "babi",
    "siri"]
}
function  TodolistReducer(state=initialState,action){
    
    
   if(action.type==="addtodo"){
      return{...state,students:[...state.students,action.payload]}
   }
   
    return state
}
export default TodolistReducer