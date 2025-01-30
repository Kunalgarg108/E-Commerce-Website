import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { IoIosArrowDropdown } from "react-icons/io";
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products ,search,showsearch } = useContext(ShopContext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [sortType, setsortType] = useState('Newest');

  const toggleFilter = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubFilter = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }  
  };
  
  const applyFilter = () => {
    let productcopy=products.slice();
    if(showsearch && search){
      productcopy = productcopy.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

    }
    if (category.length > 0) {
      productcopy = productcopy.filter((product) =>
        category.includes(product.category)
    );
  }
  
  if(subcategory.length > 0) {
    productcopy = productcopy.filter((product) =>
      subcategory.includes(product.subcategory)
  );
  }
  setfilterProducts(productcopy);
};


 const Sortproduct=()=>{
  let productcopy=filterProducts.slice();
  switch(sortType){
  case 'low-high':
    setfilterProducts(productcopy.sort((a,b)=>a.price-b.price));
    break;
  case 'high-low':
    setfilterProducts(productcopy.sort((a,b)=>b.price-a.price));
    break;
    default:
      applyFilter();
      break;
 }
}


useEffect(() => {
  applyFilter();
},[category,subcategory,search,showsearch]);

useEffect(() => {
  Sortproduct();
},[sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <IoIosArrowDropdown
            size={22}
            className={`sm:hidden ${showfilter ? "" : ""}`}
            onClick={() => setshowfilter(!showfilter)}
          />
        </p>
        <div
          className={`border border-gray-500 pl-5 py-3 mt-6 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium"> CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleFilter}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleFilter}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleFilter}
              />
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-500 pl-5 py-3 my-5 ${
            showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium"> TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={togglesubFilter}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={togglesubFilter}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={togglesubFilter}/>
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL "} text2={"COLLECTIONS"} />
          <select className="border border-gray-300 text-sm px-2" onChange={(e)=>setsortType(e.target.value)}>
            <option value="Newest">Sort by: Newest</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              id={product._id}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
