'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'highlighted' | 'dark';
}

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
  variant = 'default',
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variants = {
    default: 'bg-white',
    highlighted: 'bg-white border-2 border-primary-500',
    dark: 'bg-gray-800 text-white',
  };

  const hoverStyles = hover ? 'hover:shadow-card-hover hover:-translate-y-1' : '';

  return (
    <div
      className={`rounded-2xl shadow-card transition-all duration-300 ${paddings[padding]} ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
