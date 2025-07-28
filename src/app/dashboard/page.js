'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (categoryId) => {
    console.log("Selected category:", categoryId);
    setSelectedCategory(categoryId);
    // This will eventually trigger a re-fetch of products
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar onCategoryChange={handleCategoryChange} />
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <p className="text-gray-700 dark:text-gray-300">Selected Category ID: {selectedCategory || 'All'}</p>
          {/* ProductGrid will be placed here */}
        </main>
      </div>
    </div>
  );
}
