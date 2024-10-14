import React from 'react'
import './Panel.css'

import { Link } from 'react-router-dom'
const Panel = () => {
  return (
    <div className='panel-container'>
     <div className="item">
    <Link to='/addproduct'><h4>Add Products</h4> </Link> 
     <hr />
     <Link to='/queries'><h4>User Queries</h4> </Link>
     <hr />
     <Link to='/orderlist'><h4>Order List</h4> </Link>
     
    
</div>
    </div>
  )
}

export default Panel