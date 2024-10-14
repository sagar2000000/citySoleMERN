import { User } from "../Models/userModel.js";

// Add item to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, selectedSize } = req.body;

    
    if (!userId || !itemId || !selectedSize) {
      return res.status(400).json({ success: false, message: "Missing required fields: userId, itemId, or selectedSize" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.cartData) {
      user.cartData = {};
    }

  
    if (!user.cartData.has(itemId)) {
      user.cartData.set(itemId, { qty: 1, size: [selectedSize] });
    } else {
      const itemData = user.cartData.get(itemId);
      itemData.qty += 1;
      itemData.size.push(selectedSize);
      user.cartData.set(itemId, itemData);
    }



    // Save updated user data
    await user.save();
    res.json({ success: true, message: "Added to Cart", cartData: user.cartData });

  } catch (error) {
    console.error('Error in addToCart:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "Missing required fields: userId or itemId" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!user.cartData || !user.cartData.has(itemId)) {
      return res.status(404).json({ success: false, message: "Item not in cart" });
    }


    const itemData = user.cartData.get(itemId);
    if (itemData.qty > 1) {
      itemData.qty -= 1;
      itemData.size.pop();
      user.cartData.set(itemId, itemData);
    } else {
      user.cartData.delete(itemId); 
    }

 

   
    await user.save();
    res.json({ success: true, message: "Removed from Cart", cartData: user.cartData });

  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    
    if (!userId) {
      return res.status(400).json({ success: false, message: "Missing required field: userId" });
    }


    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = user.cartData || {};
    res.json({ success: true, cartData });

  } catch (error) {
    console.error('Error in getCart:', error);
    res.status(500).json({ success: false, message: "Error while fetching cart data" });
  }
};

export { addToCart, removeFromCart, getCart };
