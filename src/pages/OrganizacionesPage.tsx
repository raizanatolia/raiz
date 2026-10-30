import { useState } from 'react';
import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import {
  Users,
  Sprout,
  Heart,
  Mic,
  Layers,
  Sliders,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface OrganizacionesPageProps {
  onNavigate: (page: PageId) => void;
}

const CLIENT_LOGOS = [
  {
    name: 'COGA',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/coga.png',
  },
  {
    name: 'EUROPLAST',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/europlast.png',
  },
  {
    name: 'JAMFEC S.A.C.',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/jamfec-sac.png',
  },
  {
    name: 'GOLD FIELDS',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207343/gold-fields.png',
  },
  {
    name: 'CUMBRA',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/cumbra.png',
  },
  {
    name: 'RACLI',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/racli.png',
  },
  {
    name: 'Organización Aliada',
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/channels4_profile.jpg',
  },
];

/* 3 sketch accent lines bursting out */
function SketchBurst() {
  return (
    <span className="inline-block relative ml-1.5 align-middle select-none">
      <svg
        className="w-5 h-5 text-[#52632C] -mt-3.5 inline-block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M5 14L8 7" />
        <path d="M12 13L12 4" />
        <path d="M19 14L16 7" />
      </svg>
    </span>
  );
}

export default function OrganizacionesPage({ onNavigate: _onNavigate }: OrganizacionesPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('formulario-organizaciones');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    fetch('https://formsubmit.co/ajax/raizanatolia@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      });
  };

  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">

        {/* ============================================================= */}
        {/* 1. HERO SECTION: FOTO COMO BACKGROUND PREMIUM QUE CAPTURA    */}
        {/*    TODO EL HERO CON DEGRADADO EDITORIAL ELEGANTE              */}
        {/* ============================================================= */}
        <section className="relative rounded-[32px] overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[640px] flex items-center shadow-lg border border-[#222918]/15 bg-[#FAF7F2]">
          {/* Foto como background cubriendo el 100% del hero */}
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-[center_top_18%] transition-transform duration-1000"
            style={{ backgroundImage: `url(${BRAND_ASSETS.heroOrganizacionesBackground})` }}
          />

          {/* Degradado marfil premium superpuesto para máxima legibilidad del texto sin opacar la foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EE] via-[#FAF5EE]/90 via-55% to-[#FAF5EE]/20 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EE]/70 via-transparent to-transparent md:hidden" />

          {/* Contenido principal en el lado izquierdo con tipografía nítida */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-2xl text-left space-y-5">
            {/* Badge superior */}
            <span className="inline-block bg-[#EAE2D0] text-[#3D4726] text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-2xs">
              PARA ORGANIZACIONES
            </span>

            {/* Titular principal con trazos sketch */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#222918] tracking-tight leading-[1.12]">
              Equipos más conscientes, colaborativos y{' '}
              <span className="inline-block whitespace-nowrap">
                efectivos.
                <SketchBurst />
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#363D28] font-normal leading-relaxed max-w-xl">
              Programas y experiencias que fortalecen el liderazgo, el bienestar y la cultura del equipo.
            </p>

            {/* Botón CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#52632C] hover:bg-[#435224] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>CONVERSEMOS SOBRE TU ORGANIZACIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 2. TRES PILARES DE IMPACTO                                    */}
        {/* ============================================================= */}
        <section className="px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#222918]/12">
            {/* Pilar 1: Liderazgo consciente */}
            <div className="flex flex-col items-center text-center px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#EAE2D0]/80 flex items-center justify-center text-[#52632C] mb-1">
                <Users className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#222918] leading-snug">
                Liderazgo<br />consciente
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] font-normal leading-relaxed max-w-xs">
                Líderes que inspiran, escuchan y movilizan.
              </p>
            </div>

            {/* Pilar 2: Desarrollo de equipos */}
            <div className="flex flex-col items-center text-center px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#EAE2D0]/80 flex items-center justify-center text-[#52632C] mb-1">
                <Sprout className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#222918] leading-snug">
                Desarrollo<br />de equipos
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] font-normal leading-relaxed max-w-xs">
                Equipos más conectados, con confianza y foco.
              </p>
            </div>

            {/* Pilar 3: Bienestar y cultura de cuidado */}
            <div className="flex flex-col items-center text-center px-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#EAE2D0]/80 flex items-center justify-center text-[#52632C] mb-1">
                <Heart className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-[#222918] leading-snug">
                Bienestar<br />y cultura de cuidado
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] font-normal leading-relaxed max-w-xs">
                Entornos laborales más saludables, inclusivos y sostenibles.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 3. FORMATOS Y EXPERIENCIAS                                    */}
        {/* ============================================================= */}
        <section className="bg-[#FAF7F2] rounded-[28px] border border-[#222918]/10 p-8 sm:p-12 md:p-14 shadow-xs text-center space-y-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="inline-block bg-[#EAE2D0] text-[#3D4726] text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full">
              FORMATOS Y EXPERIENCIAS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222918] tracking-tight">
              ¿Cómo podemos trabajar juntos?
              <SketchBurst />
            </h2>
          </div>

          {/* 3 Tarjetas Blancas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Tarjeta 1: Talleres prácticos */}
            <div className="bg-white rounded-2xl p-7 border border-[#222918]/10 shadow-xs flex flex-col items-start space-y-3.5">
              <div className="w-12 h-12 rounded-full bg-[#EAE2D0]/70 flex items-center justify-center text-[#52632C]">
                <Users className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-bold text-lg text-[#222918]">
                Talleres prácticos
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] leading-relaxed">
                Dinámicas participativas para reflexionar, aplicar herramientas y generar acuerdos.
              </p>
            </div>

            {/* Tarjeta 2: Conferencias */}
            <div className="bg-white rounded-2xl p-7 border border-[#222918]/10 shadow-xs flex flex-col items-start space-y-3.5">
              <div className="w-12 h-12 rounded-full bg-[#EAE2D0]/70 flex items-center justify-center text-[#52632C]">
                <Mic className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-bold text-lg text-[#222918]">
                Conferencias
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] leading-relaxed">
                Ideas que abren conversaciones sobre liderazgo, bienestar y decisiones conscientes.
              </p>
            </div>

            {/* Tarjeta 3: Programas de acompañamiento */}
            <div className="bg-white rounded-2xl p-7 border border-[#222918]/10 shadow-xs flex flex-col items-start space-y-3.5">
              <div className="w-12 h-12 rounded-full bg-[#EAE2D0]/70 flex items-center justify-center text-[#52632C]">
                <Layers className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="font-bold text-lg text-[#222918]">
                Programas de acompañamiento
              </h3>
              <p className="text-xs sm:text-sm text-[#4A533B] leading-relaxed">
                Procesos para fortalecer hábitos, comunicación y colaboración en los equipos.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 4. NUESTRA FORMA DE TRABAJAR                                  */}
        {/* ============================================================= */}
        <section className="text-center space-y-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="inline-block bg-[#EAE2D0] text-[#3D4726] text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full">
              NUESTRA FORMA DE TRABAJAR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222918] tracking-tight">
              Un proceso pensado para tu equipo
              <SketchBurst />
            </h2>
          </div>

          {/* 4 Pasos Horizontales */}
          <div className="relative">
            {/* Línea conectora horizontal sutil en desktop */}
            <div className="hidden lg:block absolute top-5 left-[12%] right-[12%] h-[1.5px] bg-[#222918]/15 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
              {/* Paso 01 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-3">
                <div className="w-10 h-10 rounded-full bg-[#DFEC9C] text-[#222918] font-bold text-sm flex items-center justify-center shadow-xs">
                  01
                </div>
                <h3 className="font-bold text-base text-[#222918]">
                  Conversamos
                </h3>
                <p className="text-xs sm:text-sm text-[#4A533B] leading-snug max-w-[210px]">
                  Entendemos el contexto y los desafíos.
                </p>
              </div>

              {/* Paso 02 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-3">
                <div className="w-10 h-10 rounded-full bg-[#DFEC9C] text-[#222918] font-bold text-sm flex items-center justify-center shadow-xs">
                  02
                </div>
                <h3 className="font-bold text-base text-[#222918]">
                  Diseñamos
                </h3>
                <p className="text-xs sm:text-sm text-[#4A533B] leading-snug max-w-[210px]">
                  Adaptamos la propuesta a tus objetivos.
                </p>
              </div>

              {/* Paso 03 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-3">
                <div className="w-10 h-10 rounded-full bg-[#DFEC9C] text-[#222918] font-bold text-sm flex items-center justify-center shadow-xs">
                  03
                </div>
                <h3 className="font-bold text-base text-[#222918]">
                  Facilitamos
                </h3>
                <p className="text-xs sm:text-sm text-[#4A533B] leading-snug max-w-[210px]">
                  Creamos una experiencia participativa.
                </p>
              </div>

              {/* Paso 04 */}
              <div className="flex flex-col items-center text-center space-y-2.5 px-3">
                <div className="w-10 h-10 rounded-full bg-[#DFEC9C] text-[#222918] font-bold text-sm flex items-center justify-center shadow-xs">
                  04
                </div>
                <h3 className="font-bold text-base text-[#222918]">
                  Damos seguimiento
                </h3>
                <p className="text-xs sm:text-sm text-[#4A533B] leading-snug max-w-[210px]">
                  Revisamos aprendizajes y próximos pasos, según el alcance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 5. FORMULARIO CORPORATIVO DE CONTACTO                         */}
        {/* ============================================================= */}
        <section id="formulario-organizaciones" className="pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Lado Izquierdo: Titular, bajada y 3 badges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222918] leading-[1.18] tracking-tight">
                  Cada organización tiene una historia. Conversemos sobre la tuya.
                </h2>
                <p className="text-sm sm:text-base text-[#4A533B] font-normal leading-relaxed">
                  Cuéntanos qué necesita tu equipo y exploremos una propuesta a su medida.
                </p>
              </div>

              {/* 3 Trust Badges en fila */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#222918]/10 text-center">
                <div className="space-y-1.5 flex flex-col items-center">
                  <Sliders className="w-6 h-6 text-[#52632C] stroke-[1.75]" />
                  <span className="text-xs font-bold text-[#222918] leading-tight block">
                    Diseño a medida
                  </span>
                </div>

                <div className="space-y-1.5 flex flex-col items-center">
                  <ShieldCheck className="w-6 h-6 text-[#52632C] stroke-[1.75]" />
                  <span className="text-xs font-bold text-[#222918] leading-tight block">
                    Confidencialidad
                  </span>
                </div>

                <div className="space-y-1.5 flex flex-col items-center">
                  <Zap className="w-6 h-6 text-[#52632C] stroke-[1.75]" />
                  <span className="text-xs font-bold text-[#222918] leading-tight block">
                    Respuesta ágil
                  </span>
                </div>
              </div>
            </div>

            {/* Lado Derecho: Formulario en tarjeta blanca */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#222918]/10 shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-[#52632C]/10 rounded-full flex items-center justify-center mx-auto text-[#52632C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-[#222918]">
                    ¡Propuesta solicitada con éxito!
                  </h3>
                  <p className="text-sm text-[#4A533B] max-w-md mx-auto">
                    Anatolia Zapata revisará tus requerimientos y te responderá en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="Nueva solicitud corporativa desde RAÍZ Organizaciones" />
                  <input type="hidden" name="origen" value="Landing Organizaciones" />

                  {/* Fila 1: Nombre y Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#222918] mb-1.5">
                        Nombre y apellido
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder=""
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#222918]/20 focus:outline-none focus:ring-2 focus:ring-[#52632C] text-sm text-[#222918]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#222918] mb-1.5">
                        Empresa u organización
                      </label>
                      <input
                        type="text"
                        name="organizacion"
                        required
                        placeholder=""
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#222918]/20 focus:outline-none focus:ring-2 focus:ring-[#52632C] text-sm text-[#222918]"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Correo y Experiencia */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#222918] mb-1.5">
                        Correo corporativo
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder=""
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#222918]/20 focus:outline-none focus:ring-2 focus:ring-[#52632C] text-sm text-[#222918]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#222918] mb-1.5">
                        ¿Qué experiencia buscan?
                      </label>
                      <select
                        name="experiencia"
                        required
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#222918]/20 focus:outline-none focus:ring-2 focus:ring-[#52632C] text-sm text-[#222918]"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Talleres prácticos">Talleres prácticos</option>
                        <option value="Conferencias">Conferencias</option>
                        <option value="Programas de acompañamiento">Programas de acompañamiento</option>
                        <option value="Propuesta personalizada">Propuesta personalizada</option>
                        <option value="Otro">Otro formato</option>
                      </select>
                    </div>
                  </div>

                  {/* Fila 3: ¿Qué necesitan? */}
                  <div>
                    <label className="block text-xs font-medium text-[#222918] mb-1.5">
                      ¿Qué necesitan? (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder=""
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#222918]/20 focus:outline-none focus:ring-2 focus:ring-[#52632C] text-sm text-[#222918] resize-none"
                    />
                  </div>

                  {/* Botón Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#52632C] hover:bg-[#435224] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Enviando propuesta...</span>
                    ) : (
                      <>
                        <span>SOLICITAR UNA PROPUESTA</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================= */}
        {/* 6. CLIENT LOGOS: CARRUSEL INFINITO SIN SUPERPOSICIONES       */}
        {/* ============================================================= */}
        <section className="bg-white rounded-3xl border border-[#222918]/10 p-6 sm:p-8 md:p-10 shadow-xs space-y-6 overflow-hidden">
          {/* Encabezado */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#222918]/10 pb-4">
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-[#222918] tracking-tight">
              Organizaciones que han confiado en mi trabajo
            </span>
            <span className="text-xs text-[#52632C] font-semibold uppercase tracking-wider bg-[#EAE2D0]/60 px-3 py-1 rounded-full w-fit">
              Talleres · Conferencias · Procesos de Acompañamiento
            </span>
          </div>

          {/* Carrusel infinito con espaciado amplio y sin sobreposiciones */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Gradientes laterales de difuminado suave */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-infinite flex items-center gap-8 sm:gap-12 md:gap-16">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="shrink-0 flex items-center justify-center min-w-[170px] sm:min-w-[200px] h-20 sm:h-24 px-5 py-2.5 rounded-2xl bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] border border-[#222918]/5 transition-all group"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 sm:max-h-16 md:max-h-20 w-auto max-w-[150px] sm:max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
