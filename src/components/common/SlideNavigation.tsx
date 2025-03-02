import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  showPrev: boolean;
  showNext: boolean;
  label: string;
}

export default function SlideNavigation({ 
  onPrevClick, 
  onNextClick, 
  showPrev, 
  showNext,
  label 
}: SlideNavigationProps) {
  return (
    <>
      {showPrev && (
        <button 
          onClick={onPrevClick}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
          aria-label={`Previous ${label}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {showNext && (
        <button 
          onClick={onNextClick}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
          aria-label={`Next ${label}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </>
  );
}