import React from 'react'
import { getProducts } from '../API/api'
import { useQuery } from '@tanstack/react-query'

export const Categories = ({ onCategorySelect }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching categories...</p>

  const uniqueCategories = [...new Set(data.map(item => item.category))]
  const getFirstCapitalizedWord = (str) => {
  const firstWord = str.split(' ')[0];
  return firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
};


  return (
    <div>
      <h2>Categories</h2>
      <button onClick={() => onCategorySelect(null)}>All Products</button>
      <ul>
        {uniqueCategories.map((category, index) => (
          <li key={index}>
            <button 
            onClick={() => onCategorySelect(category)} >{getFirstCapitalizedWord(category)}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
