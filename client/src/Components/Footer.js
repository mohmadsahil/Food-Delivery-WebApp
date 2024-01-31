import React from 'react'

export default function footer() {
  return (
    <>

{/* *************************FOOTER**************************  */}

<div className="footer">
     <div className="part1">

    <div className="left-div">
            <div className="footer-logo">
                <img src="logo (1).png" alt="logo" width="100%" height="100%"/>
            </div>

            <div>
                <p  className="footer-desc1">Stay in the loop and sign up for the Hot and Spicy :</p>
            </div>

            <div className="Email-div">
                <input  className="Email-box" type="email" placeholder="Enter your email"/>
                <button className="Email-button"><img src="Emailimg.png" alt="Email-button" width="100%" height="100%"/></button>
            </div>
    </div>



    <div className="right-div">

        <div className="company" >
            <p className="company-title foot-t2">Company</p>
            <p className="foot-t3">Home</p>
            <p className="foot-t3">About</p>
            <p className="foot-t3">Solution</p>
            <p className="foot-t3">Pricing</p>
            <p className="foot-t3">Team</p>
            <p className="foot-t3">Carrier</p>
        </div>
        <div className="Documantation">
            <p className="Documantation-title foot-t2">Documantation</p>
            <p className="foot-t3">Help-Center</p>
            <p className="foot-t3">FAQ</p>
            <p className="foot-t3">Contact</p>
            <p className="foot-t3">Privacy policy</p>
        </div>
        <div className="social">
            <p className="social-title foot-t2">Social Media</p>
            <p className="foot-t3">Facebook</p>
            <p className="foot-t3">Instagram</p>
            <p className="foot-t3">You-Tube</p>
            <p className="foot-t3">Twitter</p>
            <p className="foot-t3">WhatsApp</p>
        </div>
    </div>
</div>
     <center><hr style={{marginTop: "10px", width:"95%", color:"black" }}/></center>
     <div className="part2">
        <p className="foot-t4"> © All Rights Reserved 2023</p>
        <p className="foot-t4"> Terms & Conditions</p>
     </div>
</div>


    </>
  )
}
