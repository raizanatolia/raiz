import { PageId, CONTACT } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Instagram, Linkedin } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const photoUrl = BRAND_ASSETS.anatoliaHeroHorizontal;

  return (
    <section className="relative bg-[#F5EFEB] pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      {/* Decorative subtle background ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial from-[#EBE3D3]/40 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main H1 Headline */}
        <h1 className="font-sans font-black tracking-tight text-[#222918] text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] leading-[1.08] uppercase mb-4 sm:mb-6">
          <span className="block">Tus Decisiones</span>
          <span className="inline-flex items-center justify-center flex-wrap gap-x-2 sm:gap-x-3.5 mt-1 sm:mt-2">
            <span>También tienen</span>
            {/* Highlighter badge around RAÍZ. with 3 radiating accent sparks */}
            <span className="relative inline-block align-middle my-1">
              <span className="relative inline-block bg-[#D3E07C] text-[#222918] px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl -rotate-1 shadow-xs">
                RAÍZ.
              </span>
              {/* Radiating 3 accent sparks at top-right of RAÍZ */}
              <span
                className="absolute -top-3.5 -right-5 sm:-top-5 sm:-right-7 pointer-events-none text-[#5A6836]"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  viewBox="0 0 28 28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="22" x2="11" y2="7" />
                  <line x1="13" y1="22" x2="18" y2="4" />
                  <line x1="20" y1="22" x2="26" y2="9" />
                </svg>
              </span>
            </span>
          </span>
        </h1>

        {/* Central Anatolia Zapata Portrait Photo (Horizontal Cutout integrated with premium radiance) */}
        <div className="relative my-3 sm:my-5 max-w-[420px] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[680px] mx-auto">
          {/* Subtle warm backlight radiance to give it a high-end luxury portrait feel */}
          <div
            className="absolute inset-x-8 -bottom-3 top-6 bg-radial from-[#D4DF86]/35 via-[#EAE2D2]/25 to-transparent blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />
          <img
            src={photoUrl}
            alt="Anatolia Zapata · Creadora del Método RAÍZ"
            className="w-full h-auto object-contain mx-auto drop-shadow-[0_12px_28px_rgba(34,41,24,0.12)] select-none"
            loading="eager"
          />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg font-sans font-medium text-[#2E3622]/90 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
          Descubre qué influye en tus decisiones<br className="hidden sm:inline" />
          {' '}y empieza a construir lo que sí quieres.
        </p>

        {/* CTA Button: MAPA RAÍZ → with 3 radiating accent sparks */}
        <div className="inline-flex items-center justify-center relative mb-14 sm:mb-16">
          <button
            type="button"
            onClick={() => {
              window.location.hash = '#/mapa-raiz';
              onNavigate('mapa-raiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-[#5A6836] hover:bg-[#4A572B] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A6836] cursor-pointer"
          >
            <span>MAPA RAÍZ</span>
            <span aria-hidden="true">→</span>
          </button>

          {/* 3 radiating accent sparks to the right of the button */}
          <span
            className="absolute left-[calc(100%+8px)] sm:left-[calc(100%+12px)] top-1/2 -translate-y-1/2 text-[#5A6836] pointer-events-none"
            aria-hidden="true"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="18" y2="3" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="18" y2="21" />
            </svg>
          </span>
        </div>

        {/* Strip: SÍGUEME EN REDES */}
        <div className="pt-8 sm:pt-10 border-t border-[#363D28]/12 max-w-2xl mx-auto">
          {/* Header with sparks on both sides */}
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            {/* Left 3 sparks */}
            <span className="text-[#5A6836] pointer-events-none" aria-hidden="true">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="20" y1="19" x2="6" y2="15" />
                <line x1="20" y1="12" x2="4" y2="12" />
                <line x1="20" y1="5" x2="6" y2="9" />
              </svg>
            </span>

            <span className="font-sans font-bold text-xs sm:text-sm tracking-[0.22em] text-[#222918] uppercase">
              SÍGUEME EN REDES
            </span>

            {/* Right 3 sparks */}
            <span className="text-[#5A6836] pointer-events-none" aria-hidden="true">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="19" x2="18" y2="15" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="5" x2="18" y2="9" />
              </svg>
            </span>
          </div>

          {/* Social Channels Row */}
          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#222918]">
            {/* Instagram */}
            <a
              href={CONTACT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Anatolia Zapata"
              className="inline-flex items-center gap-2 hover:text-[#5A6836] transition-colors py-1 group"
            >
              <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#222918] group-hover:text-[#5A6836] transition-colors" />
              <span>Instagram</span>
            </a>

            <span className="text-[#363D28]/25 font-light select-none" aria-hidden="true">|</span>

            {/* TikTok */}
            <a
              href={CONTACT.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok de Anatolia Zapata"
              className="inline-flex items-center gap-2 hover:text-[#5A6836] transition-colors py-1 group"
            >
              <svg
                className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-currentColor text-[#222918] group-hover:text-[#5A6836] transition-colors"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.86-4.49V8.69a8.18 8.18 0 0 0 4.91 1.62v-3.62h-1z" />
              </svg>
              <span>TikTok</span>
            </a>

            <span className="text-[#363D28]/25 font-light select-none" aria-hidden="true">|</span>

            {/* LinkedIn */}
            <a
              href={CONTACT.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Anatolia Zapata"
              className="inline-flex items-center gap-2 hover:text-[#5A6836] transition-colors py-1 group"
            >
              <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#222918] group-hover:text-[#5A6836] transition-colors" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
