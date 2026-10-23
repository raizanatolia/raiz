import { useState } from 'react';
import { PageId } from '../data/content';
import { IMAGES, getImageUrl } from '../data/images';
import { ArrowRight } from 'lucide-react';

interface AboutHomeSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutHomeSection({ onNavigate }: AboutHomeSectionProps) {
  const [imgError, setImgError] = useState(false);
  const portraitImage = IMAGES.anatoliaPortrait;

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#363D28]/10 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Visual: Retrato oficial de Anatolia Zapata */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-2.5 rounded-2xl border border-[#A18347]/25 rotate-1 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-xl overflow-hidden bg-[#EAE2D2] aspect-[3/4] shadow-xs">
                {!imgError ? (
                  <img
                    src={getImageUrl(portraitImage, { width: 900 })}
                    alt="Anatolia Zapata, coach y creadora del Método RAÍZ"
                    loading="lazy"
                    style={{ objectPosition: portraitImage.cropPosition }}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <span className="font-serif text-2xl text-[#363D28]">Anatolia Zapata</span>
                    <span className="text-xs uppercase tracking-widest text-[#A18347] mt-1">
                      Creadora del Método RAÍZ
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-3 text-center text-xs font-sans text-[#363D28]/80 font-medium">
                Anatolia Zapata · Creadora de RAÍZ
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
              QUIÉN ESTÁ DETRÁS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
              Hola, soy Anatolia Zapata.
            </h2>

            <p className="text-lg sm:text-xl font-serif text-[#363D28] leading-relaxed mb-6 font-normal">
              Soy mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.
            </p>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed mb-6">
              Mi propia historia me llevó a comprender que cuidar de quienes amamos y seguir construyendo
              nuestros sueños no tendrían por qué ser caminos opuestos.
            </p>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed mb-9">
              Hoy acompaño a mujeres y organizaciones a reconocer qué influye en sus decisiones y explorar
              maneras más conscientes de avanzar.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/sobre-mi';
                onNavigate('sobre-mi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Conoce mi historia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
