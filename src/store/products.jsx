import React from "react";
import { connect } from "react-redux";
function Products(props){
    console.log(props)
    return(
        <div className=" border border-warning m-2 p-2">
            <h1>PRODUCTS:</h1>
           
      
          <ul className=" d-flex flex-wrap" >
                {props.product.map((p)=>{
                    return <li className="w-25 d-flex flex-column  p-5 ">
                        <p>{p.title.slice(0,20)}</p>
                        <img src={p.image}  className="w-100" alt="" />
                        <h2>{p.price}</h2>
                        <h3>{p.brand}</h3>
                        <button className="btn btn-warning" onClick={()=>{props.Addtocart(p)}}>Add to cart</button>
                        </li>
                    })}
            </ul>
        </div>
    )
}
function MapStateaddtoprops(state){
    return state.Productreducer
}
function MapDispatchtoprops(dispatch){
   return {
    Addtocart:(prod)=>{dispatch({type:"ADDTOCART",payload:prod})}
   }
}
export default connect(MapStateaddtoprops, MapDispatchtoprops)(Products)