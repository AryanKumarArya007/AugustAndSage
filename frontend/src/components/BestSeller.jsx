import React, { useState,useEffect,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

    const {products}=useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

  useEffect(() => {
    const shuffled = products.slice(0, 60).sort(() => Math.random() - 0.5);
    setBestSeller(shuffled.slice(0, 20));
}, [products]);





  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}  />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            "Discover what everyone’s loving! Our bestselling styles are tried, tested, and adored by fashion enthusiasts. Elevate your wardrobe with these timeless favorites."
            </p>

        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              bestSeller.map((item,index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name } price={item.price } />
            ))
          }
        </div>
      
    </div>
  )
}

export default BestSeller
