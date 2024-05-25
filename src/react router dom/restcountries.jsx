import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, } from "react-router-dom";
function Countries(){
    var[countries,setCountries]=useState([])
    useEffect(()=>{axios.get("https://restcountries.com/v3/all")
    .then(res=>setCountries([...res.data]))
 },[])
 return(
    <div  className="d-flex ">
        <div>
        {
            countries?.map((c)=>{return <li><Link to={`countryDetails/${c.name.common}`}>{c.name.common}</Link></li>})
        }
        </div>
        <div className="border border-success p-2 h-25">
        <Outlet></Outlet>
        </div>
        
        
    </div>
 )
}
export default Countries