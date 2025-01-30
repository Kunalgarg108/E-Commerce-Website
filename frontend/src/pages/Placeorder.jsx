import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from "../assets/assets";
import { ShopContext } from '../context/Shopcontext';
function Placeorder() {
  const [method,setmethod]=useState("cod");
  const {navigate}=useContext(ShopContext);

  return (
    <div className=' flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[calc(100vh-5rem)] border-t'>
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px] '>
       <div className='text-xl my-3 sm:text-2xl'>
           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
       </div>
       <div className='flex gap-3'>
            <input type="text" placeholder='First Name' className='w-full border p-2 rounded-md border-gray-500' required/>
            <input type="text" placeholder='Last Name' className='w-full border p-2 rounded-md border-gray-500' />
       </div>
            <input type="email" placeholder='Email Address' className='w-full border p-2 rounded-md border-gray-500' />
            <input type="tel" placeholder='Phone Number' className='w-full border p-2 rounded-md border-gray-500' required />
            <input type="text" placeholder='Street' className='w-full border p-2 rounded-md border-gray-500' required/>
            <input type="text" placeholder='City' className='w-full border p-2 rounded-md border-gray-500' required/>
            <div className='flex gap-3'>
            <input type="text" placeholder='State' className='w-full border p-2 rounded-md border-gray-500' required/>
            <input type="text" placeholder='PinCode' className='w-full border p-2 rounded-md border-gray-500' required inputMode="numeric" maxLength="6"/>
            </div>
      </div>
      <div className='mt-8'>
           <div className='mt-8 min-w-80'>
                  <CartTotal/>
           </div>
           <div className='mt-12'>
               <Title text1={'PAYMENT'} text2={'METHOD'} />
               <div className='flex gap-4 flex-col lg:flex-row'>
                   <div onClick={()=>setmethod('strips')}  className='flex item-center gap-3 border p-2 m-3 cursor- pointer'>
                       <p className={ ` min-w-3.5 h-3.5 border rounded-full ${`strips`===method?'bg-green-500':''}`}>
                       </p>
                        <img src={assets.stripe_logo} alt="" className='h-5 mx-4'/>
                       
                   </div>
          
             
                   <div onClick={()=>setmethod('razorpay')}  className='flex item-center gap-3 border p-2 m-3 cursor- pointer'>
                       <p className={ ` min-w-3.5 h-3.5 border rounded-full ${`razorpay`=== method?'bg-green-500':''}`}>
                       </p>
                        <img src={assets.razorpay_logo} alt="" className='h-5 mx-4'/>
                       
           
               </div>
                   <div onClick={()=>setmethod('cod')} className='flex item-center gap-3 border p-2 m-3 cursor- pointer'>
                       <p className={ ` min-w-3.5 h-3.5 border rounded-full ${`cod`=== method?'bg-green-500':''}`}>
                       </p>
                        <p className='text-gray-500 text-sm font-medium mx-4'>
                          CASH ON DELIVERY
                        </p>
                       
                   </div>
               </div>
               <div className='w-full text-end mt-8'>
                    <button onClick={()=>navigate('/orders')} className=' bg-black text-white px-16 py-4 text-sm rounded-md'>PLACE ORDER</button>
               </div>
           </div>
      </div>
    </div>
  )
}

export default Placeorder
