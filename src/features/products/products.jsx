import React, { useState } from "react";
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/ProductsApi";

function Products(){
//    var {isLoading,data}=useGetAllProductsQuery()
// //    console.log(isLoading);
//    console.log(data);
    var[isLoading,setIsloading]=useState(true)
    var[data,setData]=useState({})
   var[getAllProductsFn]=useLazyGetAllProductsQuery()
   function getproducts(){
    getAllProductsFn().then((res)=>{
        setIsloading(false)
        setData(res.data)
    })
   }
return(
        <div>
            <h1> PRODUCTS:</h1>
            <button  className="btn btn-danger"onClick={()=>{getproducts()}}>Load Our Products</button>
                {isLoading &&(<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
   </button>)}
   
     <ul>
         {isLoading===false&&(data.map((pro)=>{return <li>
            {pro.title}
            {<img src=""/>}
            </li>}))}
    </ul>
                
            
        </div>
    )
}
export default Products