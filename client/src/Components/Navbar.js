import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {


// ****************RESPONSIVE MENUBAR*******************

  let openHamburger=()=>{
    
    document.getElementById('navbar').style.flexDirection="column";
    document.getElementById("Menubar").style.display="block";

    let menus = document.querySelectorAll("#menu-text")
    menus.forEach((element)=>{
        element.style.display="block";
        element.style.padding = "10px"
    })
    document.getElementById("hamburger").style.display="none";
    document.getElementById("hamburger2").style.display="block";
    document.getElementById("hamburger-icon2").style.display="block";
    document.getElementById("hamburger2").style.paddingTop="20px";

}

let closeHamburger=()=>{
    document.getElementById('navbar').style.flexDirection="row";

    let menus = document.querySelectorAll("#menu-text")
    menus.forEach((element)=>{
        element.style.display="none";
    })
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("hamburger-icon2").style.display="none";
    document.getElementById("hamburger2").style.paddingTop="0px";
}
    // *******************HANDLE SEARCH ICON***********************


    let openSearchbar=()=>{

      let openSearchbar = document.getElementById("Searchbar")
      openSearchbar.style.transition = "1.5s";
      openSearchbar.style.display = "block";
      openSearchbar.style.position = "fixed";
      openSearchbar.style.top = "4%";

    }
    
    let closeSearchbar=()=>{
      let openSearchbar = document.getElementById("Searchbar")
      openSearchbar.style.position = "fixed";
      openSearchbar.style.top = "-10%";

    }


  return (
    <>
          <nav className="navbar" id="navbar">
            <div>
                <img src="logo (1).png" className="logo" alt='logo'/>
            </div>

            <div className="Menubar" id="Menubar">
                <ul>
                    <li id="menu-text"><Link to="/">Home</Link></li>
                    <li id="menu-text"><Link to="/Dishes">Dishes</Link></li>
                    <li id="menu-text"><Link to="/Orders">Orders</Link></li>
                    <li id="menu-text"><Link to="/Register">Register</Link></li>
                    <li id="menu-text"><Link to="/Login">Login</Link></li>
                </ul>
            </div>

            <div className="Buttons" id="Buttons" style={{display: "flex" , width: "auto", flexWrap: "wrap", justifyContent: "center"}}>
                <span>
                    <button id="button" className="button" onMouseEnter={openSearchbar}><i  className="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i></button>
                </span>
                <span>
                    <button id="button" className="button"><i id="wishlist" className="fa-solid fa-heart" style={{color: "#ffffff"}}></i></button>
                </span>
                <span>
                    <a>
                    <button id="button" className="button"><i className="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i></button>
                    </a>
                </span>
                <div id="Searchbar" className="Searchbar" onMouseOut={closeSearchbar}>
                    <input className="Searchbtn" type="Search" placeholder="Search" style={{width: "20vw", padding: "17px", display: "block"}}/>
                </div>
            </div>

            <div className="Searchbar">
                <input className="Searchbtn" type="Search" placeholder="Search"/>
            </div>

            <div>
                <button id="hamburger" style={{border: "none", background:"none"}}  onClick={openHamburger}><img className="hamburger-icon" src="menu icon.png" alt='hamburger'/></button>
                <button id="hamburger2" style={{border: "none", background:"none", display: "none"}}  onClick={closeHamburger}><i id="hamburger-icon2" className="fa-solid fa-xmark" style={{color: "#D44A08"}} ></i></button>
            </div>
    </nav>
    </>
  )
}
