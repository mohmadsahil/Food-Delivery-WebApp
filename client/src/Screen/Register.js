import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import FootMenu from '../Components/FootMenu'
import { useState} from 'react'

export default function Register() {

    const [Data,setData]=useState({
      name : "", 
      email :"", 
      password :"", 
      mobile :""
    })

    const RegisterUser = async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"         
        },
        body: JSON.stringify({name:Data.name, email:Data.email, mobile:Data.mobile, password:Data.password})
      })

      const finalResponse = await response.json()
      console.log(finalResponse)

      if(response.status===200){
        window.alert("Registration Successfully")
      }
    }



    function handleInput(e)
    {
        setData({...Data,[e.target.name]:e.target.value})
    }

return (
    <>
        <Navbar/>
        <div className="login-body">
                <div className="left-login left-register">
                </div>
                <div className="right-login">
                      <p className="login-text1 register-text1">Create New Account</p>
                      <input className="login-input register-input" type="text" placeholder="Enter your Name" name='name' value={Data.name} onChange={handleInput}/>
                      <input className="login-input register-input" type="Email" placeholder="Enter your Email" name='email' value={Data.email} onChange={handleInput}/>
                      <input className="login-input register-input" type="password" placeholder="Enter your Password" name='password' value={Data.password} onChange={handleInput}/>
                      <input className="login-input register-input" type="number" maxlength="10" placeholder="Enter your Mobile Number" name='mobile' value={Data.mobile} onChange={handleInput}/>
                      <button className="login-button register-input" onClick={RegisterUser}>Register</button>
                      <Link to ="/Login" className="login-text2">Already Register?Login here</Link>
                </div>
        </div>
        <FootMenu/>
      </>
  )
}
