import React, { useMemo } from 'react';

const useRandomizedDecorations = () => {
  const positions = [
    'top-10 left-10', 'top-1/3 right-10', 'bottom-1/4 left-20',
    'top-1/2 right-1/3', 'bottom-20 left-1/2', 'top-1/4 right-1/4',
    'bottom-1/3 right-20', 'top-2/3 left-10'
  ];
  
  const rotations = ['rotate-0', 'rotate-12', 'rotate-45', 'rotate-90', 'rotate-180'];
  const colors = ['text-green-300', 'text-yellow-300', 'text-red-300', 'text-purple-300'];

  return useMemo(() => {
    return [
      {
        svg: (
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5Z" />
        ),
      },
      {
        svg: (
          <path d="M16 10L15.8 11H13.5C13.8 8.8 15.4 7 17.5 7C18.3 7 19.1 7.3 19.7 7.8L22.1 5.4C20.8 4.3 19.2 3.7 17.5 3.7C13.5 3.7 10.1 6.5 9.3 10H9.2L9 9L7.5 9.4L8.5 14.4L13.5 13.4L13.1 11.9L12.1 12.1C12.1 12.1 12.2 11.4 12.3 10.5H15.7L16.3 7.5L14.8 7.1L14.5 9C14 8.4 13.4 7.9 12.6 7.5L13.6 2.7L12 2.3L11 7.2C10.7 7.1 10.3 7.1 10 7V2H8V7.4C7.7 7.5 7.3 7.7 7 8L4.9 5.9L3.5 7.3L5.6 9.4C5.3 9.9 5.1 10.4 5 11H2V13H5.1C5.2 13.6 5.5 14.1 5.8 14.6L3.5 16.9L4.9 18.3L7.2 16C7.6 16.4 8.2 16.6 8.8 16.8L8.3 19.7L10.2 20L10.8 16.8C10.9 16.8 11 16.8 11 16.8L11.8 20L13.7 19.4L12.8 16C14.4 15.3 15.5 13.8 15.5 12H17.5L16.2 15.8L18 16.3L19.1 13H22V11H19.2L20 9L18.5 8.6L18 10C17.8 10 17.7 10 17.5 10H16Z" />
        ),
      }
    ].map((item, index) => ({
      ...item,
      position: positions[index % positions.length],
      rotation: rotations[index % rotations.length],
      color: colors[index % colors.length],
    }));
  }, []);
};

export default function BackgroundDecorations() {
  const decorations = useRandomizedDecorations();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorations.map((decor, index) => (
        <svg
          key={index}
          className={`absolute w-20 h-20 opacity-30 ${decor.position} ${decor.rotation} ${decor.color}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {decor.svg}
        </svg>
      ))}
    </div>
  );
}
