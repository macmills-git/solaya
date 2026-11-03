import React, { useState } from 'react';
import { ArrowUpRight, Compass, Heart, Wind, Check, X } from 'lucide-react';
import { DESTINATIONS } from '../data/solayaData';
import { Destination } from '../types';

interface DestinationsSectionProps {
  onSelectDestination: (destId: string) => void;
  onToggleWishlist: (item: { id: string; type: 'destination'; title: string; subtitle: string; image: string }) => void;
  isWishlisted: (id: string) => boolean;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-solaya-ivory text-solaya-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-solaya-charcoal/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-solaya-terracotta text-xs font-mono tracking-widest uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>THE CURATED GEOGRAPHIES</span>
            </div>
            <h2 className="font-arcilla text-4xl sm:text-6xl text-solaya-forest font-normal tracking-tight">
              Somewhere worth getting lost in.
            </h2>
          </div>
          <p className="font-ambiant text-sm sm:text-base text-solaya-charcoal/70 max-w-md leading-relaxed">
            Four distinct landscapes where architecture honors the land. From secluded Indian Ocean sandbanks to volcanic mist and vibrant West African shores.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Card 1: Zanzibar (7 cols) */}
          <div className="md:col-span-7 group relative bg-white rounded-2xl overflow-hidden shadow-subtle border border-solaya-sand/30 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={DESTINATIONS[0].image}
                alt={DESTINATIONS[0].name}
                className="w-full h-full object-cover img-luxury-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                  {DESTINATIONS[0].coordinates}
                </span>
                <button
                  onClick={() => onToggleWishlist({
                    id: DESTINATIONS[0].id,
                    type: 'destination',
                    title: DESTINATIONS[0].name,
                    subtitle: DESTINATIONS[0].country,
                    image: DESTINATIONS[0].image,
                  })}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-solaya-terracotta transition shadow"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(DESTINATIONS[0].id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                </button>
              </div>

              {/* Bottom Image Overlay Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-queens text-xs uppercase tracking-widest text-solaya-sand mb-1">
                  {DESTINATIONS[0].country} • {DESTINATIONS[0].tagline}
                </p>
                <h3 className="font-arcilla text-3xl sm:text-4xl">
                  {DESTINATIONS[0].name}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-solaya-charcoal/60 mb-3">
                  <Wind className="w-3.5 h-3.5 text-solaya-terracotta" />
                  <span>{DESTINATIONS[0].climate}</span>
                </div>
                <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-6">
                  {DESTINATIONS[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {DESTINATIONS[0].highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-solaya-sand/20 text-solaya-charcoal font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-solaya-forest font-semibold">
                  {DESTINATIONS[0].propertiesCount} Curated Sanctuaries
                </span>
                <button
                  onClick={() => setActiveModalDest(DESTINATIONS[0])}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-solaya-forest hover:text-solaya-terracotta transition group"
                >
                  <span>Explore Destination</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Rwanda (5 cols) */}
          <div className="md:col-span-5 group relative bg-white rounded-2xl overflow-hidden shadow-subtle border border-solaya-sand/30 flex flex-col justify-between">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-72 overflow-hidden">
              <img
                src={DESTINATIONS[1].image}
                alt={DESTINATIONS[1].name}
                className="w-full h-full object-cover img-luxury-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                  {DESTINATIONS[1].coordinates}
                </span>
                <button
                  onClick={() => onToggleWishlist({
                    id: DESTINATIONS[1].id,
                    type: 'destination',
                    title: DESTINATIONS[1].name,
                    subtitle: DESTINATIONS[1].country,
                    image: DESTINATIONS[1].image,
                  })}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-solaya-terracotta transition shadow"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(DESTINATIONS[1].id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-queens text-xs uppercase tracking-widest text-solaya-sand mb-1">
                  {DESTINATIONS[1].country} • {DESTINATIONS[1].tagline}
                </p>
                <h3 className="font-arcilla text-3xl">
                  {DESTINATIONS[1].name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-solaya-charcoal/60 mb-3">
                  <Wind className="w-3.5 h-3.5 text-solaya-terracotta" />
                  <span>{DESTINATIONS[1].climate}</span>
                </div>
                <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-6">
                  {DESTINATIONS[1].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {DESTINATIONS[1].highlights.slice(0, 2).map((h) => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-solaya-sand/20 text-solaya-charcoal font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-solaya-forest font-semibold">
                  {DESTINATIONS[1].propertiesCount} Curated Sanctuaries
                </span>
                <button
                  onClick={() => setActiveModalDest(DESTINATIONS[1])}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-solaya-forest hover:text-solaya-terracotta transition group"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Ghana (5 cols) */}
          <div className="md:col-span-5 group relative bg-white rounded-2xl overflow-hidden shadow-subtle border border-solaya-sand/30 flex flex-col justify-between">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-72 overflow-hidden">
              <img
                src={DESTINATIONS[2].image}
                alt={DESTINATIONS[2].name}
                className="w-full h-full object-cover img-luxury-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                  {DESTINATIONS[2].coordinates}
                </span>
                <button
                  onClick={() => onToggleWishlist({
                    id: DESTINATIONS[2].id,
                    type: 'destination',
                    title: DESTINATIONS[2].name,
                    subtitle: DESTINATIONS[2].country,
                    image: DESTINATIONS[2].image,
                  })}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-solaya-terracotta transition shadow"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(DESTINATIONS[2].id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-queens text-xs uppercase tracking-widest text-solaya-sand mb-1">
                  {DESTINATIONS[2].country} • {DESTINATIONS[2].tagline}
                </p>
                <h3 className="font-arcilla text-3xl">
                  {DESTINATIONS[2].name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-solaya-charcoal/60 mb-3">
                  <Wind className="w-3.5 h-3.5 text-solaya-terracotta" />
                  <span>{DESTINATIONS[2].climate}</span>
                </div>
                <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-6">
                  {DESTINATIONS[2].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {DESTINATIONS[2].highlights.slice(0, 2).map((h) => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-solaya-sand/20 text-solaya-charcoal font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-solaya-forest font-semibold">
                  {DESTINATIONS[2].propertiesCount} Curated Sanctuaries
                </span>
                <button
                  onClick={() => setActiveModalDest(DESTINATIONS[2])}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-solaya-forest hover:text-solaya-terracotta transition group"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Senegal (7 cols) */}
          <div className="md:col-span-7 group relative bg-white rounded-2xl overflow-hidden shadow-subtle border border-solaya-sand/30 flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={DESTINATIONS[3].image}
                alt={DESTINATIONS[3].name}
                className="w-full h-full object-cover img-luxury-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                  {DESTINATIONS[3].coordinates}
                </span>
                <button
                  onClick={() => onToggleWishlist({
                    id: DESTINATIONS[3].id,
                    type: 'destination',
                    title: DESTINATIONS[3].name,
                    subtitle: DESTINATIONS[3].country,
                    image: DESTINATIONS[3].image,
                  })}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-solaya-terracotta transition shadow"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted(DESTINATIONS[3].id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                </button>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-queens text-xs uppercase tracking-widest text-solaya-sand mb-1">
                  {DESTINATIONS[3].country} • {DESTINATIONS[3].tagline}
                </p>
                <h3 className="font-arcilla text-3xl sm:text-4xl">
                  {DESTINATIONS[3].name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-solaya-charcoal/60 mb-3">
                  <Wind className="w-3.5 h-3.5 text-solaya-terracotta" />
                  <span>{DESTINATIONS[3].climate}</span>
                </div>
                <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-6">
                  {DESTINATIONS[3].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {DESTINATIONS[3].highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-solaya-sand/20 text-solaya-charcoal font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-solaya-forest font-semibold">
                  {DESTINATIONS[3].propertiesCount} Curated Sanctuaries
                </span>
                <button
                  onClick={() => setActiveModalDest(DESTINATIONS[3])}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-solaya-forest hover:text-solaya-terracotta transition group"
                >
                  <span>Explore Destination</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Destination Modal Dossier */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-solaya-ivory rounded-3xl overflow-hidden shadow-2xl border border-solaya-sand/40 max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-60 sm:h-72 w-full shrink-0">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solaya-forest via-solaya-forest/30 to-black/30" />
              
              <button
                onClick={() => setActiveModalDest(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-mono tracking-widest uppercase text-solaya-sand">
                  {activeModalDest.country} · {activeModalDest.coordinates}
                </span>
                <h3 className="font-arcilla text-4xl sm:text-5xl mt-1">
                  {activeModalDest.name}
                </h3>
                <p className="font-queens text-sm text-solaya-sand/90">
                  {activeModalDest.tagline}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/50 mb-2">
                  The Experience
                </h4>
                <p className="text-sm sm:text-base text-solaya-charcoal leading-relaxed font-ambiant">
                  {activeModalDest.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/50 mb-3">
                  Signature Curations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalDest.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-solaya-sand/30 text-xs">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-solaya-charcoal/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-solaya-forest/5 border border-solaya-forest/15 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-solaya-charcoal/60 font-semibold block">
                    Microclimate
                  </span>
                  <span className="text-xs text-solaya-forest font-medium">{activeModalDest.climate}</span>
                </div>
                <button
                  onClick={() => {
                    const destId = activeModalDest.id;
                    setActiveModalDest(null);
                    onSelectDestination(destId);
                  }}
                  className="px-5 py-2.5 rounded-full bg-solaya-forest text-solaya-sand text-xs uppercase tracking-wider font-bold hover:bg-solaya-charcoal transition shadow"
                >
                  View Villas in {activeModalDest.name}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

