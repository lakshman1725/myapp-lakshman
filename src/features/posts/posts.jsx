import React, { useEffect } from "react";
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from "../../services/postsApi";
import Editposts from "../AddPosts/Editpost";
import { useNavigate } from "react-router-dom";

function Posts(){
    var navigate=useNavigate()
    var[DeletePostFn]=useDeletePostMutation()
    var[LazyGetAllDataFn]=useLazyGetAllPostsQuery()
   var{isLoading,data}=useGetAllPostsQuery()
   console.log(isLoading)
   console.log(data);
   function delpostshandler(id){
    DeletePostFn(id)
    .then(()=>{LazyGetAllDataFn()})
    
   }
   function editPost(post){
    navigate(`/editpost`,{state:post})
   }
   useEffect(()=>{
    LazyGetAllDataFn()
   },[])
return ( 
        <div>
            <h1>
                Posts:
            </h1>
            {
                isLoading&&(<h4>LOADING...........</h4>)
            }
        <ul>
            {
                
                !isLoading &&(
                   data?.map((p)=>{
                   return <li className="border border-danger p-2 m-2">
                    tittle:{p.title}
                    <p>author:{p.author}</p>
                    <p>id:{p.id}</p>
                    <button className="btn btn-danger" onClick={()=>{delpostshandler(p.id)}}>Delete</button>&nbsp;&nbsp;
                    <button className="btn btn-warning"onClick={()=>{editPost(p)}}>Edit</button>
                   </li>
                   })
            )
            
            }
            </ul>
           
           
            
        </div>
    )

}
export default Posts