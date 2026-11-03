import React from 'react';

export const ManifestoEditorialSection: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-40 px-6 sm:px-8 bg-neutral-50/60 text-neutral-900 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left: Pill Badge */}
          <div className="lg:col-span-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider text-neutral-600 bg-white border border-neutral-200 lowercase">
              about solaya
            </span>
          </div>

          {/* Right: Giant Minimal Editorial Statement (Reference 3 exact format in lowercase) */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-queens text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-neutral-900 leading-[1.16] lowercase">
              founded on a passion for quiet luxury and a commitment to sustainability, we are a collective of architects and hoteliers who approach every sanctuary with creativity, integrity, and a deep respect for the environment.
            </h2>

            <p className="font-ambiant text-xs sm:text-sm text-neutral-500 max-w-xl leading-relaxed lowercase">
              we believe that architecture is more than just the design of buildings—it’s the creation of spaces that shape experiences, foster connections, and stand the test of time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
