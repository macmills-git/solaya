import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface InlineHeadlineSectionProps {
  onShowToast: (msg: string) => void;
}

export const InlineHeadlineSection: React.FC<InlineHeadlineSectionProps> = ({ onShowToast }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    onShowToast(`Thank you. We have sent our private architectural portfolio to ${email}`);
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 bg-white text-neutral-900 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Haven Signature Headline with Inline Pill Image (in lowercase, 2-line layout) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-queens text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight text-neutral-900 leading-[1.12] lowercase"
        >
          where your vision<br />
          finds its{' '}
          <span className="inline-image-pill" title="Sanctuary Architecture">
            <img
              src="/images/solaya_coastal_sanctuary_1.jpg"
              alt="Architecture detail"
              className="w-full h-full object-cover"
            />
          </span>{' '}
          home.
        </motion.h2>

        {/* Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-ambiant text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed lowercase font-light"
        >
          solaya offers more than just a place to live—it’s a space designed to reflect your unique style, crafted with timeless precision, and built to inspire for generations to come.
        </motion.p>

        {/* Haven Minimalist Pill Input */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4 max-w-sm mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center rounded-full border border-neutral-200 bg-neutral-50/70 p-1.5 focus-within:border-black/50 focus-within:bg-white shadow-sm transition-all"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email address"
              className="flex-1 bg-transparent px-4 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none font-ambiant lowercase"
              required
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold tracking-wide transition shrink-0 lowercase shadow-sm active:scale-95"
            >
              {submitted ? 'inscribed' : 'stay updated'}
            </button>
          </form>

          {submitted && (
            <p className="flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-mono mt-3 lowercase">
              <Check className="w-3.5 h-3.5" /> welcome to the private circle.
            </p>
          )}
        </motion.div>

      </div>
    </section>
  );
};
