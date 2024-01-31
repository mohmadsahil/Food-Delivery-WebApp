import React from 'react'
import Navbar from "../Components/Navbar";
import FootMenu from "../Components/FootMenu";

export default function Dishes() {
  return (
    <>
    <Navbar/>
{/* ************************CATEGORY SECTION************************** */}

    <div className="main-category">
        <div className="left-main-category">
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="discountimg.gif" alt='img1'/>
                <p   className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Offers</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="cat-img1.png" alt='img2'/>
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Dosa</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="pizzaimg.png" alt='img3'/>
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Pizza</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="pavimg.png" alt='img4' />
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >PavBhaji</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="burgerimg.png" alt='img5' />
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Burger</p>
            </div>
            <div className="left-main-category-child">
                <img  className="left-main-category-child-img"src="parathaimg.png" alt='img6' />
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Paratha</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="pastryimg.png" alt='img7'/>
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Pastry</p>
            </div>
            <div className="left-main-category-child">
                <img className="left-main-category-child-img" src="shakeimg.png" alt='img8' />
                <p className="left-main-category-child-txt" style={{fontFamily:"HeaderFont"}} >Shake</p>
            </div>

        </div>

        
        <div className="right-main-category">
            <div className="top-right-main-category">
                <img src="carousel-img1.png" alt="" className="top-right-main-category-img"/>
                <img src="carousel-img2.png" alt="" className="top-right-main-category-img"/>
                <img src="carousel-img2.png" alt="" className="top-right-main-category-img"/>
                <img src="carousel-img2.png" alt="" className="top-right-main-category-img"/>
                <img src="carousel-img2.png" alt="" className="top-right-main-category-img"/>
            </div>


            <div className="bottom-right-main-category">

                <div className="div2-cont">
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes" style={{color: "#EA8738"}}></i></button>
                        </div>
                                      
                
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>    
                
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>    
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes" style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div> 
                    
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>    
                
                
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>    
                
                
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>    
                
                
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>
                
                
                
                
                
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>
                    
                    
                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>


                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt=""/>
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>


                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt="" />
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>

                    <div className="bottom-right-main-category-child">
                        <div className="div2-img">
                            <button  className="div2-like" onclick="changeHeartColor()"><i id="div2-like" className="fa-solid fa-heart"></i></button>
                            <img className="div2-fd-img2" src="burgerimg.png" alt="" />
                            <button className="div2-share"><i className="fa-solid fa-share-nodes"style={{color: "#EA8738"}}></i></button>
                        </div>
                       
                        <div className="div2-desc">
                            <div className="div2-Price-container">
                                <p className="div2-title">Veg Burger</p>
                                <p className="div2-price">$8</p>
                            </div>
                            <center><hr className="div2-hr" width="95%" color="black" /></center>
                            <div className="div2-Buttons" >
                                <center><button className="main-category-Add-to-Cart">Add to Cart</button></center>
                            </div>
                        </div>       
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

    <FootMenu/>
    </>
  )
}
