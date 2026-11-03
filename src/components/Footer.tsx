import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="pt-24 sm:pt-32 pb-16 px-6 sm:px-12 bg-[linear-gradient(180deg,#5B87AB_0%,#4A7293_18%,#345876_38%,#1F3D55_62%,#102230_82%,#071017_100%)] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Upper Main Row: Headline & Certified Stamp Left + Columns of Links Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Matching Image 2 Reference) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Bold Editorial Headline in lowercase */}
            <h2 className="font-queens text-3xl sm:text-4xl lg:text-[46px] font-normal text-white leading-[1.08] tracking-tight lowercase max-w-md">
              luxury for thoughtful travellers
            </h2>

            {/* Circular Certified Badge (Matching AICPA SOC Stamp from Image 2) */}
            <div className="w-20 h-20 rounded-full border border-white/40 flex flex-col items-center justify-center text-center p-2 text-white/95 select-none">
              <span className="font-mono text-[9px] tracking-widest uppercase font-semibold">
                SOLAYA
              </span>
              <span className="w-7 h-[1px] bg-white/40 my-1" />
              <span className="font-mono text-[8px] tracking-widest uppercase text-white/80">
                SANCTUARY
              </span>
            </div>

            {/* Social Links Row (Matching Image 2: LinkedIn, YouTube, X) */}
            <div className="flex items-center gap-5 text-white/80 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Columnar Navigation Links (Matching Image 2 Reference) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-xs font-ambiant">
            
            {/* Column 1: Sanctuaries / Products */}
            <div className="space-y-4">
              <span className="font-medium text-white/90 block lowercase tracking-wide">
                sanctuaries
              </span>
              <ul className="space-y-3 text-white/70 font-light lowercase">
                <li>
                  <a href="#sanctuaries" className="hover:text-white transition-colors">
                    the azure house
                  </a>
                </li>
                <li>
                  <a href="#sanctuaries" className="hover:text-white transition-colors">
                    volta river escape
                  </a>
                </li>
                <li>
                  <a href="#sanctuaries" className="hover:text-white transition-colors">
                    bisoke forest nest
                  </a>
                </li>
                <li>
                  <a href="#sanctuaries" className="hover:text-white transition-colors">
                    kaskazi ocean dawn
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenBooking}
                    className="hover:text-white transition-colors text-left"
                  >
                    private concierge
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Collective / Team */}
            <div className="space-y-4">
              <span className="font-medium text-white/90 block lowercase tracking-wide">
                our team
              </span>
              <ul className="space-y-3 text-white/70 font-light lowercase">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    our collective
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    architectural partners
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    careers & fellowships
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    contact studio
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Terms */}
            <div className="space-y-4">
              <span className="font-medium text-white/90 block lowercase tracking-wide">
                terms & conditions
              </span>
              <ul className="space-y-3 text-white/70 font-light lowercase">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    reservation security
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Lower Row: Headquarters with Vertical Divider Line (Matching Image 2 Reference) */}
        <div className="pt-10 border-t border-white/10 space-y-12">
          
          <div className="space-y-2">
            <span className="font-ambiant text-xs text-white/60 lowercase block">
              headquarters
            </span>
            <div className="border-l border-white/35 pl-3 space-y-0.5 text-xs text-white/85 font-mono lowercase">
              <p>106 independence avenue, suite 300</p>
              <p>ridge, accra, ghana</p>
              <p>(+233) 30 274 0800</p>
            </div>
          </div>

          {/* Bottom Bar: Copyright on Left + Website Attribution on Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-ambiant text-white/50 lowercase">
            <span>solaya technologies, inc. © 2026 all rights reserved</span>
            <span>website by outerbloc</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
