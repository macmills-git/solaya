import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/solayaData';

interface VisualMonographSectionProps {
  currency: CurrencyCode;
  isDark?: boolean;
  accentColor?: string;
  onPhotoClick?: (src: string, caption: string) => void;
}

interface MonographPhoto {
  src: string;
  priceUSD: number;
  author: string;
  title: string;
  aspectClass: string;
}

interface MonographSet {
  number: string;
  label: string;
  quote: string;
  photos: [
    MonographPhoto, // 1. Left top (portrait)
    MonographPhoto, // 2. Left bottom (square/horizontal)
    MonographPhoto, // 3. Center top (wide panorama)
    MonographPhoto, // 4. Center middle (medium horizontal)
    MonographPhoto, // 5. Center bottom (horizontal detail)
    MonographPhoto, // 6. Right (tall vertical span)
  ];
}

const MONOGRAPH_SETS: MonographSet[] = [
  {
    number: '1',
    label: 'architectural volumes & horizon perspectives',
    quote: 'the architecture does not demand attention; it quietly frames the landscape.',
    photos: [
      {
        src: '/images/adventure___exploration_14.jpg',
        priceUSD: 1650,
        author: 'alexander ivanov',
        title: 'western horizon horizon pavilion',
        aspectClass: 'aspect-[3/4]',
      },
      {
        src: '/images/rwanda_mountain_sanctuary_3.jpg',
        priceUSD: 1450,
        author: 'dmitry kulakov',
        title: 'monolithic volcanic stone hearth',
        aspectClass: 'aspect-[4/3]',
      },
      {
        src: '/images/the_azure_house_6.jpg',
        priceUSD: 2490,
        author: 'alexey nikolaev',
        title: 'private canopy driveway & approach',
        aspectClass: 'aspect-[16/7]',
      },
      {
        src: '/images/mwezi_retreat_7.jpg',
        priceUSD: 1180,
        author: 'roman morozov',
        title: 'hearth suite morning light',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/dining_25.jpg',
        priceUSD: 1320,
        author: 'dmitry kulakov',
        title: 'open-fire ocean dining pavilion',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/brutalist_concrete_sanctuary.jpg',
        priceUSD: 2220,
        author: 'alexander ivanov',
        title: 'cantilevered cliff plunge pool aperture',
        aspectClass: 'aspect-[9/16] sm:aspect-[3/5]',
      },
    ],
  },
  {
    number: '2',
    label: 'tactile materiality, earth & ocean courtyards',
    quote: 'red earth, mangrove cedar, and sea-salt stone — materials born from their coordinates.',
    photos: [
      {
        src: '/images/solaya_coastal_sanctuary_1.jpg',
        priceUSD: 1750,
        author: 'atelier solaya',
        title: 'rammed earth coastal courtyard',
        aspectClass: 'aspect-[3/4]',
      },
      {
        src: '/images/senegal_seaside_luxury_5.jpg',
        priceUSD: 1550,
        author: 'atelier solaya',
        title: 'carved coral limestone sundeck',
        aspectClass: 'aspect-[4/3]',
      },
      {
        src: '/images/solaya_haven_hero_earth_villa_fullbleed.png',
        priceUSD: 2850,
        author: 'elena vargas',
        title: 'saltwater infinity reflection pool',
        aspectClass: 'aspect-[16/7]',
      },
      {
        src: '/images/the_palm_residence_8.jpg',
        priceUSD: 1250,
        author: 'sofia amani',
        title: 'belgian organic linen suite pavilion',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/atmosphere_15.jpg',
        priceUSD: 1100,
        author: 'kwame mensah',
        title: 'handcrafted cast brass joinery',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/maison_sable_9.jpg',
        priceUSD: 2150,
        author: 'marcus adams',
        title: 'vaulted ocean glass curtain wall',
        aspectClass: 'aspect-[9/16] sm:aspect-[3/5]',
      },
    ],
  },
  {
    number: '3',
    label: 'unhurried living, coastal quiet & twilight',
    quote: 'luxury is the absence of rush — time stretching endlessly beside the tide.',
    photos: [
      {
        src: '/images/ghana_coastal___culture_4.jpg',
        priceUSD: 1950,
        author: 'kofi asante',
        title: 'twilight coastal mangrove stillness',
        aspectClass: 'aspect-[3/4]',
      },
      {
        src: '/images/private_dining_11.jpg',
        priceUSD: 1600,
        author: 'chef adebayo',
        title: 'ancestral sandspit braai feast',
        aspectClass: 'aspect-[4/3]',
      },
      {
        src: '/images/senegal_23.jpg',
        priceUSD: 2650,
        author: 'malick sow',
        title: 'dunes of the petite côte at golden hour',
        aspectClass: 'aspect-[16/7]',
      },
      {
        src: '/images/wellness___rejuvenation_10.jpg',
        priceUSD: 1350,
        author: 'amina diallo',
        title: 'in-villa botanic stone infusion bath',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/cultural_discovery_12.jpg',
        priceUSD: 1200,
        author: 'tariq nassor',
        title: 'artisanal zanzibar tea ceremony',
        aspectClass: 'aspect-[3/2]',
      },
      {
        src: '/images/zanzibar_coastal_escapes_2.jpg',
        priceUSD: 2300,
        author: 'faraji mwinyi',
        title: 'coral tide descending staircase',
        aspectClass: 'aspect-[9/16] sm:aspect-[3/5]',
      },
    ],
  },
];

