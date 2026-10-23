import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { BRAND, PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const bgImageUrl = BRAND_ASSETS.heroBackgroundCloudinaryUrl;

  return (
    <section className="relative isolate min-h-[85vh] md:min-h-[90vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Layer: Official Cloudinary background with legibility protection, or CSS atmospheric fallback */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {bgImageUrl ? (
          <>
            {/* Base color */}
            <div className="absolute inset-0 bg-[#F2EBDD]" />

            {/* Official Background Image - Full presence and clear visibility */}
            <img
              src={bgImageUrl}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center md:object-right pointer-events-none"
            />

            {/* Soft gentle legibility gradient on the left side where text sits */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBDD]/50 via-[#F2EBDD]/15 to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            {/* Atmospheric CSS Layers Fallback */}
            <div className="absolute inset-0 bg-[#F2EBDD]" />
            <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-radial from-[#E8DEC9]/50 via-[#EAE2D2]/25 to-transparent blur-3xl opacity-75" />
            <div className="absolute bottom-0 left-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-[#DFD5BF]/40 via-[#EAE2D2]/20 to-transparent blur-3xl opacity-60" />
            <div className="absolute right-6 md:right-16 bottom-12 md:bottom-20 w-64 md:w-96 h-64 md:h-96 opacity-[0.06] text-[#363D28]" aria-hidden="true">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <path d="M100 190 C100 130, 70 95, 40 70 M100 190 C100 120, 130 90, 160 60 M100 190 V30 M100 110 C80 90, 60 85, 45 80 M100 80 C120 65, 145 60, 155 50" strokeWidth="1" strokeLinecap="round" />
                <circle cx="100" cy="30" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBDD]/90 via-[#F2EBDD]/75 to-[#F2EBDD]/50" />
          </>
        )}
      </div>

      {/* Hero Content: Single column editorial composition */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
              {BRAND.heroEyebrow}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-serif font-normal text-[#363D28] tracking-tight leading-[1.12] mb-6">
            Sabes que necesitas un cambio.{' '}
            <span className="block italic text-[#363D28]/95 mt-1 sm:mt-2">
              Es momento de descubrir qué quieres construir.
            </span>
          </h1>

          {/* Editorial Description */}
          <p className="text-base sm:text-lg md:text-xl font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-9">
            {BRAND.heroDescription}
          </p>

          {/* CTAs: Principal y Secundario */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/personas';
                onNavigate('personas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Conoce mi acompañamiento</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#363D28]/70" aria-hidden="true" />
            </button>
          </div>

          {/* Enlace discreto a organizaciones */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/organizaciones';
                onNavigate('organizaciones');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs sm:text-sm font-sans text-[#363D28]/70 hover:text-[#363D28] underline underline-offset-4 transition-colors font-medium text-left"
            >
              ¿Representas una organización? Explora esta línea →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
