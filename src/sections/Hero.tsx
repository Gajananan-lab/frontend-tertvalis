import React from 'react';
import { motion } from 'motion/react';
import { ScenarioId } from '../data/tertvalisData';

interface HeroProps {
  onNavigate: (href: string) => void;
  onSelectDemoScenario?: (scenario: ScenarioId) => void;
}

/**
 * Section 2: Bottom-Aligned Split Hero Section (100vh on lg & xl screens)
 * Designed matching the reference layout:
 * - Full-bleed warm lifestyle consultation photography (heroConsultationImg)
 * - Clear visibility with subtle bottom gradient vignette for contrast
 * - Headline in theme font (Plus Jakarta Sans) without italic styling
 * - Bottom-aligned 2-column split layout:
 *   - Left: Uppercase brand kicker + Large display headline
 *   - Right: Concise 2-line executive proposition + Clean white rectangular action button
 * - 100vh on lg & xl screens, responsive fluid fit on mobile & tablet
 */
export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative w-full lg:h-screen lg:min-h-screen xl:h-screen min-h-[90vh] flex flex-col justify-end overflow-hidden pb-10 sm:pb-12 lg:pb-14 pt-24 sm:pt-28 isolate"
    >
      {/* ============================================================ */}
      {/* 1. BACKGROUND CONSULTATION PHOTOGRAPHY & SOFT VIGNETTE */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="Financial advisor presenting scenario plan on tablet to executive client"
          className="w-full h-full object-cover object-[center_32%] scale-[1.01] transform transition-transform duration-1000"
          loading="eager"
        />

        {/* Soft bottom vignette gradient for crisp text readability while keeping photo bright */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#060B18]/95 via-[#060B18]/60 via-45% to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* ============================================================ */}
      {/* 2. BOTTOM-ALIGNED SPLIT CONTENT (LEFT: HEADLINE / RIGHT: CTA) */}
      {/* ============================================================ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column (8 cols): Uppercase Kicker + Multi-line Headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Badges Row: Eyebrow Kicker + Powered by Google for Startups Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4"
            >
              <div className="text-xs sm:text-[13px] font-heading font-semibold uppercase tracking-[0.22em] text-white/80 flex items-center gap-2">
                <span>Tertvalis Financial Intelligence</span>
              </div>

              {/* Powered by Google for Startups Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-xs transition-colors">
                <img
                  src="/google-icon.svg"
                  alt="Google"
                  className="w-3.5 h-3.5 shrink-0"
                />
                <span className="text-[11px] sm:text-xs font-heading font-medium tracking-wide text-white/95">
                  Powered by <span className="font-semibold text-white">Google for Startups</span>
                </span>
              </div>
            </motion.div>

            {/* Display Headline: Bold theme font, no italic, clean & bold */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.85rem] font-medium
               text-white tracking-tight leading-[1.12]"
            >
              Turn Financial Data into Smarter Futures. 
            </motion.h1>
          </div>

          {/* Right Column (5 cols): Concise Description + White Rectangular Button */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-start lg:items-start lg:pb-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-[15px] text-white/90 leading-relaxed max-w-sm mb-6 font-body font-normal"
            >
             Transform financial data into reliable scenarios in minutes. Gain clear insights into future performance with dynamic forecasting models and smarter financial planning. 
            </motion.p>

            {/* Clean White Rectangular Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-auto"
            >
              <a
                href="/product"
                className="w-full lg:w-auto lg:min-w-[190px] xl:min-w-[210px] inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0D0D0D] font-heading font-bold text-xs sm:text-[13px] uppercase tracking-widest px-6 lg:px-8 xl:px-10 py-3.5 rounded-xs shadow-lg shadow-black/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                TertFin
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
