import details from "./product.json"

let initalState={
    product:details.products,
    cart:[]
}

function Productreducer(State=initalState,action){
    if(action.type==="ADDTOCART"){
        return{...State,cart:[...State.cart,action.payload]}
        console.log(cart)

    }
    return State
}
export default Productreducer
   