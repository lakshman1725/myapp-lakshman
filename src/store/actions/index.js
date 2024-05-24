export function Addtodo(students){

   return {type:"addtodo",payload:students}
}
export function Addtocart(product){

    return {type:"ADDTOCART",payload:product}
 }
 export function Incrementcounter(){
    return{type:"INCREMENT"}
 }
 export function Decrementcounter(){
    return{type:"DECREMENT"}
 }
 export function Reset(){
    return{type:"RESET"}
 }