import React, { useContext, useState } from 'react';
import './Products.css';
import { assets, category, shoes } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Products = () => {
 
  
 const {cartItems,addToCart,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const [selectedId, setSelectedId] = useState(1);

  const handleCategoryClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div id='product-container'>
      <h1 style={{ color: 'red' }}>Product Category:</h1>
      
      <div className='product-container'>
        {category.map((item) => (
          <div
            key={item.id}
            className={`category ${selectedId === item.id ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(item.id)}
          >
            <img src={item.category_image} alt={item.category_name} />
            <p>{item.category_name}</p>
          </div>
        ))}
      </div>

      <div className='products'>
        {shoes.map((item,index) => (
          item.category_id === selectedId ? (
            <div key={item.id} className="product-items">
              <img src={item.shoes_img} alt={item.shoes_name} />
              <hr />
              <p>{item.shoes_name}</p>
              <hr />
              <h3>Rs {item.shoes_price}</h3>
              <label htmlFor="size">Choose size:</label>
              <select name="size" id="size">
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </select>

              <div className="cart-add">
                <button className='cart-btn' onClick={()=>removeFromCart(item._id)}>-</button>
                
                <h4>{cartItems[item._id]?cartItems[item._id]:"0"}</h4>
                <button className='cart-btn' onClick={()=>addToCart(item._id)}>+</button>
              </div>
            </div>
          ) : null
          
        ))}
      </div>
    </div>
  );
};

export default Products;
