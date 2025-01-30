import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from "../assets/assets";
import Title from './Title';
import ProductItem from './ProductItem';

function RelatedProduct({ category, subcategory }) {
  const { products } = useContext(ShopContext);
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productcopy = products
        .filter((item) => item.category === category)
        .filter((item) => item.subcategory === subcategory); 
      setrelated(productcopy.slice(0, 5)); 
    }
  }, [products, category, subcategory]);

  return (
    <div className='my-24'>
    <div className='text-center text-3xl py-2'>
      <Title text1={'Related'}
      text2={'Products'} />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {related.map((item, index) => (
           <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default RelatedProduct;
