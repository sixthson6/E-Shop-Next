
'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';

// Placeholder for a single product card
const ProductCard = ({ product }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
    <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 mt-1">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{product.description}</p>
    </div>
  </div>
);

export default function ProductGrid({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        if (selectedCategory) {
          response = await api.get(`/api/v1/products/category/${selectedCategory}`);
        } else {
          response = await api.get('/api/v1/products');
        }
        setProducts(response);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  if (products.length === 0) {
    return <div className="text-center p-8">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
