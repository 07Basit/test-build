import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  width, 
  height, 
  className 
}: LazyImageProps) {
  // Add image size parameters to Unsplash URLs
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src}?auto=format&w=800&q=75` 
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={className}
    />
  );
}