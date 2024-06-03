import { useFormik } from "formik";

import React from "react";
import { useAddPostMutation } from "../../services/postsApi";
function Addposts(){
    var[addPostFn]=useAddPostMutation()
    var Addpostform=useFormik({
            initialValues:{
                title:"",
                author:""
            },
            onSubmit:(values)=>{addPostFn(values).then((resp)=>{console.log(resp)})
            .catch()}
        })
    

    return(
        <div>
            <h5>
            ADDPOSTS:
            </h5>
            <form onSubmit={Addpostform.handleSubmit}>
            <input type="text" placeholder="title"{...Addpostform.getFieldProps("title")}/>
            <br/>
            <input type="text" placeholder="author"{...Addpostform.getFieldProps("author")}/>
            <br/><br/>
            <button className="btn btn-info">Add posts</button>
            </form>
            
        </div>
    )
}
export default Addposts