import {createContext, useEffect} from 'react';
import {products} from "../assets/assets";
import {useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const ShopContext=createContext();
const ShopProvider=(props)=>{
    const currency="$";
    const deliveryfee=10;
    const [search,setsearch]=useState("");
    const [showsearch,setshowsearch]=useState(false); 
    const [cartitem,setcartitem]=useState({}); 
    const navigate=useNavigate();
    const addtocart=async(itemid,size)=>{
        let cartcopy=structuredClone(cartitem);
        if(!size){
            toast.error('Please select a size');
            return;
        }
        if(cartcopy[itemid]){
            if(cartcopy[itemid][size]){
                cartcopy[itemid][size]+=1;
            }
            else{
                cartcopy[itemid][size]=1;
            }
        }
        else{
            cartcopy[itemid]={};
            cartcopy[itemid][size]=1;
        }
        setcartitem(cartcopy);
    };

    

    const getcartcount=()=>{
        let count=0;
        for(const item in cartitem){
            for(const size in cartitem[item]){
                try{
                    if(cartitem[item][size]>0){
                        count+=cartitem[item][size];
                    }
                }
                catch(error){
                    console.error(error);
                }
            }
        }
        return count;
    };
    const updatequantity=async(itemid,size,quantity)=>{
        let cartcopy=structuredClone(cartitem);
        cartcopy[itemid][size]=quantity;
        setcartitem(cartcopy);
    };
    const getcartamount=()=>{
        let amount=0;
        for(const item in cartitem){
            const product=products.find((product)=>product._id===item);
            for(const size in cartitem[item]){
                try{
                    if(cartitem[item][size]>0){
                        amount+=product.price*cartitem[item][size];
                    }
                }
                catch(error){
                    console.error(error);
                }
            }
        }
        return amount;
    };


    const value={
        products,currency,deliveryfee,search,setsearch,showsearch,setshowsearch,cartitem,addtocart,getcartcount,updatequantity,getcartamount,navigate
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}    
export default ShopProvider;