import React from 'react'

export default function Maindiv() {
  return (
    <>
 {/* ***************FIRST BODY************  */}

<div className="container">
        <div className="text1 container5">

           <p className="inner-text one">The Fastest Food</p>

           <div className="Delivery-img"  style={{display: "flex", alignItems: "center"}}>
                 <p className="inner-text">Delivery in</p><div className="container3"><img className="Delivery-Boy-Img" src="Delivery Boy Img 1.png" width="100%" height="100%" alt='image1'/></div>
           </div>


           <p className="inner-text" style={{color: "#ee7f0f"}}>Anywhere City</p>


          <div className="container4">
            <p className="paragraph1">Experience Lightning-Fast Food Delivery Today!</p>
            <button className="Order-now">Order Now</button>
            <button className="Seat-reserve">Reserve Your Seat</button>
          </div>

        </div>

        <div className="container6">
            <img className="img-pizza" src="Main Pizza .png" style={{width: "70%", height: "100%"}} alt='image2'/>
        </div>
    </div>


    {/* ******************BANNER**************** */}

    <div className="Header-banner">
        <img src="Header Banner.png" height="85%" width="85%" alt='image3'/>
    </div>
    </>
  )
}
