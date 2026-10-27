import { PageId } from '../data/content';
import { ArrowDown } from 'lucide-react';

interface FunnelSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function FunnelSection({ onNavigate }: FunnelSectionProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#F5EFEB] border-t border-[#363D28]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-left mb-6 sm:mb-8">
          <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#222918] tracking-tight">
            Así empezaría el funnel
          </h3>
        </div>

        {/* Funnel Box Container matching reference mockup Block 3 */}
        <div className="bg-[#FAF7F2] rounded-2xl sm:rounded-3xl border border-[#363D28]/15 p-5 sm:p-8 md:p-10 shadow-xs">
          <div className="flex flex-col items-center max-w-2xl mx-auto space-y-4">
            
            {/* Step 1: HOME RAÍZ */}
            <div className="w-full bg-[#EFE9DF] hover:bg-[#EAE2D5] transition-colors rounded-xl sm:rounded-2xl py-6 px-5 sm:px-8 text-center cursor-pointer shadow-xs"
                 onClick={() => {
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                 }}>
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#222918] tracking-wider uppercase mb-1">
                HOME RAÍZ
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#222918]/80 font-normal">
                La persona descubre tu propuesta.
              </p>
            </div>

            {/* Downward Arrow */}
            <div className="text-[#363D28]/60 flex items-center justify-center py-1" aria-hidden="true">
              <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </div>

            {/* Step 2: MAPA RAÍZ */}
            <div
              className="w-full bg-[#EFE9DF] hover:bg-[#EAE2D5] transition-colors rounded-xl sm:rounded-2xl py-6 px-5 sm:px-8 text-center cursor-pointer shadow-xs border border-[#363D28]/10"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#222918] tracking-wider uppercase mb-1">
                MAPA RAÍZ
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#222918]/80 font-normal">
                Completa el diagnóstico inicial.
              </p>
            </div>

            {/* Downward Arrow */}
            <div className="text-[#363D28]/60 flex items-center justify-center py-1" aria-hidden="true">
              <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            </div>

            {/* Step 3: RESULTADO Y SIGUIENTE PASO */}
            <div
              className="w-full bg-[#EFE9DF] hover:bg-[#EAE2D5] transition-colors rounded-xl sm:rounded-2xl py-6 px-5 sm:px-8 text-center cursor-pointer shadow-xs"
              onClick={() => {
                window.location.hash = '#/viaje-raiz';
                onNavigate('viaje-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <h4 className="font-sans font-extrabold text-base sm:text-lg text-[#222918] tracking-wider uppercase mb-1">
                RESULTADO Y SIGUIENTE PASO
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#222918]/80 font-normal">
                Comprende sus recursos y conoce opciones pertinentes para continuar.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
