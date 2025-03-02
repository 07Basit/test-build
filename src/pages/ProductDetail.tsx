import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import { products } from '../data/productData';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState('');

  const allImages = product ? [product.mainImage, ...product.images] : [];

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
          <Link 
            to="/products" 
            className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-green-600">
          <Home className="w-4 h-4 inline-block" />
        </Link>
        <span className="mx-2">&gt;</span>
        <Link to="/products" className="hover:text-green-600">Products</Link>
        <span className="mx-2">&gt;</span>
        <Link 
          to={`/products?category=${product.category.toLowerCase()}`} 
          className="hover:text-green-600"
        >
          {product.category}
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={selectedImage || product.mainImage} 
              alt={product.name}
              className="w-full h-96 object-cover transition-all duration-300"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all
                  ${selectedImage === image ? 'ring-2 ring-green-500' : ''}`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <span className="text-green-600 font-medium">{product.category}</span>
          <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{product.name}</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 whitespace-pre-line">{product.description}</p>
            
            {product.specifications && (
              <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Specifications</h2>
                <div className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex border-b border-gray-200 py-2">
                      <span className="font-medium text-gray-600 w-1/3">{spec.label}</span>
                      <span className="text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}