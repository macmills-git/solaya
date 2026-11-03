import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface EditorialStatementProps {
  onOpenBooking: () => void;
}

export const EditorialStatement: React.FC<EditorialStatementProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-32 sm:py-44 bg-solaya-forest text-solaya-ivory overflow-hidden">
      
      {/* Background Cinematic Atmosphere Image with Heavy Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/atmosphere_15.jpg"
          alt="Atmosphere at SOLAYA"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solaya-forest via-solaya-forest/90 to-solaya-forest/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Deep Editorial Manifesto */}
          <div className="lg:col-span-8">
            <span className="font-queens text-xs uppercase tracking-[0.28em] text-solaya-sand block mb-6">
              The SOLAYA Manifesto
            </span>

            <h2 className="font-arcilla text-4xl sm:text-6xl lg:text-7xl text-white font-normal leading-[1.05] tracking-tight mb-8">
              The beauty of being somewhere else.
            </h2>

            <div className="space-y-6 text-solaya-ivory/85 font-ambiant text-base sm:text-xl font-light leading-relaxed max-w-2xl">
              <p>
                We travel not to escape life, but for life not to escape us. In the quiet sanctuaries of SOLAYA, time slows down, allowing you to discover the rhythm of the earth and the melody of your own stillness.
              </p>
              <p className="text-sm sm:text-base text-solaya-sand/80 leading-relaxed">
                Here, architecture does not conquer nature; it bows to it. The sand beneath your bare feet, the sound of dawn surf breaking against coral rag, the warmth of a volcanic tea hearth—these are not amenities. They are reasons to remember who you are.
              </p>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-solaya-sand hover:bg-white text-solaya-forest font-bold text-xs uppercase tracking-[0.16em] transition shadow-lg flex items-center gap-2 group"
              >
                <span>Find Your Somewhere</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <span className="text-xs font-mono text-solaya-sand/60 tracking-wider">
                Accra · Matemwe · Musanze · Petite Côte
              </span>
            </div>
          </div>

          {/* Right: Framed Architectural Vignette Card */}
          <div className="lg:col-span-4">
            <div className="relative p-3 rounded-3xl bg-white/5 backdrop-blur-md border border-solaya-sand/20 shadow-elevation">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/solaya_coastal_sanctuary_1.jpg"
                  alt="SOLAYA Architecture"
                  className="w-full h-full object-cover img-luxury-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-solaya-sand">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-sand/70">
                    Sanctuary Detail 014
                  </span>
                  <p className="font-arcilla text-2xl text-white mt-1">
                    Gomoa Fetteh, Ghana
                  </p>
                  <p className="text-xs text-solaya-sand/80 font-light mt-1">
                    Bioclimatic rammed earth framing the Atlantic dawn.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

