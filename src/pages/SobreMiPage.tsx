import { useState } from 'react';
import { PageId } from '../data/content';
import { IMAGES, getImageUrl } from '../data/images';
import { ArrowRight, Mail } from 'lucide-react';
import OrganicTrace from '../components/OrganicTrace';

interface SobreMiPageProps {
  onNavigate: (page: PageId) => void;
}

import { InstagramIcon, TikTokIcon } from '../components/SocialIcons';

export default function SobreMiPage({ onNavigate }: SobreMiPageProps) {
  const [imgError, setImgError] = useState(false);
  const portraitImage = IMAGES.anatoliaPortrait;

  const socialLinks = [
    {
      label: 'Instagram',
      handle: '@anatoliazapata',
      url: 'https://www.instagram.com/anatoliazapata/',
      icon: InstagramIcon,
    },
    {
      label: 'TikTok',
      handle: '@anatoliacoach',
      url: 'https://www.tiktok.com/@anatoliacoach',
      icon: TikTokIcon,
    },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* ========================================================
          BLOQUE 1: PRESENTACIÓN & HERO EDITORIAL
          ======================================================== */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 mb-14 md:mb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold">
              CONOCE MI HISTORIA
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.16] mb-6">
            Aprendí que cuidar a quienes amas{' '}
            <span className="italic block sm:inline">no debería significar dejar de elegirte a ti misma.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#363D28] leading-relaxed mb-6 font-normal">
            Soy Anatolia Zapata, mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.
          </p>

          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
            Durante mucho tiempo confié en mi capacidad para analizar, organizar y encontrar soluciones. Hasta que la maternidad me enfrentó a una pregunta que no podía resolver solo con la lógica:
          </p>

          <div className="my-6 pl-5 border-l-2 border-[#A18347]">
            <p className="text-xl sm:text-2xl font-serif italic text-[#363D28] font-normal leading-snug">
              «¿Cómo quería vivir mi propia vida?»
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          FILA 1: FOTO DE ANATOLIA CON REDES + BLOQUE 2 (PUNTO DE PARTIDA)
          La foto y el bloque 2 van en paralelo armónicamente
          ======================================================== */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Vertical Visual: Retrato de Anatolia Zapata + Redes Sociales */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                className="absolute -inset-2.5 rounded-2xl border border-[#A18347]/25 rotate-1 pointer-events-none"
                aria-hidden="true"
              />
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

              {/* Redes sociales directas bajo la foto */}
              <div className="mt-4 pt-4 border-t border-[#363D28]/10 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-full text-xs font-sans font-medium text-[#363D28] bg-[#FAF7F2] border border-[#363D28]/15 hover:border-[#A18347] hover:bg-[#F2EBDD] hover:text-[#222719] transition-all shadow-2xs"
                      aria-label={`${social.label} de Anatolia Zapata`}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#A18347]" />
                      <span>{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bloque 2: Cuando el amor y los sueños parecían competir */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1px] bg-[#A18347]" aria-hidden="true" />
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block">
                PUNTO DE PARTIDA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-5 leading-tight">
              Cuando el amor y los sueños parecían competir
            </h2>
            <div className="space-y-4 text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
              <p>
                Con la llegada de mis dos hijos, quería ser una mamá presente, cuidar a mi familia y acompañar su crecimiento. Pero, mientras mi profesión quedaba en pausa, empecé a sentir que me estaba perdiendo en mi propia identidad.
              </p>
              <p>
                Al revisar mi historia familiar, reconocí cuánto podía influir en mis decisiones el miedo a perder a quienes más amaba. Había crecido viendo a mi mamá atravesar la pérdida de dos de sus hijos y, sin darme cuenta, parte de ese temor también estaba presente en mi manera de cuidar.
              </p>
              <p>
                Comprendí que no necesitaba amar menos ni renunciar a mis sueños. Necesitaba entender desde dónde estaba decidiendo y qué quería seguir construyendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FILA 2: ABAJO DE LA FOTO -> BLOQUE 3 (INTEGRACIÓN Y PROPÓSITO)
          Ubicado limpiamente abajo de la foto en ancho de lectura editorial
          ======================================================== */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="pt-12 border-t border-[#363D28]/10 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[1px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block">
              INTEGRACIÓN Y PROPÓSITO
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#363D28] mb-6 leading-tight">
            Así comenzó el camino hacia RAÍZ
          </h2>

          <div className="space-y-5 text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
            <p>
              Integré mi formación como ingeniera industrial con herramientas de coaching, programación neurolingüística y una mirada de género y desarrollo. Empecé a comprender que nuestras decisiones no nacen de la nada: están influidas por nuestra historia, nuestras creencias, nuestras emociones y también por las condiciones en las que vivimos.
            </p>
            <p>
              De esa búsqueda nació RAÍZ: una filosofía y metodología que acompaña a las personas a comprender desde dónde deciden, reconocer sus recursos y elegir conscientemente qué quieren construir.
            </p>
            <p>
              Porque detrás de cada decisión hay una historia. Y cuando aprendemos a mirarla desde nuevas perspectivas, podemos dejar de repetir ciertos patrones y abrirnos a otras posibilidades.
            </p>
          </div>

          {/* Destacado Editorial */}
          <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#A18347]/30 shadow-xs relative">
            <div
              className="w-1.5 h-full absolute left-0 top-0 bottom-0 rounded-l-2xl bg-[#A18347]"
              aria-hidden="true"
            />
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#363D28] leading-relaxed">
              «Hoy sé que nuestra historia influye en nuestras decisiones, pero no tiene por qué decidir nuestro futuro.»
            </p>
          </div>

          <div className="space-y-5 text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
            <p>
              RAÍZ nació de una búsqueda personal, pero hoy acompaña a mujeres que atraviesan transiciones personales o profesionales y a organizaciones que quieren construir entornos más humanos y conscientes.
            </p>
            <p>
              Mi convicción es que nuestro desarrollo no tiene por qué competir con el cuidado de quienes amamos, y que transformar nuestra manera de decidir puede generar cambios que van más allá de nosotros: en nuestras relaciones, nuestras familias, nuestras organizaciones y las generaciones que vienen.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          BLOQUE 4: MI PROPÓSITO (Fondo oliva profundo #363D28)
          ======================================================== */}
      <section className="py-20 md:py-24 bg-[#363D28] text-[#F2EBDD] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-[#F2EBDD]/20 bg-[#F2EBDD]/5">
            <span className="w-2 h-2 rounded-full bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.22em] uppercase text-[#F2EBDD]/90 font-medium">
              MI PROPÓSITO
            </span>
          </div>

          <blockquote className="mb-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#F2EBDD] leading-tight max-w-3xl mx-auto">
              «Creo en un mundo de personas más conscientes de sus decisiones, que dejan huella positiva en sus familias, organizaciones y en las nuevas generaciones.»
            </p>
          </blockquote>

          <p className="text-base sm:text-lg font-serif italic text-[#A18347]">
            Por eso existe RAÍZ.
          </p>
        </div>
      </section>

      {/* ========================================================
          BLOQUE 5: CIERRE & LLAMADA A LA ACCIÓN
          ======================================================== */}
      <section className="py-20 bg-[#FAF7F2] border-t border-[#363D28]/10 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <OrganicTrace variant="vertical" className="mb-6" />

          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-8 font-normal leading-snug">
            Cada decisión deja una huella.{' '}
            <span className="italic block sm:inline">¿Desde dónde estás tomando las tuyas?</span>
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/contacto';
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Conversemos</span>
            </button>
          </div>

          {/* Enlaces a Redes Sociales al pie de la historia */}
          <div className="pt-8 border-t border-[#363D28]/10 flex flex-col items-center justify-center gap-3">
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#A18347] font-semibold">
              Conecta con Anatolia
            </span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-sans font-medium text-[#363D28] bg-white border border-[#363D28]/15 hover:border-[#A18347] hover:bg-[#F2EBDD] transition-all shadow-2xs"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#A18347]" />
                    <span>{social.handle}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
