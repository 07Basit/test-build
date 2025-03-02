import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import HoverImageCarousel from './HoverImageCarousel';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const allImages = [product.mainImage, ...product.images];
  
  // Light pastel color variations
  const colorVariants = [
    'linear-gradient(135deg, #E6F0FF 0%, #F5F8FF 100%)', // Light blue
    'linear-gradient(135deg, #F0FFE6 0%, #F8FFF5 100%)', // Light green
    'linear-gradient(135deg, #FFE6F0 0%, #FFF5F8 100%)', // Light pink
    'linear-gradient(135deg, #FFE6E6 0%, #FFF5F5 100%)', // Light red
    'linear-gradient(135deg, #E6FFE6 0%, #F5FFF5 100%)', // Mint
    'linear-gradient(135deg, #FFE6FF 0%, #FFF5FF 100%)', // Light purple
  ];

  const colorVariant = colorVariants[index % colorVariants.length];

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group block h-full transform transition-all duration-500 hover:scale-105"
      style={{ 
        animation: `fadeIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="rounded-lg shadow-md overflow-hidden transition-all duration-500 h-full flex flex-col">
        <HoverImageCarousel images={allImages} />
        <div 
          className="p-6 flex flex-col flex-grow"
          style={{ background: colorVariant }}
        >
          <span className="text-sm font-bold text-primary">{product.category}</span>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-navy mt-2 line-clamp-2 flex-grow">{product.shortDescription}</p>
          <div className="mt-4 flex items-center justify-between text-primary group-hover:text-accent ">
            <span className="font-medium transition-colors">
              View Details
            </span>
            <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}