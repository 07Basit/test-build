import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FeaturesSection from '../components/Features/FeaturesSection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Categories from '../components/Categories/Categories';
import Certifications from '../components/Certifications/Certifications';
import BackgroundDecorations from '../components/BackgroundDecorations';
import VectorBackground from '../components/VectorBackground';

export default function Home() {
  return (
    <div className="relative">
      {/* <BackgroundDecorations /> */}
      {/* <VectorBackground /> */}
      <HeroSlider />
      <div className="space-y-8 relative z-10">
        <FeaturesSection />
        <FeaturedProducts />
        <Categories />
        <Certifications />
      </div>
    </div>
  );
}