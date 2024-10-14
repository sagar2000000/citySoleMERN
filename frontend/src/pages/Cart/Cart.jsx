import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = ({setShowLogin}) => {
  const { url, cartData, removeFromCart, getTotalCartAmount, itemList ,token,} = useContext(StoreContext);

 
  const getItemDetails = (itemId) => {
    const itemData = cartData[itemId];
    if (!itemData) return null;

   
    const sizeMap = itemData.size.reduce((acc, size) => {
      acc[size] = (acc[size] || 0) + 1;
      return acc;
    }, {});

    return {
      itemData,
      sizeMap
    };
  };

  return (
    <div className="cart">
    <div className="cart-items-list">
      <div className="cart-items-title">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {itemList.map((item) => {
        const { itemData, sizeMap } = getItemDetails(item._id) || {};
        if (!itemData) return null;
  
        return Object.entries(sizeMap).map(([size, qty]) => (
          <div key={`${item._id}-${size}`} className="cart-items-item">
          
            {size === Object.keys(sizeMap)[0] && (
              <>
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
              </>
            )}
            {/* Blank cells for other sizes of the same item */}
            {size !== Object.keys(sizeMap)[0] && (
              <>
                <div></div> 
                <div></div> 
              </>
            )}
            <p>रु{item.price}</p>
            <p>{size}</p>
            <p>{qty}</p>
            <p>रु{item.price * qty}</p>
            <p
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => removeFromCart(item._id, size)}
            >
              x
            </p>
          </div>
        ));
      })}
    </div>
  

  
    <div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart Totals</h2>
    <div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>रु{getTotalCartAmount()}</p>
      </div>
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>रु{getTotalCartAmount() === 0 ? 0 : 50}</p>
      </div>
      <div className="cart-total-details">
        <b>Total</b>
        <b>रु{getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 50)}</b>
      </div>
    </div>
    {
      token?<Link  to='/placeorder'> <button className="checkout-button" >PROCEED TO CHECKOUT</button></Link>:<Link  to='/'> <button className="checkout-button" onClick={()=>setShowLogin(true)}>Login to proceed</button></Link>
    }

   
  </div>
</div>


  </div>
  
  
  
  );
};

export default Cart;
