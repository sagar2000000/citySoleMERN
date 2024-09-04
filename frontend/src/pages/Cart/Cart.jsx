import React, { useContext } from 'react'
import './Cart.css'
import { shoes } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Cart = () => {
  const {cartItems,removeFromCart,getTotalCartAmount} =useContext(StoreContext)
  console.log(cartItems)
  return (
   <div className='cart'>
    
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
      </div>
     
        {shoes.map((item)=>{

          if(cartItems[item._id]>0){
            {console.log(cartItems[item._id])}
            {console.log(item)}
            return(
              <div>
            <div className="cart-items-title cart-items-item">
              {console.log(item.shoes_name)}
            <img src={item.shoes_img} alt="" />
            {console.log(item.shoes_name)}
           <p>{item.shoes_name}</p>
            <p>रु{item.shoes_price}</p>
            <p>{cartItems[item._id]}</p>
            <p>रु{item.shoes_price}</p>
            <p  style={{cursor:"pointer"}}onClick={()=>removeFromCart(item._id)}>x</p>
          </div>
          <hr />
             
          </div>
        
            )
            
            
          }
        })}
         
              <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>रु50</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>रु{getTotalCartAmount()+50}</b>
            </div>
          </div>
          <button >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Cart