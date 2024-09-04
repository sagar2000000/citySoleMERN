import React, { useState } from 'react'
import './Login.css'
const Login = ({setShowLogin}) => {
  const[sign,setSign] = useState(true)
  return (
    <div className='login-container'>
      
      <div className='form-con'>

      <div className='login-head'>
      {sign? <h3>Sign up</h3>: <h3>Login in</h3>
        }
        <p  onClick={()=>setShowLogin(false)}className='cross'>x</p>
      </div>
        <hr />

      <form action="" onSubmit={(e)=>e.preventDefault()}>
      {sign?
         <div>
                    <input type="text" name="fullname" placeholder=' Enter your FullName' /><br />
                    <input type="text"  name='phone' placeholder='Enter your phone number'/><br />

         </div>

        :
        <></>
     }
    
         <input type="email" name='email' placeholder='Enter your email' /><br />
         <input type="password" name='password' placeholder='Enter your password' /><br />
        {sign?
        
      <button>Sign in</button>
        :<button>Login</button>}

        {sign? <p onClick={()=>setSign(false)}>Already have account click here to login</p>:<p onClick={()=>setSign(true)}>Don't have account click here to create one</p>}
      </form>
      </div>
    </div>
  )
}

export default Login