import { FUNDAMENTAL_RESOURCES, CONTACT, PageId, getWhatsAppLink } from '../data/content';
import { ArrowUpRight, Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

interface MapaRaizPageProps {
  onNavigate: (page: PageId) => void;
}

const RESOURCE_ICONS = [Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2];

const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Accede a la herramienta',
    description: 'Ingresa a la plataforma digital del Mapa RAÍZ mediante un enlace directo y sin costos asociados.',
  },
  {
    step: '02',
    title: 'Responde desde tu realidad',
    description: 'Preguntas breves organizadas alrededor de tus cinco recursos cotidianos, respondiendo con honestidad y sin juicio.',
  },
  {
    step: '03',
    title: 'Abre la conversación',
    description: 'Usa tus reflexiones para conversar directamente con Anatolia sobre tu momento y evaluar el acompañamiento que necesitas.',
  },
];

export default function MapaRaizPage({ onNavigate }: MapaRaizPageProps) {
  const whatsappUrl = getWhatsAppLink('mapa');

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* 1. Hero Mapa RAÍZ */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
              MAPA RAÍZ · TU PUNTO DE PARTIDA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.12] mb-4">
            ¿Desde dónde estás tomando{' '}
            <span className="italic block sm:inline">tus decisiones?</span>
          </h1>

          <p className="text-lg sm:text-xl font-serif italic text-[#363D28]/90 mb-5">
            Antes de decidir hacia dónde ir, vale la pena reconocer desde dónde estás partiendo.
          </p>

          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
            El Mapa RAÍZ es una herramienta de exploración personal que propone observar cinco recursos
            fundamentales y reflexionar sobre tu momento actual.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <span>Descubre tu Mapa RAÍZ</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversemos sobre tu mapa</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 & 3. Qué es y Para quién es */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#363D28]/10 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
              PROPÓSITO DE LA HERRAMIENTA
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
              Qué es el Mapa RAÍZ
            </h2>
            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-4">
              Es un recurso de indagación amable creado para detener la prisa cotidiana y poner la mirada en lo
              que usualmente pasa desapercibido: cómo interpretas, qué sientes, hacia dónde apuntas, cómo cuidas tu
              energía y cómo conviertes tus acuerdos en acción.
            </p>
            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed">
              No busca catalogarte en una etiqueta fija ni decirte qué debes hacer. Te ofrece una fotografía de tu
              estado actual para que decidas con mayor certeza y calma.
            </p>
          </div>

          <div>
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
              A QUIÉN ESTÁ DIRIGIDO
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
              Para quién es
            </h2>
            <ul className="space-y-3.5 text-sm sm:text-base font-sans text-[#363D28]/80 font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Mujeres en momentos de encrucijada personal o profesional que necesitan ordenar prioridades.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Personas que se sienten cansadas de reaccionar en automático o postergar lo que les importa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A18347] mt-2.5 shrink-0" />
                <span>Quienes desean un punto de partida honesto antes de comprometerse con un proceso de acompañamiento.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Los cinco recursos oficiales */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
            LAS CINCO DIMENSIONES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] mb-4">
            Los cinco recursos oficiales
          </h2>
          <p className="text-base font-sans text-[#363D28]/80 font-light">
            Dimensiones observables que sostienen la calidad de cada una de tus decisiones:
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {FUNDAMENTAL_RESOURCES.map((resource, idx) => {
            const Icon = RESOURCE_ICONS[idx];
            return (
              <div
                key={resource.id}
                className="p-6 sm:p-8 rounded-2xl border border-[#363D28]/12 bg-[#FAF7F2] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
              >
                <div className="md:col-span-4 flex items-center gap-4">
                  <span className="text-xl sm:text-2xl font-serif text-[#A18347] font-medium min-w-[2.2rem]">
                    {resource.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28]">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-[#363D28]">
                      {resource.name}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
                    {resource.description}
                  </p>
                </div>

                <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#363D28]/10 pt-3 md:pt-0 md:pl-5">
                  <span className="text-[11px] uppercase tracking-wider text-[#A18347] font-semibold block mb-1">
                    Pregunta guía
                  </span>
                  <p className="text-xs font-serif italic text-[#363D28]/80">
                    {resource.reflectionPrompt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Cómo se utiliza */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#EAE2D2] border border-[#363D28]/15 mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-8 text-center">
            Cómo se utiliza el Mapa RAÍZ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col items-start">
                <span className="text-2xl font-serif text-[#A18347] font-medium mb-2">
                  {step.step}
                </span>
                <h4 className="text-lg font-serif font-semibold text-[#363D28] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Precauciones importantes y transparencia */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/15 flex items-start gap-4 mb-16">
          <AlertCircle className="w-5 h-5 text-[#A18347] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-sans text-[#363D28]/80 leading-relaxed">
            <strong className="font-semibold text-[#363D28] block mb-1">
              Nota de transparencia y rigor:
            </strong>
            El Mapa RAÍZ es exclusivamente una herramienta de reflexión consciente y exploración personal.
            No constituye una prueba psicométrica formal ni un diagnóstico psicológico o clínico. Su propósito
            es servir como puente para una conversación sincera contigo misma y con Anatolia Zapata.
          </div>
        </div>

        {/* 7. CTA final */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
            Explora hoy tu punto de partida
          </h3>
          <p className="text-sm font-sans text-[#363D28]/80 font-light mb-8">
            Tómate unos minutos para observar tus decisiones y comenzar a elegir con mayor claridad.
          </p>
          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
          >
            <span>Descubre tu Mapa RAÍZ</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
