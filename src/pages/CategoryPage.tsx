import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { categories } from '../components/Categories/categoriesData';
import { products } from '../data/productData';
import ProductCard from '../components/common/ProductCard';

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find(c => c.id === Number(id));
  const [searchTerm, setSearchTerm] = useState('');

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Category not found</h2>
        <Link 
          to="/products" 
          className="mt-4 inline-flex items-center text-green-600 hover:text-green-700"
        >
          View All Products
        </Link>
      </div>
    );
  }

  const categoryProducts = products.filter(p => p.categoryId === category.id);
  const filteredProducts = categoryProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 mb-6">{category.description}</p>
          
          <nav className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-green-600">
              <Home className="w-4 h-4 inline-block" />
            </Link>
            <span className="mx-2">&gt;</span>
            <Link to="/products" className="hover:text-green-600">Products</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>
        </div>

        {/* Right Column */}
        <div className="md:col-span-9">
          <div className="flex justify-end mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}