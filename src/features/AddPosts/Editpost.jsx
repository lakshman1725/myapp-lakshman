import { useFormik } from "formik";

import React, { useEffect } from "react";
import {  useUpdatePostMutation } from "../../services/postsApi";
import { useLocation, useNavigate } from "react-router-dom";
function Editposts(){
    var {state}=useLocation()
    console.log(state)
    var navigate=useNavigate() 
    useEffect(()=>{
        editPostform.setValues(state)
    },[state])
   var [updatePostFn]=useUpdatePostMutation()
    var editPostform=useFormik({
            initialValues:{
                title:"",
                author:"",
                id:""
            },
            onSubmit:(values)=>{updatePostFn(values)
            .then((res)=>{console.log(res.data)})
            navigate(`/posts`)
        }
        })
    

    return(
        <div>
            <h5>
            EDITPOSTS:
            </h5>
            <form onSubmit={editPostform.handleSubmit}>
            <input type="text" placeholder="title"{...editPostform.getFieldProps("title")}/>
            <br/>
            <input type="text" placeholder="author"{...editPostform.getFieldProps("author")}/>
            <br/><br/>
            <button className="btn btn-success">Update post</button>
            </form>
            
        </div>
    )
}
export default Editposts