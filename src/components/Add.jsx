import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    const[data,changedata]=useState(
          {"Message":"","userId":sessionStorage.getItem("userId")}
            
        
)
const inputHandler=(event)=>{
    changedata({...data,[event.target.name]:event.target.value},[])
}
const readvalue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/add",data,{
        headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
    }).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("successfully posted")
            } else {
                alert("error")
            }
        }
    ).catch(
        (error)=>{

            console.log(error)
        }
    )
   
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">post a message</label>
                            <textarea id="" className="form-control" name='Message' value={data.Message} onChange={inputHandler}></textarea>
                        </div>
                    </div>
                    <br></br>
                    <button className="btn btn-success" onClick={readvalue}>post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add