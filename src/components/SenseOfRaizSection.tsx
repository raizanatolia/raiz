import { PageId } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface SenseOfRaizSectionProps {
  onNavigate: (page: PageId) => void;
}

// Los 3 pasos con dirección visual de línea de tiempo editorial alterna
const SENSE_STEPS = [
  {
    step: '01',
    tag: '(01)',
    title: 'Comprender tu historia',
    description:
      'Mirar con respeto las vivencias, acuerdos aprendidos y circunstancias que han dado forma a tu manera de responder al mundo.',
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-comprender.png',
    alt: 'Comprender tu historia · Método RAÍZ con Anatolia Zapata',
    cropPosition: 'center center',
  },
  {
    step: '02',
    tag: '(02)',
    title: 'Reconocer tus recursos',
    description:
      'Identificar la claridad, la energía, la templanza y las fortalezas que ya habitan en ti, dejando de actuar solo desde la autoexigencia.',
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-reconocer.png',
    alt: 'Reconocer tus recursos · Método RAÍZ con Anatolia Zapata',
    cropPosition: 'center center',
  },
  {
    step: '03',
    tag: '(03)',
    title: 'Elegir y actuar con conciencia',
    description:
      'Diseñar pasos reales, graduales y sostenibles en coherencia con tus prioridades actuales y tu propia visión de vida.',
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-elegir.png',
    alt: 'Elegir y actuar con consciencia · Método RAÍZ con Anatolia Zapata',
    cropPosition: 'center center',
  },
];

