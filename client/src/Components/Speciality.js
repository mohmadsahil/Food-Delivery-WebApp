import React from 'react'
import { useState,useEffect } from 'react';

export default function Speciality() {

          // ***********MODAL JS*****************

      function openmodal()
      {
          document.getElementById("overlay").style.zIndex="1";
          document.getElementById("overlay").style.display="flex";
          document.getElementById("modal").style.zIndex="1";
          document.getElementById("modal").style.display="flex";
      }
      function closemodal()
      {
          document.getElementById("overlay").style.display="none";
          document.getElementById("modal").style.display="none";
      }

     const [Data,setData] = useState([]);
     useEffect(()=>{
        getData();
     },[])

     let getData =()=>{
        const res = fetch("http://localhost:8080/specialities")
        .then((res)=>{
            return res.json();
        })
        .then((value)=>{
            setData(value);
        })
        .catch((err)=>{
            console.log("Error FOund",err);
        })
     }

  return (
      
    <>
      {/* **********************TODAY SPECIALITY******************************  */}

 <div className="div1-cont">
    <div className="para2">
        <p className="paragraph2">TODAY'S SPECIALITY</p>
    </div>
    

    {
        Data.map((response)=>{
            const {_id,image,description,title,price} = response;
            return(
                <>
                        <div className="div1-childs">
                            <div className="div1-img" onClick= {openmodal}>
                            <img className="div1-fd-img" src={image} alt='img1'/>
                        </div>

                        <div className="div1-desc">
                            <p className="div1-title">{title}</p>
                            <div className="div1-Price-container">
                                <p className="div1-desc">{description}</p>
                                <p className="div1-price">{price}</p>
                            </div>
                            <center><hr className="div1-hr" width="95%" color="black" /></center>
                            <div className="div1-Buttons" >
                                <button className="div1-Add-to-Cart">Add to Cart</button>
                                <button className="div1-Buy-Now">Buy Now</button>
                            </div>
                        </div>       
                    </div>   
                </>
            )
        })
    }

</div>




    {/* ***********************************MODALS****************************************** */}




    <div id="overlay" className="overlay">
        <div id="modal" className="modal">
            <div className="close-btn-div">
                <button onClick={closemodal} className="modal-close">X</button>
            </div>

            <div className="modal-childs">
                <div className="modal-img" onClick= {openmodal}>
                    <img className="modal-fd-img" src="rollimg2.png" alt='img9'/>
                </div>
                <div className="modal-desc">
                    <p className="modal-title">Veg Burger</p>
                    <div className="modal-Price-container">
                        <p className="modal-desc">Egg Roll is the easiest thing to prepare as it is ready in very less time. Cut thick slices of onion and capsicum, grate the carrots, mince the ginger and keep aside. Take a tawa or frying pan</p>
                        <p className="modal-price">$8</p>
                    </div>
                    <center><img className="moral-star" src="moralstar1.png" alt='img10'/></center>
                    <center><hr className="modal-hr div1-hr" width="95%" color="black" /></center>
                    <div className="modal-Buttons" >
                        <button className="modal-Add-to-Cart">Add to Cart</button>
                        <button className="modal-Buy-Now">Buy Now</button>
                    </div>
                </div>       
            </div>
        </div>
    </div>


    </>
  )
}
