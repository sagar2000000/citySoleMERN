import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  const [query,setQuery]=useState('')
  const handleQuery=(e)=>{
    e.preventDefault();
    console.log(query)
    setQuery('')


  }
  return (
    <div id='footer-container'>
    <div className='footer-container'>
      <div className="contact">
        <h3>CONTACT</h3>
        <p>New Road, KichaPokhari</p>
        <p>Kathmandu</p>
        <p>Zip Code:44600</p>
        <p>Phone Number: 01-12345-678</p>
        <p>Mobile Number:977-98410919**</p>
      </div>
      <div className="menu">
        <h3>MENU</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>
      <div className="social-media">
        <h3>Connect with us</h3>
        <ul>
          <li><img src={assets.facebook_icon} alt="" /></li>
          <li><img src= {assets.linkedin_icon}alt="" /></li>
          <li><img src={assets.twitter_icon}alt="" /></li>
        </ul>
      </div>
      <div className="queries">
        <form action="" onSubmit={handleQuery}>
        <input type="text" name="querie" 
        onChange={(e)=>setQuery(e.target.value) }
        value={query}
        placeholder='Enter your queries here'
        id="" />
        <button type='submit'>Submit</button>
        </form>
      
        
      </div>
      

    </div>
    <div className='bottom'>
      <p>Copyright 2024 @ CitySole.com - All RIght Reserved.</p>
    </div>
    </div>
  )
}

export default Footer