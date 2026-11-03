import React from 'react';
import { Compass, Sparkles, Feather, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/solayaData';

export const BrandPillars: React.FC = () => {
  const icons = [Compass, Sparkles, Feather];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-white text-solaya-charcoal border-y border-solaya-charcoal/10 relative overflow-hidden">
      
      {/* Decorative Subtle Background Texture Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none select-none font-arcilla text-[400px] leading-none text-solaya-forest">
        S
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-queens text-xs uppercase tracking-[0.24em] text-solaya-terracotta mb-3">
            The SOLAYA Philosophy
          </p>
          <h2 className="font-arcilla text-4xl sm:text-6xl text-solaya-forest font-normal tracking-tight mb-6">
            More than a place to stay.
          </h2>
          <p className="font-ambiant text-base sm:text-lg text-solaya-charcoal/70 leading-relaxed font-light">
            We reject the hurried, transactional nature of modern travel. Every SOLAYA sanctuary is conceived as an architectural dialogue between human comfort and untouched African nature.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {BRAND_INFO.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx] || ShieldCheck;
            return (
              <div
                key={pillar.num}
                className="group relative p-8 sm:p-10 rounded-2xl bg-solaya-ivory border border-solaya-sand/40 hover:border-solaya-terracotta transition-all duration-500 shadow-subtle hover:shadow-elevation flex flex-col justify-between"
              >
                <div>
                  {/* Top: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-solaya-terracotta tracking-widest px-2.5 py-1 rounded-full bg-solaya-sand/30">
                      {pillar.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white border border-solaya-sand/30 flex items-center justify-center text-solaya-forest group-hover:text-solaya-terracotta group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <p className="font-queens text-xs uppercase tracking-widest text-solaya-charcoal/50 mb-1">
                    {pillar.tagline}
                  </p>
                  <h3 className="font-arcilla text-2xl sm:text-3xl text-solaya-forest mb-4">
                    {pillar.title}
                  </h3>

                  {/* Body description */}
                  <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Architectural Accent Line */}
                <div className="pt-8 mt-8 border-t border-solaya-charcoal/10 flex items-center gap-2">
                  <div className="w-8 h-[1.5px] bg-solaya-sand group-hover:w-16 group-hover:bg-solaya-terracotta transition-all duration-500" />
                  <span className="text-[10px] uppercase font-mono tracking-wider text-solaya-charcoal/40">
                    Sanctuary Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Creed Quote Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-solaya-forest text-solaya-sand border border-solaya-sand/20 text-center max-w-4xl mx-auto shadow-elevation relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#dccbb0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <p className="font-arcilla text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-relaxed italic mb-4">
            &ldquo;In a world where travel has become increasingly transactional, SOLAYA offers a reason to disconnect from the ordinary and reconnect with what matters.&rdquo;
          </p>
          <span className="font-queens text-xs uppercase tracking-[0.2em] text-solaya-sand/70">
            SOLAYA Founding Creed · Accra, Ghana
          </span>
        </div>

      </div>
    </section>
  );
};

