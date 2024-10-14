import Items from "../Models/ItemModel.js"
import fs from 'fs'

const addItem = async (req,res)=>{
  try {
    let image_filename = `${req.file.filename}`
    const {name,price,category} = req.body
    console.log(image_filename)
    console.log(name,price,category)
    const item = new Items({
      name,
      price,
      category,
      image:image_filename
    })
    
    await item.save()
    res.json({success:true,message:"Item added"})

    
  } catch (error) {
    console.log(error)

    res.json({success:false,message:"Error"})
    
  }
 


} 

const listItem =  async(req,res)=>{
try {
    const itemList = await Items.find({});
    console.log(itemList)
    res.json({success:true,data:itemList})
  
} catch (error) {
  console.log(error)
  res.json({success:false,message:"Error"})

  
}


} 

const removeItem = async (req,res)=>{
  try {
    const id = req.body.id
    const item = await Items.findById(id)
    fs.unlink(`Uploads/${item.image}`,()=>{console.log("Item Removed")})
    await Items.findByIdAndDelete(id)
    res.json({success:true,message:"item removed"})
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }


} 



export  {addItem,listItem,removeItem}