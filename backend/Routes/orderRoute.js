import express from 'express'
import { customerOrder, fetchCustomerOrder } from '../Controllers/orderController.js'


 export const orderRouter = express.Router()



orderRouter.post("/order",customerOrder);
orderRouter.get('/customer_order',fetchCustomerOrder)


