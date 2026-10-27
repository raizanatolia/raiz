import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { ArrowRight } from 'lucide-react';

interface AboutHomeSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutHomeSection({ onNavigate }: AboutHomeSectionProps) {
  const photoUrl = BRAND_ASSETS.anatoliaSplitCard;

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#F5EFEB] border-t border-[#363D28]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Card Container matching reference mockup */}
        <div className="bg-[#FAF6F0] rounded-2xl sm:rounded-3xl border border-[#363D28]/12 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
            {/* Eyebrow with gold accent bar */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-1 h-5 sm:h-6 bg-[#C59B4B] rounded-full inline-block" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-sans tracking-[0.16em] uppercase text-[#363D28]/90 font-bold">
                ALGUNA VEZ SENTÍ CULPA DE ESTAR PARA MÍ...
              </span>
            </div>

            {/* Headline with custom brush underline under 'Y TODOS.' */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-[#222918] tracking-tight leading-[1.1] uppercase mb-6 sm:mb-7">
              <span>ERA TAN NORMAL</span>
              <br />
              <span>ESTAR PARA TODO</span>
              <br />
              <span className="relative inline-block mt-1">
                <span>Y TODOS.</span>
                {/* Organic curved brush underline */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full h-3.5 text-[#C8D674] pointer-events-none"
                  viewBox="0 0 120 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8 C 35 13, 85 2, 117 7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base font-sans text-[#222918]/85 font-normal leading-relaxed mb-6 sm:mb-7 max-w-xl">
              Lo que nació como un proceso de autodescubrimiento se convirtió en un viaje para mí, para cuestionar desde dónde venían mis decisiones y qué quería construir.
            </p>

            {/* Highlighted Core Manifesto Block */}
            <div className="bg-[#D8E488]/70 border-l-4 border-[#5A6836] p-4 sm:p-5 rounded-r-xl mb-7 sm:mb-9 max-w-xl">
              <p className="text-xs sm:text-sm font-sans font-extrabold uppercase text-[#222918] tracking-wide leading-snug">
                CREO QUE CUIDAR DE QUIENES AMAS Y DESARROLLARTE NO DEBERÍAN SER CAMINOS OPUESTOS.
              </p>
            </div>

            {/* Actions: Primary outlined pill CTA and secondary biography link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/viaje-raiz';
                  onNavigate('viaje-raiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wider uppercase border-2 border-[#222918] text-[#222918] hover:bg-[#222918] hover:text-[#FAF7F2] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222918] cursor-pointer"
              >
                <span>QUIERO VIAJAR A LA RAÍZ</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/sobre-mi';
                  onNavigate('sobre-mi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans text-[#222918]/80 hover:text-[#222918] font-semibold underline underline-offset-4 transition-colors cursor-pointer"
              >
                <span>Conoce mi historia completa</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Full-Height Portrait Photo */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-[#EFE9DF]">
            <img
              src={photoUrl}
              alt="Anatolia Zapata, coach y creadora del Método RAÍZ"
              className="w-full h-full object-cover object-top lg:absolute lg:inset-0 select-none"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
