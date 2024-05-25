import axios from "axios";
import React, { useEffect, useState } from "react";
import {  Outlet, useParams } from "react-router-dom";

function CountryDetails(){
    var {cname}=useParams()
    var[details,setDetails]=useState()
    console.log(details)
    useEffect(()=>{
        axios.get(`https:/restcountries.com/v3/name/${cname}`)
        .then((res)=>{setDetails({...res.data[0]})
     })
    },[])
    return(
        <div>
            <h1>countryDetails of {details?.name?.common}</h1>
            <img src={details?.flags[1]}width="200px"/>
          <h2>Name:{details?.name.common}</h2>
          <h3>Capital:{details?.capital}</h3>
          <h4>Population:{details?.population}</h4>
          <h5>Region:{details?.region}</h5>
        </div>
    )
}
export default CountryDetails