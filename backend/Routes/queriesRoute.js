import express from "express"
import { getAllUserQueries, userQuery } from "../Controllers/queriesController.js"
import authMiddleWare from "../Middlewares/auth.js";



const queryRouter = express.Router()

queryRouter.post('/queries',authMiddleWare,userQuery)
queryRouter.get('/get_queries',getAllUserQueries)



export default queryRouter;