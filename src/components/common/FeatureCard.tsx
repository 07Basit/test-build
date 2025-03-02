import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <div 
      className="relative group overflow-hidden rounded-lg p-8 transition-all duration-500 hover:-translate-y-1"
      style={{ 
        animation: `fadeIn 0.6s ease-out forwards`,
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      {/* Fixed gradient background */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
  background: 'linear-gradient(210deg, #43A680 0%, #C0EBA6 25%, #14C38E 50%, #66DE93 75%, #B6FFA1 100%)',
}}
      />
      
      {/* Content */}
      <div className="relative z-10 text-primary">
        <div className="flex items-center justify-center mb-6">
          <Icon className="w-12 h-12 opacity-90" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        <p className="text-primary text-center text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}