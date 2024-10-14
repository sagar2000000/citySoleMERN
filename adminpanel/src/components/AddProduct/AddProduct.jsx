import React from 'react'
import './AddProduct.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { assets } from '../../assets/asset.js'



const AddProduct = () => {

  const url = "http://localhost:4000"
  const [image ,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    price:"",
    category:"1"
  })
  const onChangeHandler =(e)=>{
    const name =e.target.name
    const value =e.target.value
    setData(data=>({...data,[name]:value}))
  }
  const onSubmitHandler = async(event)=>{
    event.preventDefault()
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)

    const response = await axios.post(`${url}/test/item/add`,formData)
    console.log(response)
    if(response.data.success){
      setData({
        name:"",
        price:"",
        category:"1"
      })
      setImage(false)
      console.log("data sended")
    }
    else{
      console.log("Error")
    }
  }
  return (
    <div className='add-product'>
      
      <div className="form-container" >
      <form action="" onSubmit={onSubmitHandler} encType='multiart/form-data'>

          

        
        <h3>Add Products</h3><br />
        <hr />
        <p>Upload Image</p>
          <label htmlFor="image">
            <img  className='upload-img' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input  onChange={(e)=>setImage(e.target.files[0])}type="file" id="image"  hidden required />
          <br />


       
        <input type="text" placeholder='Enter item-name' name="name" onChange={onChangeHandler} value={data.name}/><br />
        <input type='Number' placeholder='Enter item-price' name='price' onChange={onChangeHandler}/><br />
        
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={onChangeHandler} value={data.category}>
        <option value="1">Nike</option>
          <option value="2">Adidas</option>
          <option value="3">Puma</option>
        </select><br />

  <button type="submit" >Add</button>
      </form>
      </div>
   
    </div>
  )
}

export default AddProduct