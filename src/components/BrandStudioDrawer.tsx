import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, BookOpen, Layers } from 'lucide-react';
import { BRAND_INFO } from '../data/solayaData';

interface BrandStudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyColor: (hex: string) => void;
}

export const BrandStudioDrawer: React.FC<BrandStudioDrawerProps> = ({
  isOpen,
  onClose,
  onCopyColor,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'system' | 'manifesto'>('system');

  if (!isOpen) return null;

  const colors = [
    { name: 'Deep Forest', hex: '#183D32', role: 'Brand Primary & Dark Canvas', textLight: true },
    { name: 'Warm Sand', hex: '#DCCBB0', role: 'Secondary & Neutral Accents', textLight: false },
    { name: 'Ivory', hex: '#F8F5EF', role: 'Base Background Surface', textLight: false },
    { name: 'Terracotta', hex: '#B96F51', role: 'High-Touch CTA & Location Accent', textLight: true },
    { name: 'Olive Charcoal', hex: '#343B32', role: 'Primary Editorial Body Typography', textLight: true },
    { name: 'Pure White', hex: '#FFFFFF', role: 'Elevated Cards & High Contrast', textLight: false },
  ];

  const handleCopy = (hex: string) => {
    onCopyColor(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-2xl bg-solaya-ivory shadow-2xl border-l border-solaya-sand/30 flex flex-col justify-between text-solaya-charcoal">
          
          {/* Header */}
          <div className="p-6 bg-solaya-forest text-solaya-sand border-b border-solaya-sand/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-solaya-terracotta/30 border border-solaya-terracotta flex items-center justify-center text-solaya-sand">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-arcilla text-2xl text-white font-normal">SOLAYA Brand Studio</h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-sand/70 block">
                  Design System & Positioning Architecture
                </span>
              </div>
            </div>

            <button onClick={onClose} className="p-1 rounded-full text-solaya-sand/70 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-solaya-charcoal/10 bg-white px-6">
            <button
              onClick={() => setActiveTab('system')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition ${
                activeTab === 'system'
                  ? 'border-solaya-forest text-solaya-forest'
                  : 'border-transparent text-solaya-charcoal/50 hover:text-solaya-charcoal'
              }`}
            >
              Design Tokens & Type
            </button>
            <button
              onClick={() => setActiveTab('manifesto')}
              className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition ${
                activeTab === 'manifesto'
                  ? 'border-solaya-forest text-solaya-forest'
                  : 'border-transparent text-solaya-charcoal/50 hover:text-solaya-charcoal'
              }`}
            >
              Positioning & Strategy
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
            
            {activeTab === 'system' ? (
              <>
                {/* Color Palette Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/60 font-mono">
                      Curated Color Palette (Click to Copy)
                    </h4>
                    <span className="text-[10px] text-solaya-charcoal/40 font-mono">Hex & Token Specs</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {colors.map((c) => (
                      <div
                        key={c.hex}
                        onClick={() => handleCopy(c.hex)}
                        className="p-4 rounded-2xl cursor-pointer border border-solaya-sand/40 hover:scale-105 transition-all shadow-subtle group"
                        style={{ backgroundColor: c.hex }}
                      >
                        <div className="flex items-center justify-between mb-8">
                          <span className={`text-[10px] font-mono font-bold ${c.textLight ? 'text-white' : 'text-solaya-charcoal'}`}>
                            {c.hex}
                          </span>
                          <span className={`p-1 rounded-full ${c.textLight ? 'text-white/60 group-hover:text-white' : 'text-solaya-charcoal/60 group-hover:text-solaya-charcoal'}`}>
                            {copiedHex === c.hex ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                        <h5 className={`font-semibold text-xs ${c.textLight ? 'text-white' : 'text-solaya-charcoal'}`}>
                          {c.name}
                        </h5>
                        <p className={`text-[10px] ${c.textLight ? 'text-white/70' : 'text-solaya-charcoal/70'} mt-0.5 truncate`}>
                          {c.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography Trinity Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/60 font-mono mb-4">
                    The Typographic Trinity
                  </h4>

                  <div className="space-y-4">
                    {/* Arcilla */}
                    <div className="p-5 rounded-2xl bg-white border border-solaya-sand/40">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-terracotta font-bold">
                          Primary Display & Big Headings
                        </span>
                        <span className="text-xs font-mono text-solaya-charcoal/40">SilverStag Foundry</span>
                      </div>
                      <h3 className="font-arcilla text-4xl text-solaya-forest mb-2">
                        SLTF Arcilla Regular
                      </h3>
                      <p className="font-arcilla text-lg text-solaya-charcoal/70 italic mb-2">
                        &ldquo;Somewhere worth getting lost in.&rdquo;
                      </p>
                      <p className="text-xs text-solaya-charcoal/60 font-ambiant">
                        Chiselled, architectural luxury serif with high stroke contrast, evoking sun-dried clay and stone carvings.
                      </p>
                    </div>

                    {/* Queens */}
                    <div className="p-5 rounded-2xl bg-white border border-solaya-sand/40">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-terracotta font-bold">
                          Sub-Headings & Editorial Overlines
                        </span>
                        <span className="text-xs font-mono text-solaya-charcoal/40">Kilotype Foundry</span>
                      </div>
                      <h4 className="font-queens text-2xl text-solaya-forest mb-2">
                        Queens Regular & Medium
                      </h4>
                      <p className="font-queens text-sm uppercase tracking-widest text-solaya-charcoal/70 mb-2">
                        ZANZIBAR • RWANDA • GHANA • SENEGAL
                      </p>
                      <p className="text-xs text-solaya-charcoal/60 font-ambiant">
                        Didone-meets-phototype display serif with warm terminals and timeless editorial cadence.
                      </p>
                    </div>

                    {/* Ambiant Sans */}
                    <div className="p-5 rounded-2xl bg-white border border-solaya-sand/40">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-solaya-terracotta font-bold">
                          Paragraphs, UI & Forms
                        </span>
                        <span className="text-xs font-mono text-solaya-charcoal/40">Laura Csocsán / Typelab</span>
                      </div>
                      <h5 className="font-ambiant text-lg text-solaya-forest font-semibold mb-2">
                        Ambiant Sans Regular & Medium
                      </h5>
                      <p className="font-ambiant text-sm text-solaya-charcoal/80 leading-relaxed mb-2">
                        Thoughtfully curated boutique resorts and private villas where architecture, nature, and human connection align.
                      </p>
                      <p className="text-xs text-solaya-charcoal/60 font-ambiant">
                        Contemporary architectural sans with generous aperture and crystal-clear legibility at all UI sizes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Motion Architecture */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-solaya-charcoal/60 font-mono mb-3">
                    Motion Design Layers (Premium Animation Stack)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3.5 rounded-xl bg-white border border-solaya-sand/30">
                      <span className="text-solaya-terracotta font-bold block mb-1">Layer 1: Lenis</span>
                      <p className="text-solaya-charcoal/70">Smooth scroll synchronized to GSAP ticker with lagSmoothing(0).</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-solaya-sand/30">
                      <span className="text-solaya-terracotta font-bold block mb-1">Layer 2: GSAP</span>
                      <p className="text-solaya-charcoal/70">Cinematic image scale pullbacks, text unmasking, parallax depth.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-solaya-sand/30">
                      <span className="text-solaya-terracotta font-bold block mb-1">Layer 3: Motion</span>
                      <p className="text-solaya-charcoal/70">Spring micro-interactions, modal backdrops, and drawer transitions.</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Manifesto & Strategy Tab */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-solaya-terracotta font-bold block mb-1">
                      Brand Category
                    </span>
                    <h4 className="font-arcilla text-3xl text-solaya-forest">
                      Contemporary African Luxury Hospitality
                    </h4>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-solaya-sand/40 space-y-4 text-sm font-ambiant leading-relaxed text-solaya-charcoal/80">
                    <p className="font-semibold text-solaya-forest">
                      &ldquo;Aman meets contemporary African travel editorial.&rdquo;
                    </p>
                    <p>
                      SOLAYA is not another hotel booking aggregator. It is a curated sanctuary company offering private villas, boutique architectural lodges, and high-touch cultural encounters.
                    </p>
                    <p>
                      Headquartered in Accra, Ghana, SOLAYA represents an unhurried perspective: luxury rooted in stillness, ecological stewardship, and profound human warmth.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-mono tracking-widest text-solaya-charcoal/50 font-bold mb-3">
                      Competitive Inspiration Benchmarks
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-4 rounded-xl bg-white border border-solaya-sand/30">
                        <strong className="text-solaya-forest block mb-1 font-arcilla text-base">Aman</strong>
                        <p className="text-solaya-charcoal/70">Visual silence, restraint, uncluttered space, and architectural reverence.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-solaya-sand/30">
                        <strong className="text-solaya-forest block mb-1 font-arcilla text-base">Singita</strong>
                        <p className="text-solaya-charcoal/70">African conservation leadership, material honesty, and critical regionalism.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-solaya-sand/30">
                        <strong className="text-solaya-forest block mb-1 font-arcilla text-base">One&Only</strong>
                        <p className="text-solaya-charcoal/70">Destination storytelling, private dhow sails, and emotional narrative.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-solaya-sand/30">
                        <strong className="text-solaya-forest block mb-1 font-arcilla text-base">The Mantis Collection</strong>
                        <p className="text-solaya-charcoal/70">Intimate boutique scale and deep community integration.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Footer */}
          <div className="p-6 border-t border-solaya-charcoal/10 bg-white flex items-center justify-between">
            <span className="text-xs font-mono text-solaya-charcoal/50">
              SOLAYA Brand System v1.0 · Accra, Ghana
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-solaya-forest text-solaya-sand font-bold text-xs uppercase tracking-wider hover:bg-solaya-charcoal transition"
            >
              Close Studio
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