export default function SenseOfRaizSection({ onNavigate }: SenseOfRaizSectionProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 03. Qué es RAÍZ: Encabezado de la sección */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
            EL SENTIDO DE RAÍZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
            No se trata de cambiarlo todo.{' '}
            <span className="italic block sm:inline">
              Se trata de comprender qué importa y elegir cómo avanzar.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
            RAÍZ integra una mirada estructurada, herramientas de coaching y PNL, y una perspectiva de género y
            desarrollo que reconoce nuestra historia, nuestros recursos y las condiciones en las que vivimos.
            Su propósito es acompañarte a observar desde dónde decides, explorar posibilidades y construir pasos
            que puedas sostener.
          </p>
        </div>

        {/* Los 3 pasos: Dirección visual basada en la referencia de línea de tiempo editorial alterna */}
        <div className="relative mb-24 pb-16 border-b border-[#363D28]/10">
          {/* Línea central vertical continua (visible en desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-8 bottom-12 -translate-x-1/2 w-[1.5px] bg-[#363D28]/25 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-16 md:space-y-24">
            {SENSE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1; // Step 02 is inverted: Image on left, Text on right

              return (
                <div
                  key={step.step}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center"
                >
                  {/* Nodo central sobre la línea (desktop) */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#363D28] border-2 border-[#F2EBDD] z-20 shadow-xs"
                    aria-hidden="true"
                  />

                  {/* Lado 1 (Izquierda en desktop) */}
                  <div className={`flex flex-col justify-center ${isEven ? 'md:order-2 md:pl-6 lg:md:pl-10 text-left' : 'md:order-1 md:pr-6 lg:md:pr-10 md:text-right text-left'}`}>
                    {isEven ? (
                      /* Texto en el lado derecho para Paso 02 */
                      <div>
                        <span className="text-xs sm:text-sm font-sans font-medium text-[#A18347] tracking-wider block mb-2">
                          {step.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#363D28] tracking-tight mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed max-w-lg">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      /* Texto en el lado izquierdo para Paso 01 y 03 */
                      <div>
                        <span className="text-xs sm:text-sm font-sans font-medium text-[#A18347] tracking-wider block mb-2">
                          {step.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#363D28] tracking-tight mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed max-w-lg md:ml-auto">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Lado 2 (Derecha en desktop para 01 y 03, Izquierda para 02) */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[16/10] bg-[#EAE2D2] border border-[#363D28]/12 shadow-xs group">
                      <img
                        src={step.image}
                        alt={step.alt}
                        loading="lazy"
                        style={{ objectPosition: step.cropPosition }}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                      />
                      {/* Sutil overlay de tono cálido para armonía con la paleta de RAÍZ */}
                      <div className="absolute inset-0 bg-[#363D28]/5 pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 04. Dos caminos */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              PROPUESTA Y LÍNEAS DE ACCIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#363D28]">
              Un mismo propósito, diferentes caminos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
            {/* Tarjeta 1: RAÍZ para personas */}
            <a
              href="#/personas"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/personas';
                onNavigate('personas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-[20px] aspect-[4/5] min-h-[460px] sm:min-h-[500px] md:min-h-0 flex flex-col justify-end p-6 sm:p-8 md:p-9 shadow-md transition-all duration-[350ms] border border-[#363D28]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#363D28]"
              aria-label="RAÍZ para personas - Línea individual"
            >
              {/* Fotografía a sangre con zoom sutil */}
              <img
                src="https://res.cloudinary.com/rus3f4tb/image/upload/v1792773219/raiz-anatolia-zapata-personas.png"
                alt="RAÍZ para personas"
                loading="lazy"
                style={{ objectPosition: 'center 20%' }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
              />

              {/* Overlay degradado verde oliva profundo #363D28 con 95% en la base */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(54, 61, 40, 0.95) 0%, rgba(54, 61, 40, 0.90) 40%, rgba(54, 61, 40, 0.50) 65%, rgba(54, 61, 40, 0.15) 85%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Contenido en la zona inferior */}
              <div className="relative z-10 flex flex-col items-start text-left w-full">
                <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold mb-2">
                  LÍNEA INDIVIDUAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#F2EBDD] tracking-tight mb-2.5 leading-snug">
                  RAÍZ para personas
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/90 font-light leading-relaxed mb-6 max-w-sm">
                  Comprende tus decisiones, reconoce tus recursos y descubre qué quieres construir en tu siguiente etapa.
                </p>

                {/* Banda horizontal CTA verde oliva más clara con texto y flecha */}
                <div className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#454E34] text-[#F2EBDD] border border-[#F2EBDD]/15 transition-all duration-[350ms] group-hover:bg-[#4D573B]">
                  <span className="text-xs sm:text-sm font-sans font-medium tracking-wide">
                    Explorar RAÍZ para personas
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#F2EBDD] transition-transform duration-[350ms] group-hover:translate-x-1.5 motion-reduce:transform-none" />
                </div>
              </div>
            </a>

            {/* Tarjeta 2: RAÍZ para organizaciones */}
            <a
              href="#/organizaciones"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#/organizaciones';
                onNavigate('organizaciones');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-[20px] aspect-[4/5] min-h-[460px] sm:min-h-[500px] md:min-h-0 flex flex-col justify-end p-6 sm:p-8 md:p-9 shadow-md transition-all duration-[350ms] border border-[#363D28]/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#363D28]"
              aria-label="RAÍZ para organizaciones - Línea institucional"
            >
              {/* Fotografía a sangre con zoom sutil */}
              <img
                src="https://res.cloudinary.com/rus3f4tb/image/upload/v1792773219/raiz-anatolia-zapata-empresas.png"
                alt="RAÍZ para organizaciones"
                loading="lazy"
                style={{ objectPosition: 'center 25%' }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
              />

              {/* Overlay degradado verde oliva profundo #363D28 con 95% en la base */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(54, 61, 40, 0.95) 0%, rgba(54, 61, 40, 0.90) 40%, rgba(54, 61, 40, 0.50) 65%, rgba(54, 61, 40, 0.15) 85%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Contenido en la zona inferior */}
              <div className="relative z-10 flex flex-col items-start text-left w-full">
                <span className="text-[11px] sm:text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold mb-2">
                  LÍNEA INSTITUCIONAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#F2EBDD] tracking-tight mb-2.5 leading-snug">
                  RAÍZ para organizaciones
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/90 font-light leading-relaxed mb-6 max-w-sm">
                  Experiencias de desarrollo humano, bienestar y liderazgo para construir entornos más conscientes.
                </p>

                {/* Banda horizontal CTA verde oliva más clara con texto y flecha */}
                <div className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#454E34] text-[#F2EBDD] border border-[#F2EBDD]/15 transition-all duration-[350ms] group-hover:bg-[#4D573B]">
                  <span className="text-xs sm:text-sm font-sans font-medium tracking-wide">
                    Conocer soluciones
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#F2EBDD] transition-transform duration-[350ms] group-hover:translate-x-1.5 motion-reduce:transform-none" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
