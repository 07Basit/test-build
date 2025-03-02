import React from 'react';
import { Link } from 'react-router-dom';
import FeatureGrid from './FeatureGrid';

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left side - Images */}
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-full aspect-[4/3] max-w-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&q=80"
                alt="Farming"
                className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          {/* Right side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-semibold text-green-600 mb-2">Welcome to</h2>
            <h1 className="text-3xl md:text-4xl font-bold text=navy mb-6">RAIYAN GLOBAL</h1>
            <div className="space-y-4 text-gray-600">
              <p>
                We were established in the year 2022. We are best exporter of premium fruits and vegetables, committed to delivering fresh, high-quality produce to customers worldwide..
              </p>
              <p>
               We have Expertise in the Field of Exports buy understanding the needs of our buyers and suppliers. We Ensure the Quality of product, Packaging and Trust of of valued customers for variety of products that is fulfilled by us.
              </p>
              <p>
                Our Motto is "We Believe in Quality"
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3 mt-8 bg-accent text-navy font-medium rounded-lg hover:bg-green-500 hover:text-primary transition-colors w-fit"
            >
              Read More...
            </Link>
          </div>
        </div>

        {/* Feature Cards Section */}
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <FeatureGrid />
      </div>
    </section>
  );
}