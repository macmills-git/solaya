import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <div className="absolute top-7 sm:top-8 left-6 sm:left-10 z-40">
      {/* Brand Logo in Lowercase */}
      <a
        href="#"
        className="flex items-center gap-0.5 group focus:outline-none"
        aria-label="Solaya Home"
      >
        <span className="font-queens text-2xl sm:text-[26px] font-bold tracking-tight lowercase text-white select-none">
          solaya
        </span>
        <span className="text-solaya-terracotta text-2xl font-bold -mt-1 leading-none select-none">
          *
        </span>
      </a>
    </div>
  );
};
