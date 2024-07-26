import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [data, changedata] = useState(

        {

            "email": "",
            "password": ""
        }

    )
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8081/signin", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("userId", response.data.userid)
                    navigate("/add")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error) => {

                console.log(error)
            }
        )

    }
    let navigate = useNavigate()

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                            </div>
                        </div>
                        <br></br>
                        <button className="btn btn-success" onClick={readvalue}>Login</button>
                    </div>
                    <div>
                        <a class="nav-link" href="/signup">Signup</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login