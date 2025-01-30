import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/Shopcontext.jsx';
import {useState} from 'react';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
function LatestCollection() {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);
    useEffect(()=>{
      if (products && products.length) {
        setLatestProducts(products.slice(0, 10));
      }
    },[products]);
  return (
    <div className='my-10'>
        <div className='text-center py-4 text-3xl'>
            <Title text1={'Latest'} text2={'Collections'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis illo id, modi quae non impedit.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((product,index)=>{
                    return(
                        <ProductItem  key={index} id={product._id} image={product.image} name={product.name} price={product.price}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LatestCollection
