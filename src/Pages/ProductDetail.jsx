import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../Context/productContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  if (!products || !products.length) return <p>Loading...</p>;

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate}</p>
      <p>Remaining Products : {product.rating.count}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};
