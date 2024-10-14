import mongoose from 'mongoose'


const cartModel = new mongoose.Schema({

    qty: {
      type: Number,
      default: 0
    },
    size: {
      type: [String],
      default: []
    }
 
})


const orderModel = new mongoose.Schema({
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  street:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  orderEmail:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  },
  cartData: {
    type: Map,
    of: cartModel,
    default: {}
  }



  
});

export  const Order = mongoose.model("Order",orderModel);



