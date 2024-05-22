import { ErrorMessage, useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import axios from "axios";
function Studentform(){
   var studentform= useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            password:"",
            email:"",
            age:"",
            username:""
        },
        validationSchema:Yup.object({
          firstname:Yup.string()
          .required()
          .max(15,"*babu chusuko 15 letters kanna akuva undakudadhu"),
          lastname:Yup.string()
          .required()
          .max(10,"*babu chusuko 10 letters kanna akuva undakudadhu"),
          password:Yup.string()
          .matches(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,"*incorrect password"),
          age:Yup.string().test("checkage","age is not correct",(x)=>{
          
            if(x>18 && x<45){
              return true;
            }
            else{
              return false;
            }
          })
          .required("*please fill the age"),
          email:Yup.string()
          .required("*invalid email"),
          username:Yup.string().test("uniqueusername","username already use",function(un)
            {
              var {path,createError}=this;
              var pp=new Promise((resolve, reject) => {
                axios.get(`https://api.github.com/users/${un}`).then(resp=>{
                  reject(createError({path,message:"this name was already use"}))
                  })
                  .catch(err=>{resolve(true)})
              })
          return pp
        })

          
          }),
          
          
           onSubmit:(values)=>{console.log(values)}
       })
    return(
        <div>
          <form onSubmit={studentform.handleSubmit}>
            <input className={studentform.touched.firstname&&studentform.errors.firstname&&"border border-danger"}type="text" placeholder="firstname" {...studentform.getFieldProps("firstname")} />
            <div>
              {studentform.touched.firstname&&studentform.errors.firstname&&<b className={"text-danger"}>{studentform.errors.firstname}</b>}
            </div>
            <br/>

            <input className={studentform.touched.lastname&&studentform.errors.lastname&&"border border-danger"} type="text" placeholder="lastname" {...studentform.getFieldProps("lastname")} />
            <div>
              {studentform.touched.lastname&&studentform.errors.lastname&&<b className={"text-danger"}>{studentform.errors.lastname}</b>}
            </div>
            <br/>
            <input className={studentform.touched.password&&studentform.errors.password&&"border border-danger"} type="text" placeholder="password" {...studentform.getFieldProps("password")} />
            <div>
              {studentform.touched.password&&studentform.errors.password&&<b className={"text-danger"}>*please enter the password</b>}
            </div>
            <br/>
            <input className={studentform.touched.email&&studentform.errors.email&&"border border-danger"} type="text" placeholder="email" {...studentform.getFieldProps("email")} />
            <div>
              {studentform.touched.email&&studentform.errors.email&&<b className={"text-danger"}>*please enter the email</b>}
            </div>
            <br/>
            <input className={studentform.touched.age&&studentform.errors.age&&"border border-danger"} type="text" placeholder="age"  {...studentform.getFieldProps("age")}/>
            <div>
              {studentform.touched.age&&studentform.errors.age&&<b className={"text-danger"}>{studentform.errors.age}</b>}
            </div>
            <br/>
            <input type="text" placeholder="username"  {...studentform.getFieldProps("username")}/>
            <br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;
            <button >show the data</button>
            <button onClick={()=>{studentform.resetForm()}}>Reset</button>
            <button onClick={()=>{studentform.setValues({firstname:"lakshman",
            lastname:"kolapati",
            password:"saI2345",
            email:"kolapatilakshman@gmail.com",
            age:"22",
            username:"lakshman1725"})}}>Show values</button>
           </form>
           {JSON.stringify(studentform.errors)}
        </div>
    )
}
export default Studentform