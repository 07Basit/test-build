import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { categories } from '../Categories/categoriesData';

export default function CategoryTabs() {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
      <Link
        to="/products?category=all"
        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
          ${currentCategory === 'all' 
            ? 'bg-green-600 text-white' 
            : 'bg-white text-gray-700 hover:bg-gray-50'}`}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/products?category=${category.name.toLowerCase()}`}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${currentCategory === category.name.toLowerCase()
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}