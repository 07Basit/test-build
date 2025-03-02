import React from 'react';
import FeatureCard from '../common/FeatureCard';
import { featureCards } from '../../data/featureCards';

interface FeatureGridProps {
  className?: string;
}

export default function FeatureGrid({ className = '' }: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {featureCards.map((card, index) => (
        <FeatureCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          index={index}
        />
      ))}
    </div>
  );
}