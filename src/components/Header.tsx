import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                className={`text-xs xl:text-sm font-sans font-medium transition-colors relative py-1 group whitespace-nowrap ${
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] whitespace-nowrap"
          >
            <span>Mapa RAÍZ</span>
            <span aria-hidden="true" className="font-sans text-sm">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-[#363D28] hover:bg-[#EAE2D2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[68px] z-40 bg-[#F2EBDD] lg:hidden flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-t border-[#363D28]/10"
        >
          <nav className="flex flex-col gap-4 pt-2" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => {
              const pageName = link.href.replace('#/', '') || 'home';
              const isActive = currentPage === pageName;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`text-2xl font-serif py-2 border-b border-[#363D28]/10 transition-colors ${
                    isActive ? 'text-[#363D28] font-semibold pl-2 border-[#363D28]' : 'text-[#363D28]/85 hover:text-[#A18347]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-8 pb-10 flex flex-col gap-4">
            <a
              href="#/mapa-raiz"
              onClick={(e) => handleLinkClick('#/mapa-raiz', e)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-colors text-center"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-[#363D28]/70 font-sans italic">
                “Cada decisión deja una huella.”
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
