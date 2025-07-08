import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductByID} from '../API/api';

export const ProductDetail = () => {
  const {id} = useParams()
  const {data, isLoading, error} = useQuery({
    queryKey: ["products", id],
    queryFn:()=> getProductByID(id)
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title}  />
      <p>Category: {data.category}</p>
      <p>Price: ${data.price}</p>
      <p>Rating: {data.rating.rate}</p>
     <p>Description: {data.description}</p>
    </div>
  )
}
