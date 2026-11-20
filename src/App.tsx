import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { WebsiteSkeleton } from './components/WebsiteSkeleton';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { HowItWorks } from './sections/HowItWorks';
import { Features } from './sections/Features';
import { Demo } from './sections/Demo';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Team } from './sections/Team';
import { Contact } from './sections/Contact';
import { TertFinProductPage } from './pages/TertFinProductPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { NAV_ITEMS, ScenarioId } from './data/tertvalisData';

/**
 * Main Application Component for the Tertvalis Website.
 * Renders all 11 required sections in the exact specified order:
 * 1. Header
 * 2. Hero
 * 3. About
 * 4. How It Works
 * 5. Features
 * 6. Demo
 * 7. Pricing
 * 8. Testimonials
 * 9. FAQ
 * 10. Contact
 * 11. Footer
 */
export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedDemoScenario, setSelectedDemoScenario] = useState<ScenarioId>('base');
  const [preselectedInquiry, setPreselectedInquiry] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalDocType>(null);
  const [currentPage, setCurrentPage] = useState<'main' | 'privacy' | 'terms' | 'product'>(
    window.location.pathname.replace(/\/+$/, '') === '/product' ? 'product' : 'main'
  );

  // Handle URL hash changes for routing (e.g. #privacy-policy, #terms-conditions)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy-policy' || hash === '#/privacy-policy' || hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms-conditions' || hash === '#/terms-conditions' || hash === '#terms') {
        setCurrentPage('terms');
      } else if ((currentPage === 'privacy' || currentPage === 'terms') && (!hash || hash === '#home')) {
        setCurrentPage('main');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  // Initial skeleton loading timer: ensures brand skeleton displays smoothly on initial page load
  useEffect(() => {
    // Lock body overflow while skeleton is displayed to prevent duplicate scrollbars
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Wait for exit transition (380ms) to finish before restoring body overflow
      // This prevents the scrollbar from snapping into view and shifting layout width during fade
      const restoreTimer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 400);

      return () => clearTimeout(restoreTimer);
    }, 650);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  // Smooth scroll helper that accounts for the sticky header height
  const isNavClickRef = useRef<boolean>(false);
  const navClickTimerRef = useRef<number | null>(null);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id || 'home');

    // Lock scroll spy during smooth scroll (850ms) so intermediate sections do not override the clicked link
    isNavClickRef.current = true;
    if (navClickTimerRef.current) {
      clearTimeout(navClickTimerRef.current);
    }
    navClickTimerRef.current = window.setTimeout(() => {
      isNavClickRef.current = false;
    }, 850);

    if (id === 'home' || !id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 76;
      const currentScroll =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + currentScroll - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  }, []);

  // Track which section is currently active in the viewport
  // Navlinks are strictly active ONLY for their own section (home, about, features, pricing, contact)
  useEffect(() => {
    let ticking = false;

    // All page section IDs in document order
    const sectionIds = [
      'home',
      'about',
      'how-it-works',
      'features',
      'demo',
      'pricing',
      'testimonials',
      'faq',
      'team',
      'contact',
    ];

    const determineActiveSection = () => {
      if (isNavClickRef.current) {
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      // Extreme top of page -> 'home'
      if (scrollY < 80) {
        setActiveSection('home');
        ticking = false;
        return;
      }

      // Reached near bottom of page: if contact section is visible in viewport, mark contact
      if (scrollY + windowHeight >= docHeight - 80) {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          const cRect = contactEl.getBoundingClientRect();
          if (cRect.top < windowHeight && cRect.bottom > 0) {
            setActiveSection('contact');
            ticking = false;
            return;
          }
        }
      }

      // Focal point just below header (140px from top of viewport)
      const focalLine = 140;
      let activeId = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine && rect.bottom > focalLine) {
            activeId = id;
            break;
          }
        }
      }

      // Fallback: nearest preceding section if scrolled between sections
      if (!activeId) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= focalLine) {
              activeId = sectionIds[i];
              break;
            }
          }
        }
      }

      if (activeId) {
        setActiveSection(activeId);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(determineActiveSection);
        ticking = true;
      }
    };

    determineActiveSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (navClickTimerRef.current) {
        clearTimeout(navClickTimerRef.current);
      }
    };
  }, []);

  // Handler when a user clicks a capability or hero scenario link to inspect it in the Demo section
  const handleInspectScenarioInDemo = (scenario: ScenarioId) => {
    setSelectedDemoScenario(scenario);
    scrollToSection('#demo');
  };

  // Handler when a user selects a Pricing tier or Demo consultation CTA to pre-fill the Contact form
  const handlePrefillContactInquiry = (inquiryTopic: string) => {
    setPreselectedInquiry(inquiryTopic);
    scrollToSection('#contact');
  };

  if (currentPage === 'privacy') {
    return (
      <PrivacyPolicyPage
        onBackToHome={() => {
          if (window.location.pathname.replace(/\/+$/, '') === '/product') {
            window.location.href = '/';
            return;
          }
          window.location.hash = '#home';
          setCurrentPage('main');
        }}
        onNavigate={(href) => {
          window.location.hash = href;
          setCurrentPage('main');
          setTimeout(() => {
            scrollToSection(href);
          }, 60);
        }}
        onOpenLegalModal={(doc) => setActiveLegalModal(doc)}
        onOpenTermsPage={() => {
          window.location.hash = '#terms-conditions';
          setCurrentPage('terms');
        }}
      />
    );
  }

  if (currentPage === 'terms') {
    return (
      <TermsConditionsPage
        onBackToHome={() => {
          if (window.location.pathname.replace(/\/+$/, '') === '/product') {
            window.location.href = '/';
            return;
          }
          window.location.hash = '#home';
          setCurrentPage('main');
        }}
        onNavigate={(href) => {
          window.location.hash = href;
          setCurrentPage('main');
          setTimeout(() => {
            scrollToSection(href);
          }, 60);
        }}
        onOpenLegalModal={(doc) => setActiveLegalModal(doc)}
        onOpenPrivacyPage={() => {
          window.location.hash = '#privacy-policy';
          setCurrentPage('privacy');
        }}
      />
    );
  }

  if (currentPage === 'product') {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0D0D0D]">
        <Header activeSection="" onNavigate={(href) => { window.location.href = `/${href}`; }} isProductPage />
        <main id="main-content" className="flex-1">
          <TertFinProductPage />
        </main>
        <Footer
          onNavigate={(href) => { window.location.href = `/${href}`; }}
          onOpenLegalModal={(doc) => setActiveLegalModal(doc)}
          onOpenPrivacyPage={() => { window.location.hash = '#privacy-policy'; setCurrentPage('privacy'); }}
          onOpenTermsPage={() => { window.location.hash = '#terms-conditions'; setCurrentPage('terms'); }}
        />
        <LegalModal
          activeDoc={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
          onContactClick={() => { window.location.href = '/#contact'; }}
          onViewFullPrivacy={() => { window.location.hash = '#privacy-policy'; setCurrentPage('privacy'); }}
          onViewFullTerms={() => { window.location.hash = '#terms-conditions'; setCurrentPage('terms'); }}
        />
        <CookieBanner onOpenPrivacy={() => { window.location.hash = '#privacy-policy'; setCurrentPage('privacy'); }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0D0D0D]">
      {/* Fullscreen Skeleton Loading Effect Before Website Starts */}
      <AnimatePresence mode="wait">
        {isLoading && <WebsiteSkeleton key="website-skeleton" />}
      </AnimatePresence>

      {/* Accessible Skip-to-Content Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#050FD8] focus:text-white focus:rounded-lg focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Section 1: Sticky Navigation Header */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Container */}
      <main id="main-content" className="flex-1">
        {/* Section 2: Hero */}
        <Hero
          onNavigate={scrollToSection}
          onSelectDemoScenario={handleInspectScenarioInDemo}
        />

        {/* Section 3: About */}
        <About />

        {/* Section 4: How It Works */}
        <HowItWorks onNavigate={scrollToSection} />

        {/* Section 5: Features */}
        <Features onInspectScenarioInDemo={handleInspectScenarioInDemo} />

        {/* Section 6: Interactive Financial Demo */}
        <Demo
          selectedScenario={selectedDemoScenario}
          onSelectScenario={setSelectedDemoScenario}
          onRequestScenarioConsultation={handlePrefillContactInquiry}
        />

        {/* Section 7: Pricing */}
        <Pricing onSelectPlanInquiry={handlePrefillContactInquiry} />

        {/* Section 8: Testimonials (Clearly Labelled Placeholders & Product Benefits) */}
        <Testimonials />

        {/* Section 9: FAQ */}
        <FAQ />

        {/* Section 10: Leadership & Teams */}
        <Team />

        {/* Section 11: Contact */}
        <Contact preselectedInquiry={preselectedInquiry} />
      </main>

      {/* Section 11: Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenLegalModal={(doc) => setActiveLegalModal(doc)}
        onOpenPrivacyPage={() => {
          window.location.hash = '#privacy-policy';
          setCurrentPage('privacy');
        }}
        onOpenTermsPage={() => {
          window.location.hash = '#terms-conditions';
          setCurrentPage('terms');
        }}
      />

      {/* Accessible Governance Modal for Privacy Policy & Terms and Conditions */}
      <LegalModal
        activeDoc={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        onContactClick={() => scrollToSection('#contact')}
        onViewFullPrivacy={() => {
          window.location.hash = '#privacy-policy';
          setCurrentPage('privacy');
        }}
        onViewFullTerms={() => {
          window.location.hash = '#terms-conditions';
          setCurrentPage('terms');
        }}
      />

      {/* Compact Animated Cookie Consent Banner */}
      <CookieBanner
        onOpenPrivacy={() => {
          window.location.hash = '#privacy-policy';
          setCurrentPage('privacy');
        }}
      />
    </div>
  );
}

export default App;
