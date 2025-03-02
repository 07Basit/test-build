import React from 'react';
import { categories } from '../Categories/categoriesData';
import { useResponsiveSlider } from '../../hooks/useResponsiveSlider';
import SlideNavigation from '../common/SlideNavigation';
import { Link } from 'react-router-dom';

export default function ProductCategories() {
  const { currentIndex, itemsPerPage, maxIndex, nextSlide, prevSlide } = 
    useResponsiveSlider(categories.length);

  const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative mb-12">
      <SlideNavigation
        onPrevClick={prevSlide}
        onNextClick={nextSlide}
        showPrev={currentIndex > 0}
        showNext={currentIndex < maxIndex}
        label="categories"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visibleCategories.map((category) => (
          <Link 
            key={category.id}
            to={`/category/${category.id}`}
            className="group bg-white rounded-lg shadow-sm overflow-hidden h-24"
          >
            <div className="relative h-full">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}