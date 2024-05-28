import React from "react";
import { useGetAllProductsQuery } from "../../services/ProductsApi";

function Products(){
   var {isLoading,data}=useGetAllProductsQuery()
   console.log(isLoading);
   console.log(data?.products);
   
return(
        <div>
            <h1>
                Products
            </h1>
        </div>
    )
}
export default Products