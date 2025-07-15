import React, { useContext } from 'react';
import { ProductsContext } from '../Context/productContext';

export const Categories = ({onCategorySelect}) => {
  const {products,isLoading, error} = useContext(ProductsContext)
  if(isLoading) return <p>Loading....</p>
  if(error) return <p>{error.message}</p>

  const uniqueCategory = [...new Set(products.map((item)=>(
    item.category
  )))]

  const capitalizeWord = (str)=>{
   const firstWord = str.split(' ')[0]
   return firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  }


  
  return (
    <div>
      <button onClick={() => onCategorySelect (null)}>All Products</button>
      <ul>
        {
          uniqueCategory.map((category, index)=>{
            return(
              <li key={index} onClick={(()=> onCategorySelect(category))}>
                <h1>{capitalizeWord(category)}</h1>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};
