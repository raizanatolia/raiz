import { PageId } from '../data/content';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';

interface OfferSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function OfferSection({ onNavigate }: OfferSectionProps) {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
            ALTERNATIVAS DE ENTRADA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-4">
            Hay distintas maneras de comenzar.
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed">
            Cada proceso es único. Puedes iniciar por tu cuenta explorando tu punto de partida, o dar el paso
            hacia un acompañamiento personalizado y continuo.
          </p>
        </div>

        {/* Tres bloques destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bloque 1: Mapa RAÍZ */}
          <div className="p-8 sm:p-9 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-6">
                <Compass className="w-6 h-6 stroke-[1.6]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Punto de partida
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Mapa RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed mb-6">
                Una herramienta de exploración personal para observar cinco recursos que influyen en tus decisiones.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-2 border-b border-[#363D28]/30 hover:border-[#A18347] self-start"
            >
              <span>Conocer el Mapa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bloque 2: Viaje RAÍZ (Destacado sutil) */}
          <div className="p-8 sm:p-9 rounded-3xl bg-[#EAE2D2] border border-[#363D28]/20 flex flex-col justify-between relative shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#363D28] flex items-center justify-center text-[#F2EBDD] mb-6">
                <Sparkles className="w-5 h-5 stroke-[1.8]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#363D28]/70 font-semibold block mb-2">
                Acompañamiento 1 a 1
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Viaje RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/85 font-light leading-relaxed mb-6">
                Un acompañamiento personalizado de 12 sesiones a lo largo de tres meses para profundizar en tu proceso.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/viaje-raiz';
                onNavigate('viaje-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#222719] transition-colors py-2 border-b border-[#363D28] self-start font-medium"
            >
              <span>Explorar el Viaje</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bloque 3: Bitácora RAÍZ */}
          <div className="p-8 sm:p-9 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 flex flex-col justify-between hover:shadow-xs transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-6">
                <BookOpen className="w-6 h-6 stroke-[1.6]" />
              </div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Soporte reflexivo
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-3">
                Bitácora RAÍZ
              </h3>
              <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed mb-4">
                Un material de reflexión para registrar descubrimientos, preguntas y pasos durante el recorrido.
              </p>
              <p className="text-xs font-sans text-[#363D28]/60 italic mb-6">
                Integrada como parte del acompañamiento. No se vende de manera aislada.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/viaje-raiz';
                onNavigate('viaje-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-2 border-b border-[#363D28]/30 hover:border-[#A18347] self-start"
            >
              <span>Conocer la Bitácora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
