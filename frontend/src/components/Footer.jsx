import React from 'react'
import { assets } from "../assets/assets";
function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          <div>
            <img src={assets.logo} alt="" className='mb-5 w-32' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, hic itaque tempora atque distinctio laborum pariatur maiores, vel et sapiente doloribus, sed nihil? Possimus voluptates quibusdam necessitatibus iure consequuntur.
            </p>
          </div>
          <div>
            <p className='text-xl font-medium mb-5 '>Company</p>
            <ul className='flex flex-col gap-1 text -gray-600'>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className='text-xl font-medium mb-5'> Get in Touch</p>
            <ul className='flex flex-col gap-1 text -gray-600'>
                  <li>Phone No.: +91-212-456-7890</li>
                  <li>Email Id: afgshd@gmail.com</li>
            </ul>
          </div>
      </div>
      <div>
        <hr />
        <p
        className='py-5 text-sm text-center'>Copyright 2024@ forever.com- All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
