import express from 'express'
import { addToCart,removeFromCart,getCart } from '../Controllers/cartController.js'

import authMiddleWare from '../Middlewares/auth.js';
const cartRouter = express.Router()


cartRouter.post('/add',authMiddleWare,addToCart);
cartRouter.get('/get',authMiddleWare,getCart);
cartRouter.post('/remove',authMiddleWare,removeFromCart)



export default cartRouter;