import React from "react";
import { connect } from "react-redux";
function Products(props){
    console.log(props)
    return(
        <div className="border border-warning m-2 p-2">
            <ul className=" d-flex flex-wrap" >
                {props.Productreducer.product.map((p)=>{
                    return <li className="w-25 d-flex flex-column justify-content-between border border-success  p-5 m-2">
                        <p>{p.title.slice(0,20)}</p>
                        <img src={p.image}  className="w-100" alt="" />
                        <h2>{p.price}</h2>
                        <h3>{p.brand}</h3>
                        <button className="btn btn-warning" onClick={props.dispatch({type:"ADDTOCART",payload:p})}>Add to cart</button>
                        </li>
                    })}
            </ul>
        </div>
    )
}
export default connect(store=>store)(Products)