import React from 'react'

function NewsLetterBox() {
    const onSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-900'>
        Subscribe to our newsletter and get 10% off your first purchase
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et earum impedit nobis deleniti accusamus odio.
      </p>
      <form action="
      " className='w-full sm:w-1/2 flex item-center gap-3 mx-auto border pl-3'>
        <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1'/>
        <button type='submit' className='bg-black text-white test-xs px-10'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
