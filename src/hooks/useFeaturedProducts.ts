import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { products } from '../data/productData';

export function useFeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const randomProducts = [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    setFeaturedProducts(randomProducts);
  }, []);

  return { featuredProducts };
}