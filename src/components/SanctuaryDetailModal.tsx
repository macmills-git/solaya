import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Check, Sparkles, Compass, ShieldCheck, Heart, Share2, Calendar, Users, Moon } from 'lucide-react';
import { Property, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/solayaData';
import { pauseLenis, resumeLenis } from '../hooks/useLenis';
import { VisualMonographSection } from './VisualMonographSection';

export type ModalTheme = 'sand' | 'dark' | 'cobalt' | 'sky' | 'white' | 'midnight';

interface SanctuaryDetailModalProps {
  property: Property;
  theme?: ModalTheme;
  currency: CurrencyCode;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

const THEME_CONFIGS: Record<ModalTheme, {
  containerBg: string;
  isDark: boolean;
  textColor: string;
  subtextColor: string;
  headerBg: string;
  headerBorder: string;
  backBtnClass: string;
  cardBg: string;
  cardBorder: string;
  calcBg: string;
  calcBorder: string;
  primaryBtn: string;
  secondaryBtn: string;
  dotGridOverlay?: boolean;
}> = {
  sand: {
    containerBg: 'bg-[#FDFBF7]',
    isDark: false,
    textColor: 'text-neutral-900',
    subtextColor: 'text-neutral-500',
    headerBg: 'bg-[#FDFBF7]/90 backdrop-blur-md',
    headerBorder: 'border-neutral-200/60',
    backBtnClass: 'border-neutral-300/80 bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800',
    cardBg: 'bg-white',
    cardBorder: 'border-neutral-200/80',
    calcBg: 'bg-white',
    calcBorder: 'border-neutral-200/80',
    primaryBtn: 'bg-neutral-900 hover:bg-black text-white',
    secondaryBtn: 'border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white text-neutral-800',
  },
  dark: {
    containerBg: 'bg-[#0A0D0B]',
    isDark: true,
    textColor: 'text-white',
    subtextColor: 'text-neutral-400',
    headerBg: 'bg-[#0A0D0B]/90 backdrop-blur-md',
    headerBorder: 'border-white/10',
    backBtnClass: 'border-white/20 bg-neutral-900 hover:bg-white hover:text-black hover:border-white text-white',
    cardBg: 'bg-[#131714]',
    cardBorder: 'border-white/10',
    calcBg: 'bg-[#131714]',
    calcBorder: 'border-white/10',
    primaryBtn: 'bg-white hover:bg-neutral-200 text-neutral-950 font-semibold',
    secondaryBtn: 'border-white/20 bg-neutral-900 hover:bg-white hover:text-black text-white',
  },
  cobalt: {
    containerBg: 'bg-[#081326]',
    isDark: true,
    textColor: 'text-white',
    subtextColor: 'text-sky-200/70',
    headerBg: 'bg-[#081326]/90 backdrop-blur-md',
    headerBorder: 'border-sky-500/20',
    backBtnClass: 'border-sky-500/30 bg-[#0E1E38] hover:bg-[#29AEFB] hover:text-black hover:border-[#29AEFB] text-white',
    cardBg: 'bg-[#0E1E38]',
    cardBorder: 'border-sky-500/20',
    calcBg: 'bg-[#0E1E38]',
    calcBorder: 'border-sky-500/20',
    primaryBtn: 'bg-[#29AEFB] hover:bg-[#1E90D8] text-neutral-950 font-bold',
    secondaryBtn: 'border-sky-500/30 bg-[#0E1E38] hover:bg-[#29AEFB] hover:text-black text-white',
    dotGridOverlay: true,
  },
  sky: {
    containerBg: 'bg-[#3B6285]',
    isDark: true,
    textColor: 'text-white',
    subtextColor: 'text-white/70',
    headerBg: 'bg-[#3B6285]/90 backdrop-blur-md',
    headerBorder: 'border-white/20',
    backBtnClass: 'border-white/30 bg-white/10 hover:bg-white hover:text-[#3B6285] text-white',
    cardBg: 'bg-[#2E5170]',
    cardBorder: 'border-white/20',
    calcBg: 'bg-[#2E5170]',
    calcBorder: 'border-white/20',
    primaryBtn: 'bg-white hover:bg-neutral-100 text-[#2E5170] font-semibold',
    secondaryBtn: 'border-white/30 bg-white/10 hover:bg-white hover:text-[#3B6285] text-white',
  },
  white: {
    containerBg: 'bg-white',
    isDark: false,
    textColor: 'text-neutral-900',
    subtextColor: 'text-neutral-500',
    headerBg: 'bg-white/90 backdrop-blur-md',
    headerBorder: 'border-neutral-200/80',
    backBtnClass: 'border-neutral-300 bg-[#F9F9F8] hover:bg-neutral-900 hover:text-white text-neutral-800',
    cardBg: 'bg-[#FAFAFA]',
    cardBorder: 'border-neutral-200/80',
    calcBg: 'bg-[#FAFAFA]',
    calcBorder: 'border-neutral-200/80',
    primaryBtn: 'bg-neutral-900 hover:bg-black text-white',
    secondaryBtn: 'border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white text-neutral-800',
  },
  midnight: {
    containerBg: 'bg-[#070A0F]',
    isDark: true,
    textColor: 'text-white',
    subtextColor: 'text-neutral-400',
    headerBg: 'bg-[#070A0F]/90 backdrop-blur-md',
    headerBorder: 'border-white/10',
    backBtnClass: 'border-white/20 bg-[#0E131C] hover:bg-white hover:text-black text-white',
    cardBg: 'bg-[#0E131C]',
    cardBorder: 'border-white/10',
    calcBg: 'bg-[#0E131C]',
    calcBorder: 'border-white/10',
    primaryBtn: 'bg-white hover:bg-neutral-200 text-neutral-950 font-semibold',
    secondaryBtn: 'border-white/20 bg-[#0E131C] hover:bg-white hover:text-black text-white',
  },
};

export const SanctuaryDetailModal: React.FC<SanctuaryDetailModalProps> = ({
  property,
  theme = 'sand',
  currency,
  onClose,
  onShowToast,
}) => {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const cfg = THEME_CONFIGS[theme] || THEME_CONFIGS.sand;
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive Stay Calculator State
  const [nights, setNights] = useState<number>(3); // default to 3 nights to highlight multi-night discount
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [selectedSuiteIdx, setSelectedSuiteIdx] = useState<number>(0);
  const [inquirySent, setInquirySent] = useState<boolean>(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);

  // Robust modal scrolling & background lock
  useEffect(() => {
    // 1. Prevent background page scroll & signal modal-open to Lenis prevent check
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    // 2. Pause global Lenis scroll loop
    pauseLenis();

    // 3. Stop wheel propagation to window so Lenis never intercepts modal scroll events
    const container = containerRef.current;
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: true });
      container.focus();
    }

    // 4. Keyboard Escape to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('modal-open');
      resumeLenis();
      window.removeEventListener('keydown', handleKeyDown);
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [onClose]);

  // Currency helper
  const formatMoney = (usd: number) => {
    const val = Math.round(usd * curr.rate);
    return `${curr.symbol}${val.toLocaleString()}`;
  };

  // Pricing calculation with 3+ days and 7+ days discount logic
  const discount3Days = property.discount3DaysPercent ?? 15;
  const discount7Days = property.discount7DaysPercent ?? 25;

  let discountRate = 0;
  if (nights >= 7) {
    discountRate = discount7Days / 100;
  } else if (nights >= 3) {
    discountRate = discount3Days / 100;
  }

  const baseNightly = property.baseRateUSD;
  const effectiveNightlyUSD = Math.round(baseNightly * (1 - discountRate));
  const suiteUpgradeUSD = property.suites[selectedSuiteIdx]?.upgradeUSD ?? 0;
  const totalBaseUSD = (baseNightly + suiteUpgradeUSD) * nights;
  const totalDiscountUSD = Math.round(baseNightly * discountRate * nights);
  const finalTotalUSD = totalBaseUSD - totalDiscountUSD;

  const handleBook = () => {
    setInquirySent(true);
    onShowToast(`sanctuary inquiry confirmed for ${property.name} (${nights} nights). our private registrar will contact you.`);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      data-lenis-prevent="true"
      className={`fixed inset-0 z-50 w-full h-full overflow-y-auto overscroll-contain ${cfg.containerBg} ${cfg.textColor} animate-in fade-in duration-300 outline-none`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      
      {/* Optional Cobalt Dot Grid Texture if opened from DotGrid section */}
      {cfg.dotGridOverlay && (
        <div
          className="fixed inset-0 pointer-events-none bg-[radial-gradient(#1E3A8A_1.5px,transparent_1.5px)] [background-size:64px_64px] opacity-40 z-0"
          aria-hidden="true"
        />
      )}

      {/* 1. Sticky Editorial Top Bar */}
      <header className={`sticky top-0 left-0 right-0 z-40 ${cfg.headerBg} border-b ${cfg.headerBorder} py-4 px-6 sm:px-12 flex items-center justify-between`}>
        
        {/* Prominent Back Button */}
        <button
          onClick={onClose}
          className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 lowercase ${cfg.backBtnClass}`}
        >
          <ArrowLeft className="w-4 h-4 stroke-[2]" />
          <span>back to sanctuaries</span>
        </button>

        {/* Center Sanctuary Identity */}
        <div className={`hidden md:flex items-center gap-2 text-xs font-mono lowercase ${cfg.subtextColor}`}>
          <span className={`font-queens font-bold text-sm ${cfg.textColor}`}>{property.name.toLowerCase()}</span>
          <span>·</span>
          <span>{property.location.toLowerCase()}</span>
        </div>

        {/* Right Quick Action */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <span className={`font-mono text-xs font-bold block ${cfg.textColor}`}>
              {formatMoney(effectiveNightlyUSD)}
              {discountRate > 0 && (
                <span className="text-[10px] text-emerald-400 ml-1.5 font-normal">
                  ({Math.round(discountRate * 100)}% off)
                </span>
              )}
            </span>
            <span className={`font-mono text-[10px] ${cfg.subtextColor}`}>per night</span>
          </div>

          <button
            onClick={handleBook}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all shadow-sm active:scale-95 lowercase ${cfg.primaryBtn}`}
          >
            reserve stay
          </button>
        </div>

      </header>

      {/* 2. Monumental Hero Showcase */}
      <section className="relative w-full aspect-[16/9] max-h-[72vh] overflow-hidden bg-neutral-900 z-10">
        <img
          src={property.gallery[activePhotoIdx] || property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-all duration-700 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

        {/* Floating Architectural Badge */}
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-mono tracking-widest uppercase">
                {property.typeCategory} sanctuary
              </span>
              <span className="px-3 py-1 rounded-full bg-solaya-terracotta text-white text-[10px] font-mono tracking-widest uppercase">
                15% off 3+ nights
              </span>
            </div>

            <h1 className="font-queens text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none lowercase">
              {property.name.toLowerCase()}
            </h1>

            <p className="font-ambiant text-xs sm:text-sm text-white/90 max-w-xl font-light leading-relaxed lowercase">
              {property.tagline.toLowerCase()}
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs text-white/90 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/20 shrink-0">
            <div>
              <span className="block text-lg font-bold">{property.bedrooms}</span>
              <span className="text-[10px] text-white/60 lowercase">bedrooms</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div>
              <span className="block text-lg font-bold">{property.bathrooms ?? 4}</span>
              <span className="text-[10px] text-white/60 lowercase">bathrooms</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div>
              <span className="block text-lg font-bold">{property.sqm ?? 580} m²</span>
              <span className="text-[10px] text-white/60 lowercase">estate area</span>
            </div>
            <div className="w-[1px] h-6 bg-white/20" />
            <div>
              <span className="block text-lg font-bold">up to {property.guests}</span>
              <span className="text-[10px] text-white/60 lowercase">guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Container */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-24">
        
        {/* Narrative & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className={`text-[10px] font-mono tracking-widest uppercase block mb-2 lowercase ${cfg.subtextColor}`}>
                the sanctuary philosophy
              </span>
              <h2 className={`font-queens text-3xl sm:text-4xl font-bold tracking-tight leading-snug lowercase ${cfg.textColor}`}>
                where critical regionalism meets intuitive luxury.
              </h2>
            </div>

            <p className={`font-ambiant text-sm sm:text-base leading-relaxed font-light ${cfg.subtextColor}`}>
              {property.description}
            </p>

            {/* Curated Key Highlights */}
            <div className={`pt-4 border-t space-y-3 ${cfg.cardBorder}`}>
              <h4 className={`font-queens text-sm font-bold tracking-wider lowercase ${cfg.textColor}`}>
                architectural highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className={`flex items-center gap-2 text-xs font-ambiant ${cfg.textColor}`}>
                    <Check className="w-3.5 h-3.5 text-solaya-terracotta shrink-0" />
                    <span>{amenity.toLowerCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Stay & Discount Pricing Box */}
          <div className={`lg:col-span-5 ${cfg.calcBg} rounded-3xl p-6 sm:p-8 border ${cfg.calcBorder} shadow-[0_12px_40px_rgba(0,0,0,0.06)] space-y-6`}>
            
            <div className={`flex items-baseline justify-between border-b ${cfg.calcBorder} pb-5`}>
              <div>
                <span className={`font-queens text-3xl font-bold ${cfg.textColor}`}>
                  {formatMoney(effectiveNightlyUSD)}
                </span>
                <span className={`text-xs font-mono ml-1.5 ${cfg.subtextColor}`}>/ night</span>
              </div>
              
              {discountRate > 0 ? (
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-semibold lowercase">
                  {Math.round(discountRate * 100)}% multi-night discount
                </span>
              ) : (
                <span className={`text-[11px] font-mono lowercase ${cfg.subtextColor}`}>
                  standard nightly rate
                </span>
              )}
            </div>

            {/* Discounted Tier Selector (Highlighting 3+ Days) */}
            <div className="space-y-2">
              <label className={`text-[11px] font-mono uppercase tracking-wider block lowercase ${cfg.subtextColor}`}>
                duration of stay & discount tiers:
              </label>

              <div className="grid grid-cols-4 gap-2">
                {[
                  { n: 1, label: '1 night', badge: 'base' },
                  { n: 3, label: '3 nights', badge: '15% off' },
                  { n: 5, label: '5 nights', badge: '15% off' },
                  { n: 7, label: '7 nights', badge: '25% off' },
                ].map((tier) => (
                  <button
                    key={tier.n}
                    type="button"
                    onClick={() => setNights(tier.n)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      nights === tier.n
                        ? cfg.isDark
                          ? 'border-white bg-white text-neutral-950 font-bold shadow-sm'
                          : 'border-neutral-900 bg-neutral-900 text-white shadow-sm'
                        : `${cfg.calcBorder} hover:opacity-80 ${cfg.textColor}`
                    }`}
                  >
                    <span className="block text-xs font-bold font-mono">{tier.label}</span>
                    <span className={`block text-[9px] mt-0.5 font-mono ${
                      nights === tier.n ? 'text-emerald-700' : 'text-emerald-400 font-semibold'
                    }`}>
                      {tier.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Suite Configuration */}
            <div className="space-y-2 pt-2">
              <label className={`text-[11px] font-mono uppercase tracking-wider block lowercase ${cfg.subtextColor}`}>
                residence configuration:
              </label>
              <div className="space-y-2">
                {property.suites.map((suite, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedSuiteIdx(idx)}
                    className={`p-3 rounded-xl border cursor-pointer transition ${
                      selectedSuiteIdx === idx
                        ? cfg.isDark
                          ? 'border-white bg-white/10 shadow-sm'
                          : 'border-neutral-900 bg-neutral-50/80 shadow-sm'
                        : `${cfg.calcBorder} hover:border-neutral-400`
                    }`}
                  >
                    <div className={`flex items-center justify-between text-xs font-semibold lowercase ${cfg.textColor}`}>
                      <span>{suite.name.toLowerCase()}</span>
                      <span className={`font-mono ${cfg.subtextColor}`}>
                        {suite.upgradeUSD === 0 ? 'included' : `+${formatMoney(suite.upgradeUSD)}/nt`}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-1 font-light leading-relaxed ${cfg.subtextColor}`}>
                      {suite.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Calculation Breakdown */}
            <div className={`pt-4 border-t ${cfg.calcBorder} space-y-2 text-xs font-mono`}>
              <div className={`flex justify-between ${cfg.subtextColor}`}>
                <span>{formatMoney(baseNightly + suiteUpgradeUSD)} × {nights} nights</span>
                <span>{formatMoney(totalBaseUSD)}</span>
              </div>

              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>multi-day privilege ({Math.round(discountRate * 100)}% off)</span>
                  <span>−{formatMoney(totalDiscountUSD)}</span>
                </div>
              )}

              <div className={`flex justify-between ${cfg.subtextColor}`}>
                <span>private chef & butler</span>
                <span className="text-emerald-400 font-medium">complimentary</span>
              </div>

              <div className={`flex justify-between ${cfg.subtextColor}`}>
                <span>airport chauffeur escort</span>
                <span className="text-emerald-400 font-medium">complimentary</span>
              </div>

              <div className={`flex justify-between text-sm font-bold pt-3 border-t ${cfg.calcBorder} ${cfg.textColor}`}>
                <span>total stay investment</span>
                <span>{formatMoney(finalTotalUSD)}</span>
              </div>
            </div>

            {/* Booking Action */}
            <button
              onClick={handleBook}
              className={`w-full py-4 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md active:scale-95 lowercase ${cfg.primaryBtn}`}
            >
              {inquirySent ? 'inquiry received · registrar assigned' : `request stay (${nights} nights)`}
            </button>

            <p className={`text-[10px] text-center font-mono lowercase ${cfg.subtextColor}`}>
              transparent rates · zero booking commissions · complimentary cancellation 30 days prior
            </p>

          </div>

        </div>

        {/* 4. Expansive Facility Visual Monograph (Exact Match to User Reference Inspiration) */}
        <VisualMonographSection
          currency={currency}
          isDark={cfg.isDark}
          onPhotoClick={(src) => {
            const foundIdx = property.gallery.findIndex((g) => g === src);
            if (foundIdx >= 0) setActivePhotoIdx(foundIdx);
          }}
        />

        {/* 5. Comprehensive All-Inclusive Services Catalog */}
        <section className={`space-y-10 pt-10 border-t ${cfg.cardBorder}`}>
          <div>
            <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1 lowercase ${cfg.subtextColor}`}>
              unhurried hospitality
            </span>
            <h3 className={`font-queens text-2xl sm:text-4xl font-bold tracking-tight lowercase ${cfg.textColor}`}>
              all services & bespoke inclusions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(property.services ?? [
              {
                category: "Bespoke Culinary",
                items: ["Private resident chef", "Bespoke daily menus", "Sunset sandspit braai", "Artisanal tea sommelier"]
              },
              {
                category: "Stillness & Wellness",
                items: ["In-villa stone baths", "Sunrise yoga deck", "Sound bath meditation", "Herbal steam chamber"]
              },
              {
                category: "Concierge & Expeditions",
                items: ["Private dhow & captain", "VIP airport customs escort", "Chauffeur transfer", "24/7 personal estate host"]
              },
              {
                category: "Architectural Amenities",
                items: ["Saltwater infinity pool", "Starlink satellite mesh", "Marshall acoustics", "Belgian organic linens"]
              }
            ]).map((serv, idx) => (
              <div key={idx} className={`${cfg.cardBg} p-6 rounded-2xl border ${cfg.cardBorder} shadow-sm space-y-4`}>
                <span className="w-2 h-2 rounded-full bg-solaya-terracotta inline-block" />
                <h4 className={`font-queens text-lg font-bold lowercase ${cfg.textColor}`}>
                  {serv.category.toLowerCase()}
                </h4>
                <ul className={`space-y-2.5 text-xs font-light leading-relaxed font-ambiant ${cfg.subtextColor}`}>
                  {serv.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-solaya-terracotta font-bold text-sm leading-none mt-0.5">•</span>
                      <span>{item.toLowerCase()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Spotlight & Sustainability Credentials */}
        <section className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-14 space-y-10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20 text-[10px] font-mono tracking-widest uppercase">
                curator statement
              </span>

              <h3 className="font-queens text-2xl sm:text-4xl font-bold leading-tight text-white lowercase">
                "{property.architectQuote?.text.toLowerCase() ?? 'the architecture does not impose upon the landscape; it bows to it.'}"
              </h3>

              <div className="pt-2">
                <p className="font-queens text-base font-bold text-white lowercase">
                  {property.architectQuote?.author.toLowerCase() ?? 'solaya atelier team'}
                </p>
                <p className="font-mono text-xs text-white/50 lowercase">
                  {property.architectQuote?.role.toLowerCase() ?? 'principal architects & conservation team'}
                </p>
              </div>
            </div>

            {/* Sustainability Stat Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {(property.sustainabilityMetrics ?? [
                { stat: "100%", label: "Solar & Clean Energy" },
                { stat: "0%", label: "Single-Use Plastics" },
                { stat: "92%", label: "Local Natural Materials" },
                { stat: "100%", label: "Greywater Ecological Cycle" }
              ]).map((m, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-1">
                  <span className="font-queens text-3xl sm:text-4xl font-bold text-white block">
                    {m.stat}
                  </span>
                  <span className="font-mono text-[11px] text-white/60 lowercase leading-tight block">
                    {m.label.toLowerCase()}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. Bottom Back Bar */}
        <div className={`pt-8 border-t ${cfg.cardBorder} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <button
            onClick={onClose}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full border text-xs font-semibold tracking-wide lowercase transition-all ${cfg.secondaryBtn}`}
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>return to all sanctuaries</span>
          </button>

          <button
            onClick={handleBook}
            className={`px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md lowercase ${cfg.primaryBtn}`}
          >
            reserve this sanctuary
          </button>
        </div>

      </main>

    </div>
  );
};
