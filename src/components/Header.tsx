import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/tertvalisData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (href: string) => void;
  isProductPage?: boolean;
}

/**
 * Clean Frosted White Glass Header
 * - Background: Clean frosted white glass (bg-white/95 backdrop-blur-xl) seamlessly matching the light website
 * - Top ultra-thin brand gradient accent line (#050FD8 -> #076CF2 -> #05F2AD)
 * - Left-aligned bold lowercase wordmark (tertvalis.) with brand accent dot
 * - Left-aligned primary navigation links (Home, About, Features, Pricing, Contact)
 * - Animated sliding brand gradient active underline + hover feedback
 * - Right-aligned clean brand blue button [REQUEST DEMO]
 * - Fully responsive with matching frosted white mobile drawer
 */
export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate, isProductPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    let prevScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== prevScrolled) {
        prevScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      // Small timeout allows the mobile menu state change to settle and prevents touch cancellation on mobile
      setTimeout(() => {
        onNavigate(href);
      }, 50);
    } else {
      onNavigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200">
      <div
        className={`w-full bg-white/95 backdrop-blur-xl border-b transition-all duration-200 ${
          isScrolled
            ? 'border-slate-200/90 shadow-md shadow-slate-900/5'
            : 'border-slate-200/60 shadow-xs'
        }`}
      >
        {/* Top subtle brand gradient accent line */}
        <div
          className="h-[2px] w-full bg-gradient-to-r from-[#050FD8] via-[#076CF2] to-[#05F2AD]"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-17 flex items-center justify-between">
          {/* ========================================================== */}
          {/* LEFT ZONE: BRAND WORDMARK + LEFT-ALIGNED NAVIGATION */}
          {/* ========================================================== */}
          <div className="flex items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="inline-flex items-center hover:opacity-90 transition-opacity shrink-0 py-1"
              aria-label="Tertvalis — Back to top"
            >
              <img
                src="/logo3.svg"
                alt="Tertvalis"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            {/* Left-Aligned Desktop Navigation Links */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-8"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredNav === item.id;

                return (
                  <a
                    key={item.id}
                    href={isProductPage ? `/${item.href}` : item.href}
                    onClick={(e) => {
                      if (isProductPage) return;
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    onMouseEnter={() => setHoveredNav(item.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative py-1 text-sm sm:text-[15px] transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#050FD8] font-heading font-bold'
                        : 'text-slate-600 hover:text-[#0D0D0D] font-medium'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Sliding Animated Active Underline in Brand Gradient */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#050FD8] to-[#076CF2] rounded-full shadow-xs"
                        transition={{
                          type: 'spring',
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}

                    {/* Hover Glow Underline when not active */}
                    {!isActive && isHovered && (
                      <motion.span
                        layoutId="nav-hover-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-slate-300 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* ========================================================== */}
          {/* RIGHT ZONE: ACTION BUTTON + MOBILE MENU */}
          {/* ========================================================== */}
          <div className="flex items-center gap-4">
            {/* Button: [ REQUEST DEMO ] */}
            <a
              href="/product"
              className="hidden sm:inline-flex items-center justify-center bg-[#050FD8] hover:bg-[#076CF2] text-white font-heading font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xs transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:shadow-blue-600/20 active:scale-95"
            >
              TertFin
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xs border border-slate-200 bg-white text-[#0D0D0D] hover:border-[#050FD8] hover:text-[#050FD8] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#050FD8]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-[#0D0D0D]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ========================================================== */}
        {/* MOBILE NAVIGATION DRAWER */}
        {/* ========================================================== */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-5 pt-4 pb-6 overflow-hidden"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={isProductPage ? `/${item.href}` : item.href}
                      onClick={(e) => {
                        if (isProductPage) return;
                        e.preventDefault();
                        e.stopPropagation();
                        handleNavClick(item.href);
                      }}
                      aria-current={isActive ? 'page' : undefined}
                      className={`px-3 py-2.5 rounded-xs text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer select-none active:bg-blue-100 ${
                        isActive
                          ? 'bg-blue-50 text-[#050FD8] font-heading font-bold'
                          : 'text-slate-700 hover:text-[#050FD8] hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#050FD8]" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <a
                  href="/product"
                  className="w-full inline-flex items-center justify-center bg-[#050FD8] hover:bg-[#076CF2] text-white font-heading font-bold text-xs uppercase tracking-widest py-3 rounded-xs transition-colors shadow-xs cursor-pointer active:scale-95"
                >
                  TertFin
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
