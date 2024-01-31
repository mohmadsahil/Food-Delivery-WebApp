import React from 'react'
import { useState, useEffect } from 'react'

export default function Category() {

    const [Data, setData] = useState([])
    useEffect(()=>{
        getData()
    },[])

    let getData=()=>{
        const res = fetch('http://localhost:8080/category')
        .then((data)=>{
            return data.json()
        }).then((res)=>{
            setData(res)
        }).catch((err)=>{
            console.log("Some Error Occured", err)
        })
    }
  return (
    <>
        {/* *********************************CATEGORY************************************  */}

        <div className="para2">
            <p className="paragraph2">WHAT YOU'ARE LOOKING FOR?</p>
        </div>

    
        <div className="category-slider1"> 
            {
                Data.map((value)=>{
                    const {name, image} = value;

                    return(
                        <>
                            <div className="slider1-child">
                                <img className="cat-img" src={image} alt='img11'/>
                                <center><p className="slider-text">{name}</p></center>
                            </div>
                        </>
                    );
                })
            }     
        </div>
    </>
  )
}
