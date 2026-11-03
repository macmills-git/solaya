import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InlineHeadlineSection } from './components/InlineHeadlineSection';
import { DotGridShowcaseSection } from './components/DotGridShowcaseSection';
import { SanctuariesMinimal } from './components/SanctuariesMinimal';
import { ManifestoEditorialSection } from './components/ManifestoEditorialSection';
import { DarkTakeoverSection } from './components/DarkTakeoverSection';
import { JournalMinimal } from './components/JournalMinimal';
import { Footer } from './components/Footer';
import { SanctuaryDetailModal, ModalTheme } from './components/SanctuaryDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { Toast } from './components/Toast';
import { useLenis } from './hooks/useLenis';
import { Property, CurrencyCode } from './types';
import { PROPERTIES } from './data/solayaData';

export function App() {
  const [currency] = useState<CurrencyCode>('USD');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Full Screen Expansive Details Modal with section background color adaptation
  const [selectedSanctuary, setSelectedSanctuary] = useState<{
    property: Property;
    theme: ModalTheme;
  } | null>(null);

  // Photography Lightbox Modal
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; src: string; caption: string }>({
    isOpen: false,
    src: '',
    caption: '',
  });

  // Enable Lenis smooth scroll
  useLenis(true);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightbox({ isOpen: true, src, caption });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased flex flex-col font-ambiant selection:bg-neutral-900 selection:text-white">
      
      {/* Pure Floating Brand Logo */}
      <Navbar />

      <main id="main-content">
        {/* 1. Haven* Soft Sky Gradient Hero (Modal inherits Sky Blue Theme) */}
        <Hero
          onOpenBooking={() => setSelectedSanctuary({ property: PROPERTIES[0], theme: 'sky' })}
        />

        {/* 2. Haven* Signature Headline */}
        <InlineHeadlineSection
          onShowToast={showToast}
        />

        {/* 3. Dot Grid Showcase Section (Modal inherits Cobalt Matrix Theme) */}
        <DotGridShowcaseSection
          onOpenBooking={() => setSelectedSanctuary({ property: PROPERTIES[0], theme: 'cobalt' })}
          onOpenMonograph={() => setSelectedSanctuary({ property: PROPERTIES[0], theme: 'cobalt' })}
        />

        {/* 4. Minimalist Sanctuaries Portfolio (Modal inherits Warm Alabaster / Sand Theme) */}
        <SanctuariesMinimal
          currency={currency}
          onBookProperty={(prop: Property) => setSelectedSanctuary({ property: prop, theme: 'sand' })}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 5. Giant Minimal Editorial Statement */}
        <ManifestoEditorialSection />

        {/* 6. Pure Black Takeover (Modal inherits Pure Obsidian Black Theme) */}
        <DarkTakeoverSection
          onOpenBooking={() => setSelectedSanctuary({ property: PROPERTIES[0], theme: 'dark' })}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Clean Editorial Journal (Modal inherits Editorial Pure White Theme) */}
        <JournalMinimal />
      </main>

      {/* 8. Minimal Architectural Footer (Modal inherits Oceanic Midnight Theme) */}
      <Footer
        onOpenBooking={() => setSelectedSanctuary({ property: PROPERTIES[0], theme: 'midnight' })}
      />

      {/* Expansive Full-Screen Modal (Inherits the background color of whichever section triggered it) */}
      {selectedSanctuary && (
        <SanctuaryDetailModal
          property={selectedSanctuary.property}
          theme={selectedSanctuary.theme}
          currency={currency}
          onClose={() => setSelectedSanctuary(null)}
          onShowToast={showToast}
        />
      )}

      {/* Photography Lightbox */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightbox.src}
        caption={lightbox.caption}
      />

      {/* Luxury System Toast */}
      <Toast message={toastMessage} />

    </div>
  );
}

export default App;
