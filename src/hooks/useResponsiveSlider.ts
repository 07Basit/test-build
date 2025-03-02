import { useState, useCallback, useEffect } from 'react';

export function useResponsiveSlider(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = totalItems - itemsPerPage;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + itemsPerPage, maxIndex));
  }, [maxIndex, itemsPerPage]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - itemsPerPage, 0));
  }, [itemsPerPage]);

  return {
    currentIndex,
    itemsPerPage,
    maxIndex,
    nextSlide,
    prevSlide,
  };
}