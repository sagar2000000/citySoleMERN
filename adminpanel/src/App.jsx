import { useState } from 'react'
import Panel from './components/Panel/Panel'
import './App.css'
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import OrderList from './pages/OrderList/OrderList'
import Queries from './pages/UserQueries/Queries'
function App() {
 

  return (
    <>
    <Header/>
    <Panel></Panel>
    <Routes>
    
    
     <Route path='/addproduct' element={<AddProduct/>}></Route>
     <Route path='/queries' element={<Queries/>}></Route>
     <Route path='/orderlist' element={<OrderList/>}></Route>


    </Routes>
   
   
    
    </>
  )
}

export default App
