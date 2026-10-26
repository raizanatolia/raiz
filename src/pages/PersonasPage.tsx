import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { ArrowRight, Compass, Sparkles, BookOpen, Mail } from 'lucide-react';
import LeadContactForm from '../components/LeadContactForm';

interface PersonasPageProps {
  onNavigate: (page: PageId) => void;
}

const PERSONAS_SITUATIONS = [
  {
    number: '01',
    title: 'Ganas de cambio sin un mapa claro',
    description: 'Sabes que necesitas un cambio, pero no tienes claro por dónde empezar ni qué dirección tomar.',
  },
  {
    number: '02',
    title: 'Retomar proyectos e ideas propias',
    description: 'Estás considerando retomar un proyecto postergado, desarrollar una idea o cambiar de rumbo profesional.',
  },
  {
    number: '03',
    title: 'Recuperar espacio personal',
    description: 'Sientes que has postergado partes importantes de ti y de tus anhelos entre múltiples responsabilidades familiares y laborales.',
  },
  {
    number: '04',
    title: 'Desactivar respuestas repetitivas',
    description: 'Reconoces que ciertas decisiones, silencios o respuestas automáticas se repiten y quieres comprenderlas mejor para elegir distinto.',
  },
];

export default function PersonasPage({ onNavigate }: PersonasPageProps) {
  const scrollToForm = () => {
    const el = document.getElementById('formulario-personas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20 md:pb-28">
      {/* Hero Personas con background Cloudinary y velo marfil suave */}
      <section className="relative isolate min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden border-t-0 border-b border-[#363D28]/10 mb-12 md:mb-16 outline-none">
        {/* Layer de Fondo: Imagen oficial + capita marfil súper suave */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base marfil */}
          <div className="absolute inset-0 bg-[#F2EBDD]" />

          {/* Fotografía de fondo de Personas con encuadre prioritario en parte superior / rostro */}
          <img
            src={BRAND_ASSETS.heroPersonasBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[right_top] md:object-[right_top] pointer-events-none"
            style={{ objectPosition: 'right top' }}
          />

          {/* Capita marfil súper suave para armonizar con la paleta editorial y asegurar legibilidad sin opacar la fotografía */}
          <div className="absolute inset-0 bg-[#F2EBDD]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBDD] via-[#F2EBDD]/75 to-transparent sm:to-[#F2EBDD]/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2EBDD] to-transparent pointer-events-none" />
        </div>

        {/* Contenido Hero */}
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
                RAÍZ PARA PERSONAS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.14] mb-5">
              Un espacio para comprender,{' '}
              <span className="italic block sm:inline">elegir y construir tu siguiente etapa.</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-7">
              Acompaño a mujeres que desean comprender qué está influyendo en sus decisiones, reconocer sus
              recursos y avanzar hacia lo que consideran importante.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/mapa-raiz';
                  onNavigate('mapa-raiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              >
                <span>Descubre tu Mapa RAÍZ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 bg-[#F2EBDD]/60 backdrop-blur-xs transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Iniciar conversación</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de identificación */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#363D28]/10 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              RECONOCER TU MOMENTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#363D28] leading-tight">
              Tal vez te encuentras en uno de estos momentos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PERSONAS_SITUATIONS.map((item) => (
              <div
                key={item.number}
                className="p-8 rounded-2xl bg-[#F2EBDD] border border-[#363D28]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-serif italic text-[#A18347] font-medium block mb-2">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-[#363D28] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de acompañamiento: Mapa, Viaje y Bitácora */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
            EL RECORRIDO DE ACOMPAÑAMIENTO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#363D28] leading-tight mb-4">
            Herramientas pensadas para cada momento de tu proceso.
          </h2>
          <p className="text-base font-sans text-[#363D28]/80 font-light">
            Distinguimos claramente el rol de cada una para que elijas con libertad lo que necesitas hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* Mapa RAÍZ */}
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-5">
                <Compass className="w-5 h-5 stroke-[1.6]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-1">
                Exploración inicial
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Mapa RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed mb-6">
                <strong>Explorar tu punto de partida:</strong> una herramienta de autoobservación para revisar
                tus cinco recursos fundamentales (perspectiva, gestión emocional, dirección, energía vital y acción consistente).
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30 self-start"
            >
              <span>Conocer el Mapa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Viaje RAÍZ */}
          <div className="p-8 rounded-3xl bg-[#EAE2D2] border border-[#363D28]/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#363D28] flex items-center justify-center text-[#F2EBDD] mb-5">
                <Sparkles className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#363D28]/70 font-semibold block mb-1">
                Acompañamiento individual
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Viaje RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/85 font-light leading-relaxed mb-6">
                <strong>Profundizar con acompañamiento personalizado:</strong> 12 sesiones a lo largo de tres
                meses para mirar tu historia, activar tus recursos y construir acuerdos que puedas sostener.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/viaje-raiz';
                onNavigate('viaje-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#222719] py-2 border-b border-[#363D28] self-start"
            >
              <span>Explorar el Viaje</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bitácora RAÍZ */}
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-5">
                <BookOpen className="w-5 h-5 stroke-[1.6]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-1">
                Soporte de proceso
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Bitácora RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed mb-4">
                <strong>Registrar el proceso de reflexión:</strong> material físico y cuidado para asentar
                descubrimientos, reflexiones y acuerdos entre cada sesión.
              </p>
              <p className="text-xs font-sans text-[#363D28]/60 italic mb-6">
                Incluida exclusivamente dentro del acompañamiento de Viaje RAÍZ.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/viaje-raiz';
                onNavigate('viaje-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30 self-start"
            >
              <span>Ver detalles de Viaje</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dual CTA: Conversar y Explorar Mapa */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-[#363D28] mb-2">
              ¿Quieres dar el primer paso?
            </h3>
            <p className="text-sm font-sans text-[#363D28]/80 font-light">
              Explora tu Mapa RAÍZ en línea o escríbeme directamente para conversar sobre tu proceso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all"
            >
              <span>Descubre tu Mapa</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={scrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Conversemos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Formulario de Acompañamiento Individual: Un Primer Paso */}
      <LeadContactForm variant="persona" id="formulario-personas" onNavigate={onNavigate} />
    </div>
  );
}
