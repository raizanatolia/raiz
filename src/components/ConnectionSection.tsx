import { IDENTIFICATION_CARDS, PageId } from '../data/content';
import { Sparkles, Users, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import OrganicTrace from './OrganicTrace';

interface ConnectionSectionProps {
  onNavigate: (page: PageId) => void;
}

const ICONS = [Sparkles, Users, Lightbulb, Compass];

export default function ConnectionSection({ onNavigate }: ConnectionSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-y border-[#363D28]/10 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
            UNA PAUSA PARA MIRARTE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-normal text-[#363D28] leading-tight mb-5">
            ¿Qué te está costando seguir dejando para después{' '}
            <span className="italic block sm:inline">ese cambio que sabes que necesitas?</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed">
            Tal vez quieres explorar otro camino, recuperar una parte de ti, desarrollar una idea o tomar una
            decisión importante. Pero entre las responsabilidades y lo urgente, lo que necesitas sigue esperando.
          </p>
        </div>

        {/* Cuatro tarjetas minimalistas con íconos lineales discretos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {IDENTIFICATION_CARDS.map((card, index) => {
            const Icon = ICONS[index];
            return (
              <div
                key={card.id}
                className="bg-[#F2EBDD] p-8 rounded-2xl border border-[#363D28]/10 hover:border-[#363D28]/25 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-5">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#363D28] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre empático de sección */}
        <div className="max-w-3xl mx-auto text-center pt-2">
          <p className="text-lg sm:text-xl font-serif text-[#363D28] leading-relaxed mb-6">
            “No siempre puedes cambiarlo todo.{' '}
            <span className="italic block sm:inline">
              Pero puedes empezar a cambiar tu manera de responder a lo que estás viviendo.
            </span>”
          </p>

          <div className="flex justify-center mb-6">
            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/mapa-raiz';
                onNavigate('mapa-raiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Quiero empezar a elegir conscientemente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <OrganicTrace variant="horizontal" className="my-2" />
        </div>
      </div>
    </section>
  );
}
