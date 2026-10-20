import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { BRAND, CONTACT } from '../data/content';
import { IMAGES, getImageUrl } from '../data/images';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const heroImage = IMAGES.hero;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Kicker / Brand intro (quiet inline text, no pill box) */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#A18347]" aria-hidden="true" />
              <span className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#363D28]/85 font-medium">
                {BRAND.fullName}
              </span>
            </div>

            {/* Main H1 Headline with intentional line break */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.12] mb-6">
              Comprende tu raíz.{' '}
              <span className="block italic text-[#363D28]/95 mt-1">
                Transforma tus decisiones.
              </span>
            </h1>

            {/* Lead description */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-[#363D28]/85 font-light leading-relaxed max-w-xl mb-8">
              {BRAND.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              >
                <span>Explorar mi Mapa RAÍZ</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#viaje-raiz"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              >
                <span>Conocer Viaje RAÍZ</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#363D28]/70" aria-hidden="true" />
              </a>
            </div>

            {/* Brand motto subtitle */}
            <div className="mt-10 pt-6 border-t border-[#363D28]/10 w-full max-w-md">
              <p className="text-xs font-sans tracking-widest uppercase text-[#363D28]/70 italic">
                “{BRAND.subtagline}”
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle back decorative frame (no heavy shadows or bright gradients) */}
              <div
                className="absolute -inset-2.5 rounded-2xl border border-[#A18347]/20 -rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main photo container */}
              <div className="relative overflow-hidden rounded-xl bg-[#EAE2D2] aspect-[4/5] shadow-xs">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-[#EAE2D2] animate-pulse flex items-center justify-center">
                    <span className="text-xs text-[#363D28]/40 font-serif italic">
                      Cargando imagen...
                    </span>
                  </div>
                )}

                {imageError ? (
                  <div className="absolute inset-0 bg-[#EAE2D2] flex flex-col items-center justify-center p-6 text-center">
                    <svg
                      viewBox="0 0 40 40"
                      className="w-12 h-12 text-[#363D28]/40 mb-3 stroke-current"
                      fill="none"
                    >
                      <path
                        d="M20 5 C28 12, 30 20, 26 28 C22 35, 20 38, 20 38 C20 38, 18 35, 14 28 C10 20, 12 12, 20 5 Z"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <p className="text-sm font-serif italic text-[#363D28]/70">
                      Un espacio para la pausa y la conciencia
                    </p>
                  </div>
                ) : (
                  <img
                    src={getImageUrl(heroImage, { width: 900 })}
                    alt={heroImage.alt}
                    style={{ objectPosition: heroImage.cropPosition }}
                    className={`w-full h-full object-cover transition-opacity duration-700 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}
              </div>

              {/* Discreet caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#363D28]/60 font-sans">
                <span className="italic">Presencia, historia y perspectiva</span>
                <span className="text-[#A18347]">·</span>
                <span>Enfoque RAÍZ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
