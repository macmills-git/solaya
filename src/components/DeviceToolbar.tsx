import React from 'react';
import { Monitor, Tablet, Smartphone, Sparkles, MessageCircle, Heart, Compass } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/solayaData';

interface DeviceToolbarProps {
  viewport: 'desktop' | 'tablet' | 'mobile';
  setViewport: (v: 'desktop' | 'tablet' | 'mobile') => void;
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  wishlistCount: number;
  openWishlist: () => void;
  openConcierge: () => void;
  openBrandStudio: () => void;
}

export const DeviceToolbar: React.FC<DeviceToolbarProps> = ({
  viewport,
  setViewport,
  currency,
  setCurrency,
  wishlistCount,
  openWishlist,
  openConcierge,
  openBrandStudio,
}) => {
  return (
    <aside aria-label="Experience controls" className="fixed top-0 left-0 right-0 z-50 bg-solaya-charcoal/95 backdrop-blur-md text-solaya-sand border-b border-solaya-sand/15 px-3 py-1.5 transition-all text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Viewport Switcher */}
        <div className="flex items-center gap-1">
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider text-solaya-sand/50 mr-2 font-ambiant">
            View Mode:
          </span>
          <button
            onClick={() => setViewport('desktop')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition ${
              viewport === 'desktop'
                ? 'bg-solaya-forest text-solaya-sand shadow-sm border border-solaya-sand/30'
                : 'text-white/60 hover:text-white'
            }`}
            title="Desktop 1440px Fluid View"
          >
            <Monitor className="w-3 h-3" />
            <span className="hidden md:inline">Desktop</span>
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition ${
              viewport === 'tablet'
                ? 'bg-solaya-forest text-solaya-sand shadow-sm border border-solaya-sand/30'
                : 'text-white/60 hover:text-white'
            }`}
            title="Tablet 768px View"
          >
            <Tablet className="w-3 h-3" />
            <span className="hidden md:inline">Tablet (768px)</span>
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition ${
              viewport === 'mobile'
                ? 'bg-solaya-forest text-solaya-sand shadow-sm border border-solaya-sand/30'
                : 'text-white/60 hover:text-white'
            }`}
            title="Mobile 390px Phone Frame"
          >
            <Smartphone className="w-3 h-3" />
            <span className="hidden md:inline">Mobile (390px)</span>
          </button>
        </div>

        {/* Center: Brand Coordinates Tag */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-solaya-sand/70 font-mono tracking-wider">
          <Compass className="w-3 h-3 text-solaya-terracotta" />
          <span>ACCRA HQ · 5°33′N 0°11′W</span>
          <span className="text-solaya-sand/30">•</span>
          <span>CONTEMPORARY AFRICAN HOSPITALITY</span>
        </div>

        {/* Right: Tools & Currency */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Currency Selector */}
          <div className="flex items-center gap-1 bg-black/30 rounded-full px-2 py-0.5 border border-white/10">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full transition ${
                  currency === c
                    ? 'bg-solaya-terracotta text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={openWishlist}
            className="flex items-center gap-1 text-[11px] text-solaya-sand/80 hover:text-white transition px-2 py-1 rounded-full hover:bg-white/5"
            title="Open Saved Sanctuaries"
          >
            <Heart className="w-3 h-3 text-solaya-terracotta fill-solaya-terracotta/30" />
            <span className="hidden sm:inline">Wishlist</span>
            <span className="bg-solaya-terracotta text-white rounded-full text-[10px] px-1.5 py-0.2 font-mono font-bold">
              {wishlistCount}
            </span>
          </button>

          {/* WhatsApp Concierge */}
          <button
            onClick={openConcierge}
            className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 transition px-2 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30"
          >
            <MessageCircle className="w-3 h-3" />
            <span className="hidden sm:inline">Concierge</span>
          </button>

          {/* Brand Studio & Guidelines Drawer */}
          <button
            onClick={openBrandStudio}
            className="flex items-center gap-1.5 text-[11px] font-medium bg-solaya-sand/20 hover:bg-solaya-sand/30 text-solaya-sand px-2.5 py-1 rounded-full transition border border-solaya-sand/30"
            title="Open Brand Identity & Design System Studio"
          >
            <Sparkles className="w-3 h-3 text-solaya-sand" />
            <span>Brand Studio</span>
          </button>
        </div>

      </div>
    </aside>
  );
};

