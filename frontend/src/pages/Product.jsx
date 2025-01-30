import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { assets } from "../assets/assets";
import RelatedProduct from '../components/RelatedProduct';
function Product() {
  const {productid}=useParams();
  const {products,currency,addtocart}=useContext(ShopContext);
  const [productdata, setproductdata] = useState(null);
  const [image,setimage]=useState("");
  const [size,setsize]=useState("");

  const fetchproductdata = async () => {
    const product = products.find((product) => product._id === productid);
    if (!products || products.length === 0) {
      console.error('Products are not loaded yet.');
      return;
    }
    if (product) {
      setproductdata(product);
      setimage(product.image[0]);
      return null;
    }
  };
   useEffect(() => {
     fetchproductdata();
   },[productid,products]);
  return productdata?(
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
         <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
         {productdata?.image?.map((image, index) => (
            <img
              key={index}
              src={image || ''}
              alt={productdata?.name || 'Product Image'}
              className='w-[24%] flex-shrink-0 sm:w-full sm:mb-3 cursor-pointer'
              onClick={() => setimage(image)}
            />
          ))}
         </div>
         <div className='w-full sm:w-[80%]'>
          <img src={image} alt=""className=':w-full h-auto'/>
         </div>
      </div>
      <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_icon}  alt="" className="w-3 5" />
              <img src={assets.star_dull_icon}  alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{ currency
            }{productdata.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>
              {productdata.description}
            </p>
            <div className=' flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                  {productdata?.sizes?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setsize(item)}
                      className={`border border-gray-500 bg-gray-100 rounded-md px-2 py-1 ${
                        item === size ? 'bg-orange-500 text-white' : ''
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

            </div>
            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' onClick={()=>addtocart(productdata._id,size)}>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>
                  100% Original Product
                </p>
                <p>Cash on Delivery Available</p>
                <p>
                  Return and Exchange Policy within 7 days
                </p>
            </div>
      </div>
      </div>
      <div className='mt-20'>
         <div className='flex'>
                   <b className='border px-5 py-3 text-sm'>
                    DESCRIPTION
                   </b>
                   <p className='border px-5 py-3 text-sm'>REVIEWS (122)</p>
         </div>
         <div className='flex flex-col gap-4 border px-6 text-sm text-gray-600'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequuntur porro maiores praesentium. Similique dicta veniam atque blanditiis nisi velit eos dolores totam nulla labore.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nam nobis dolore sed fugit quis esse distinctio? Assumenda, inventore aliquid!
            </p>
         </div>
      </div>
      <RelatedProduct category={productdata.category} subcategory={productdata.subcategory}/>
    </div>
  ):<div className='opacity-0'>

  </div>
}

export default Product
