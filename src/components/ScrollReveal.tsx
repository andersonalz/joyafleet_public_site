import React, { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay,
  className = '',
}: ScrollRevealProps) {
  const variantClass = 
    variant === 'slide-left' ? 'scroll-slide-left' :
    variant === 'slide-right' ? 'scroll-slide-right' :
    variant === 'scale' ? 'scroll-slide-scale' :
    'scroll-slide-up';

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
