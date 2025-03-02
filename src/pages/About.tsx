import React from 'react';
import FeatureGrid from '../components/Features/FeatureGrid';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Raiyan Global</h1>
          
          <p className="text-gray-600 mb-4">
            We were established in the year 2022. We are best exporter of premium fruits and vegetables, committed to delivering fresh, high-quality produce to customers worldwide..
          </p>
          <p className="text-gray-600 mb-4">
            We have Expertise in the Field of Exports buy understanding the needs of our buyers and suppliers.
          </p>
        <p className="text-gray-600">
            We Ensure the Quality of product, Packaging and Trust of of valued customers for variety of products that is fulfilled by us.
          </p>
          <p className="text-gray-600">
            Our Motto is "We Believe in Quality"
          </p>
        </div>
        <div className="relative h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80"
            alt="Farming"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature Cards Section */}
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <FeatureGrid />
    </div>
  );
}