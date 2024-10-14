import mongoose from "mongoose";

const ItemModel = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  category:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  }
})


const Items = mongoose.models.Items|| mongoose.model("Items",ItemModel)
export default Items;