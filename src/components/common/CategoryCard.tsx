import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types/category';
import LazyImage from './LazyImage';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <Link 
      to={`/products?category=${category.name.toLowerCase()}`} 
      className="group block transform transition-all duration-500 hover:scale-105"
      style={{ 
        animation: `fadeIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <LazyImage 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={400}
            height={300}
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-60">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white transform transition-all duration-500 group-hover:scale-110">
                {category.name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}