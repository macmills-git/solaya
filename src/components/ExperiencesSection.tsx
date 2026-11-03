import React, { useState } from 'react';
import { Clock, Plus, Check, Compass } from 'lucide-react';
import { EXPERIENCES, CURRENCIES } from '../data/solayaData';
import { Experience, CurrencyCode } from '../types';

interface ExperiencesSectionProps {
  currency: CurrencyCode;
  onAddExperienceToItinerary: (exp: Experience) => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currency,
  onAddExperienceToItinerary,
  onOpenLightbox,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeCategory === 'all') return true;
    return exp.category === activeCategory;
  });

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-white text-solaya-charcoal border-b border-solaya-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-solaya-terracotta text-xs font-mono tracking-widest uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>BESPOKE ITINERARY CURATION</span>
            </div>
            <h2 className="font-arcilla text-4xl sm:text-6xl text-solaya-forest font-normal tracking-tight">
              Travel beyond the ordinary.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Curations' },
              { id: 'wellness', label: 'Wellness & Spa' },
              { id: 'dining', label: 'Private Dining' },
              { id: 'culture', label: 'Cultural Art' },
              { id: 'adventure', label: 'Adventure' },
              { id: 'romance', label: 'Romantic' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition ${
                  activeCategory === tab.id
                    ? 'bg-solaya-forest text-solaya-sand shadow-sm'
                    : 'bg-solaya-ivory text-solaya-charcoal/70 hover:bg-solaya-sand/30 border border-solaya-sand/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group bg-solaya-ivory rounded-3xl overflow-hidden shadow-subtle hover:shadow-elevation border border-solaya-sand/30 flex flex-col justify-between transition-all duration-500"
            >
              {/* Image Container */}
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => onOpenLightbox(exp.image, `${exp.title} · ${exp.destination}`)}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover img-luxury-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                    <Clock className="w-3 h-3 text-solaya-terracotta" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-queens uppercase tracking-widest text-solaya-sand/90">
                    {exp.destination}
                  </span>
                  <h3 className="font-arcilla text-2xl text-white mt-0.5">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <p className="font-ambiant text-xs sm:text-sm text-solaya-charcoal/80 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {exp.included.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-solaya-charcoal/70">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & Itinerary Add */}
                <div className="pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-solaya-charcoal/50 block">
                      Curated Rate
                    </span>
                    <span className="font-arcilla text-xl font-bold text-solaya-forest">
                      {formatPrice(exp.priceUSD)}
                    </span>
                  </div>

                  <button
                    onClick={() => onAddExperienceToItinerary(exp)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-solaya-forest hover:bg-solaya-forest-700 text-solaya-sand text-xs font-semibold uppercase tracking-wider transition shadow"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Itinerary</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

