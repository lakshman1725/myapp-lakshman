import React, { useEffect, useState } from "react";
import axios from "axios";
function Products(){
    var[products,setProducts]=useState([])
    var[productsid,setProductsid]=useState([])
    
    useEffect(()=>{axios.get("https://fakestoreapi.com/products")
    .then((res)=>{setProducts(res.data)
        console.log(res.data)
    })},[])
    function clickhere(id){
        setProductsid(id)
      }
    return (
        <div>
        <h1>Products:</h1>
        <div>
        {products.map((prod)=>{return <ol className="m-2 p-2 bg-warning text-black">
             
             <div className="d-flex justify-content-between">
             {prod.title} 
             <i class="bi bi-bookmark-plus"  
             onClick={()=>{clickhere(prod.id)}}></i>
             </div>

         <div>
            <p style={prod.id===productsid?{display:"block"}:{display:"none"}} className="m-2 p-2 border border-2 border-info">
                Details:<br/>
            <img className="w-25"src={prod.image}/><br/>
            category:{prod.category}<br/>
            price:{prod.price}<br/>
            </p>
        </div>
        
        </ol>
    })}
        </div>
        </div>
    )
}
export default Products