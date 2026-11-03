import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROPERTIES, CURRENCIES } from '../data/solayaData';
import { Property, CurrencyCode } from '../types';
import { CornerPixelAccents } from './CornerPixelAccents';

interface SanctuariesMinimalProps {
  currency: CurrencyCode;
  onBookProperty: (p: Property) => void;
  onOpenLightbox: (src: string, cap: string) => void;
}

export const SanctuariesMinimal: React.FC<SanctuariesMinimalProps> = ({
  currency,
  onBookProperty,
  onOpenLightbox,
}) => {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  // 4 Curated Sanctuaries for the 2x2 grid matching Image 1 reference
  const curated = PROPERTIES.slice(0, 4);

  return (
    <section id="sanctuaries" className="py-24 sm:py-36 px-6 sm:px-10 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Two-Tone Editorial Headline & CTA (matching Image 1 reference) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            
            {/* Top Indicator Badge */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-solaya-terracotta inline-block" />
              <span className="w-1.5 h-1.5 rounded-sm bg-[#29aefb] inline-block" />
              <span className="font-ambiant text-xs tracking-wider text-neutral-400 lowercase font-medium">
                sanctuaries across africa
              </span>
            </div>

            {/* Massive Editorial Headline with Image 1 Two-Tone Contrast */}
            <h2 className="font-arcilla text-4xl sm:text-6xl lg:text-[62px] font-normal tracking-tight leading-[1.04] lowercase">
              <span className="text-neutral-900 block">architectural sanctuaries</span>
              <span className="text-neutral-400 block mt-1">across the continent.</span>
            </h2>

            {/* Supporting Description */}
            <p className="font-ambiant text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed lowercase font-light">
              each solaya sanctuary is an intimate dialogue between bold contemporary architecture and ancient landscapes. crafted for stillness, unhurried discovery, and restorative luxury.
            </p>

            {/* Black Pill Button (exact match to Image 1 "explore the platform") */}
            <div className="pt-4">
              <button
                onClick={() => onBookProperty(PROPERTIES[0])}
                className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition lowercase shadow-sm active:scale-95"
              >
                explore all sanctuaries
              </button>
            </div>

          </div>

          {/* Right Column: 2-Column Grid of 4 Architectural Cards with Corner Pixel Mosaics */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
              {curated.map((prop, idx) => {
                // Alternating corner positions for signature pixel accents
                const pixelPos = idx % 2 === 0 ? 'top-left' : 'bottom-right';

                return (
                  <div
                    key={prop.id}
                    className="group cursor-pointer flex flex-col"
                    onClick={() => onBookProperty(prop)}
                  >
                    {/* Image Container with Signature Stepped Pixel Mosaic Accent */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
                      
                      {/* Signature Decorative Corner Pixel Accents (from reference image) */}
                      <CornerPixelAccents
                        position={pixelPos}
                        color="bg-white"
                        className="opacity-90 group-hover:opacity-100 transition-opacity"
                      />

                      <img
                        src={prop.image}
                        alt={prop.name}
                        className="w-full h-full object-cover img-luxury-zoom"
                      />

                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500" />
                    </div>

                    {/* Editorial Caption Under Image (Bold title lead-in + narrative + price) */}
                    <div className="mt-3.5 space-y-1.5">
                      <p className="font-ambiant text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                        <span className="font-queens font-bold text-neutral-900 lowercase mr-1.5">
                          {prop.name.toLowerCase()}.
                        </span>
                        <span className="lowercase font-light">
                          {prop.description.slice(0, 115).toLowerCase()}...
                        </span>
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-neutral-100/80">
                        <span className="font-mono text-[11px] text-neutral-400 lowercase">
                          {prop.location.toLowerCase()}
                        </span>
                        <span className="font-mono text-xs font-semibold text-neutral-900">
                          {formatPrice(prop.baseRateUSD)}{' '}
                          <span className="font-normal text-[10px] text-neutral-400">/ night</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
