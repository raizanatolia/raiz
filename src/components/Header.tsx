import { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_LINKS, CONTACT } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2EBDD]/95 backdrop-blur-md shadow-xs border-b border-[#363D28]/10 py-3.5'
          : 'bg-[#F2EBDD]/80 backdrop-blur-xs py-5 md:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans font-medium text-[#363D28]/85 hover:text-[#363D28] transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#363D28] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
          >
            <span>Explorar mi Mapa</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#363D28] hover:bg-[#EAE2D2] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-40 bg-[#F2EBDD] md:hidden flex flex-col justify-between p-6 overflow-y-auto border-t border-[#363D28]/10"
        >
          <nav className="flex flex-col gap-5 pt-4" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[#363D28] hover:text-[#A18347] transition-colors py-1 border-b border-[#363D28]/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-10 flex flex-col gap-4">
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-colors text-center"
            >
              <span>Explorar mi Mapa RAÍZ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <p className="text-center text-xs text-[#363D28]/70 font-sans italic pt-2">
              Cada decisión deja una huella.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
