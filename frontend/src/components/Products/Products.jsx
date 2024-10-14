import React, { useContext, useState } from 'react';
import './Products.css';
import { category } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Products = () => {
  const { url, cartData, addToCart, removeFromCart, itemList, selectedSize, setSelectedSize } = useContext(StoreContext);
  const [selectedId, setSelectedId] = useState(1);
  const [size, setSize] = useState('37'); // Initialize size as '37', matching the option values

  const handleCategoryClick = (id) => {
    setSelectedId(id);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
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
        {itemList.map((item) => (
          item.category === selectedId ? (
            <div key={item._id} className="product-items">
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <hr />
              <p>{item.name}</p>
              <hr />
              <h3>रु{item.price}</h3>
              <label htmlFor="size">Choose size:</label>
              <select name="size" id="size" value={size} onChange={handleSizeChange}>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
              </select>

              <div className="cart-add">
                {cartData[item._id]?.size.includes(size) ? (
                  <button
                    className='cart-btn'
                    onClick={() => removeFromCart(item._id, size)}
                  >
                    -
                  </button>
                ) : null}
                <h4>
                  {cartData[item._id]?.size.filter(s => s === size).length || 0}
                </h4>
                <button
                  className='cart-btn'
                  onClick={() => addToCart(item._id, size)}
                >
                  +
                </button>
              </div>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

export default Products;
