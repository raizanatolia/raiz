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
          BLOQUE 1: HERO "YO SOY ANATOLIA" (Fiel a Imagen 2)
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-[#363D28]/10 bg-[#5A6836]">
          {/* Lado Izquierdo: Fotografía de Anatolia */}
          <div className="lg:col-span-5 relative bg-[#F6F0E8] min-h-[360px] sm:min-h-[440px] lg:min-h-full">
            <img
              src={BRAND_ASSETS.anatoliaHeroHorizontal}
              alt="Anatolia Zapata · Creadora del Método RAÍZ"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Lado Derecho: Bloque Verde Oliva con Texto */}
          <div className="lg:col-span-7 bg-[#5A6836] text-[#FAF7F2] p-8 sm:p-10 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              {/* Titulo con subrayado */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#FAF7F2]">
                  YO SOY ANATOLIA
                </h1>
                <div className="w-16 h-1 bg-[#D8E488] rounded-full mt-2" />
              </div>

              {/* Parrafos bio */}
              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#FAF7F2]/90 leading-relaxed font-light">
                <p>
                  Hija de Dios, mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ. Fan de <em>The Chosen</em>, ex amante de los postres (ahora negociando con el azúcar 😄) y de las conversaciones profundas entre amigas que nacen de la maternidad.
                </p>
                <p>
                  En mis redes comparto ideas y ejemplos cotidianos para entender cómo nuestra historia y nuestras decisiones influyen en lo que construimos, nuestro desarrollo y bienestar.
                </p>
                <p>
                  También acompaño a organizaciones a desarrollar estrategias de bienestar y desarrollo humano para construir entornos más conscientes.
                </p>
              </div>
            </div>

            {/* Inset Card: ¿Por qué hago todo esto? */}
            <div className="bg-[#FAF5EE] text-[#222918] p-6 sm:p-7 rounded-2xl shadow-xs space-y-2 mt-4">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#222918]">
                ¿Por qué hago todo esto?
              </h3>
              <p className="text-sm sm:text-base text-[#363D28]/90 leading-relaxed font-normal">
                Sueño con que crecer en una infancia feliz y protegida no sea un privilegio. Creo que transformar cómo vivimos y decidimos hoy puede cambiar la huella que dejamos en las nuevas generaciones.
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
