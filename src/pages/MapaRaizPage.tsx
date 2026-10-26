import { CONTACT, PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import {
  ArrowUpRight,
  Compass,
  Heart,
  Navigation,
  Zap,
  CheckCircle2,
  Mail,
  AlertCircle,
  LucideIcon,
} from 'lucide-react';

interface MapaRaizPageProps {
  onNavigate: (page: PageId) => void;
}

interface ResourceCardData {
  id: string;
  number: string;
  name: string;
  icon: LucideIcon;
  imageUrl: string;
  alt: string;
  description: string;
  reflectionPrompt: string;
}

const RESOURCE_CARDS: ResourceCardData[] = [
  {
    id: 'perspectiva',
    number: '01',
    name: 'Perspectiva',
    icon: Compass,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    alt: 'Horizonte amplio con montañas y luz matutina que refleja perspectiva y claridad',
    description: 'Cómo interpretas las situaciones y consideras distintas posibilidades antes de actuar.',
    reflectionPrompt: '¿Desde qué mirada estás leyendo lo que vives hoy?',
  },
  {
    id: 'gestion-emocional',
    number: '02',
    name: 'Gestión emocional',
    icon: Heart,
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80',
    alt: 'Agua serena en calma reflejando la luz del amanecer, evocando regulación y paz emocional',
    description: 'Cómo reconoces, regulas y expresas lo que sientes, permitiendo que las emociones orienten sin desbordar.',
    reflectionPrompt: '¿Qué emoción suele acelerar o frenar tus decisiones?',
  },
  {
    id: 'direccion',
    number: '03',
    name: 'Dirección',
    icon: Navigation,
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    alt: 'Sendero boscoso iluminado por rayos de sol matutinos, marcando un rumbo claro y consciente',
    description: 'Cómo defines prioridades y orientas tus decisiones en coherencia con tus valores esenciales.',
    reflectionPrompt: '¿Tus elecciones diarias apuntan hacia lo que de verdad valoras?',
  },
  {
    id: 'energia-vital',
    number: '04',
    name: 'Energía vital',
    icon: Zap,
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80',
    alt: 'Planta brotando con raíces firmes en la tierra, simbolizando vitalidad y nutrientes esenciales',
    description: 'Cómo cuidas la energía que necesitas para sostener tu camino sin desgastarte en lo secundario.',
    reflectionPrompt: '¿Qué decisiones te están nutriendo y cuáles drenan tu vitalidad?',
  },
  {
    id: 'accion-consistente',
    number: '05',
    name: 'Acción consistente',
    icon: CheckCircle2,
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
    alt: 'Cuaderno artesanal y pluma con notas pausadas, simbolizando acuerdos concretos y consistencia',
    description: 'Cómo conviertes tus decisiones en pasos concretos y los mantienes a lo largo del tiempo.',
    reflectionPrompt: '¿De qué forma tus acuerdos contigo misma se vuelven realidad?',
  },
];

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
  return (
    <div className="pb-20 md:pb-28">
      {/* 1. Hero Mapa RAÍZ con background Cloudinary y velo marfil suave */}
      <section className="relative isolate min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden border-t-0 border-b border-[#363D28]/10 mb-12 md:mb-16 outline-none">
        {/* Layer de Fondo: Imagen oficial + capita marfil súper suave */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base marfil */}
          <div className="absolute inset-0 bg-[#F2EBDD]" />

          {/* Fotografía de fondo de Mapa RAÍZ con encuadre prioritario en parte superior */}
          <img
            src={BRAND_ASSETS.heroMapaRaizBackground}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[right_top] md:object-[right_top] pointer-events-none"
            style={{ objectPosition: 'right top' }}
          />

          {/* Capita marfil súper suave para armonizar con la paleta editorial y asegurar legibilidad sin opacar la fotografía */}
          <div className="absolute inset-0 bg-[#F2EBDD]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F2EBDD] via-[#F2EBDD]/75 to-transparent sm:to-[#F2EBDD]/10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F2EBDD] to-transparent pointer-events-none" />
        </div>

        {/* Contenido Hero */}
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
              <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
                MAPA RAÍZ · TU PUNTO DE PARTIDA
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.14] mb-4">
              ¿Desde dónde estás tomando{' '}
              <span className="italic block sm:inline">tus decisiones?</span>
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-[#363D28]/90 mb-3">
              Antes de decidir hacia dónde ir, vale la pena reconocer desde dónde estás partiendo.
            </p>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-7">
              El Mapa RAÍZ es una herramienta de exploración personal que propone observar cinco recursos
              fundamentales y reflexionar sobre tu momento actual.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              >
                <span>Descubre tu Mapa RAÍZ</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/contacto';
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 bg-[#F2EBDD]/60 backdrop-blur-xs transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Conversemos sobre tu mapa</span>
              </button>
            </div>
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

      {/* 4. Los cinco recursos oficiales - Estilo tarjeta inspirado en referencia con identidad RAÍZ */}
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

        {/* Fila superior: 3 recursos en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {RESOURCE_CARDS.slice(0, 3).map((resource) => (
            <div
              key={resource.id}
              className="bg-[#242A1A] text-[#F2EBDD] rounded-[28px] p-6 sm:p-7 border border-[#363D28] shadow-lg flex flex-col justify-between group hover:border-[#A18347]/60 hover:shadow-2xl transition-all duration-300"
            >
              {/* Barra superior: Icono a la izquierda y Botón circular con flecha a la derecha */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#363D28] border border-[#A18347]/30 flex items-center justify-center text-[#C4A76C] shadow-xs">
                  <resource.icon className="w-4 h-4 stroke-[2]" />
                </div>

                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explorar dimensión ${resource.name} en el Mapa RAÍZ`}
                  className="w-10 h-10 rounded-full bg-[#363D28] hover:bg-[#A18347] text-[#F2EBDD] flex items-center justify-center transition-all duration-200 border border-[#F2EBDD]/15 hover:border-transparent group-hover:bg-[#A18347]"
                  title="Explorar en Mapa RAÍZ"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Título centrado */}
              <div className="text-center mb-5">
                <span className="text-[11px] font-sans tracking-[0.26em] uppercase text-[#C4A76C] font-semibold block mb-1">
                  DIMENSIÓN {resource.number}
                </span>
                <h3 className="text-2xl sm:text-[26px] font-serif font-normal text-[#F2EBDD] tracking-wide uppercase leading-snug">
                  {resource.name}
                </h3>
              </div>

              {/* Fotografía central con esquinas redondeadas */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#1B2014] shadow-sm">
                <img
                  src={resource.imageUrl}
                  alt={resource.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242A1A]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Descripción centrada */}
              <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/85 font-light leading-relaxed text-center mb-5 px-1">
                {resource.description}
              </p>

              {/* Pregunta Guía */}
              <div className="pt-4 border-t border-[#F2EBDD]/12 text-center mt-auto">
                <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-[#C4A76C] font-semibold block mb-1.5">
                  PREGUNTA GUÍA
                </span>
                <p className="text-xs sm:text-[13px] font-serif italic text-[#F2EBDD]/75 leading-relaxed">
                  {resource.reflectionPrompt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fila inferior: 2 recursos centrados en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {RESOURCE_CARDS.slice(3, 5).map((resource) => (
            <div
              key={resource.id}
              className="bg-[#242A1A] text-[#F2EBDD] rounded-[28px] p-6 sm:p-7 border border-[#363D28] shadow-lg flex flex-col justify-between group hover:border-[#A18347]/60 hover:shadow-2xl transition-all duration-300"
            >
              {/* Barra superior: Icono a la izquierda y Botón circular con flecha a la derecha */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#363D28] border border-[#A18347]/30 flex items-center justify-center text-[#C4A76C] shadow-xs">
                  <resource.icon className="w-4 h-4 stroke-[2]" />
                </div>

                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explorar dimensión ${resource.name} en el Mapa RAÍZ`}
                  className="w-10 h-10 rounded-full bg-[#363D28] hover:bg-[#A18347] text-[#F2EBDD] flex items-center justify-center transition-all duration-200 border border-[#F2EBDD]/15 hover:border-transparent group-hover:bg-[#A18347]"
                  title="Explorar en Mapa RAÍZ"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Título centrado */}
              <div className="text-center mb-5">
                <span className="text-[11px] font-sans tracking-[0.26em] uppercase text-[#C4A76C] font-semibold block mb-1">
                  DIMENSIÓN {resource.number}
                </span>
                <h3 className="text-2xl sm:text-[26px] font-serif font-normal text-[#F2EBDD] tracking-wide uppercase leading-snug">
                  {resource.name}
                </h3>
              </div>

              {/* Fotografía central con esquinas redondeadas */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#1B2014] shadow-sm">
                <img
                  src={resource.imageUrl}
                  alt={resource.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242A1A]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Descripción centrada */}
              <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/85 font-light leading-relaxed text-center mb-5 px-1">
                {resource.description}
              </p>

              {/* Pregunta Guía */}
              <div className="pt-4 border-t border-[#F2EBDD]/12 text-center mt-auto">
                <span className="text-[10px] font-sans tracking-[0.24em] uppercase text-[#C4A76C] font-semibold block mb-1.5">
                  PREGUNTA GUÍA
                </span>
                <p className="text-xs sm:text-[13px] font-serif italic text-[#F2EBDD]/75 leading-relaxed">
                  {resource.reflectionPrompt}
                </p>
              </div>
            </div>
          ))}
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
