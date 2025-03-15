import React from 'react'
import {assets} from '../assets/assets'
function Navbar({setToken}) {
  return (
    <div className='flex item-center justify-between px-5 '>
      <img src={assets.logo} alt="" className='w-[max(10%,80px)]'/>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-sm sm:text-sm'onClick={()=>{
        setToken('')
      }} >Logout</button>
    </div>
  )
}

export default Navbar
