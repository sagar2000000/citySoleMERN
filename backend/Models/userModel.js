import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  qty: {
    type: Number,
    default: 0
  },
  size: {
    type: [String],
    default: []
  }
});

const userModel = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  queries: {
    type: String,
    default: ""
  },
  cartData: {
    type: Map,
    of: cartItemSchema,
    default: {}
  }
}, { minimize: false });

export const User = mongoose.model('User', userModel);
