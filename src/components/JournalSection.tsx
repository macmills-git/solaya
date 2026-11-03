import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, Clock, X, Compass } from 'lucide-react';
import { ARTICLES } from '../data/solayaData';
import { Article } from '../types';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-solaya-ivory text-solaya-charcoal border-b border-solaya-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-solaya-terracotta text-xs font-mono tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE SOLAYA DISPATCH & ESSAYS</span>
            </div>
            <h2 className="font-arcilla text-4xl sm:text-6xl text-solaya-forest font-normal tracking-tight">
              Stories from somewhere.
            </h2>
          </div>
          <p className="font-ambiant text-sm sm:text-base text-solaya-charcoal/70 max-w-md leading-relaxed font-light">
            Reflections on architecture, slow exploration, and cultural intimacy written by our resident curators across the African continent.
          </p>
        </div>

        {/* 4-Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARTICLES.map((art) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group bg-white rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevation border border-solaya-sand/30 flex flex-col justify-between cursor-pointer transition-all duration-500"
            >
              <div>
                {/* Article Thumbnail */}
                <div className="relative aspect-[16/11] overflow-hidden bg-solaya-forest/10">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover img-luxury-zoom"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-black/40 backdrop-blur-md text-solaya-sand border border-solaya-sand/20">
                      {art.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Header & Excerpt */}
                <div className="p-6">
                  <span className="text-[10px] uppercase font-queens tracking-[0.16em] text-solaya-terracotta block mb-2 font-medium">
                    {art.category}
                  </span>
                  <h3 className="font-arcilla text-xl sm:text-2xl text-solaya-forest group-hover:text-solaya-terracotta transition duration-300 mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="font-ambiant text-xs sm:text-sm text-solaya-charcoal/70 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-solaya-charcoal/10 flex items-center justify-between text-xs font-mono text-solaya-charcoal/50">
                <span>By {art.author}</span>
                <span className="flex items-center gap-1 text-solaya-forest group-hover:text-solaya-terracotta font-semibold">
                  Read <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-solaya-ivory rounded-3xl overflow-hidden shadow-2xl border border-solaya-sand/40 max-h-[90vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full shrink-0">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solaya-forest via-solaya-forest/40 to-black/30" />
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/80 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-queens tracking-widest text-solaya-sand">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h3 className="font-arcilla text-3xl sm:text-5xl mt-2 leading-tight">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center gap-3 text-xs font-mono text-solaya-sand/80 mt-2">
                  <span>Author: {activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>
            </div>

            {/* Modal Reading Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              {activeArticle.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-ambiant text-solaya-charcoal/90 leading-relaxed ${
                    i === 0 ? 'text-lg sm:text-xl font-normal text-solaya-forest leading-relaxed' : 'text-sm sm:text-base font-light'
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-8 border-t border-solaya-charcoal/15 flex items-center justify-between text-xs font-mono text-solaya-charcoal/60">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-solaya-terracotta" />
                  <span>The SOLAYA Dispatch Series</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 rounded-full bg-solaya-forest text-solaya-sand font-bold text-xs uppercase tracking-wider hover:bg-solaya-charcoal transition"
                >
                  Done Reading
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

