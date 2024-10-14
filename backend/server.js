import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import userRouter from './Routes/userRoute.js';
import { dbCon } from './db/db.js';
import itemRouter from './Routes/itemRoute.js';
import cartRouter from './Routes/cartRoute.js';
import queryRouter from './Routes/queriesRoute.js';
import { orderRouter } from './Routes/orderRoute.js';

const app = express()
const port =process.env.PORT || 4000
app.use(bodyParser.json())
app.use(cors())


dbCon()

app.get('/',()=>{
  console.log("hello from server")
  res.send("hi")
  
})
app.use("/test/user",userRouter)
app.use("/images",express.static("Uploads"))
app.use('/test/item',itemRouter)
app.use('/test/cart',cartRouter)
app.use('/test/user',queryRouter)
app.use('/test/user',orderRouter)
app.listen(port,()=>{
  console.log(`Server running at https://localhost:${port}`)
})