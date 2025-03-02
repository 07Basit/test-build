import React, { useState, useEffect, useCallback } from 'react';

interface HoverImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function HoverImageCarousel({ images, interval = 1000 }: HoverImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextImage = useCallback(() => {
    if (isHovering) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [isHovering, images.length]);

  useEffect(() => {
    if (!isHovering) {
      setCurrentIndex(0);
      return;
    }

    const timer = setInterval(nextImage, interval);
    return () => clearInterval(timer);
  }, [isHovering, interval, nextImage]);

  return (
    <div
      className="relative w-full h-48"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `scale(${index === currentIndex ? '1' : '1.1'})`,
          }}
        />
      ))}
    </div>
  );
}