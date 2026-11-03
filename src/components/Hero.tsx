import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(175deg,#6890B4_0%,#82A6C6_22%,#A3C0DB_44%,#C6D8E8_68%,#EFF4F9_86%,#FFFFFF_100%)]">
      
      {/* Top spacing & typography container */}
      <div className="pt-32 sm:pt-40 lg:pt-44 px-6 sm:px-8 max-w-4xl mx-auto text-center relative z-20">
        
        {/* Headline: Exactly matching the Haven reference layout in lowercase */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-arcilla text-5xl sm:text-7xl lg:text-[82px] xl:text-[88px] text-white font-normal leading-[1.03] tracking-tight text-center lowercase drop-shadow-sm select-none"
        >
          extraordinary<br />living begins here.
        </motion.h1>

        {/* Subtitle: 2 clean lines matching the Haven reference in lowercase */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-ambiant text-xs sm:text-sm text-white/95 max-w-sm sm:max-w-md mx-auto mt-4 sm:mt-5 leading-relaxed font-light tracking-wide text-center drop-shadow-sm lowercase"
        >
          timeless architecture, exclusive locations, and luxury<br className="hidden sm:inline" /> homes designed to inspire your next chapter.
        </motion.p>

      </div>

      {/* Full-Width Architectural Rammed Earth Villa (Edge-to-Edge Full Screen Width) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-6 sm:mt-8 relative z-10 -mb-1"
      >
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_82%,transparent_100%)]">
          <img
            src="/images/solaya_haven_hero_earth_villa_fullbleed.png"
            alt="Solaya Contemporary Luxury Sanctuary Residence"
            className="w-full h-auto min-h-[420px] sm:min-h-[560px] lg:min-h-[700px] object-cover object-bottom select-none pointer-events-none"
            loading="eager"
          />
        </div>
      </motion.div>

    </section>
  );
};
