import { PageId } from '../data/content';
import { Sparkles, Users, Lightbulb, Compass, ArrowRight } from 'lucide-react';
import OrganicTrace from './OrganicTrace';

interface ConnectionSectionProps {
  onNavigate: (page: PageId) => void;
}

// 4 tarjetas fotográficas editoriales con imágenes oficiales de Cloudinary
const EDITORIAL_CARDS = [
  {
    id: 'bienestar',
    title: 'Bienestar',
    description:
      'Cuando lo que haces y lo que deseas parecen ir en direcciones distintas, puedes sentirte cada vez más cansada o desconectada de ti.',
    icon: Sparkles,
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792770476/raiz-anatolia-zapata-bienestar.png',
    position: 'center 20%',
  },
  {
    id: 'relaciones',
    title: 'Relaciones',
    description:
      'Reconocer tus patrones puede ayudarte a comprender mejor cómo te comunicas, cuidas y estableces límites.',
    icon: Users,
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792770503/raiz-anatolia-zapata-relaciones.png',
    position: 'center 30%',
  },
  {
    id: 'oportunidades',
    title: 'Oportunidades',
    description:
      'Hay ideas y posibilidades que merecen ser exploradas, incluso cuando todavía no tienes todas las respuestas.',
    icon: Lightbulb,
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792770546/raiz-anatolia-zapata-oportunidades.png',
    position: 'center 25%',
  },
  {
    id: 'forma-elegir',
    title: 'Tu forma de elegir',
    description:
      'Puedes aprender a reconocer qué influye en tus respuestas y considerar otras maneras de actuar.',
    icon: Compass,
    image: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792770544/raiz-anatolia-zapata-tu-forma-de-elegir.png',
    position: 'center 25%',
  },
];

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

        {/* Cuatro tarjetas fotográficas editoriales premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-14">
          {EDITORIAL_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[360px] sm:min-h-[390px] md:min-h-[410px] flex flex-col justify-end p-7 sm:p-9 border border-[#363D28]/15 shadow-xs"
              >
                {/* Background Photography with smooth hover zoom respecting reduced motion */}
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  style={{ objectPosition: card.position }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                />

                {/* Overlay degradado verde oliva profundo #363D28 (~85% en texto, reduciéndose hacia la derecha y arriba) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(54,61,40,0.88) 0%, rgba(54,61,40,0.82) 48%, rgba(54,61,40,0.38) 82%, rgba(54,61,40,0.18) 100%), linear-gradient(to top, rgba(54,61,40,0.92) 0%, rgba(54,61,40,0.72) 45%, transparent 80%)',
                  }}
                  aria-hidden="true"
                />

                {/* Content: Icon, Title, Description aligned left at the bottom */}
                <div className="relative z-10 flex flex-col items-start text-left max-w-md">
                  <div className="w-10 h-10 rounded-full bg-[#F2EBDD]/15 backdrop-blur-xs border border-[#F2EBDD]/25 flex items-center justify-center text-[#F2EBDD] mb-4">
                    <Icon className="w-5 h-5 stroke-[1.7]" />
                  </div>

                  <h3 className="text-2xl sm:text-[1.65rem] font-serif font-semibold text-[#F2EBDD] tracking-tight mb-2.5 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm sm:text-[0.93rem] font-sans text-[#F2EBDD]/90 font-light leading-relaxed">
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
