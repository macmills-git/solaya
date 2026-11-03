import React, { useState } from 'react';
import { Maximize2, Heart, Users, Bed, Calendar, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PROPERTIES, CURRENCIES, DESTINATIONS } from '../data/solayaData';
import { Property, CurrencyCode } from '../types';

interface PickThePlaceSectionProps {
  currency: CurrencyCode;
  onBookProperty: (p: Property) => void;
  onOpenLightbox: (src: string, cap: string) => void;
  onToggleWishlist: (item: { id: string; type: 'property'; title: string; subtitle: string; image: string; rateUSD?: number }) => void;
  isWishlisted: (id: string) => boolean;
}

export const PickThePlaceSection: React.FC<PickThePlaceSectionProps> = ({
  currency,
  onBookProperty,
  onOpenLightbox,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [destFilter, setDestFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const filtered = PROPERTIES.filter((p) => {
    if (destFilter !== 'all' && p.destinationId !== destFilter) return false;
    if (typeFilter !== 'all' && p.typeCategory !== typeFilter) return false;
    return true;
  });

  const formatPrice = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  return (
    <section id="sanctuaries" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50/60 text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header (Visa Travels style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="badge-pill bg-white text-neutral-600 border border-neutral-200 mb-3">
              • Curated Sanctuaries 2026
            </span>
            <h2 className="font-queens text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900">
              Pick the Place
            </h2>
          </div>
          <p className="font-ambiant text-sm sm:text-base text-neutral-500 max-w-sm leading-relaxed">
            We have extraordinary options for discerning couples, families, and private buyouts to enjoy together.
          </p>
        </div>

        {/* Minimalist Visa-Travels Filter Bar */}
        <div className="bg-white p-3 rounded-2xl sm:rounded-3xl shadow-sm border border-neutral-200/80 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full px-4 py-2 border-b sm:border-b-0 sm:border-r border-neutral-100">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">
              Destination
            </span>
            <select
              value={destFilter}
              onChange={(e) => setDestFilter(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
            >
              <option value="all">All African Regions</option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>{d.name}, {d.country}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 w-full px-4 py-2 border-b sm:border-b-0 sm:border-r border-neutral-100">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">
              Category
            </span>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-neutral-900 focus:outline-none cursor-pointer"
            >
              <option value="all">All Styles</option>
              <option value="beach">Beachfront Villa</option>
              <option value="mountain">Mountain Retreat</option>
              <option value="villa">Private Resort</option>
              <option value="cultural">Coastal Boutique</option>
            </select>
          </div>

          <div className="flex-1 w-full px-4 py-2 border-b sm:border-b-0 sm:border-r border-neutral-100">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-0.5">
              Available Dates
            </span>
            <span className="text-xs font-semibold text-neutral-900 block">
              Nov 14 – Nov 20, 2026
            </span>
          </div>

          <button
            onClick={() => {}}
            className="w-full sm:w-auto px-7 py-3 rounded-xl sm:rounded-2xl bg-neutral-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition shadow shrink-0"
          >
            Discover
          </button>
        </div>

        {/* 3 to 4 High-End Visa Travels Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((prop, idx) => (
            <div
              key={prop.id}
              className="group bg-white rounded-[28px] overflow-hidden shadow-subtle hover:shadow-elevation border border-neutral-200/80 p-3.5 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between px-1.5 pt-1.5 pb-2.5">
                  <div className="truncate mr-2">
                    <h3 className="font-queens text-base font-bold text-neutral-900 truncate">
                      {prop.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 truncate">
                      {prop.location}
                    </p>
                  </div>
                  <span className="badge-pill bg-amber-50 text-amber-800 border border-amber-200 text-[10px] shrink-0">
                    {idx === 0 ? '• 2 Slots left' : '• Open Trip'}
                  </span>
                </div>

                {/* Main Card Image with Rounded Corners */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 mb-3.5">
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover img-luxury-zoom cursor-pointer"
                    onClick={() => onOpenLightbox(prop.image, `${prop.name} · ${prop.location}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-2.5 right-2.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist({
                          id: prop.id,
                          type: 'property',
                          title: prop.name,
                          subtitle: prop.location,
                          image: prop.image,
                          rateUSD: prop.baseRateUSD,
                        });
                      }}
                      className="p-1.5 rounded-full bg-white/80 backdrop-blur-md hover:bg-white text-neutral-700 hover:text-solaya-terracotta shadow transition"
                      aria-label="Save to wishlist"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted(prop.id) ? 'fill-solaya-terracotta text-solaya-terracotta' : ''}`} />
                    </button>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-mono">
                    <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {formatPrice(prop.baseRateUSD)}/nt
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {prop.guests} Guests
                    </span>
                  </div>
                </div>

                {/* Metadata Row (Visa Travels style: Accommodation / Transport / Meals) */}
                <div className="grid grid-cols-3 gap-2 py-2 px-1 text-center border-t border-b border-neutral-100 text-[10px]">
                  <div>
                    <span className="text-neutral-400 block font-mono">Residences</span>
                    <span className="font-semibold text-neutral-800 truncate block">{prop.bedrooms} Suites</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-mono">Transport</span>
                    <span className="font-semibold text-neutral-800 truncate block">Chauffeur</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block font-mono">Dining</span>
                    <span className="font-semibold text-neutral-800 truncate block">Chef Inclusive</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 px-1 flex items-center justify-between">
                <button
                  onClick={() => onOpenLightbox(prop.image, `${prop.name} · ${prop.location}`)}
                  className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition"
                  title="Expand Photography"
                  aria-label="Expand photography"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onBookProperty(prop)}
                  className="px-4 py-2 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
                >
                  <span>Reserve</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

