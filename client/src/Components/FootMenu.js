import React from 'react'
import { Link } from 'react-router-dom'

export default function FootMenu() {
  return (
    <>
    {/* **************************FOOT MENU ****************  */}

<div className="Footermenu">
    <span>
        <button className="buttons"><Link to="/"><img className="footer-icons" src="Home.png" alt="Home"/></Link></button>
    </span>
    <span>
        <button className="buttons"><Link to="/Category"><img className="footer-icons" src="Category.png" alt="Home"/></Link></button>
    </span>
    <span>
        <button className="buttons"><Link to="/Cart"><img className="footer-icons" src="Cart.png" alt="Home"/></Link></button>
    </span>
    <span>
        <button className="buttons"><Link to="/Account"><img className="footer-icons" src="Account.png" alt="Home"/></Link></button>
    </span>
   
</div>

    </>
  )
}
