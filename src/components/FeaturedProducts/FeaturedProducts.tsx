import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '../common/ProductCard';
import { featuredProducts } from './featuredProductsData';

import 'swiper/css';

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold pl-2">Featured Products</h2>
      </div>
      
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="featured-products-swiper"
      >
        {featuredProducts.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <Link 
            to="/products" 
            className="block h-full transform transition-all duration-500 hover:scale-105"
            style={{ 
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${featuredProducts.length * 0.1}s`,
              opacity: 0
            }}
          >
            <div className="bg-gradient-to-br from-green-500 to-green-300 rounded-lg shadow-md overflow-hidden p-6 flex flex-col min-h-[360px] h-full justify-end">
      <span className="text-sm text-primary font-medium">All Categories</span>
      <h3 className="text-lg font-semibold text-navy mt-1">See All Products</h3>
      <p className="text-navy text-sm mt-2">
        Discover our complete collection of premium products
      </p>
      <div className="mt-4 flex items-center justify-between text-primary hover:text-accent ">
        <span className="font-medium">Browse More</span>
        <span className="transform translate-x-0 transition-transform hover:translate-x-2">→</span>
      </div>
    </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}