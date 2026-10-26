import Logo from './Logo';
import { NAV_LINKS, BRAND, CONTACT, PageId } from '../data/content';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, TikTokIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const clean = href.replace('#/', '').trim();
    const resolvedPage: PageId = (clean || 'home') as PageId;
    window.location.hash = href;
    onNavigate(resolvedPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#242A1A] text-[#F2EBDD] py-14 border-t border-[#363D28]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-[#F2EBDD]/10">
          {/* Brand Info & Isotipo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <Logo
                variant="horizontal"
                theme="light"
                size="md"
                href="#/"
                onClick={() => {
                  window.location.hash = '#/';
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
            <p className="text-sm font-sans text-[#F2EBDD]/75 font-light leading-relaxed max-w-sm mb-4">
              Comprende tu raíz. Transforma tus decisiones. Espacio de exploración personal y
              desarrollo consciente creado por Anatolia Zapata.
            </p>
            <p className="text-xs font-serif italic text-[#C4A76C] tracking-wide">
              “{BRAND.subtagline}”
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C4A76C] font-semibold block mb-4">
              Navegación
            </span>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(link.href, e)}
                    className="text-sm font-sans text-[#F2EBDD]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#/mapa-raiz"
                  onClick={(e) => handleLink('#/mapa-raiz', e)}
                  className="text-sm font-sans text-[#C4A76C] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Mapa RAÍZ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 flex flex-col items-start">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C4A76C] font-semibold block mb-4">
              Contacto
            </span>
            <p className="text-sm font-sans text-[#F2EBDD]/80 mb-2">
              Correo oficial:{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-white transition-colors underline underline-offset-4"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="text-xs font-sans text-[#F2EBDD]/60 font-light leading-relaxed mb-4">
              Atención personalizada para personas y organizaciones.
            </p>
            <a
              href="#/contacto"
              onClick={(e) => handleLink('#/contacto', e)}
              className="text-xs font-sans uppercase tracking-wider text-[#C4A76C] hover:text-white transition-colors inline-flex items-center gap-1 font-semibold mb-4"
            >
              <span>Formulario de contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Redes Sociales Oficiales */}
            <div className="pt-3 border-t border-[#F2EBDD]/10 w-full">
              <span className="text-[11px] font-sans uppercase tracking-[0.16em] text-[#C4A76C] font-semibold block mb-2.5">
                Redes
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={CONTACT.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-[#F2EBDD]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  aria-label="Instagram de Anatolia Zapata"
                >
                  <InstagramIcon className="w-4 h-4 text-[#C4A76C] group-hover:text-white transition-colors" />
                  <span>@anatoliazapata</span>
                </a>
                <a
                  href={CONTACT.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-[#F2EBDD]/80 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  aria-label="TikTok de Anatolia Zapata"
                >
                  <TikTokIcon className="w-4 h-4 text-[#C4A76C] group-hover:text-white transition-colors" />
                  <span>@anatoliacoach</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F2EBDD]/60">
          <div>
            <span>© {new Date().getFullYear()} RAÍZ · Anatolia Zapata. Todos los derechos reservados.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EBDD] p-1 rounded-xs"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
