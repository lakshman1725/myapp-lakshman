import axios from "axios"
// todolist
export function Addtodo(students){

   return {type:"addtodo",payload:students}
}
// products
export function Addtocart(product){

    return {type:"ADDTOCART",payload:product}
 }
//  Counter
 export function Incrementcounter(){
    return{type:"INCREMENT"}
 }
 export function Decrementcounter(){
    return{type:"DECREMENT"}
 }
 export function Reset(){
    return{type:"RESET"}
 }
//  countries
export function Getallcountries(){
  return (dispatch)=>{axios.get("https://restcountries.com/v3/all").then((res)=>{
   return dispatch({type:"LOADCOUNTRIES",payload:res.data})
}
)}
   }
