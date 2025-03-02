import React from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  currentImage: string;
  onClose: () => void;
}

export default function ImageGallery({ images, currentImage, onClose }: ImageGalleryProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={currentImage}
          alt="Product"
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => window.history.replaceState(null, '', `#image-${index}`)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden 
                ${currentImage === image ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'}`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}