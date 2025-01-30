import React from 'react'
import {useContext} from 'react';
import { ShopContext } from '../context/Shopcontext';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
function SearchBar() {
    const {search,setsearch,showsearch,setshowsearch}=useContext(ShopContext);
    return showsearch? (
        <div className=' border-t border-b bg-gray-100 text-center'>
        <IoClose
          size={22}
          className='mr-3 cursor-pointer'
          onClick={() => setshowsearch(false)}
        />
      <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setsearch(e.target.value)}/>
      <FaSearch size={22} />
        </div>
    </div>
  ):null
}

export default SearchBar
