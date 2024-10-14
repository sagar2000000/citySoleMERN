import React, { useState, useEffect } from 'react';
import './OrderList.css';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getOrderList = async () => {
    try {
      const response = await axios.get("http://localhost:4000/test/user/customer_order");
      setOrders(response.data.data); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrderList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders available.</div>;
  }

  return (
    <div className="orderlist-container">
      <h2>Customer Orders</h2>

      {orders.map((order, index) => {

        const {
          firstname,
          lastname,
          email,
          orderEmail,
          phoneNumber,
          street,
          city,
          state,
          cartData,
        } = order;

        return (
          <div key={index}>
            <h3>Order {index + 1}</h3>
            {/* Customer Details Table */}
            <table className="order-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Order Email</th>
                  <th>Phone Number</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`${firstname} ${lastname}`}</td>
                  <td>{email}</td>
                  <td>{orderEmail}</td>
                  <td>{phoneNumber}</td>
                  <td>{`${street}, ${city}, State ${state}`}</td>
                </tr>
              </tbody>
            </table>

            {/* Ordered Products Table */}
            <h4>Ordered Products</h4>
            <table className="order-table">
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Sizes</th>
                </tr>
              </thead>
              <tbody>
                {cartData && Object.keys(cartData).length > 0 ? (
                  Object.keys(cartData).map((productId) => (
                    <tr key={productId}>
                      <td>{productId}</td>
                      <td>{cartData[productId]?.qty?.$numberInt || cartData[productId]?.qty}</td>
                      <td>{cartData[productId]?.size ? cartData[productId].size.join(', ') : 'N/A'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No products available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
