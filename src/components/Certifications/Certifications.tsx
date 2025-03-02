import React from 'react';
import { certifications } from './certificationsData';

export default function Certifications() {
  // Double the certifications array for seamless loop
  const loopedCertifications = [...certifications, ...certifications];

  return (
    <section className="py-8 overflow-hidden" style={{ 
      background: 'linear-gradient(rgba(0, 100, 0, 0.05), rgba(0, 100, 0, 0.02)), url(https://images.unsplash.com/photo-1587632933765-f322d0070a44?auto=format&fit=crop&q=80&w=2000) center/cover'
    }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-left">Certification</h2>
        <div className="relative">
          <div className="flex animate-fast-scroll">
            {loopedCertifications.map((cert, index) => (
              <div 
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 mx-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-[140px]"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}