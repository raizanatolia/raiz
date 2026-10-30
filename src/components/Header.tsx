import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';
import { NAV_LINKS, PageId } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const clean = href.replace('#/', '').trim();
    const resolvedPage: PageId = (clean || 'home') as PageId;
    window.location.hash = href;
    onNavigate(resolvedPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F2EBDD]/95 backdrop-blur-md shadow-xs border-b border-[#363D28]/10 py-3.5'
            : 'bg-[#F2EBDD]/90 backdrop-blur-xs py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Horizontal Logo */}
          <div className="flex items-center">
            <Logo
              variant="horizontal"
              size="md"
              href="#/"
              onClick={() => {
                window.location.hash = '#/';
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-3.5 xl:gap-6"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map((link) => {
              const pageName = link.href.replace('#/', '') || 'home';
              const isActive = currentPage === pageName;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`text-xs xl:text-sm font-sans font-medium transition-colors relative py-1 group whitespace-nowrap min-h-[36px] inline-flex items-center ${
                    isActive ? 'text-[#363D28] font-bold' : 'text-[#363D28]/80 hover:text-[#363D28]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#363D28] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA Destacado: Mapa RAÍZ → */}
          <div className="hidden sm:flex items-center">
            <a
              href="#/mapa-raiz"
              onClick={(e) => handleLinkClick('#/mapa-raiz', e)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] whitespace-nowrap min-h-[40px]"
            >
              <span>Mapa RAÍZ</span>
              <span aria-hidden="true" className="font-sans text-sm">→</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle (Target size >= 44x44px for WCAG) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-lg text-[#363D28] hover:bg-[#EAE2D2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Accessible Mobile Navigation Portal (rendered on document.body to break free from header stacking context and backdrop-filter) */}
      {mobileMenuOpen && mounted && typeof document !== 'undefined' && createPortal(
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal de navegación"
          className="fixed inset-0 z-[100] bg-[#F2EBDD] lg:hidden flex flex-col h-[100dvh] w-full overflow-hidden animate-in fade-in duration-200"
        >
          {/* Top Bar inside Drawer: Matches Header height with official logo and close button */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-[#363D28]/10 shrink-0 bg-[#F2EBDD]">
            <Logo
              variant="horizontal"
              size="md"
              href="#/"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.hash = '#/';
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center p-2 rounded-lg text-[#363D28] hover:bg-[#EAE2D2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              aria-label="Cerrar menú de navegación"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation Links (guarantees usability even on landscape or short screens) */}
          <nav
            className="flex-1 overflow-y-auto px-5 sm:px-8 py-4 space-y-1 min-h-0 overscroll-contain"
            aria-label="Navegación móvil"
          >
            {NAV_LINKS.map((link) => {
              const pageName = link.href.replace('#/', '') || 'home';
              const isActive = currentPage === pageName;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`min-h-[48px] flex items-center justify-between px-3.5 py-3 rounded-xl font-serif text-xl sm:text-2xl transition-all border-b border-[#363D28]/8 ${
                    isActive
                      ? 'text-[#363D28] font-bold bg-[#EAE2D2]/80 pl-4 border-l-4 border-l-[#363D28]'
                      : 'text-[#363D28]/85 hover:text-[#363D28] hover:bg-[#EAE2D2]/40 active:bg-[#EAE2D2]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#363D28] shrink-0" />
                  ) : (
                    <span className="text-[#363D28]/35 font-sans text-base">→</span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Pinned Bottom Container: CTA and Brand Slogan */}
          <div className="p-5 sm:p-6 border-t border-[#363D28]/10 shrink-0 bg-[#EAE2D2]/60 space-y-3">
            <a
              href="#/mapa-raiz"
              onClick={(e) => handleLinkClick('#/mapa-raiz', e)}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] active:scale-[0.99] transition-all text-center shadow-xs"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center">
              <p className="text-xs text-[#363D28]/70 font-sans italic">
                «Cada decisión deja una huella.»
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
