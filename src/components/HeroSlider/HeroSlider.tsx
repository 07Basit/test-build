import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { sliderImages } from './sliderData';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {sliderImages.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent">
            <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 section-fade">
              <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8 
                              leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                              whitespace-normal xs:whitespace-nowrap">
                  {slide.title}
                </h1>
                <Link
                  to="/contact"
                  className="bg-accent text-navy font-bold px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full 
                           hover:bg-green-500 hover:text-primary transition-colors inline-block text-sm md:text-base
                           shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 
                     ${index === currentSlide 
                       ? 'bg-accent w-6 md:w-8' 
                       : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}