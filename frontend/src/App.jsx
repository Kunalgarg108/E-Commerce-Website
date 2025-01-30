import { useState } from 'react'
import { Routes } from 'react-router-dom'
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='px-4 py-1 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
        <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:productid' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<Placeorder/>}/>
          <Route path='/orders' element={<Order/>}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App
