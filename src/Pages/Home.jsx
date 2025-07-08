import React, { useState } from 'react'
import {Product} from '../Pages/Product';
import {Categories} from '../Pages/Categories';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  return (
    <div>
  
      <Categories onCategorySelect={setSelectedCategory}/>
      <Product selectedCategory={selectedCategory}/>
    </div>
  )
}
