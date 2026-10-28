import { useState } from 'react';
import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Users, Sprout, Heart, Mic, Layers, Sliders, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/channels4_profile.jpg',
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
];

export default function OrganizacionesPage({ onNavigate }: OrganizacionesPageProps) {
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
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ------------------------------------------------------------- */}
      {/* HERO: PARA ORGANIZACIONES (Fiel a Imagen de Referencia 5) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Lado Izquierdo: Textos y CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Eyebrow */}
            <div className="inline-block bg-[#F4EDE2] text-[#222918] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#363D28]/10 shadow-2xs">
              PARA ORGANIZACIONES
            </div>

            {/* Titular Impactante con Chispas */}
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#222918] leading-[1.12]">
                Equipos más conscientes, colaborativos y efectivos.
              </h1>
              {/* Chispas decorativas arriba */}
              <div className="hidden sm:block absolute -top-4 -right-8 text-[#222918] text-xl font-mono tracking-tighter select-none font-bold">
                ///
              </div>
            </div>

            {/* Párrafo explicativo */}
            <p className="text-base sm:text-lg text-[#363D28]/90 font-normal leading-relaxed max-w-xl">
              Programas y experiencias que fortalecen el liderazgo, el bienestar y la cultura del equipo.
            </p>

            {/* Botón CTA Verde Oliva */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-[#54662E] hover:bg-[#3D4C1F] text-[#FAF7F2] shadow-md hover:shadow-lg transition-all"
              >
                <span>CONVERSEMOS SOBRE TU ORGANIZACIÓN</span>
                <span aria-hidden="true" className="font-sans text-base">→</span>
              </button>
            </div>
          </div>

          {/* Lado Derecho: Fotografía de Facilitación en Empresa */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-[#363D28]/10 bg-[#EFE7D8]">
              <img
                src={BRAND_ASSETS.heroOrganizacionesBackground}
                alt="Anatolia Zapata facilitando taller en organización"
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3 PILARES: LIDERAZGO, EQUIPOS Y BIENESTAR */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Pilar 1 */}
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="w-14 h-14 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
              <Users className="w-7 h-7 stroke-[2]" />
            </div>
            <h3 className="font-black text-lg text-[#222918]">
              Liderazgo consciente
            </h3>
            <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed max-w-xs">
              Líderes que inspiran, escuchan y movilizan.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="w-14 h-14 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
              <Sprout className="w-7 h-7 stroke-[2]" />
            </div>
            <h3 className="font-black text-lg text-[#222918]">
              Desarrollo de equipos
            </h3>
            <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed max-w-xs">
              Equipos más conectados, con confianza y foco.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="flex flex-col items-center space-y-3 p-4">
            <div className="w-14 h-14 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
              <Heart className="w-7 h-7 stroke-[2]" />
            </div>
            <h3 className="font-black text-lg text-[#222918]">
              Bienestar y cultura de cuidado
            </h3>
            <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed max-w-xs">
              Entornos laborales más saludables, inclusivos y sostenibles.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN: FORMATOS Y EXPERIENCIAS */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="bg-[#FAF5EE] border border-[#363D28]/12 rounded-3xl p-8 sm:p-12 shadow-2xs space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
              FORMATOS Y EXPERIENCIAS
            </div>
            <div className="relative inline-flex items-center justify-center">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
                ¿Cómo podemos trabajar juntos?
              </h2>
              <div className="hidden sm:block absolute -top-3 -right-8 text-[#222918] text-lg font-mono tracking-tighter select-none font-bold">
                ///
              </div>
            </div>
          </div>

          {/* 3 Tarjetas de Formatos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Formato 1: Talleres prácticos */}
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#363D28]/10 flex flex-col items-start space-y-4 shadow-2xs hover:border-[#363D28]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-[#222918]">
                Talleres prácticos
              </h3>
              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Dinámicas participativas para reflexionar, aplicar herramientas y generar acuerdos.
              </p>
            </div>

            {/* Formato 2: Conferencias */}
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#363D28]/10 flex flex-col items-start space-y-4 shadow-2xs hover:border-[#363D28]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                <Mic className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-[#222918]">
                Conferencias
              </h3>
              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Ideas que abren conversaciones sobre liderazgo, bienestar y decisiones conscientes.
              </p>
            </div>

            {/* Formato 3: Programas de acompañamiento */}
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#363D28]/10 flex flex-col items-start space-y-4 shadow-2xs hover:border-[#363D28]/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                <Layers className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-[#222918]">
                Programas de acompañamiento
              </h3>
              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Procesos para fortalecer hábitos, comunicación y colaboración en los equipos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* NUESTRA FORMA DE TRABAJAR: 4 PASOS */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
            NUESTRA FORMA DE TRABAJAR
          </div>
          <div className="relative inline-flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
              Un proceso pensado para tu equipo
            </h2>
            <div className="hidden sm:block absolute -top-3 -right-8 text-[#222918] text-lg font-mono tracking-tighter select-none font-bold">
              ///
            </div>
          </div>
        </div>

        {/* 4 Pasos en Grid con Líneas Divisorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Paso 01 */}
          <div className="bg-[#F6F0E8] p-6 rounded-2xl border border-[#363D28]/10 space-y-3 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#DFEC9C] text-[#222918] font-black text-xs px-3 py-1 rounded-full mb-3">
                01
              </div>
              <h3 className="font-bold text-lg text-[#222918] mb-2">
                Conversamos
              </h3>
              <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Entendemos el contexto y los desafíos.
              </p>
            </div>
          </div>

          {/* Paso 02 */}
          <div className="bg-[#F6F0E8] p-6 rounded-2xl border border-[#363D28]/10 space-y-3 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#DFEC9C] text-[#222918] font-black text-xs px-3 py-1 rounded-full mb-3">
                02
              </div>
              <h3 className="font-bold text-lg text-[#222918] mb-2">
                Diseñamos
              </h3>
              <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Adaptamos la propuesta a tus objetivos.
              </p>
            </div>
          </div>

          {/* Paso 03 */}
          <div className="bg-[#F6F0E8] p-6 rounded-2xl border border-[#363D28]/10 space-y-3 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#DFEC9C] text-[#222918] font-black text-xs px-3 py-1 rounded-full mb-3">
                03
              </div>
              <h3 className="font-bold text-lg text-[#222918] mb-2">
                Facilitamos
              </h3>
              <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Creamos una experiencia participativa.
              </p>
            </div>
          </div>

          {/* Paso 04 */}
          <div className="bg-[#F6F0E8] p-6 rounded-2xl border border-[#363D28]/10 space-y-3 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#DFEC9C] text-[#222918] font-black text-xs px-3 py-1 rounded-full mb-3">
                04
              </div>
              <h3 className="font-bold text-lg text-[#222918] mb-2">
                Damos seguimiento
              </h3>
              <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Revisamos aprendizajes y próximos pasos, según el alcance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN FORMULARIO Y CONTACTO DE PROPUESTA */}
      {/* ------------------------------------------------------------- */}
      <section id="formulario-organizaciones" className="max-w-6xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="bg-[#F6F0E8] rounded-3xl p-8 sm:p-12 border border-[#363D28]/12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Lado Izquierdo: Textos de Invitación */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#222918] leading-tight">
                  Cada organización tiene una{' '}
                  <span className="relative inline-block">
                    historia.
                    <span className="absolute left-0 bottom-1 w-full h-2 bg-[#DFEC9C] -z-10 rounded-full" />
                  </span>{' '}
                  Conversemos sobre la tuya.
                </h2>
                <p className="text-sm sm:text-base text-[#363D28]/85 font-normal leading-relaxed">
                  Cuéntanos qué necesita tu equipo y exploremos una propuesta a su medida.
                </p>
              </div>

              {/* 3 Badges de Valor */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 bg-[#FAF5EE] p-3 rounded-xl border border-[#363D28]/10">
                  <div className="w-8 h-8 rounded-lg bg-[#DFEC9C] flex items-center justify-center text-[#222918] shrink-0">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#222918]">
                    Diseño a medida
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#FAF5EE] p-3 rounded-xl border border-[#363D28]/10">
                  <div className="w-8 h-8 rounded-lg bg-[#DFEC9C] flex items-center justify-center text-[#222918] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#222918]">
                    Confidencialidad
                  </span>
                </div>

                <div className="flex items-center gap-3 bg-[#FAF5EE] p-3 rounded-xl border border-[#363D28]/10">
                  <div className="w-8 h-8 rounded-lg bg-[#DFEC9C] flex items-center justify-center text-[#222918] shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#222918]">
                    Respuesta ágil
                  </span>
                </div>
              </div>
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="lg:col-span-7 bg-[#FAF5EE] p-6 sm:p-8 rounded-2xl border border-[#363D28]/12 shadow-xs">
              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-[#DFEC9C] rounded-full flex items-center justify-center mx-auto text-[#222918]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase text-[#222918]">
                    ¡Propuesta solicitada con éxito!
                  </h3>
                  <p className="text-sm text-[#363D28]/80 max-w-md mx-auto">
                    Anatolia Zapata y su equipo revisarán tus requerimientos y te responderán en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="Nueva solicitud corporativa desde RAÍZ Organizaciones" />
                  <input type="hidden" name="origen" value="Landing Organizaciones" />

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1.5">
                      Nombre y apellido
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Ej. Valeria Mendoza"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1.5">
                      Empresa u organización
                    </label>
                    <input
                      type="text"
                      name="organizacion"
                      required
                      placeholder="Nombre de tu empresa o institución"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1.5">
                      Correo corporativo
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="nombre@tuempresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1.5">
                      ¿Qué experiencia buscan?
                    </label>
                    <select
                      name="experiencia"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm text-[#222918]"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Talleres prácticos">Talleres prácticos</option>
                      <option value="Conferencias">Conferencias</option>
                      <option value="Programas de acompañamiento">Programas de acompañamiento</option>
                      <option value="Diagnóstico y asesoría de bienestar">Diagnóstico y asesoría de bienestar</option>
                      <option value="Otro">Otro formato</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1.5">
                      ¿Qué necesitan? (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder="Cuéntanos sobre el número de personas, objetivos principales o fecha tentativa..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#54662E] hover:bg-[#3D4C1F] text-[#FAF7F2] font-black uppercase tracking-wider py-4 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FRANJA DE LOGOS CORPORATIVOS: Organizaciones que han confiado */}
      {/* ------------------------------------------------------------- */}
      <section className="border-t border-[#363D28]/10 bg-[#FAF7F2] py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="shrink-0 text-center md:text-left md:border-r md:border-[#363D28]/20 md:pr-8">
            <p className="text-xs sm:text-sm font-bold text-[#363D28] max-w-[200px] leading-snug">
              Organizaciones que han confiado en mi trabajo
            </p>
          </div>

          <div className="flex-1 flex flex-wrap items-center justify-center md:justify-around gap-8 sm:gap-10">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="h-10 sm:h-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-8 sm:max-h-10 max-w-[120px] sm:max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
