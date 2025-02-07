import React from 'react';
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="bg-[#0f1111] text-white px-6 py-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto, hic itaque tempora atque distinctio laborum pariatur maiores, vel et sapiente doloribus, sed nihil? Possimus voluptates quibusdam necessitatibus iure consequuntur.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-orange-600">Company</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Delivery</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-orange-600">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-200">
            <li className="hover:text-orange-500 cursor-pointer">Phone No.: +91-212-456-7890</li>
            <li className="hover:text-orange-500 cursor-pointer">Email Id: afgshd@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2024@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
