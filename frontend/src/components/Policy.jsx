import React from 'react'
import { assets } from "../assets/assets";
function Policy() {
  return (
    <div className='flex flex-col sm:flex-row gap-12 justify-around  text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-bold'>Easy Exchange Policy
           
        </p>
        <p className='text-gray-500'>
          We offer hassle free exchange policy
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-bold'>7 Days Return Policy
        </p>
        <p className='text-gray-500'>
          We offer 7 days retuen with full refund
        </p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-bold'>Best Customer Support
        </p>
        <p className='text-gray-500'>
          We offer 24/7 customer support
        </p>
      </div>
    </div>
  )
}

export default Policy
