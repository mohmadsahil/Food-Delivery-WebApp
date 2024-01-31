import React from 'react'
import { useState,useEffect } from 'react'

export default function Scrolldiv() {

        const [Data, setData]=useState([]);
        useEffect(()=>{
            getData();
        },[])

        let getData= ()=>{
            const res = fetch("http://localhost:8080/banners")
            .then((res)=>{
                return res.json();
            })
            .then((value)=>{
                setData(value);
            })
            .catch((err)=>{
                console.log("Error Found",err);
            })
        }

  return (


    <>
           {/* ****************SCROLL CARDS SECOND****************************  */}

    

<div className="scroll-card2">
    {
        Data.map((response)=>{
            const {image} = response;
            return(
                <>
                    <div className="scroll-card2-child">       
                            <img className="scroll-card2-img" src={image} alt='img1'/>
                    </div>
                </>
            )
        })
    }
</div>
    </>
  )
}