export const VisualMonographSection: React.FC<VisualMonographSectionProps> = ({
  currency,
  isDark = false,
  accentColor = 'text-solaya-terracotta',
  onPhotoClick,
}) => {
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const currentSet = MONOGRAPH_SETS[activeSetIndex];

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  const handlePrev = () => {
    setActiveSetIndex((prev) => (prev === 0 ? MONOGRAPH_SETS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSetIndex((prev) => (prev === 1 ? 2 : (prev + 1) % MONOGRAPH_SETS.length));
  };

  // Render individual photo card exactly matching inspiration 1
  const renderPhotoCard = (photo: MonographPhoto, index: number) => {
    return (
      <div
        key={`${activeSetIndex}-${index}-${photo.src}`}
        onClick={() => onPhotoClick?.(photo.src, `${photo.title} (${photo.author})`)}
        className={`group relative ${photo.aspectClass} w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-900 cursor-pointer shadow-sm transition-all duration-500 hover:shadow-2xl select-none border ${
          isDark ? 'border-white/10 hover:border-white/30' : 'border-neutral-200/80 hover:border-neutral-400'
        }`}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover img-luxury-zoom select-none pointer-events-none"
        />

        {/* Ambient bottom gradient for maximum typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Minimalist Price & Author Overlay (Bottom Left - Exact Reference Match) */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 text-white pointer-events-none space-y-0.5">
          <div className="font-queens text-lg sm:text-2xl font-light tracking-tight text-white leading-tight">
            {formatPrice(photo.priceUSD)}
          </div>
          <div className="font-ambiant text-[11px] sm:text-xs text-white/80 italic font-light tracking-wide lowercase truncate">
            {photo.author}
          </div>
        </div>

        {/* Subtle Inspect Pill on Hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full space-y-10 pt-12 pb-8">
      
      {/* 1. Header with Background Watermark Typography (Exact match to reference) */}
      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
        
        {/* Left Editorial Header: Title in Serif + Italic Subtitle */}
        <div className="space-y-1.5 z-10">
          <h3
            className={`font-queens text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight lowercase leading-none ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            фотографии · visual monograph
          </h3>
          <p
            className={`font-arcilla italic text-sm sm:text-base lowercase font-light ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            curated spatial archives & interior studies on sale
          </p>
        </div>

        {/* Right Badge & Monograph Indicator */}
        <div className="z-10 flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase ${
              isDark
                ? 'border-white/20 bg-white/5 text-neutral-300'
                : 'border-neutral-300 bg-white text-neutral-600'
            }`}
          >
            monograph · vol. 0{currentSet.number}
          </span>
        </div>

        {/* Background Faint Watermark Typography: "on sale" / "monograph" in huge italic serif */}
        <div
          className={`absolute -top-6 sm:-top-10 right-0 sm:right-6 font-arcilla italic text-6xl sm:text-8xl lg:text-9xl tracking-tight select-none pointer-events-none transition-opacity duration-700 ${
            isDark ? 'text-white/[0.04]' : 'text-neutral-900/[0.04]'
          }`}
          aria-hidden="true"
        >
          on sale
        </div>

      </div>

      {/* 2. Asymmetric 3-Column Editorial Grid (Exact Reference Arrangement) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
        
        {/* Column 1 (Left 4 cols): 
            - Photo 1 (Top Portrait 3/4)
            - Photo 2 (Bottom Landscape 4/3)
        */}
        <div className="md:col-span-4 flex flex-col gap-5 sm:gap-6">
          {renderPhotoCard(currentSet.photos[0], 0)}
          {renderPhotoCard(currentSet.photos[1], 1)}
        </div>

        {/* Column 2 (Center 4 cols): 
            - Photo 3 (Top Wide Panorama 16/7)
            - Photo 4 (Center Medium Landscape 3/2)
            - Photo 5 (Bottom Landscape Detail 3/2)
        */}
        <div className="md:col-span-4 flex flex-col gap-5 sm:gap-6">
          {renderPhotoCard(currentSet.photos[2], 2)}
          {renderPhotoCard(currentSet.photos[3], 3)}
          {renderPhotoCard(currentSet.photos[4], 4)}
        </div>

        {/* Column 3 (Right 4 cols): 
            - Photo 6 (Tall Vertical Span)
        */}
        <div className="md:col-span-4 flex flex-col">
          {renderPhotoCard(currentSet.photos[5], 5)}
        </div>

      </div>

      {/* 3. Footer Bar matching Reference (Pagination Left + Stylized Quote Center) */}
      <div
        className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${
          isDark ? 'border-white/10' : 'border-neutral-200'
        }`}
      >
        
        {/* Left: Minimalist Pagination with < > Controls (Reference match: "1 / 3" with "< >") */}
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-1 select-none">
            <span
              className={`font-queens text-3xl sm:text-4xl font-bold leading-none ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {currentSet.number}
            </span>
            <span
              className={`font-mono text-xs ${
                isDark ? 'text-neutral-500' : 'text-neutral-400'
              }`}
            >
              / {MONOGRAPH_SETS.length}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-95 ${
                isDark
                  ? 'border-white/20 hover:bg-white hover:text-black text-white'
                  : 'border-neutral-300 hover:bg-neutral-900 hover:text-white text-neutral-800'
              }`}
              aria-label="Previous monograph curation"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all active:scale-95 ${
                isDark
                  ? 'border-white/20 hover:bg-white hover:text-black text-white'
                  : 'border-neutral-300 hover:bg-neutral-900 hover:text-white text-neutral-800'
              }`}
              aria-label="Next monograph curation"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <span
            className={`hidden md:inline font-mono text-xs lowercase ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            {currentSet.label}
          </span>
        </div>

        {/* Center/Right: Stylized Quotation Mark & Curator Statement */}
        <div className="flex items-center gap-3 text-center sm:text-right max-w-md">
          <span
            className="font-arcilla text-4xl leading-none text-solaya-terracotta select-none"
            aria-hidden="true"
          >
            ”
          </span>
          <p
            className={`font-ambiant text-xs italic font-light lowercase leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            "{currentSet.quote.toLowerCase()}"
          </p>
        </div>

      </div>

    </section>
  );
};
