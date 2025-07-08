import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../API/api'
import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ selectedCategory }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  

  const filteredData = selectedCategory
    ? data.filter(item => item.category === selectedCategory)
    : data

  const getFirstCapitalizedWord = (str) => {
  const firstWord = str.split(' ')[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);}

  return (
    <div>
      <h2>{selectedCategory ? `Category: ${getFirstCapitalizedWord(selectedCategory)}` : 'All Products'}</h2>
      <ul>
        {filteredData.length ? (
          filteredData.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <h4>Category: {item.category}</h4>
              <p>Price: ${item.price}</p>
              <img src={item.image} alt={item.title} width="100" />
              <Link to={`/productDetail/${item.id}`}>Product Detail</Link>
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
    </div>
  )
}
