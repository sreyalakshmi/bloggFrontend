import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const[data,changedata]=useState(
        
        {
            "name":"",
            "dob":"",
            "gender":"",
            "email":"",
            "password":"",
            "confirmpassword":""
            
        }
    
)
const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value},[])
}
const readvalue=()=>{
    if (data.password==data.confirmpassword) {
        alert("password and confirm password same")
        console.log(data)
        axios.post("http://localhost:8081/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userId",response.data.userId)
                    navigate("/")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{

                console.log(error)
            }
        )
    } else {
        alert("error in password")
    }
}
let navigate=useNavigate()
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Dob</label>
                            <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Gender</label>
                           <input type="text" className="form-control" name='gender' value={data.gender} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                           <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                           <input type="password" id="" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Confirm Password</label>
                           <input type="password" id="" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-success" onClick={readvalue}>Submit</button>
                </div>
                <div>
                <a class="nav-link" href="/">Login</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup