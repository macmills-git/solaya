import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PROPERTIES } from '../data/solayaData';

interface BentoArchitectureSectionProps {
  onOpenBooking: () => void;
  onOpenLightbox: (src: string, cap: string) => void;
}

export const BentoArchitectureSection: React.FC<BentoArchitectureSectionProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: 'The Azure House: Coastal Coral Rag Masterwork',
      subtitle: 'Matemwe, Zanzibar',
      description: 'Seamlessly integrates open-air Swahili colonnades, natural coral limestone thermal mass, and tidal reflecting pools into an effortless beachfront sanctuary.',
      image: '/images/the_azure_house_6.jpg',
      tag: 'Bioclimatic Coastal',
    },
    {
      title: 'Mwezi Retreat: Cloud Forest Woven Pods',
      subtitle: 'Volcanoes National Park, Rwanda',
      description: 'Handwoven organic chalets hovering above primal ferns, capturing the silence of the Virungas while operating on zero-emission solar microgrids.',
      image: '/images/mwezi_retreat_7.jpg',
      tag: 'Regenerative Bamboo',
    },
    {
      title: 'The Palm Residence: Rammed Laterite Earth',
      subtitle: 'Gomoa Fetteh, Ghana',
      description: 'Constructed entirely with subsoil excavated on site, delivering extraordinary natural cooling alongside private contemporary gallery spaces.',
      image: '/images/the_palm_residence_8.jpg',
      tag: 'Critical Regionalism',
    },
  ];

  const current = slides[slide];

  return (
    <section id="architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <h2 className="font-queens text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
              Building Spaces with Purpose
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="badge-pill bg-neutral-100 text-neutral-700 border border-neutral-200">
                Innovative
              </span>
              <span className="badge-pill bg-solaya-terracotta/10 text-solaya-terracotta border border-solaya-terracotta/30">
                Bioclimatic
              </span>
              <span className="badge-pill bg-emerald-50 text-emerald-800 border border-emerald-200">
                Sustainability
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid (Reference 3 Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Smaller Card */}
          <div className="lg:col-span-5 bg-neutral-50 rounded-[32px] p-8 border border-neutral-200/80 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 mb-6 cursor-pointer" onClick={() => onOpenLightbox('/images/ghana_coastal___culture_4.jpg', 'Bioclimatic Rammed Earth')}>
                <img
                  src="/images/ghana_coastal___culture_4.jpg"
                  alt="Architectural detailing"
                  className="w-full h-full object-cover img-luxury-zoom"
                />
              </div>

              <h3 className="font-queens text-2xl font-bold text-neutral-900 mb-3">
                Crafting environments that inspire
              </h3>
              <p className="font-ambiant text-sm text-neutral-500 leading-relaxed">
                Innovative architecture that seamlessly blends ancestral African construction techniques, local materials, and contemporary comfort to create spaces that stand the test of time.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>SOLAYA ARCHITECTURAL LAB</span>
              <span className="text-neutral-900 font-bold">ACCRA HQ</span>
            </div>
          </div>

          {/* Right Large Dark Card (Reference 3 style) */}
          <div className="lg:col-span-7 bg-solaya-forest text-white rounded-[32px] p-8 sm:p-10 shadow-elevation flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Top Controls */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-sand/80 bg-white/10 px-3 py-1 rounded-full">
                  {current.tag}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-white/50">
                    {slide + 1} / {slides.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSlide((prev) => (prev + 1) % slides.length)}
                      className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-arcilla text-3xl sm:text-4xl text-white font-normal mb-3">
                {current.title}
              </h3>
              <p className="font-ambiant text-sm sm:text-base text-solaya-sand/80 max-w-xl leading-relaxed mb-8">
                {current.description}
              </p>
            </div>

            {/* Large Curved Architectural Imagery inside Card */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 cursor-pointer" onClick={() => onOpenLightbox(current.image, current.title)}>
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover img-luxury-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-queens text-sm font-semibold">{current.subtitle}</span>
                <span className="text-[11px] font-mono text-solaya-sand/80">Tap to expand</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

