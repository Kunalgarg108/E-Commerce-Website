import React from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/Shopcontext';
import {useContext} from 'react';
function ProductItem({id,image,name,price}) {
    const {currency}=useContext(ShopContext);  
    const imageUrl = image && image.length > 0 ? image[0] : "placeholder-image.jpg"; 
  return (
    <Link to={`/product/${id}`} className='text-gray-700 curser-pointer'>
          <div className='overflow-hidden relative'>   
              <img src={imageUrl} alt="product Picture" className='hover:scale-110 transition ease-in-out'/>
          </div>
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
