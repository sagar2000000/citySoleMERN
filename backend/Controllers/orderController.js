import { Order } from "../Models/orderModel.js";

export const customerOrder = async (req, res) => {
  try {
    const info = req.body.info;
  console.log(info)
    if (info) {
      let { firstname, lastname, email, street, state, city, phonenumber, cartData, orderEmail } = info;
          phonenumber=Number(phonenumber)
        
      const order = new Order({
        firstname,
        lastname,
        email,
        state,
        street,
        city,
        phoneNumber:phonenumber,
        cartData,
        orderEmail,
      });
      await order.save();
      console.log(order)
      return res.json({success:true, message:"Order placed" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success:false, message: "Error while placing order" });
  }
};


export const fetchCustomerOrder = async(req,res)=>{


try {
  const orders = await Order.find({});
 
  console.log(orders)
  res.json({success:true,data:orders})

} catch (error) {
console.log(error)
res.json({success:false,message:"Error"})


}


}