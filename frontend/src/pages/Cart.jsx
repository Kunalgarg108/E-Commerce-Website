import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { MdDeleteForever } from "react-icons/md";
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
function Cart() {
  const { cartitem, currency, products, updatequantity ,navigate} = useContext(ShopContext);
  const [cartdata, setcartdata] = useState([]);

  useEffect(() => {
    const updateCartData = () => {
      let cartcopy = [];
      for (const items in cartitem) {
        for (const item in cartitem[items]) {
          if (cartitem[items][item] > 0) {
            let product = products.find((product) => product._id === items);
            if (product) {
              cartcopy.push({
                _id: items,
                size: item,
                quantity: cartitem[items][item],
              });
            }
          }
        }
      }
      setcartdata(cartcopy);
    };

    updateCartData();
  }, [cartitem, products]); // Depend on cartitem and products

  return (
    <div className="border-t pt-15">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartdata.map((item, index) => {
          const productdata = products.find((product) => product._id === item._id);

          if (!productdata) {
            return null; // Skip rendering if productdata is not found
          }

          return (
            <div
              key={`${item._id}-${item.size}`} // Unique key to prevent conflicts
              className="border-t py-4 mb-2 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productdata.image[0]}
                  className="w-16 sm:w-20"
                  alt={productdata.name}
                />
                <div>
                  <h3 className="text-xl font-bold">{productdata.name}</h3>
                  <div className="flex items-center gap-5 mt-2">
                    <p>Size: {item.size}</p>
                    <p>
                      Quantity:
                      <input
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        className="border max-w-12 px-2 sm:px-2 py-1"
                        onChange={(e) => {
                          const newQuantity = Number(e.target.value);
                          if (newQuantity > 0) {
                            updatequantity(item._id, item.size, newQuantity);
                          }
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-3xl">
                {currency}
                {productdata.price}
              </p>
              <MdDeleteForever
                size={30}
                className="mr-5 cursor-pointer"
                onClick={() => updatequantity(item._id, item.size, 0)} // Set quantity to 0 for deletion
              />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end mt-5'>
            <div className='w-full sm:w-[450px'>
                <CartTotal/>
                <div className='w-full text-end'>
                     <button onClick={()=>navigate('/place-order')} className='bg-blue-700 text-white px-5 py-2 rounded-md mt-5'>
                        PROCEED TO CHECKOUT
                     </button>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Cart;
