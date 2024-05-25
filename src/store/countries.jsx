import React, { useEffect } from "react";
import { Getallcountries } from "./actions";
import { connect } from "react-redux";

function Countries(props){
    useEffect(()=>{
        props.getcountries()
    },[])
    return(
        <div className="border border-danger">
            <h1>
                Countries
                {
                    props.Countries?.map((country)=>{return <li>{country.name.common}</li>})
                }
            </h1>
        </div>
    )
}
function MapStatetoprops(state){
 return state.Countriesreducer
}
function MapDispatchtoprops(dispatch){
return {
    getcountries:()=>{dispatch(Getallcountries())}
}
}
export default connect(MapStatetoprops,MapDispatchtoprops)(Countries)