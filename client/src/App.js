import React from 'react'
import Home from './Screen/Home'
import Dishes from './Screen/Dishes'
import Login from './Screen/Login'
import Register from "./Screen/Register"
import Cart from './Screen/Cart'
import Account from './Screen/Account'
import Orders from './Screen/Orders'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Category from './Components/Category'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Dishes' exact element={<Dishes/>}/>
          <Route path='/Login' exact element={<Login/>}/>
          <Route path='/Register' exact element={<Register/>}/>
          <Route path='/Cart' exact element={<Cart/>}/>
          <Route path='/Account' exact element={<Account/>}/>
          <Route path='/Category' exact element={<Dishes/>}/>
          <Route path='/Orders' exact element={<Orders/>}/>

        </Routes>
      </Router>
    </>
  )
}
