import { SENSE_OF_RAIZ_CONCEPTS, PageId } from '../data/content';
import { ArrowRight, User, Building2 } from 'lucide-react';

interface SenseOfRaizSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function SenseOfRaizSection({ onNavigate }: SenseOfRaizSectionProps) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 03. Qué es RAÍZ */}
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

        {/* Los 3 conceptos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 pb-16 border-b border-[#363D28]/10">
          {SENSE_OF_RAIZ_CONCEPTS.map((concept) => (
            <div
              key={concept.number}
              className="p-7 rounded-2xl bg-[#EAE2D2]/50 border border-[#363D28]/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-serif italic text-[#A18347] font-medium block mb-2">
                  {concept.number}
                </span>
                <h3 className="text-xl font-serif font-semibold text-[#363D28] mb-3">
                  {concept.title}
                </h3>
                <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 04. Dos caminos */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              PROPUESTA Y LÍNEAS DE ACCIÓN
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#363D28]">
              Un mismo propósito, diferentes caminos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Camino Personas */}
            <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#363D28]/15 flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-6">
                  <User className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                  Línea individual
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                  RAÍZ para personas
                </h3>
                <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-8">
                  Un espacio para mujeres que buscan comprender sus decisiones, reconectar con su claridad y
                  construir su siguiente etapa personal y profesional.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/personas';
                  onNavigate('personas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-2 border-b border-[#363D28]/30 hover:border-[#A18347] self-start"
              >
                <span>Explorar RAÍZ para personas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Camino Organizaciones */}
            <div className="bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#363D28]/15 flex flex-col justify-between hover:shadow-xs transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-6">
                  <Building2 className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                  Línea institucional
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                  RAÍZ para organizaciones
                </h3>
                <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-8">
                  Experiencias y programas que promueven desarrollo humano, bienestar, liderazgo con perspectiva
                  y entornos de trabajo más conscientes y humanos.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/organizaciones';
                  onNavigate('organizaciones');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-2 border-b border-[#363D28]/30 hover:border-[#A18347] self-start"
              >
                <span>Conocer soluciones para organizaciones</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
