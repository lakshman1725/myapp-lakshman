import React from "react";
import { useGetAllcountriesQuery } from "../../services/CountriesApi";
function Countries(){
    var{isloading,data}=useGetAllcountriesQuery()   
    console.log("isloading ::",isloading);
    console.log("data::",data)
return(
        <div>
            <h1>
                Countries
            </h1>
        </div>
    )
}
export default Countries