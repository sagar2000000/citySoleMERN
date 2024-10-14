import React, { useState } from 'react'
import { useContext } from 'react'
import './Login.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({setShowLogin}) => {
  const{url,setToken,setUsername,setOrderEmail} = useContext(StoreContext)
  const [data ,setData] = useState({
   fullname:'',
   email:'',
   password:'',
   phonenumber:''
  })
  const[sign,setSign] = useState(true)

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
    console.log(data)
 

  }
  const onSubmitHandler = async (event)=>{
     let newUrl="";
     setOrderEmail(data.email)
    console.log(data.email)
    event.preventDefault()
    if(sign){
      newUrl = url+"/test/user/register"
      
    }
    else{
    newUrl= url+"/test/user/login"
    }
    const response = await axios.post(newUrl,data)
    setData({
      fullname:'',
      email:'',
      password:'',
      phonenumber:''
     })
     if(response.data.success){
      console.log(response.data)
      setToken(response.data.token)
      toast.success("Logined successfully")
      localStorage.setItem('token',response.data.token);
     
      setShowLogin(false)
      
  
      
      
     }
     else{
      toast.error("Error in login/sign-in")
     }

  }
  
  return (
    <div className='login-container'>
      
      <div className='form-con'>

      <div className='login-head'>
      {sign? <h3>Sign up</h3>:<h3>Login</h3>
        }
        <p  onClick={()=>setShowLogin(false)}className='cross'>x</p>
      </div>
        <hr />

      <form action=""  onSubmit={onSubmitHandler}>
      {sign?
         <div>
                    <input type="text" name="fullname" placeholder=' Enter your FullName'  onChange={onChangeHandler} value={data.fullname}/><br />
                    <input type="text"  name='phonenumber' placeholder='Enter your phone number' onChange={onChangeHandler} value={data.phonenumber}/><br />

         </div>

        :
        <></>
     }
    
         <input type="email" name='email' placeholder='Enter your email'  onChange={onChangeHandler} value={data.email}/><br />
         <input type="password" name='password' placeholder='Enter your password'  onChange={onChangeHandler} value={data.password}/><br />
        {sign?
        
      <button type='submit'>Sign in</button>
        :<button type='submit'>Login</button>}

        {sign? <p onClick={()=>setSign(false)}>Already have account click here to login</p>:<p onClick={()=>setSign(true)}>Don't have account click here to create one</p>}
      </form>
      </div>
    </div>
  )
}

export default Login