import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem'; 

function BestSeller() {
    const { products } = useContext(ShopContext);
    const [BestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(() => {
        if (products && products.length) {
            const bestProduct = products.filter((product) => product.bestseller === true);  
            setBestSellerProducts(bestProduct.slice(0, 5));
        }
    }, [products]);
    console.log(BestSellerProducts);
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid dolor nisi neque.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    BestSellerProducts.map((product, index) => (
                        <ProductItem
                            key={index}
                            id={product._id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default BestSeller;
