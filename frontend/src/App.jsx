import { assets } from "./assets/assets.js"
import './App.css'
import Home from "./pages/Home/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Login from "./components/Login/Login.jsx"
import { useState } from "react"
function App() {
  
  const [showLogin,setShowLogin] = useState(true)

  return (
   <>
   {showLogin?<Login setShowLogin={setShowLogin}/>:<></> }
   <Navbar setShowLogin={setShowLogin}/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>


   </Routes>
   <Footer/>
   
   </>
  )
}

export default App
