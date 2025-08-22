import React, { use, useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {


    const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([]);

   useEffect(() => {
    const shuffled = products.slice(0, 60).sort(() => Math.random() - 0.5);
    setLatestProducts(shuffled.slice(0, 20));
}, [products]);



  
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={"COLLECTIONS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>"Step into the season with style. Discover our latest collection, where timeless elegance meets modern design. Redefine your wardrobe with pieces crafted to inspire confidence."</p>

        </div>
        {/* {redering products} */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
              latestProducts.map((item,index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name } price={item.price } />
            ))
          }
        </div>
        
      
    </div>
  )
}

export default LatestCollection
