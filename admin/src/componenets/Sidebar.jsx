import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
function Sidebar() {
  return (
    <div className='w-[18%] min-h-screen border-r-3 border-gray-200'>
      
      <div className='bg-gray-100 flex flex-col'>
          <NavLink to='/add' className={`flex items-center justify-between px-2 py-3 hover:bg-gray-200 gap-3`}>   
            <img src={assets.add_icon} alt='' className='w-5 h-5'/>
            <p className='hidden md:block'>Add Items</p>
           </NavLink>
           <NavLink to='/list' className={`flex items-center justify-between px-2 py-3 hover:bg-gray-200 gap-3`}>   
            <img src={assets.order_icon} alt='' className='w-5 h-5'/>
            <p className='hidden md:block'>List Items</p>
           </NavLink>
           <NavLink to='/orders' className={`flex items-center justify-between px-2 py-3 hover:bg-gray-200 gap-3`}>   
            <img src={assets.order_icon} alt='' className='w-5 h-5'/>
            <p className='hidden md:block'>Orders</p>
           </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
