import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../data/solayaData';

interface ValuesStaggeredSectionProps {
  onOpenBooking: () => void;
  onSelectDestination: (destId: string) => void;
}

export const ValuesStaggeredSection: React.FC<ValuesStaggeredSectionProps> = ({
  onOpenBooking,
  onSelectDestination,
}) => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const cards = [
    {
      id: 'zanzibar',
      title: 'Matemwe, East Coast',
      subtitle: 'Zanzibar, Tanzania',
      tag: 'Coral Limestone Villas',
      image: '/images/zanzibar_coastal_escapes_2.jpg',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'rwanda',
      title: 'Volcanoes Bamboo Mist',
      subtitle: 'Musanze, Rwanda',
      tag: 'Woven Organic Pods',
      image: '/images/rwanda_mountain_sanctuary_3.jpg',
      aspect: 'aspect-[4/5] mt-6 sm:mt-12',
    },
    {
      id: 'ghana',
      title: 'Gomoa Fetteh Coast',
      subtitle: 'Central Coast, Ghana',
      tag: 'Rammed Earth Pavilions',
      image: '/images/ghana_coastal___culture_4.jpg',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'senegal',
      title: 'Petite Côte Horizon',
      subtitle: 'Dakar & South Shore, Senegal',
      tag: 'Brutalist Seaside Haven',
      image: '/images/senegal_seaside_luxury_5.jpg',
      aspect: 'aspect-[4/5] mt-6 sm:mt-12',
    },
  ];

  const handleNext = () => {
    setSliderIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setSliderIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const visibleCards = [
    cards[sliderIndex],
    cards[(sliderIndex + 1) % cards.length],
    cards[(sliderIndex + 2) % cards.length],
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Trust Signal & Big Playful / Confident Headline */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 text-xs font-medium text-neutral-600 bg-neutral-100/70 px-4 py-1.5 rounded-full border border-neutral-200/60">
            <span className="flex items-center gap-1 text-solaya-terracotta font-semibold">
              <Star className="w-3.5 h-3.5 fill-solaya-terracotta" />
              <span>5.0 Excellence Rating</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span>Curated across 4 African Sovereign Geographies</span>
          </div>

          <h2 className="font-queens text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
            SOLAYA means <span className="text-neutral-900">Going Places</span>
          </h2>

          {/* Interactive Dashed Target Indicator (Visa Travels style) */}
          <div className="flex items-center justify-center gap-2 max-w-xs mx-auto pt-2">
            <span className="w-2 h-2 rounded-full bg-solaya-terracotta" />
            <div className="flex-1 border-t-2 border-dashed border-neutral-300" />
            <div className="w-5 h-5 rounded-full border-2 border-neutral-900 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900" />
            </div>
            <div className="flex-1 border-t-2 border-dashed border-neutral-300" />
            <span className="w-2 h-2 rounded-full bg-neutral-300" />
          </div>
        </div>

        {/* 2-Column Editorial Grid: Left Copy + Right Staggered Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-pill bg-neutral-100 text-neutral-600 border border-neutral-200">
              01 · Our Philosophy
            </span>

            <h3 className="font-queens text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-snug">
              Not your boring travel agent.
            </h3>

            <p className="font-ambiant text-base text-neutral-500 leading-relaxed font-normal">
              We curate unhurried, private escapes where architecture, nature, and human connection meet. No rushed tour buses. No generic beige hotel rooms. Only bespoke sanctuaries created to celebrate contemporary African beauty.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition shadow"
              >
                Book a Sanctuary
              </button>

              <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <span>01</span>
                <span>/</span>
                <span>04</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Staggered Cards with Slider Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
              {visibleCards.map((card, idx) => (
                <div
                  key={card.id + idx}
                  onClick={() => onSelectDestination(card.id)}
                  className={`group relative rounded-[28px] overflow-hidden shadow-subtle hover:shadow-elevation border border-black/5 bg-neutral-100 cursor-pointer transition-all duration-500 ${card.aspect}`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover img-luxury-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Card Bottom Meta */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-sand block mb-1">
                      {card.tag}
                    </span>
                    <h4 className="font-queens text-lg font-bold leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs text-white/70 font-light mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex justify-end items-center gap-2 pt-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition shadow-sm"
                aria-label="Previous destination"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition shadow-sm"
                aria-label="Next destination"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

