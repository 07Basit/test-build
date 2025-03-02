import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Link({ to, children, className, onClick }: LinkProps) {
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onClick) onClick();
  };

  return (
    <RouterLink to={to} className={className} onClick={handleClick}>
      {children}
    </RouterLink>
  );
}