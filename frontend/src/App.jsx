import './App.css'
import Home from "./pages/Home/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import Login from "./components/Login/Login.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const [showLogin,setShowLogin] = useState(false)

  return (
   <>
   <ToastContainer/>
   {showLogin?<Login setShowLogin={setShowLogin}/>:<></> }
   <Navbar setShowLogin={setShowLogin}/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart  setShowLogin={setShowLogin}/>}></Route>
    <Route path="/placeorder" element={<PlaceOrder/>}></Route>
    


   </Routes>
   <Footer/>
   
   </>
  )
}

export default App
