import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface DarkTakeoverSectionProps {
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, cap: string) => void;
}

export const DarkTakeoverSection: React.FC<DarkTakeoverSectionProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const stories = [
    {
      title: 'eclipse sanctuary: brutalist concrete & golden apertures',
      location: 'Petite Côte, Senegal',
      description: 'monolithic raw concrete cantilevers and sculpted staircases meeting warm amber illumination. designed to celebrate monumental geometry, passive air ventilation, and the timeless stillness of sculptural architecture.',
      image: '/images/brutalist_concrete_sanctuary.jpg',
      isCustomPoster: true,
    },
    {
      title: 'bisoke nest: woven geometry in rainforest mist',
      location: 'Volcanoes National Park, Rwanda',
      description: 'curved bamboo domes inspired by historical royal residences. floating above primal ferns with private heated stone plunge pools and geothermal hearth warmth.',
      image: '/images/rwanda_mountain_sanctuary_3.jpg',
      isCustomPoster: false,
    },
    {
      title: 'the azure house: carved coral limestone monolith',
      location: 'Matemwe, Zanzibar',
      description: 'traditional swahili coral limestone construction meeting contemporary brutalist minimalism. open-air oceanfront colonnades and saltwater infinity pools overlooking the turquoise indian ocean tide.',
      image: '/images/the_azure_house_6.jpg',
      isCustomPoster: false,
    },
  ];

  const current = stories[activeIdx];

  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10 bg-neutral-950 text-white rounded-none">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header with Slider Controls (Zero corner radius: rounded-none buttons) */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-solaya-terracotta inline-block" />
            <span className="font-queens text-xs tracking-widest text-neutral-400 font-semibold lowercase">
              crafting spaces, crafting stories
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
              className="w-9 h-9 rounded-none border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all active:scale-95"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % stories.length)}
              className="w-9 h-9 rounded-none border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black hover:border-white transition-all active:scale-95"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Image Left (Fokus / Depth-of-Field Poster Style) + Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Fokus Depth-of-Field Poster Frame (Exact User Reference Style, Zero Radius) */}
          <div className="lg:col-span-6">
            <div
              className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-none border border-white/15 bg-neutral-900 shadow-2xl cursor-pointer group select-none"
              onClick={() => onOpenLightbox(current.image, current.title)}
            >
              {/* Layer 1: Ambient Blurred Architectural Background */}
              <img
                src={current.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />

              {/* Top-Left Stamp: Stacked Year (20 / 26) */}
              <div className="absolute top-6 left-6 font-arcilla text-sm sm:text-base text-white/95 leading-tight select-none z-10 drop-shadow-md">
                <div className="font-medium tracking-wider">20</div>
                <div className="font-medium tracking-wider">26</div>
              </div>

              {/* Top-Right Stamp: Editorial Label */}
              <div className="absolute top-6 right-6 font-queens text-xs tracking-widest text-white/95 uppercase select-none z-10 drop-shadow-md">
                SOLAYA &
              </div>

              {/* Bottom-Left: Vertical Display Typography (FOKUS) */}
              <div className="absolute bottom-8 left-5 sm:left-6 select-none z-10 drop-shadow-lg">
                <span className="font-queens text-2xl sm:text-3xl text-white tracking-[0.25em] uppercase block [writing-mode:vertical-rl] rotate-180 font-normal">
                  FOKUS
                </span>
              </div>

              {/* Layer 2: Center-Right Sharp Architectural Focal Window (Zero Radius) */}
              <div className="absolute top-10 sm:top-12 bottom-10 sm:bottom-12 right-5 sm:right-7 left-16 sm:left-22 overflow-hidden rounded-none border border-white/35 shadow-[0_20px_50px_rgba(0,0,0,0.65)] bg-neutral-950 transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover img-luxury-zoom"
                />
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/90 lowercase bg-black/70 px-2.5 py-1 border border-white/20 select-none">
                  {current.location.toLowerCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Story (Zero Radius CTAs) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Story Indicator Counter */}
            <div className="flex items-center gap-3">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-0.5 rounded-none transition-all duration-300 ${
                    i === activeIdx ? 'w-8 bg-white' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="font-mono text-[11px] text-white/40 ml-2 select-none">
                0{activeIdx + 1} / 0{stories.length}
              </span>
            </div>

            <h3 className="font-queens text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight lowercase">
              {current.title}
            </h3>

            <p className="font-ambiant text-xs sm:text-sm text-neutral-400 leading-relaxed font-light lowercase">
              {current.description}
            </p>

            {/* Zero Radius Reserve Button */}
            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none border border-white/40 hover:border-white bg-transparent hover:bg-white text-white hover:text-black text-xs font-semibold tracking-wider transition-all lowercase active:scale-95 shadow-sm"
              >
                <span>reserve this sanctuary</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
