import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
const PlaceOrder = () => {
  const { getTotalCartAmount, cartData, url, orderEmail, setCartData } = useContext(StoreContext);

  const [info, setInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    phonenumber: '',
    orderEmail: orderEmail,
    cartData: cartData
  });

  const onChangeHandler = (event) => {
    setInfo(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/test/user/order`, { info });
      console.log(response.data);

      if (response.data.success) {
        console.log(response.data.message)
        console.log("Order placed successfully");
       toast.success(response.data.message)
       
        // Clear cart data
        setCartData({});
        console.log(cartData)
        
        // Clear form info
        setInfo({
          firstname: '',
          lastname: '',
          email: '',
          street: '',
          city: '',
          state: '',
          phonenumber: '',
          orderEmail: '',
          cartData: {}
        });
      } else {
        console.log('Order failed:', response.data.message);
        toast.error(response.data.message)
      }
    } catch (err) {
      console.log('Error in onSubmitHandler:', err);
    }
  };

  return (
    <form className="place-order" onSubmit={onSubmitHandler}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder='First name'
            name="firstname"
            onChange={onChangeHandler}
            value={info.firstname}
          />
          <input
            type="text"
            placeholder='Last name'
            name="lastname"
            onChange={onChangeHandler}
            value={info.lastname}
          />
        </div>
        <input
          type="email"
          placeholder='Email address'
          name="email"
          onChange={onChangeHandler}
          value={info.email}
        />
        <input
          type="text"
          placeholder='Street'
          name='street'
          onChange={onChangeHandler}
          value={info.street}
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder='City'
            name='city'
            onChange={onChangeHandler}
            value={info.city}
          />
          <input
            type="text"
            placeholder='State'
            name='state'
            onChange={onChangeHandler}
            value={info.state}
          />
        </div>
        <input
          type="text"
          placeholder='Phone'
          name='phonenumber'
          onChange={onChangeHandler}
          value={info.phonenumber}
        />
      </div>
      <div className="place-order-right">
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
              <b>रु{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button className="place-order-button" type='submit'>Order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
