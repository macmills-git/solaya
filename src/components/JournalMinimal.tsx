import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../data/solayaData';
import { Article } from '../types';
import { CornerPixelAccents } from './CornerPixelAccents';

export const JournalMinimal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

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

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto space-y-6 text-neutral-900">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-neutral-100 transition"
              aria-label="Close article"
            >
              <X className="w-5 h-5 text-neutral-500" />
            </button>

            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 block mb-2 lowercase">
                {activeArticle.category.toLowerCase()} · {activeArticle.readTime.toLowerCase()}
              </span>
              <h2 className="font-queens text-3xl sm:text-4xl font-bold leading-tight lowercase">
                {activeArticle.title.toLowerCase()}
              </h2>
              <span className="text-xs text-neutral-400 font-mono mt-1 block lowercase">
                by {activeArticle.author.toLowerCase()} · {activeArticle.date.toLowerCase()}
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 font-ambiant text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              {activeArticle.content.map((p, i) => (
                <p key={i} className="lowercase">{p.toLowerCase()}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
