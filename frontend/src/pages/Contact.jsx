import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/assets";
function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT' } text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>4355 Wills Station <br />Suits 350,Haryana,India</p>
            <p></p>
            <p></p>
            <p></p>

          </div>
      </div>
    </div>
  )
}

export default Contact
