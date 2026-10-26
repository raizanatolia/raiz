import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Mail, Check, ArrowRight, Calendar, Sparkles, BookOpen, Clock } from 'lucide-react';

interface ViajeRaizPageProps {
  onNavigate: (page: PageId) => void;
}

const VIAJE_INCLUDES = [
  {
    title: '12 sesiones individuales y personalizadas',
    description: 'Espacio quincenal o semanal de trabajo íntimo 1 a 1 a lo largo de tres meses de proceso.',
  },
  {
    title: 'Bitácora RAÍZ física de acompañamiento',
    description: 'Material exclusivo para asentar acuerdos, preguntas de indagación y descubrimientos cotidianos.',
  },
  {
    title: 'Exploración de los 5 recursos fundamentales',
    description: 'Perspectiva, gestión emocional, dirección, energía vital y acción consistente.',
  },
  {
    title: 'Mirada atenta a tu historia y tu contexto real',
    description: 'Sin culpas aisladas ni fórmulas estándar: respetando tu vida, tu familia y tu entorno profesional.',
  },
  {
    title: 'Inicio y ritmo personalizado',
    description: 'Coordinación directa de fechas y horarios con Anatolia Zapata, sin depender de calendarios grupales.',
  },
];

const VIAJE_FAQS = [
  {
    question: '¿Cuánto dura exactamente el proceso?',
    answer: 'Consta de 12 sesiones distribuidas a lo largo de tres meses, permitiendo tiempo suficiente para asentar cambios en tu día a día.',
  },
  {
    question: '¿Dónde y cómo se realizan las sesiones?',
    answer: 'La modalidad habitual es por videollamada individual directa. Se coordina directamente con Anatolia según tu ubicación y disponibilidad.',
  },
  {
    question: '¿Cómo evalúo si este programa es para mí antes de empezar?',
    answer: 'Puedes escribir a Anatolia a través del formulario de contacto o al correo raizanatolia@gmail.com para conversar sobre tu momento actual y valorar conjuntamente si existe encaje mutuo para el acompañamiento.',
  },
];

export default function ViajeRaizPage({ onNavigate }: ViajeRaizPageProps) {

  return (
    <div className="pb-20 md:pb-28">
      {/* Hero Viaje RAÍZ con background Cloudinary y velo marfil suave */}
      <section className="relative isolate min-h-[400px] md:min-h-[480px] flex items-center pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden border-t-0 border-b border-[#363D28]/10 mb-14 md:mb-20 outline-none">
        {/* Layer de Fondo: Imagen oficial + capita marfil súper suave */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base marfil */}
          <div className="absolute inset-0 bg-[#F2EBDD]" />

          {/* Fotografía de fondo de Viaje RAÍZ */}
          <img
            src={BRAND_ASSETS.heroViajeRaizBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[right_top] md:object-[right_top] pointer-events-none"
            style={{ objectPosition: 'right top' }}
          />

          {/* Capita marfil súper suave para armonizar con la paleta editorial y asegurar legibilidad sin opacar la fotografía */}
          <div className="absolute inset-0 bg-[#F2EBDD]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBDD] via-[#F2EBDD]/80 to-transparent sm:to-[#F2EBDD]/15 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2EBDD] to-transparent pointer-events-none" />
        </div>

        {/* Contenido Hero */}
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
                ACOMPAÑAMIENTO PERSONALIZADO
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.14] mb-5">
              Viaje RAÍZ.{' '}
              <span className="italic block sm:inline">
                Un espacio para comprender tus decisiones y construir con mayor conciencia.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-7">
              Un proceso personalizado de 12 sesiones a lo largo de tres meses, orientado a explorar tu historia,
              tus recursos y las posibilidades que deseas construir.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.hash = '#/contacto';
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <Mail className="w-4 h-4" />
              <span>Conversemos sobre tu proceso</span>
            </button>
          </div>
        </div>
      </section>

      {/* Qué es y Para quién puede ser útil */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#363D28]/10 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              NATURALEZA DEL PROGRAMA
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
              Qué es el Viaje RAÍZ
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-4">
              Es un programa de acompañamiento uno a uno diseñado para dar continuidad a la claridad que
              descubres en el Mapa RAÍZ. En lugar de intervenciones puntuales, te ofrece un contenedor seguro y
              constante a lo largo de tres meses.
            </p>
            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed">
              Combinamos preguntas estructuradas, reflexión profunda y acuerdos prácticos para que tus elecciones
              dejen de nacer de la urgencia o de la exigencia desmedida.
            </p>
          </div>

          <div>
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              DESTINATARIAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
              Para quién puede ser útil
            </h2>
            <ul className="space-y-3 text-sm sm:text-base font-sans text-[#363D28]/80 font-light">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Mujeres que atraviesan transiciones de vida, maternidad o cambios de rumbo profesional.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Quienes quieren dejar de repetir patrones automáticos y aprender a sostener lo que deciden.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Personas que buscan un acompañamiento cálido, no punitivo y sin recetas universales.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Qué incluye el acompañamiento */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
            DETALLE DEL PROGRAMA
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] mb-4">
            Qué incluye el acompañamiento
          </h2>
          <p className="text-base font-sans text-[#363D28]/80 font-light">
            Estructura diseñada para que avances con serenidad y constancia:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {VIAJE_INCLUDES.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/12 flex items-start gap-4"
            >
              <div className="w-6 h-6 rounded-full bg-[#363D28]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#363D28]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-[#363D28] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cómo comenzar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#EAE2D2] border border-[#363D28]/15 mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-6">
            Cómo comenzar tu Viaje RAÍZ
          </h3>
          <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed max-w-2xl mb-6">
            El primer paso es una conversación inicial directa con Anatolia Zapata. Hablamos de tu momento actual,
            revisamos si este enfoque responde a lo que buscas y definimos fechas para iniciar.
          </p>
          <button
            type="button"
            onClick={() => {
              window.location.hash = '#/contacto';
              onNavigate('contacto');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
          >
            <Mail className="w-4 h-4" />
            <span>Consultar por Viaje RAÍZ</span>
          </button>
        </div>

        {/* FAQs de Viaje RAÍZ */}
        <div className="max-w-3xl mx-auto pt-6">
          <h3 className="text-2xl font-serif text-[#363D28] mb-6 text-center">
            Preguntas frecuentes sobre el programa
          </h3>
          <div className="divide-y divide-[#363D28]/10 border-y border-[#363D28]/10">
            {VIAJE_FAQS.map((faq, i) => (
              <div key={i} className="py-5">
                <h4 className="text-base sm:text-lg font-serif font-medium text-[#363D28] mb-2">
                  {faq.question}
                </h4>
                <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
