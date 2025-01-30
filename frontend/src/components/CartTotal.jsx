import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Title from './Title';
function CartTotal() {
    const { currency, cartitem, products, deliveryfee, getcartamount } = useContext(ShopContext);
    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTAL'} />
                <div className='flex flex-col gap-2 mt-2 text-sm'>
                    <div className='flex justify-between'>
                        <p>
                            Subtotal
                        </p>
                        <p>
                            {currency}{getcartamount()}.00
                        </p>

                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>
                            Delivery Fee
                        </p>
                        <p>
                            {currency}{deliveryfee}.00
                        </p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <b>
                            Total
                        </b>
                        <b>
                            {currency}{getcartamount()===0?0:getcartamount() + deliveryfee}.00
                        </b>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartTotal
