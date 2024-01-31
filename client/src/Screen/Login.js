import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import FootMenu from '../Components/FootMenu'

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className='login-body'>
    <div className="left-login"></div>
    <div className="right-login">
      <p className="login-text1">Login</p>
      <input
        className="login-input"
        name="email"
        type="Email"
        placeholder="Enter your Email"
      />
      <input
        className="login-input"
        name="password"
        type="password"
        placeholder="Enter your Password"
      />
      <button className="login-button">Login</button>
      <Link to="/Register" className="login-text2">Register?</Link>
      <Link to="#" className="login-text2">Forget password?</Link>
    </div>
    </div>
    <FootMenu/>
    </>
  )
}
