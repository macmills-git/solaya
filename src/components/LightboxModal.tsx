import React from 'react';
import { X, ZoomIn } from 'lucide-react';

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
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-solaya-sand/80 hover:text-white transition flex items-center gap-1.5 text-xs font-mono"
        >
          <span>CLOSE</span>
          <X className="w-5 h-5" />
        </button>

        <img
          src={imageSrc}
          alt={caption}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-solaya-sand/20"
        />

        <div className="mt-4 text-center">
          <p className="font-arcilla text-xl sm:text-2xl text-solaya-sand tracking-wide">
            {caption}
          </p>
          <span className="text-[10px] uppercase font-mono tracking-widest text-solaya-sand/60">
            SOLAYA Architectural Visual Archives
          </span>
        </div>
      </div>
    </div>
  );
};

