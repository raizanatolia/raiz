import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { HeartHandshake, Users, Compass, Layers, MessageSquare } from 'lucide-react';
import LeadContactForm from '../components/LeadContactForm';

interface OrganizacionesPageProps {
  onNavigate: (page: PageId) => void;
}

const AREAS_DE_TRABAJO = [
  {
    icon: HeartHandshake,
    title: 'Desarrollo humano y bienestar',
    description: 'Espacios para fortalecer la gestión emocional, la energía vital del equipo y la prevención del agotamiento.',
  },
  {
    icon: Users,
    title: 'Género y desarrollo',
    description: 'Mirada consciente sobre la corresponsabilidad, equidad, conciliación y desarrollo del talento femenino.',
  },
  {
    icon: Compass,
    title: 'Liderazgo con perspectiva',
    description: 'Herramientas para que líderes comprendan desde dónde toman decisiones e impulsen una cultura de confianza y claridad.',
  },
  {
    icon: Layers,
    title: 'Programas a medida',
    description: 'Intervenciones diseñadas específicamente para los desafíos y momentos de transformación que vive tu organización.',
  },
];

const FORMATOS = [
  {
    title: 'Talleres prácticos',
    description: 'Dinámicas participativas orientadas a generar reflexión, herramientas aplicables y acuerdos de equipo.',
  },
  {
    title: 'Conferencias inspiradoras',
    description: 'Ponencias que abren conversaciones necesarias sobre conciencia en la toma de decisiones, bienestar y género.',
  },
  {
    title: 'Programas de acompañamiento',
    description: 'Procesos de mediano plazo para consolidar hábitos, comunicación asertiva y coherencia en la cultura interna.',
  },
];

const PROCESO_PASOS = [
  { step: '01', title: 'Conversamos', description: 'Escuchamos el contexto, la cultura y el desafío específico de tu equipo.' },
  { step: '02', title: 'Diseñamos', description: 'Elaboramos una propuesta personalizada ajustada a tus tiempos y objetivos.' },
  { step: '03', title: 'Facilitamos', description: 'Desplegamos la experiencia con cercanía, rigor metodológico y empatía.' },
  { step: '04', title: 'Damos seguimiento', description: 'Acompañamos la integración de aprendizajes si el alcance contratado lo contempla.' },
];

export default function OrganizacionesPage({ onNavigate }: OrganizacionesPageProps) {
  const scrollToForm = () => {
    const el = document.getElementById('formulario-organizaciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-20 md:pb-28">
      {/* Hero Organizaciones con background Cloudinary y velo marfil suave */}
      <section className="relative isolate min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden border-t-0 border-b border-[#363D28]/10 mb-12 md:mb-16 outline-none">
        {/* Layer de Fondo: Imagen oficial + capita marfil súper suave */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Base marfil */}
          <div className="absolute inset-0 bg-[#F2EBDD]" />

          {/* Fotografía de fondo de Organizaciones con encuadre prioritario en parte superior */}
          <img
            src={BRAND_ASSETS.heroOrganizacionesBackground}
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
                RAÍZ PARA ORGANIZACIONES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.14] mb-5">
              Personas más conscientes{' '}
              <span className="italic block sm:inline">para entornos más humanos.</span>
            </h1>

            <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-7">
              Diseño y facilito experiencias de desarrollo humano, bienestar, liderazgo y género, adaptadas al
              contexto y las necesidades de cada organización.
            </p>

            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Conversemos sobre tu organización</span>
            </button>
          </div>
        </div>
      </section>

      {/* Una mirada integral */}
      <section className="py-20 bg-[#FAF7F2] border-y border-[#363D28]/10 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
              FILOSOFÍA DE EQUIPO
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#363D28] leading-tight mb-5">
              Una mirada integral
            </h2>
            <p className="text-lg sm:text-xl font-serif text-[#363D28] mb-4">
              Las organizaciones están hechas de personas.
            </p>
            <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed">
              Cada equipo tiene historias, recursos, desafíos y un contexto que influye en su manera de colaborar,
              liderar y tomar decisiones. El enfoque RAÍZ permite abrir espacios honestos para alinear propósitos y
              sostener resultados sin descuidar a las personas.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de trabajo */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
            LÍNEAS TEMÁTICAS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] leading-tight mb-4">
            Áreas de trabajo
          </h2>
          <p className="text-base font-sans text-[#363D28]/80 font-light">
            Temas esenciales para construir culturas laborales reflexivas y sostenibles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {AREAS_DE_TRABAJO.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/12 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-5">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#363D28] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formatos y experiencias */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#EAE2D2] border border-[#363D28]/15 mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
              MODALIDADES
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28]">
              Formatos y experiencias
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FORMATOS.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#F2EBDD] border border-[#363D28]/10">
                <h4 className="text-lg font-serif font-semibold text-[#363D28] mb-2">
                  {f.title}
                </h4>
                <p className="text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de trabajo (4 pasos) */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-2">
              METODOLOGÍA DE COLABORACIÓN
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28]">
              Proceso de trabajo
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESO_PASOS.map((paso) => (
              <div key={paso.step} className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10 flex flex-col justify-between">
                <div>
                  <span className="text-xl font-serif text-[#A18347] font-medium block mb-2">
                    {paso.step}
                  </span>
                  <h4 className="text-base font-serif font-semibold text-[#363D28] mb-2">
                    {paso.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-sans text-[#363D28]/80 font-light leading-relaxed">
                    {paso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre previo al formulario */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28] mb-4">
            Cada organización es única.
          </h3>
          <p className="text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-8">
            Por eso, las propuestas se diseñan considerando sus objetivos, su contexto y el tipo de experiencia
            que necesita su equipo.
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Solicita una propuesta</span>
          </button>
        </div>
      </section>

      {/* Formulario de Consultas Comerciales: id="formulario-organizaciones" */}
      <LeadContactForm variant="organizacion" id="formulario-organizaciones" onNavigate={onNavigate} />
    </div>
  );
}
