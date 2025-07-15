import React, { useContext } from 'react';
import { ProductsContext } from '../Context/productContext';
import { Link } from 'react-router-dom';

export const Product = ({selectedCategory})=>{
  const {products, isLoading, error} = useContext(ProductsContext)
  console.log(products)
  if (isLoading) return <p>Loading .....</p>
  if(error) return <p>{error.message}</p>
  
  const filterProducts = selectedCategory ? products.filter(p => p.category == selectedCategory): 
  products
  return(
    <>
     <h2>{selectedCategory ? `Category: ${selectedCategory}` : 'All Products'}</h2>
    <ul>
    {
      filterProducts.map((item)=>{
        return(
        <li key={item.id}>
               <h1>{item.title}</h1>
                <h4>Category: {item.category}</h4>
               <p>Price: ${item.price}</p>
               <img src={item.fileUrl} alt={item.title} width="100" />
               <Link to={`/productDetail/${item.id}`}>Product Detail</Link>
        </li>
        )
 
      })
    }
    </ul>
    </>
  )
}