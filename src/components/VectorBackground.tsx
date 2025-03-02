import React from 'react';

export default function VectorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mango */}
      <svg className="absolute top-1/4 left-10 w-16 h-16 text-yellow-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L8 6C4 8 2 12 4 16C6 20 10 22 14 20C18 18 20 14 18 10L16 6L12 2Z" />
      </svg>

      {/* Apple */}
      <svg className="absolute top-1/3 right-20 w-12 h-12 text-red-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5Z" />
      </svg>

      {/* Carrot */}
      <svg className="absolute bottom-1/4 left-1/4 w-14 h-14 text-orange-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L9 7.5C7 10.5 7 14 9 17S13.5 22 16.5 20L22 17L12 2Z" />
      </svg>

      {/* Tomato */}
      <svg className="absolute top-2/3 right-1/3 w-16 h-16 text-red-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>

      {/* Eggplant */}
      <svg className="absolute bottom-1/3 left-1/3 w-20 h-20 text-purple-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16,2C14.89,2 14,2.89 14,4V7C14,8.11 14.89,9 16,9C17.11,9 18,8.11 18,7V4C18,2.89 17.11,2 16,2M12,7C10.89,7 10,7.89 10,9V12C10,13.11 10.89,14 12,14C13.11,14 14,13.11 14,12V9C14,7.89 13.11,7 12,7M8,12C6.89,12 6,12.89 6,14V17C6,18.11 6.89,19 8,19C9.11,19 10,18.11 10,17V14C10,12.89 9.11,12 8,12Z" />
      </svg>

      {/* Chili */}
      <svg className="absolute top-1/2 right-10 w-12 h-12 text-green-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16,10V7C16,5.34 14.66,4 13,4S10,5.34 10,7V10C10,11.66 11.34,13 13,13S16,11.66 16,10M13,14C10.24,14 8,11.76 8,9V7C8,4.24 10.24,2 13,2S18,4.24 18,7V9C18,11.76 15.76,14 13,14Z" />
      </svg>

      {/* Onion */}
      <svg className="absolute bottom-1/4 right-1/4 w-16 h-16 text-pink-200/20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
      </svg>
    </div>
  );
}