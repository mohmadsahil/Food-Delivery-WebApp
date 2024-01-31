import React from 'react'
import Navbar from '../Components/Navbar'
import Maindiv from '../Components/Maindiv'
import Category from '../Components/Category'
import Popular from '../Components/Popular'
import Scrolldiv from '../Components/Scrolldiv'
import Speciality from '../Components/Speciality'
import Footer from '../Components/Footer'
import FootMenu from '../Components/FootMenu'
import Orders from './Orders'

export default function Home() {
  return (

    <>
        <Navbar/>
        <Maindiv/>
        <Category/>
        <Popular/>
        <Scrolldiv/>
        <Speciality/>
        <Footer/>
        <FootMenu/>
    </>   
  )
}
