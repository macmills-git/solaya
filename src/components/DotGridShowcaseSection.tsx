import React from 'react';
import { motion } from 'motion/react';

interface DotGridShowcaseSectionProps {
  onOpenBooking: () => void;
  onOpenMonograph?: () => void;
}

export const DotGridShowcaseSection: React.FC<DotGridShowcaseSectionProps> = ({
  onOpenBooking,
  onOpenMonograph,
}) => {
  return (
    <section className="relative w-full py-28 sm:py-36 lg:py-44 bg-white overflow-hidden border-t border-neutral-100">
      
      {/* Cobalt Blue Matrix Dot Grid (Exact match to reference image) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1118CF_1.8px,transparent_1.8px)] [background-size:72px_72px] sm:[background-size:84px_84px] opacity-90"
        aria-hidden="true"
      />

      {/* Floating Vignette 1: Beach Couple Ink Sketch (Top Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 sm:top-14 left-4 sm:left-12 md:left-20 z-10 select-none pointer-events-none"
      >
        <img
          src="/images/vignette_beach_sketch_clean.png"
          alt="Coastal sketch"
          className="w-16 sm:w-24 md:w-28 h-auto object-contain filter contrast-125"
        />
      </motion.div>

      {/* Floating Vignette 2: Sunlight Shadows on Tiles Photo (Top Center-Left) */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute top-4 sm:top-8 left-[34%] sm:left-[36%] z-10"
      >
        <div className="w-16 sm:w-24 md:w-28 aspect-square overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200/60 transition-transform duration-500 hover:scale-105 cursor-pointer">
          <img
            src="/images/vignette_shadows_retina.png"
            alt="Terrace shadow study"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Floating Vignette 3: Botanical Ink Flower (Top Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 sm:top-12 right-6 sm:right-20 md:right-32 z-10 select-none pointer-events-none"
      >
        <img
          src="/images/vignette_flower_clean.png"
          alt="Botanical sketch"
          className="w-12 sm:w-16 md:w-20 h-auto object-contain filter contrast-125"
        />
      </motion.div>

      {/* Floating Vignette 4: Golden Sun / Flag Photo (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="absolute bottom-6 sm:bottom-12 left-[16%] sm:left-[22%] z-10"
      >
        <div className="w-16 sm:w-24 md:w-28 aspect-square overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200/60 transition-transform duration-500 hover:scale-105 cursor-pointer">
          <img
            src="/images/vignette_flag_retina.png"
            alt="Golden sun energy"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Floating Vignette 5: Lone Palm Tree against Sky Photo (Bottom Center-Right) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="absolute bottom-6 sm:bottom-10 right-[20%] sm:right-[26%] z-10"
      >
        <div className="w-20 sm:w-28 md:w-32 aspect-square overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200/60 transition-transform duration-500 hover:scale-105 cursor-pointer">
          <img
            src="/images/vignette_palm_retina.png"
            alt="Solitary coastal palm"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Floating Vignette 6: Subtle Glimpse on Far Right Edge */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-16 h-36 overflow-hidden border-l border-t border-b border-neutral-200/60 shadow-sm pointer-events-none opacity-85">
        <img
          src="/images/solaya_coastal_sanctuary_1.jpg"
          alt="Sanctuary glimpse"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Content: Headline & Dual Buttons */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        
        {/* Main Headline (All lowercase, matching reference layout) */}
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="font-queens text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-neutral-900 leading-[1.08] lowercase select-none"
        >
          perfect customer experiences
        </motion.h3>

        {/* Dual Pill Action Buttons (Exact Match to Reference: Dark Primary + Outlined Secondary) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center gap-3 pt-7 sm:pt-8"
        >
          {/* Primary Action Button */}
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-lg bg-neutral-950 hover:bg-black text-white text-xs font-medium tracking-wide transition shadow-sm active:scale-95 lowercase"
          >
            start free trial
          </button>

          {/* Secondary Action Button */}
          <button
            onClick={() => onOpenMonograph ? onOpenMonograph() : onOpenBooking()}
            className="px-6 py-2.5 rounded-lg bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-xs font-medium tracking-wide transition shadow-sm active:scale-95 lowercase"
          >
            view demo
          </button>
        </motion.div>

      </div>

    </section>
  );
};

