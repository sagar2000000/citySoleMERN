import React from 'react'
import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Body.css'
const Body = () => {
  const [image,setImage]=useState(assets.firstcover)
  

  const changeCoverLeft= ()=>{
    if(image==assets.firstcover){
      setImage(assets.thirdcover)
    }
    else if(image==assets.secondcover){
      setImage(assets.firstcover)
    }
    else
    setImage(assets.secondcover)
    
  }
  const changeCoverRight= ()=>{
    if(image==assets.firstcover){
      setImage(assets.secondcover)
    }
    else if(image==assets.secondcover){
      setImage(assets.thirdcover)
    }
    else
    setImage(assets.firstcover)
    
  }
  return (
    <div className='body-container'>
      <div className="btnA">
      <button onClick={changeCoverLeft}>&lt;</button>
      </div>
      <div>
      <img src={image} alt="" />
      </div>
      
      
        <div className="btnB">
        <button onClick={changeCoverRight}>&gt;</button>
        </div>
      </div>
      
   
  )
}

export default Body