import { useEffect, useState } from "react";
import Countryapi from "./countryapi";


function Countries(){
    var [a,setA]=useState()
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then((res)=>{res.json().then(data=>{
            setA(data)
            
        }
    )}
    )
    },[])
   
    return(
        <div>
            <h1>Countries:</h1>
            {
            a?.map((k)=>{return <Countryapi list={k}></Countryapi>
        })
            }
        </div>
    )
}
export default Countries