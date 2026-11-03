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
import { LightboxModal } from './components/LightboxModal';
import { Toast } from './components/Toast';
import { useLenis } from './hooks/useLenis';
import { Property, CurrencyCode } from './types';

export function App() {
  const [currency] = useState<CurrencyCode>('USD');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const handleScrollToSanctuaries = () => {
    const el = document.getElementById('sanctuaries');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased flex flex-col font-ambiant selection:bg-neutral-900 selection:text-white">
      
      {/* Pure Floating Brand Logo */}
      <Navbar />

      <main id="main-content">
        {/* 1. Haven* Soft Sky Gradient Hero */}
        <Hero
          onOpenBooking={handleScrollToSanctuaries}
        />

        {/* 2. Haven* Signature Headline ("Where your vision finds its [ 🖼️ ] home." + email pill) */}
        <InlineHeadlineSection
          onShowToast={showToast}
        />

        {/* 3. Dot Grid Showcase Section (Scattered visual vignettes + "perfect customer experiences") */}
        <DotGridShowcaseSection
          onOpenBooking={handleScrollToSanctuaries}
          onOpenMonograph={() => showToast('Private monograph sent to your registered address.')}
        />

        {/* 4. Minimalist Sanctuaries Portfolio (Uncluttered Architectural Cards with Corner Pixel Mosaics) */}
        <SanctuariesMinimal
          currency={currency}
          onBookProperty={(prop: Property) => handleOpenLightbox(prop.image, `${prop.name} · ${prop.location}`)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 5. Giant Minimal Editorial Statement */}
        <ManifestoEditorialSection />

        {/* 6. Pure Black Takeover ("Crafting Spaces, Crafting Stories" with Fokus poster style) */}
        <DarkTakeoverSection
          onOpenBooking={handleScrollToSanctuaries}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. Clean Editorial Journal (3-column layout matching Reference 3) */}
        <JournalMinimal />
      </main>

      {/* 8. Minimal Architectural Footer (Sky gradient from hero fading into dark overlay at bottom) */}
      <Footer
        onOpenBooking={handleScrollToSanctuaries}
      />

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
