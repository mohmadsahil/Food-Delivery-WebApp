import React from 'react'
import { useState ,useEffect } from 'react'

export default function Popular() {
    
    const [Data,setData] = useState([])
    useEffect(()=>{
        getData();
    },[])

    let getData=()=>{
       const res = fetch('http://localhost:8080/populars')
       .then((res)=>{
            return res.json();  
       })
       .then((value)=>{
            setData(value);
       })
       .catch((err)=>{
            console.log("Error Find",err);
       })
    }



  return (
    <>
         {/* *************************POPULAR DISHES*********************  */}

<div className="div2-cont">
    <div className="para2">
        <p className="paragraph2">POPULAR DISHES</p>
    </div>
    
    {
        Data.map((value)=>{
            const {_id,title,description,price,image} = value;
            return(
                    <>
                        <div className="div2-childs">
                            <div className="div2-img">
                                <button  className="div2-like"><i id={_id}  className="fa-solid fa-heart fa-xl like-btn-icon" ></i></button>
                                <img className="div2-fd-img2" src={image} alt='img1'/>
                                <button className="div2-share"><i className="fa-solid fa-share-nodes fa-xl"style={{color: "white"}}></i></button>
                            </div>      

                            <div className="div2-desc">
                                <p className="div2-title">{title}</p>
                                <div className="div2-Price-container">
                                    <p className="div2-desc">{description}</p>
                                    <p className="div2-price">{price}</p>
                                </div>
                                <center><hr className="div2-hr" width="95%" color="black" /></center>
                                <div className="div2-Buttons" >
                                    <center><button className="div2-Add-to-Cart">Add to Cart</button></center>
                                </div>
                            </div>       
                        </div>
                </>
            )
        })
    }

        
</div>

    </>
  )
}
