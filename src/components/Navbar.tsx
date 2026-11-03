import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md py-4 border-b border-black/5 text-neutral-900 shadow-[0_4px_24px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-7 sm:py-8 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Logo in Lowercase (Haven* signature style) */}
        <a
          href="#"
          className="flex items-center gap-0.5 group focus:outline-none"
          aria-label="Solaya Home"
        >
          <span
            className={`font-queens text-2xl sm:text-[26px] font-bold tracking-tight lowercase transition-colors duration-300 ${
              scrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            solaya
          </span>
          <span className="text-solaya-terracotta text-2xl font-bold -mt-1 leading-none select-none">
            *
          </span>
        </a>

        {/* Minimal Right Indicator When Scrolled */}
        {scrolled && onOpenBooking && (
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-medium tracking-wide transition lowercase"
          >
            sanctuaries
          </button>
        )}

      </div>
    </header>
  );
};
