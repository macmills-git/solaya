import React, { useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { pauseLenis, resumeLenis } from '../hooks/useLenis';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  caption: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  caption,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      pauseLenis();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.classList.remove('modal-open');
        resumeLenis();
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 outline-none"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition flex items-center gap-1.5 text-xs font-mono lowercase"
        >
          <span>close</span>
          <X className="w-4 h-4" />
        </button>

        <img
          src={imageSrc}
          alt={caption}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/20 select-none"
        />

        <div className="mt-4 text-center">
          <p className="font-queens text-lg sm:text-xl text-white tracking-wide lowercase">
            {caption.toLowerCase()}
          </p>
          <span className="text-[10px] uppercase font-mono tracking-widest text-white/60">
            solaya architectural visual monograph
          </span>
        </div>
      </div>
    </div>
  );
};
