import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenisInstance: Lenis | null = null;

export const pauseLenis = () => {
  if (globalLenisInstance) {
    globalLenisInstance.stop();
  }
};

export const resumeLenis = () => {
  if (globalLenisInstance) {
    globalLenisInstance.start();
  }
};

export function useLenis(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      prevent: (node) => {
        if (typeof document !== 'undefined' && document.body.classList.contains('modal-open')) {
          return true;
        }
        if (node instanceof HTMLElement) {
          return (
            node.hasAttribute('data-lenis-prevent') ||
            Boolean(node.closest?.('[data-lenis-prevent]'))
          );
        }
        return false;
      },
    });

    globalLenisInstance = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      globalLenisInstance = null;
    };
  }, [enabled]);
}
