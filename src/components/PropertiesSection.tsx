import React, { useState } from 'react';
import { ArrowUpRight, Bed, Users, Sparkles, Heart, Eye, Check } from 'lucide-react';
import { PROPERTIES, CURRENCIES } from '../data/solayaData';
import { Property, CurrencyCode } from '../types';

interface PropertiesSectionProps {
  currency: CurrencyCode;
  onBookProperty: (property: Property) => void;
  onOpenLightbox: (src: string, caption: string) => void;
  onToggleWishlist: (item: { id: string; type: 'property'; title: string; subtitle: string; image: string; rateUSD?: number }) => void;
  isWishlisted: (id: string) => boolean;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  currency,
  onBookProperty,
  onOpenLightbox,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedPropDetail, setSelectedPropDetail] = useState<Property | null>(null);

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const filteredProperties = PROPERTIES.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'beach') return p.typeCategory === 'beach';
    if (filter === 'mountain') return p.typeCategory === 'mountain';
    if (filter === 'villa') return p.typeCategory === 'villa';
    if (filter === 'cultural') return p.typeCategory === 'cultural';
    return true;
  });

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  return (
    <section id="properties" className="py-24 sm:py-32 bg-solaya-ivory text-solaya-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="font-queens text-xs uppercase tracking-[0.24em] text-solaya-terracotta mb-3">
              Architectural Sanctuaries
            </p>
            <h2 className="font-arcilla text-4xl sm:text-6xl text-solaya-forest font-normal tracking-tight">
              Your next escape starts here.
            </h2>
          </div>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Sanctuaries' },
              { id: 'beach', label: 'Beach Villas' },
              { id: 'mountain', label: 'Mountain Retreats' },
              { id: 'villa', label: 'Private Resorts' },
              { id: 'cultural', label: 'Cultural Havens' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition ${
                  filter === tab.id
                    ? 'bg-solaya-forest text-solaya-sand shadow-sm'
                    : 'bg-white/80 hover:bg-white text-solaya-charcoal/70 border border-solaya-sand/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid (2x2 luxury layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-subtle hover:shadow-elevation border border-solaya-sand/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image & Lightbox Trigger */}
              <div className="relative aspect-[16/10] overflow-hidden bg-solaya-forest/10">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover img-luxury-zoom cursor-pointer"
                  onClick={() => onOpenLightbox(prop.image, `${prop.name} · ${prop.location}`)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] uppercase tracking-widest font-mono bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/30">
                    {prop.type}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenLightbox(prop.image, `${prop.name} · ${prop.location}`)}
                      className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:text-solaya-sand transition"
                      title="View full-size photo"
                      aria-label="View full-size photo"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleWishlist({
                        id: prop.id,
                        type: 'property',
                        title: prop.name,
                        subtitle: prop.location,
                        image: prop.image,
                        rateUSD: prop.baseRateUSD,
                      })}
                      className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:text-solaya-terracotta transition"
                      aria-label="Save to wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted(prop.id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Bottom Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest font-queens text-solaya-sand/90">
                    {prop.location}
                  </span>
                  <h3 className="font-arcilla text-3xl mt-0.5">
                    {prop.name}
                  </h3>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <p className="font-queens text-xs italic text-solaya-terracotta mb-3">
                    &ldquo;{prop.tagline}&rdquo;
                  </p>
                  
                  <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-6">
                    {prop.description}
                  </p>

                  {/* Specs Pill List */}
                  <div className="flex items-center gap-4 text-xs font-mono text-solaya-charcoal/70 mb-6 pb-6 border-b border-solaya-charcoal/10">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-solaya-terracotta" />
                      <span>Up to {prop.guests} Guests</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-solaya-terracotta" />
                      <span>{prop.bedrooms} Bedrooms</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-solaya-terracotta" />
                      <span>Private Butler</span>
                    </div>
                  </div>

                  {/* Amenities Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {prop.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-solaya-sand/20 text-solaya-charcoal font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Reservation Trigger */}
                <div className="flex items-center justify-between pt-4 border-t border-solaya-charcoal/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-solaya-charcoal/50 block font-bold">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-arcilla text-2xl sm:text-3xl font-bold text-solaya-forest">
                        {formatPrice(prop.baseRateUSD)}
                      </span>
                      <span className="text-xs text-solaya-charcoal/60 font-mono">/ night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPropDetail(prop)}
                      className="px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-solaya-forest hover:bg-solaya-sand/20 border border-solaya-sand/40 transition"
                    >
                      Dossier
                    </button>
                    <button
                      onClick={() => onBookProperty(prop)}
                      className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-solaya-forest hover:bg-solaya-forest-700 text-solaya-sand transition flex items-center gap-1.5 shadow"
                    >
                      <span>Reserve</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Property Detail Dossier Modal */}
      {selectedPropDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-solaya-ivory rounded-3xl overflow-hidden shadow-2xl border border-solaya-sand/40 max-h-[90vh] flex flex-col">
            
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img
                src={selectedPropDetail.image}
                alt={selectedPropDetail.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solaya-forest via-solaya-forest/40 to-transparent" />
              
              <button
                onClick={() => setSelectedPropDetail(null)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 text-white hover:bg-black text-xs font-mono transition"
              >
                CLOSE [ESC]
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-mono tracking-widest text-solaya-sand">
                  {selectedPropDetail.type} · {selectedPropDetail.location}
                </span>
                <h3 className="font-arcilla text-4xl sm:text-5xl mt-1">
                  {selectedPropDetail.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/50 mb-2">
                  Architectural Description
                </h4>
                <p className="font-ambiant text-sm sm:text-base text-solaya-charcoal leading-relaxed">
                  {selectedPropDetail.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/50 mb-3">
                  Residence Inclusions & Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPropDetail.amenities.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-solaya-sand/30 text-xs">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium text-solaya-charcoal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/50 mb-3">
                  Accommodation Options
                </h4>
                <div className="space-y-2.5">
                  {selectedPropDetail.suites.map((suite) => (
                    <div key={suite.name} className="p-4 rounded-xl bg-white border border-solaya-sand/30 flex items-center justify-between">
                      <div>
                        <h5 className="font-arcilla text-lg text-solaya-forest">{suite.name}</h5>
                        <p className="text-xs text-solaya-charcoal/70">{suite.description}</p>
                      </div>
                      <span className="text-xs font-mono font-bold text-solaya-terracotta shrink-0 ml-4">
                        {suite.upgradeUSD === 0 ? 'Included' : `+${formatPrice(suite.upgradeUSD)}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-solaya-forest text-solaya-sand flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-solaya-sand/70 block">
                    Starting nightly rate
                  </span>
                  <span className="font-arcilla text-2xl font-bold text-white">
                    {formatPrice(selectedPropDetail.baseRateUSD)}
                  </span>
                </div>
                <button
                  onClick={() => {
                    const p = selectedPropDetail;
                    setSelectedPropDetail(null);
                    onBookProperty(p);
                  }}
                  className="px-6 py-3 rounded-full bg-solaya-terracotta hover:bg-solaya-terracotta-600 text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
                >
                  Configure Reservation
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

