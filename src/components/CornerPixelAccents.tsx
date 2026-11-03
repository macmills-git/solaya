import React from 'react';

interface CornerPixelAccentsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string; // e.g. 'bg-white', 'bg-neutral-200'
}

export const CornerPixelAccents: React.FC<CornerPixelAccentsProps> = ({
  position = 'top-left',
  className = '',
  color = 'bg-white',
}) => {
  const isTop = position.startsWith('top');
  const isLeft = position.endsWith('left');

  return (
    <div
      className={`absolute z-10 pointer-events-none ${
        isTop ? 'top-0' : 'bottom-0'
      } ${isLeft ? 'left-0' : 'right-0'} ${className}`}
      aria-hidden="true"
    >
      <div
        className={`grid grid-cols-3 grid-rows-3 w-9 h-9 sm:w-11 sm:h-11 ${
          !isLeft ? 'scale-x-[-1]' : ''
        } ${!isTop ? 'scale-y-[-1]' : ''}`}
      >
        {/* Stepped pixel block pattern matching reference */}
        <div className={`w-full h-full ${color}`} />
        <div className={`w-full h-full ${color}`} />
        <div className={`w-full h-full ${color}/40`} />
        
        <div className={`w-full h-full ${color}`} />
        <div className={`w-full h-full ${color}/70`} />
        <div className="w-full h-full" />
        
        <div className={`w-full h-full ${color}/50`} />
        <div className="w-full h-full" />
        <div className="w-full h-full" />
      </div>
    </div>
  );
};

