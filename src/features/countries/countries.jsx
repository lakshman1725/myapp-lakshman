import React from "react";
import { useGetAllCountriesQuery } from "../../services/CountriesApi";
function Countries(){
    var{isLoading,data}=useGetAllCountriesQuery()   
    
return(
        <div>
            <h1>
                countries
            </h1>
        </div>
    )
}
export default Countries