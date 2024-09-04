import { createContext, useState } from "react";
import { shoes } from "../assets/assets";
export const  StoreContext = createContext(null);

function StoreContextProvider(props){
  const [cartItems,setCartItems] = useState({});


  const addToCart = (itemid)=>{
    
    
    console.log(cartItems[itemid])
    if(!cartItems[itemid]){
      setCartItems((prev)=>({...prev,[itemid]:1}))
      
    }
    else{
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
    
   
   
  }



  const removeFromCart=(itemid)=>{
    (cartItems[itemid]>0)
    setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  console.log(cartItems)
  }


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {

        shoes.map((i)=>{
          if(i._id==item){
            totalAmount+=i.shoes_price*cartItems[item]
          }
        })
        
      }
    }console.log(totalAmount)
    return totalAmount;
  };

  const contextValue={
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    setCartItems,
    cartItems
  }


  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      </StoreContext.Provider>
  )
}



export default StoreContextProvider;
