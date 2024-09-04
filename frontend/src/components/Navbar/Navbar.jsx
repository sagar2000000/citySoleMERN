import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Home from '../../pages/Home/Home'
const Navbar = ({setShowLogin}) => {
  const [active,setActive]=useState('home')
  return (
    <div className='navbar-container'>
      <ul>
        <Link to='/'onClick={()=>setActive('home')}className={active=='home'?'active':''}><li>Home</li></Link>
       <a href="#aboutus" onClick={()=>setActive('about')} className={active=='about'?'active':''}><li>About</li></a> 
       <a href="#product-container" onClick={()=>setActive('products')} className={active=='products'?'active':''}><li>Products</li></a> 
        <a href="#footer-container" onClick={()=>setActive('contact')} className={active=='contact'?'active':''}><li>Contact </li></a>
        <Link to='/cart'  onClick={()=>setActive('cart')} className={active=='cart'?'active':''}><li>🛒</li> </Link>
      
      </ul>
      <img   onClick={()=>setShowLogin(true)}className="profile" src={assets.profile_icon}alt="" />

    </div>
  )
}

export default Navbar