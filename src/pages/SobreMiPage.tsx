import { useState } from 'react';
import { PageId, getWhatsAppLink } from '../data/content';
import { IMAGES, getImageUrl } from '../data/images';
import { ArrowRight, MessageCircle } from 'lucide-react';
import OrganicTrace from '../components/OrganicTrace';

interface SobreMiPageProps {
  onNavigate: (page: PageId) => void;
}

export default function SobreMiPage({ onNavigate }: SobreMiPageProps) {
  const [imgError, setImgError] = useState(false);
  const portraitImage = IMAGES.anatoliaPortrait;
  const whatsappUrl = getWhatsAppLink('anatolia');

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Hero Sobre Mí */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-20 md:mb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
              CONOCE MI HISTORIA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.12] mb-6">
            Aprendí que cuidar a quienes amas{' '}
            <span className="italic block sm:inline">no debería significar dejar de elegirte a ti misma.</span>
          </h1>

          <p className="text-lg sm:text-xl font-serif text-[#363D28] leading-relaxed mb-6 font-normal">
            Soy Anatolia Zapata, mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.
          </p>
        </div>
      </section>

      {/* Relato Editorial en Primera Persona */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Vertical Visual: Retrato oficial de Anatolia Zapata */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden bg-[#EAE2D2] aspect-[3/4] shadow-xs border border-[#363D28]/10">
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
                    <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] mt-1">
                      Creadora de RAÍZ
                    </span>
                  </div>
                )}
              </div>
              <p className="mt-3 text-center text-xs font-sans text-[#363D28]/80 font-medium">
                Anatolia Zapata · Creadora de RAÍZ
              </p>
            </div>
          </div>

          {/* Bloques Narrativos */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            {/* Bloque 1: Cuando el amor y los sueños parecían competir */}
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Punto de quiebre
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
                Cuando el amor y los sueños parecían competir
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
                <p>
                  Durante mucho tiempo, confié en mi capacidad para analizar, organizar y encontrar soluciones
                  estructuradas a cualquier desafío.
                </p>
                <p>
                  Sin embargo, la maternidad me planteó una pregunta que no podía responder únicamente desde la
                  lógica técnica: <em>¿Cómo quería vivir mi propia vida?</em>
                </p>
                <p>
                  Con la llegada de mis dos hijos, quise ser una mamá presente, cuidar de mi familia y acompañar
                  de cerca su crecimiento. Al mismo tiempo, mientras mi desarrollo profesional quedaba en pausa,
                  comencé a sentir que estaba perdiendo una parte esencial de mi identidad.
                </p>
                <p>
                  Al revisar mi historia familiar, reconocí que ciertas experiencias también habían influido en mi
                  manera de cuidar y de tomar decisiones. Mi madre había atravesado la pérdida de dos hijos, una
                  vivencia familiar que me llevó a reflexionar sobre el miedo inconsciente a perder a quienes más amaba.
                </p>
                {/* Nota para revisión editorial de Anatolia */}
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#A18347]/20 text-[11px] text-[#363D28]/70 italic">
                  [Nota editorial: Este párrafo sobre la historia familiar queda identificado para tu revisión y validación de publicación].
                </div>
                <p>
                  Comprendí entonces que no necesitaba amar menos ni renunciar a mis propios sueños. Necesitaba
                  reconocer con honestidad desde dónde estaba decidiendo y qué quería seguir construyendo.
                </p>
              </div>
            </div>

            {/* Bloque 2: Así comenzó el camino hacia RAÍZ */}
            <div className="pt-8 border-t border-[#363D28]/10">
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Integración
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
                Así comenzó el camino hacia RAÍZ
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
                <p>
                  Integré mi formación como ingeniera industrial con herramientas de coaching, programación
                  neurolingüística y una mirada de género y desarrollo.
                </p>
                <p>
                  Reconocí que nuestras decisiones no ocurren en el vacío: están profundamente influenciadas por
                  nuestra historia, nuestras creencias, las emociones que sentimos, los valores que priorizamos y
                  las condiciones reales en las que vivimos.
                </p>
                <p>
                  De esa búsqueda nació <strong>RAÍZ</strong>, como una filosofía y metodología para comprender
                  desde dónde decidimos, reconocer los recursos que ya tenemos y explorar posibilidades para avanzar
                  con firmeza y serenidad.
                </p>
              </div>
            </div>

            {/* Bloque 3: Lo que hoy quiero construir */}
            <div className="pt-8 border-t border-[#363D28]/10">
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Propósito presente
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
                Lo que hoy quiero construir
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
                <p>
                  Hoy acompaño a mujeres en transiciones personales y profesionales, así como a organizaciones que
                  buscan desarrollar entornos más humanos y conscientes.
                </p>
                <p>
                  Mi convicción profunda es que el desarrollo personal y profesional no tiene por qué competir con el
                  cuidado y el amor hacia quienes amamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre Destacado de la Historia */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#363D28]/10 text-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <OrganicTrace variant="vertical" className="mb-4" />

          <blockquote className="my-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#363D28] leading-tight font-normal">
              “Creo en un mundo de personas más conscientes de sus decisiones, que dejan huella positiva en sus
              familias, organizaciones y en las nuevas generaciones.”
            </p>
          </blockquote>

          <p className="text-base sm:text-lg font-serif italic text-[#363D28]/80 mb-2">
            Por eso existe RAÍZ.
          </p>

          <p className="text-xl sm:text-2xl font-serif text-[#363D28] mb-8 font-medium">
            Cada decisión deja una huella. ¿Desde dónde estás tomando las tuyas?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversemos</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
