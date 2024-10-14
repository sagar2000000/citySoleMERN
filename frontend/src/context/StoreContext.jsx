import { createContext, useState, useEffect, useCallback } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const url = 'http://localhost:4000';


function StoreContextProvider(props) {
  const [cartData, setCartData] = useState({});
  const [token, setToken] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [selectedSize, setSelectedSize] = useState('37');
  const[orderEmail ,setOrderEmail] = useState("exmple@gmail.com")

  const addToCart = useCallback(async (itemid, size) => {
    setCartData(prev => {
      const itemData = prev[itemid] || { qty: 0, size: [] };
      return {
        ...prev,
        [itemid]: {
          qty: itemData.qty + 1,
          size: [...itemData.size, size]
        }
      };
    });

    if (token) {
      try {
        await axios.post(`${url}/test/cart/add`, 
          { userId: token, itemId: itemid, selectedSize: size }, 
          { headers: { token } }
        );
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    }
  }, [token]);

  const removeFromCart = useCallback(async (itemid) => {
    setCartData(prev => {
      const itemData = prev[itemid];
      if (itemData && itemData.qty > 0) {
        const updatedQty = itemData.qty - 1;
        const updatedSizes = [...itemData.size]; // Copy the array

        if (updatedQty <= 0) {
          // Remove item from cartData if quantity is 0 or less
          const { [itemid]: _, ...rest } = prev;
          return rest;
        } else {
          // Remove the last size from the size array
          updatedSizes.pop();
          return {
            ...prev,
            [itemid]: {
              qty: updatedQty,
              size: updatedSizes
            }
          };
        }
      }
      return prev;
    });

    if (token) {
      try {
        await axios.post(`${url}/test/cart/remove`, 
          { userId: token, itemId: itemid }, 
          { headers: { token } }
        );
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    }
  }, [token]);

  const getTotalCartAmount = () => {
    return Object.entries(cartData).reduce((total, [itemid, itemData]) => {
      const item = itemList.find(i => i._id === itemid);
      return item ? total + item.price * itemData.qty : total;
    }, 0);
  };

  const fetchItemList = async () => {
    try {
      const response = await axios.get(`${url}/test/item/list`);
      setItemList(response.data.data);
    } catch (error) {
      console.error('Error fetching item list:', error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.get(`${url}/test/cart/get`, {
        headers: { token }
      });
      const loadedCartData = response.data.cartData || {};
      Object.keys(loadedCartData).forEach(key => {
        if (!Array.isArray(loadedCartData[key].size)) {
          loadedCartData[key].size = [];
        }
      });
      setCartData(loadedCartData);
    } catch (error) {
      console.error('Error loading cart data:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchItemList();
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    };
    loadData();
  }, []);

  const contextValue = {
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    cartData,
    setCartData,
    url,
    token,
    itemList,
    setToken,
    selectedSize,
    setSelectedSize,
    orderEmail,
    setOrderEmail
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
