import { PageId } from '../data/content';

interface OfferSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function OfferSection({ onNavigate }: OfferSectionProps) {
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const cards = [
    {
      id: 'metodo-raiz',
      title: 'MÉTODO RAÍZ',
      image: `${cleanBase}assets/cards/metodo-raiz-card.png`,
      alt: 'Método RAÍZ - Comprende desde dónde decides y qué quieres construir',
      buttonText: '¡QUIERO CONOCER EL MÉTODO! →',
      action: () => {
        window.location.hash = '#/metodo-raiz';
        onNavigate('metodo-raiz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'cursos-retos',
      title: 'CURSOS & RETOS',
      image: `${cleanBase}assets/cards/cursos-retos-card.png`,
      alt: 'Cursos & Retos - Aprende, explora y pon en práctica nuevas formas de elegir',
      buttonText: '¡EXPLORAR CURSOS & RETOS! →',
      action: () => {
        window.location.hash = '#/cursos-retos';
        onNavigate('cursos-retos');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'bitacora-raiz',
      title: 'BITÁCORA RAÍZ',
      image: `${cleanBase}assets/cards/bitacora-raiz-card.png`,
      alt: 'Bitácora RAÍZ - Un espacio para escribir, cuestionarte y llevar tus reflexiones a la práctica',
      buttonText: '¡QUIERO MI BITÁCORA! →',
      action: () => {
        window.location.hash = '#/bitacora-raiz';
        onNavigate('bitacora-raiz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  return (
    <section id="alternativas-de-entrada" className="py-16 sm:py-20 md:py-24 bg-[#F5EFEB] border-t border-[#363D28]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Sparks on both sides + EXPLORA RAÍZ with brush underline + Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            {/* Left 3 radiating sparks */}
            <span className="text-[#222918] pointer-events-none" aria-hidden="true">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="20" y1="18" x2="6" y2="15" />
                <line x1="20" y1="12" x2="4" y2="12" />
                <line x1="20" y1="6" x2="6" y2="9" />
              </svg>
            </span>

            {/* Main Title with curved lime brush underline under RAÍZ */}
            <h2 className="font-sans font-black tracking-tight text-[#222918] text-3xl sm:text-4xl md:text-5xl uppercase inline-flex items-center gap-2">
              <span>EXPLORA</span>
              <span className="relative inline-block">
                <span>RAÍZ</span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#C8D674] pointer-events-none"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7 C 30 12, 70 2, 98 7"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Right 3 radiating sparks */}
            <span className="text-[#222918] pointer-events-none" aria-hidden="true">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="4" y1="18" x2="18" y2="15" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="18" y2="9" />
              </svg>
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-sans font-bold text-xs sm:text-sm tracking-[0.22em] text-[#222918] uppercase">
            ENCUENTRA TU FORMA DE EMPEZAR.
          </p>
        </div>

        {/* 3 Entry Alternative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col group cursor-pointer"
              onClick={card.action}
            >
              {/* Card Photo Container */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#222918]/12 shadow-xs group-hover:shadow-md transition-all duration-300">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Outlined Pill CTA Button */}
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    card.action();
                  }}
                  className="w-full py-3 sm:py-3.5 px-4 rounded-full border-2 border-[#222918] text-[#222918] hover:bg-[#222918] hover:text-[#FAF7F2] font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222918] text-center"
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
