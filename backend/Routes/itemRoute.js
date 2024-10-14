import express from "express"
import multer from 'multer'

import { addItem,removeItem,listItem } from "../Controllers/ItemController.js"


const itemRouter =express.Router()

const storage=multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
  return cb(null,`${Date.now()}${file.originalname}`)
  }})



const upload = multer({storage:storage})

itemRouter.post('/add',upload.single('image'),addItem)

itemRouter.get('/list',listItem)

itemRouter.post('/remove',removeItem)

export default itemRouter;