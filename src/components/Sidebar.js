'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import api from '@/lib/api';

const mockBrands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Sony'];

export default function Sidebar({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState(1000);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/api/v1/categories');
        setCategories(response);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
    setBrands(mockBrands);
  }, []);

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-800 p-4 shadow-lg md:shadow-none">
      <div className="space-y-6">
        {/* Categories Section */}
        <div>
          <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Categories
            {isCategoryOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isCategoryOpen && (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button 
                    onClick={() => onCategoryChange(category.id)}
                    className="w-full text-left px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors duration-150"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price Filter Section */}
        <div>
          <button onClick={() => setIsPriceOpen(!isPriceOpen)} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Price Range
            {isPriceOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isPriceOpen && (
            <div className="p-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                <span>$0</span>
                <span>${price}</span>
              </div>
            </div>
          )}
        </div>

        {/* Brands Filter Section */}
        <div>
          <button onClick={() => setIsBrandOpen(!isBrandOpen)} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Brands
            {isBrandOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isBrandOpen && (
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand} className="flex items-center">
                  <input type="checkbox" id={`brand-${brand}`} className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor={`brand-${brand}`} className="ml-3 text-sm text-gray-600 dark:text-gray-300">{brand}</label>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </aside>
  );
}
