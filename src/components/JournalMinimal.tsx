import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight, Share2, Bookmark, Check } from 'lucide-react';
import { ARTICLES } from '../data/solayaData';
import { Article } from '../types';
import { CornerPixelAccents } from './CornerPixelAccents';
import { pauseLenis, resumeLenis } from '../hooks/useLenis';

export const JournalMinimal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const articleModalRef = useRef<HTMLDivElement>(null);

  // Manage Lenis & body scroll lock when expanded article reader is open
  useEffect(() => {
    if (activeArticle) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      pauseLenis();

      const container = articleModalRef.current;
      const handleWheel = (e: WheelEvent) => {
        e.stopPropagation();
      };
      if (container) {
        container.addEventListener('wheel', handleWheel, { passive: true });
        container.focus();
      }

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveArticle(null);
      };
      window.addEventListener('keydown', handleKey);

      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.classList.remove('modal-open');
        resumeLenis();
        window.removeEventListener('keydown', handleKey);
        if (container) {
          container.removeEventListener('wheel', handleWheel);
        }
      };
    }
  }, [activeArticle]);

  const handleShare = () => {
    setCopiedLink(true);
    navigator.clipboard?.writeText?.(window.location.href);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // 3 Articles for the 3-column layout matching Image 3 reference
  const articlesList = ARTICLES.slice(0, 3);

  return (
    <section id="journal" className="py-24 sm:py-36 px-6 sm:px-10 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto space-y-14">
        
        {/* Header Layout (Matching Image 3 Reference: Left indicator badge + Right editorial title) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline pb-4">
          
          {/* Left: Indicator Badge */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-sm bg-solaya-terracotta inline-block" />
              <span className="w-1.5 h-1.5 rounded-sm bg-[#29aefb] inline-block" />
              <span className="font-ambiant text-xs tracking-wider text-neutral-400 lowercase font-medium">
                stories from somewhere
              </span>
            </div>
          </div>

          {/* Right: Large Editorial Headline (Image 3 Style in lowercase) */}
          <div className="lg:col-span-8">
            <h2 className="font-arcilla text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-neutral-900 leading-[1.08] lowercase">
              built for the way contemporary travel actually feels.
            </h2>
          </div>

        </div>

        {/* 3-Column Image Cards Grid (Matching Image 3 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Architectural Connectors with Floating Circular Badge */}
          <article
            onClick={() => setActiveArticle(articlesList[0])}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
              
              {/* Stepped Pixel Mosaic Corner */}
              <CornerPixelAccents position="top-right" color="bg-white" className="opacity-90" />

              <img
                src={articlesList[0]?.image || '/images/the_azure_house_6.jpg'}
                alt="Critical Regionalism"
                className="w-full h-full object-cover img-luxury-zoom"
              />

              {/* Floating Circular Badge Overlay (Image 3 Card 1 style) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/60 bg-black/10 backdrop-blur-[2px] flex items-center justify-center p-3 text-center transition-transform duration-700 group-hover:scale-105">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-white tracking-widest uppercase block font-semibold">
                      ARCHITECTURAL
                    </span>
                    <span className="font-mono text-[8px] text-white/80 tracking-widest uppercase block">
                      5°33′N · 0°11′W
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500" />
            </div>

            {/* Editorial Caption Under Image */}
            <div className="mt-3.5 space-y-1">
              <p className="font-ambiant text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <span className="font-queens font-bold text-neutral-900 lowercase mr-1.5">
                  critical regionalism.
                </span>
                <span className="lowercase font-light">
                  how contemporary african architects are reinventing monolithic rammed earth, sea-salt stone, and passive ocean ventilation.
                </span>
              </p>
            </div>
          </article>

          {/* Card 2: Intimate Disconnection with Stepped Pixel Corner */}
          <article
            onClick={() => setActiveArticle(articlesList[1] || articlesList[0])}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
              
              {/* Stepped Pixel Mosaic Corner */}
              <CornerPixelAccents position="bottom-right" color="bg-white" className="opacity-90" />

              <img
                src={articlesList[1]?.image || '/images/rwanda_mountain_sanctuary_3.jpg'}
                alt="The Art of Disconnection"
                className="w-full h-full object-cover img-luxury-zoom"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500" />
            </div>

            {/* Editorial Caption Under Image */}
            <div className="mt-3.5 space-y-1">
              <p className="font-ambiant text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <span className="font-queens font-bold text-neutral-900 lowercase mr-1.5">
                  the art of disconnection.
                </span>
                <span className="lowercase font-light">
                  why intentional travelers are choosing remote silence over transactional luxury, discovering deep renewal in pristine landscapes.
                </span>
              </p>
            </div>
          </article>

          {/* Card 3: Coastal Harvest with Glowing Frosted Tag (Image 3 Card 3 style) */}
          <article
            onClick={() => setActiveArticle(articlesList[2] || articlesList[0])}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 shadow-sm transition-all duration-700 group-hover:shadow-xl">
              
              {/* Stepped Pixel Mosaic Corner */}
              <CornerPixelAccents position="top-right" color="bg-white" className="opacity-90" />

              <img
                src={articlesList[2]?.image || '/images/ghana_coastal___culture_4.jpg'}
                alt="Harvest of the Coast"
                className="w-full h-full object-cover img-luxury-zoom"
              />

              {/* Glowing Frosted Glass Pill Tag (Image 3 Card 3 style) */}
              <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                <div className="px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/80 text-[11px] font-ambiant text-neutral-800 font-medium leading-snug text-center max-w-[210px] transition-transform duration-700 group-hover:scale-105">
                  <span className="lowercase">
                    "the best journeys are not about how far you go, but how deeply you experience a place."
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500" />
            </div>

            {/* Editorial Caption Under Image */}
            <div className="mt-3.5 space-y-1">
              <p className="font-ambiant text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                <span className="font-queens font-bold text-neutral-900 lowercase mr-1.5">
                  harvest of the coast.
                </span>
                <span className="lowercase font-light">
                  heirloom ingredients, mangrove honey, and slow open-fire dining rooted in ancestral west and east african coastal culinary traditions.
                </span>
              </p>
            </div>
          </article>

        </div>

      </div>

      {/* Expanded Full-Screen Article Reader Modal (Taking Section's Pure White Background) */}
      {activeArticle && (
        <div
          ref={articleModalRef}
          tabIndex={-1}
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 w-full h-full overflow-y-auto overscroll-contain bg-white text-neutral-900 animate-in fade-in duration-300 outline-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          
          {/* 1. Sticky Editorial Top Bar */}
          <header className="sticky top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/70 py-4 px-6 sm:px-12 flex items-center justify-between">
            
            {/* Prominent Back Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-neutral-300 bg-[#F9F9F8] hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95 lowercase"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
              <span>back to stories</span>
            </button>

            {/* Center Story Identity */}
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 lowercase">
              <span className="font-queens font-bold text-neutral-900 text-sm">solaya journal</span>
              <span>·</span>
              <span>{activeArticle.category.toLowerCase()}</span>
            </div>

            {/* Right Quick Share / Bookmark */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBookmarked((b) => !b)}
                className={`p-2 rounded-full border text-xs transition ${
                  bookmarked
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 hover:bg-neutral-100 text-neutral-600'
                }`}
                title="Bookmark dispatch"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 text-xs text-neutral-700 transition"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="font-mono text-[11px] lowercase">{copiedLink ? 'link copied' : 'share'}</span>
              </button>
            </div>

          </header>

          {/* 2. Monumental Hero Showcase */}
          <section className="relative w-full aspect-[16/8] max-h-[64vh] overflow-hidden bg-neutral-900">
            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Stepped Pixel Mosaic Corner */}
            <CornerPixelAccents position="top-right" color="bg-white" className="opacity-90" />

            <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 text-white space-y-3 max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-mono tracking-widest uppercase">
                  {activeArticle.category}
                </span>
                <span className="font-mono text-xs text-white/80 lowercase">
                  {activeArticle.readTime.toLowerCase()}
                </span>
              </div>

              <h1 className="font-queens text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight lowercase">
                {activeArticle.title.toLowerCase()}
              </h1>

              <div className="flex items-center gap-2 font-mono text-xs text-white/80 lowercase pt-1">
                <span>by {activeArticle.author.toLowerCase()}</span>
                <span>·</span>
                <span>{activeArticle.date.toLowerCase()}</span>
              </div>
            </div>
          </section>

          {/* 3. Main Reading Essay Body */}
          <main className="max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24 space-y-12">
            
            {/* Opening Dropcap Narrative */}
            <div className="space-y-6 font-ambiant text-base sm:text-lg text-neutral-800 leading-relaxed font-light">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? 'first-letter:font-queens first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left lowercase' : 'lowercase'}>
                  {paragraph.toLowerCase()}
                </p>
              ))}
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="my-10 p-8 rounded-3xl bg-[#FBFBF9] border border-neutral-200/70 space-y-3">
              <span className="font-arcilla text-4xl text-solaya-terracotta leading-none">”</span>
              <p className="font-queens text-xl sm:text-2xl font-bold text-neutral-900 leading-snug lowercase">
                "true luxury is not an accumulation of gilded surfaces; it is the deliberate presence of silence, space, and architectural honesty."
              </p>
              <cite className="block font-mono text-xs text-neutral-500 not-italic lowercase">
                — {activeArticle.author.toLowerCase()}, solaya architectural monographs
              </cite>
            </blockquote>

            {/* Author Attribution Card */}
            <div className="pt-8 border-t border-neutral-200 flex items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 block">
                  written & curated by
                </span>
                <h4 className="font-queens text-lg font-bold text-neutral-900 lowercase">
                  {activeArticle.author.toLowerCase()}
                </h4>
                <p className="text-xs text-neutral-500 font-mono lowercase">
                  senior architectural writer · solaya atelier accra
                </p>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 hover:bg-neutral-900 hover:text-white transition text-xs font-semibold lowercase"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>back to stories</span>
              </button>
            </div>

          </main>

        </div>
      )}

    </section>
  );
};
