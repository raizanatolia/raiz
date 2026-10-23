import { FUNDAMENTAL_RESOURCES, PageId } from '../data/content';
import { Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2, ArrowRight } from 'lucide-react';
import BotanicalGrowthSection from './BotanicalGrowthSection';

interface ApproachSectionProps {
  onNavigate: (page: PageId) => void;
}

const RESOURCE_ICONS = [
  Compass,         // Perspectiva
  Heart,           // Gestión emocional
  CompassIcon,     // Dirección
  BatteryCharging, // Energía vital
  CheckCircle2,    // Acción consistente
];

export default function ApproachSection({ onNavigate }: ApproachSectionProps) {
  return (
    <section id="enfoque" className="py-20 md:py-28 bg-[#EAE2D2]/40 border-t border-[#363D28]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 05. El Método RAÍZ */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
            EL MÉTODO RAÍZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
            El crecimiento comienza{' '}
            <span className="italic block sm:inline">por la raíz.</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed mb-6">
            El Método RAÍZ orienta un proceso de reflexión y acción para reconocer lo que influye en nuestras
            decisiones y explorar nuevas posibilidades.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.hash = '#/mapa-raiz';
              onNavigate('mapa-raiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-1.5 border-b border-[#363D28]/40 hover:border-[#A18347]"
          >
            <span>Conoce el Método RAÍZ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Metáfora interactiva de crecimiento botánico (SVG + GSAP) */}
        <div className="mb-20">
          <BotanicalGrowthSection />
        </div>

        {/* 06. Mapa RAÍZ: los cinco recursos */}
        <div className="pt-4">
          <div className="border-b border-[#363D28]/15 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
                PUNTO DE PARTIDA
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#363D28]">
                Cinco recursos para mirar tu punto de partida.
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-sans text-[#363D28]/70 max-w-sm">
              Cinco recursos fundamentales que influyen en cada una de tus elecciones cotidianas.
            </p>
          </div>

          {/* Integrated rows */}
          <div className="space-y-4 mb-10">
            {FUNDAMENTAL_RESOURCES.map((resource, idx) => {
              const Icon = RESOURCE_ICONS[idx];
              return (
                <div
                  key={resource.id}
                  className="p-6 sm:p-7 rounded-2xl border border-[#363D28]/12 bg-[#FAF7F2] hover:bg-[#F2EBDD] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
                >
                  <div className="md:col-span-4 flex items-center gap-4">
                    <span className="text-xl sm:text-2xl font-serif text-[#A18347] font-medium min-w-[2.2rem]">
                      {resource.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28]">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif font-semibold text-[#363D28]">
                        {resource.name}
                      </h4>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <p className="text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
                      {resource.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA principal hacia Mapa RAÍZ */}
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
