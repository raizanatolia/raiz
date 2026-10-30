import React, { useState } from 'react';
import { CONTACT, PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import {
  User,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';

interface MapaRaizPageProps {
  onNavigate: (page: PageId) => void;
}

interface ResourceCardData {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

export default function MapaRaizPage({ onNavigate }: MapaRaizPageProps) {
  const heroBgImage = BRAND_ASSETS.heroMapaRaizBackground;

  // Lead card form state
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToLeadCard = () => {
    const el = document.getElementById('registro-mapa-raiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(CONTACT.mapUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToResources = () => {
    const el = document.getElementById('los-5-recursos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!nombre.trim()) {
      setErrorMessage('Por favor, ingresa tu nombre.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (!privacyConsent) {
      setErrorMessage('Es necesario aceptar la política de privacidad para recibir tu Mapa.');
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('nombre', nombre.trim());
      formData.append('email', email.trim());
      formData.append('_subject', 'RAÍZ | Registro en Descubre tu Mapa RAÍZ');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      await fetch('https://formsubmit.co/ajax/raizanatolia@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      setIsSuccess(true);
    } catch {
      // Gracefully continue so user can still access the map
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources: ResourceCardData[] = [
    {
      id: 'perspectiva',
      number: '01',
      name: 'Perspectiva',
      description:
        'Cómo interpretas lo que sucede, reconoces sesgos automáticos y amplías tu mirada ante situaciones complejas para no operar desde el miedo o la urgencia.',
      tags: ['ENFOQUE', 'CLARIDAD', 'MIRADA'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'gestion-emocional',
      number: '02',
      name: 'Gestión emocional',
      description:
        'Cómo habitas, reconoces y canalizas lo que sientes sin reaccionar en automático, reprimiendo o sobrecargando tus relaciones y vínculos.',
      tags: ['AUTORREGULACIÓN', 'CONCIENCIA', 'PAUSA'],
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'direccion',
      number: '03',
      name: 'Dirección',
      description:
        'Qué priorizas y hacia dónde vas. Clarifica tus valores no negociables y alinea tus metas para no vivir cumpliendo expectativas ajenas.',
      tags: ['PROPÓSITO', 'PRIORIDADES', 'RUMBO'],
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'energia-vital',
      number: '04',
      name: 'Energía vital',
      description:
        'Cómo cuidas tu energía, ritmos de descanso y bienestar físico y mental para sostener tu vida cotidiana sin llegar al agotamiento crónico.',
      tags: ['BIENESTAR', 'RITMOS', 'VITALIDAD'],
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'accion-consistente',
      number: '05',
      name: 'Acción consistente',
      description:
        'Cómo traduces tus reflexiones en límites sanos, hábitos cotidianos sostenibles y acuerdos reales que se mantienen en el tiempo.',
      tags: ['HÁBITOS', 'LÍMITES', 'EJECUCIÓN'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#222918] min-h-screen pb-16 md:pb-24">
      {/* ======================================================== */}
      {/* 01. HERO ELEVADO CON FONDO OFICIAL & TIPOGRAFÍA PREMIUM  */}
      {/* (Fondo Cloudinary oficial, atmósfera marfil orgánica,   */}
      {/*  tipografía editorial armónica sin saltos abruptos,      */}
      {/*  único botón CTA para enfocar la acción del usuario)     */}
      {/* ======================================================== */}
      <section className="w-full relative overflow-hidden min-h-[540px] sm:min-h-[600px] md:min-h-[660px] flex items-center bg-[#FAF7F2] pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 mb-16 md:mb-24 border-b border-[#222918]/10">
        {/* Imagen de fondo oficial del hero (Cloudinary bg-conoce-tu-mapa-raiz) */}
        <div
          className="absolute inset-0 bg-cover bg-right md:bg-center transition-transform duration-1000 scale-[1.01]"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />

        {/* Capas sutiles que aseguran legibilidad perfecta del texto sin tapar la textura original */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/20" />

        {/* Contenido en primer plano dentro del contenedor de navegación */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
            {/* Pill Badge marfil con verde oliva */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xs text-[#363D28] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#363D28]/15 shadow-xs transition-all">
              <Sparkles className="w-3.5 h-3.5 text-[#54662E]" />
              <span>DESCUBRE TU MAPA RAÍZ</span>
            </div>

            {/* Titular Editorial Armónico y Premium: Cormorant Garamond */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif text-[#1E2415] leading-[1.06] tracking-tight">
              <span className="block font-medium text-[#222918]">¿Estás reaccionando</span>
              <span className="block italic font-normal text-[#54662E] mt-1 sm:mt-2">o eligiendo?</span>
            </h1>

            {/* Subtítulo evocador en tono oscuro muy legible */}
            <p className="text-base sm:text-lg md:text-xl font-sans text-[#363D28]/90 font-normal leading-relaxed max-w-2xl">
              Tu historia influye en cómo interpretas lo que pasa, lo que sientes y las decisiones que tomas.{' '}
              <span className="text-[#1E2415] font-semibold">El Mapa RAÍZ</span> te ayuda a reconocer tu punto de partida y los recursos que puedes fortalecer.
            </p>

            {/* Único botón de acción para incitar el clic sin distracciones */}
            <div className="pt-2 flex items-center">
              <button
                type="button"
                onClick={scrollToLeadCard}
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-sm sm:text-base font-sans font-bold tracking-wider uppercase bg-[#54662E] hover:bg-[#363D28] text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <span>QUIERO MI MAPA RAÍZ</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Microcopy de confianza */}
            <p className="text-xs font-sans text-[#363D28]/75 font-normal pt-1 flex items-center gap-2">
              <span className="text-[#54662E]">✦</span>
              <span>Herramienta de autoconocimiento confidencial · Evaluación guiada en 10 minutos.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 02. LOS 5 RECURSOS: CARDS CON CORTE NOTCH Y BOTÓN FLECHA */}
      {/* (Inspirado exactamente en la imagen 2 de referencia)       */}
      {/* ======================================================== */}
      <section id="los-5-recursos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5A6836]">
            Cinco Dimensiones Clave
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
            Los 5 recursos que exploras en el Mapa RAÍZ
          </h2>
          <p className="text-sm sm:text-base text-[#363D28]/85 font-normal leading-relaxed">
            Cada recurso evalúa una dimensión fundamental de tu forma de decidir, sentir y actuar en tu vida cotidiana.
          </p>
        </div>

        {/* Grid de Cards estilo imagen 2 (3 columnas en desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((item) => (
            <div
              key={item.id}
              onClick={scrollToLeadCard}
              className="bg-white p-5 sm:p-6 rounded-3xl border border-[#222918]/10 shadow-2xs hover:shadow-xl hover:border-[#5A6836]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Visual superior con notch cóncavo y botón circular en esquina inferior derecha */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-[#1E2514]/10 mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />

                  {/* Dark pill top-right badge con el número */}
                  <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full shadow-xs">
                    {item.number}
                  </div>

                  {/* Firma de corte notch con botón circular en esquina inferior derecha (como en imagen 2) */}
                  <div className="absolute -bottom-1 -right-1 bg-white pt-2.5 pl-2.5 rounded-tl-2xl">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF5EE] group-hover:bg-[#363D28] text-[#222918] group-hover:text-white border border-[#222918]/10 flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>

                {/* Título de la tarjeta */}
                <h3 className="font-sans font-black text-xl text-[#222918] mb-2 leading-snug group-hover:text-[#5A6836] transition-colors">
                  {item.number}. {item.name}
                </h3>

                {/* Descripción detallada del recurso */}
                <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Tags / Pills inferiores (Inspirados en [COPY-PASTE] [SPEEDRUN] de imagen 2) */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#222918]/8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#FAF5EE] text-[#5A6836] border border-[#363D28]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Tarjeta 6 de Cierre / Síntesis integrada (completa la cuadrícula de 6 simétrica) */}
          <div
            onClick={scrollToLeadCard}
            className="bg-[#F6F0E8] p-5 sm:p-6 rounded-3xl border border-[#5A6836]/25 shadow-2xs hover:shadow-xl hover:border-[#5A6836]/60 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              {/* Visual superior */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[16/10] bg-[#1E2514]/10 mb-5">
                <img
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80"
                  alt="Tu Mapa RAÍZ Integrado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Dark pill top-right */}
                <div className="absolute top-3.5 right-3.5 bg-[#363D28] text-white text-xs font-mono font-bold px-3 py-1 rounded-full shadow-xs">
                  MAPA
                </div>

                {/* Corte notch con botón circular */}
                <div className="absolute -bottom-1 -right-1 bg-[#F6F0E8] pt-2.5 pl-2.5 rounded-tl-2xl">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#54662E] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:bg-[#222918]">
                    <ArrowUpRight className="w-5 h-5 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Título */}
              <h3 className="font-sans font-black text-xl text-[#222918] mb-2 leading-snug group-hover:text-[#5A6836] transition-colors">
                Tu Mapa RAÍZ Integrado
              </h3>

              {/* Descripción */}
              <p className="text-xs sm:text-sm text-[#363D28]/85 font-normal leading-relaxed mb-5">
                Al completar la exploración recibirás una lectura holística de tus 5 recursos para reconocer tus fortalezas e identificar qué puedes seguir desarrollando.
              </p>
            </div>

            {/* Tags inferiores */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#222918]/12">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white text-[#363D28] border border-[#363D28]/15">
                DIAGNÓSTICO
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white text-[#363D28] border border-[#363D28]/15">
                RESULTADOS
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#D3E07C] text-[#222918] border border-[#363D28]/15">
                GRATUITO
              </span>
            </div>
          </div>
        </div>

        {/* Banner: ¿Qué te llevas? */}
        <div className="mt-12 sm:mt-16 bg-[#FAF5EE] rounded-2xl sm:rounded-full px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 max-w-4xl mx-auto text-center sm:text-left shadow-2xs border border-[#222918]/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-sans font-extrabold text-sm sm:text-base text-[#222918] shrink-0">
              ¿Qué te llevas?
            </span>
            <span className="hidden sm:inline text-[#222918]/30 select-none" aria-hidden="true">
              |
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#222918]/85 leading-snug font-normal">
              Una lectura clara de tus 5 recursos para reconocer tus fortalezas e identificar qué puedes seguir desarrollando.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToLeadCard}
            className="shrink-0 text-xs font-bold uppercase tracking-wider text-[#54662E] hover:text-[#222918] underline underline-offset-4 cursor-pointer"
          >
            Comenzar ahora →
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 03. FORMULARIO ELEVADO: Descubre tu punto de partida    */}
      {/* ======================================================== */}
      <section id="registro-mapa-raiz" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="bg-[#FAF5EE] rounded-3xl p-7 sm:p-11 md:p-14 border border-[#222918]/12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Columna Izquierda: Ícono botánico, título y explicación */}
          <div className="md:col-span-6 flex flex-col justify-center space-y-4">
            <div className="text-[#5A6836]" aria-hidden="true">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 28 C12 22, 8 15, 2 13 C8 11, 14 13, 16 19 C18 13, 24 11, 28 13 C22 15, 18 22, 18 28" />
                <path d="M15 19 L15 28" />
              </svg>
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#5A6836]">
              Registro Gratuito
            </span>

            <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2.25rem] text-[#222918] tracking-tight leading-tight">
              Descubre tu punto de partida.
            </h2>

            <p className="text-sm sm:text-base font-sans text-[#222918]/85 leading-relaxed font-normal">
              Conoce tu nivel, reconoce tus fortalezas e identifica qué recursos puedes seguir desarrollando para tomar decisiones más conscientes.
            </p>
          </div>

          {/* Columna Derecha: Formulario estilo Pill */}
          <div className="md:col-span-6 md:pl-8 md:border-l md:border-[#222918]/12 flex flex-col justify-center">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input 1: Tu nombre */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre completo"
                    className="w-full bg-white text-[#222918] placeholder:text-gray-400 pl-12 pr-5 py-3.5 sm:py-4 rounded-full border border-gray-300 font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#363D28] transition-all shadow-2xs"
                  />
                </div>

                {/* Input 2: Tu correo electrónico */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="w-full bg-white text-[#222918] placeholder:text-gray-400 pl-12 pr-5 py-3.5 sm:py-4 rounded-full border border-gray-300 font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#363D28] transition-all shadow-2xs"
                  />
                </div>

                {/* Consent checkbox: Ley 29733 */}
                <div className="flex items-start gap-2 pt-0.5">
                  <input
                    type="checkbox"
                    id="map-privacy-consent"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-[#363D28] focus:ring-[#363D28] accent-[#363D28] cursor-pointer"
                  />
                  <label htmlFor="map-privacy-consent" className="text-xs text-[#222918]/70 cursor-pointer select-none">
                    Acepto la{' '}
                    <a
                      href="#/politica-de-privacidad"
                      onClick={() => onNavigate('politica-de-privacidad')}
                      className="underline underline-offset-2 hover:text-[#222918]"
                    >
                      política de privacidad
                    </a>{' '}
                    para recibir el acceso a mi Mapa RAÍZ.
                  </label>
                </div>

                {/* Error banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2 text-xs text-red-600 font-medium py-1">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-sans font-black text-xs sm:text-sm uppercase tracking-wider bg-[#54662E] hover:bg-[#3D4C1F] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>PROCESANDO...</span>
                    </>
                  ) : (
                    <>
                      <span>QUIERO DESCUBRIR MI MAPA RAÍZ</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Feedback */
              <div className="p-6 sm:p-8 rounded-2xl bg-[#EFE9DF] border border-[#363D28]/20 space-y-4">
                <div className="flex items-center gap-2.5 text-[#363D28]">
                  <CheckCircle2 className="w-6 h-6 text-[#5A6836]" />
                  <h4 className="font-sans font-bold text-lg text-[#222918]">
                    ¡Excelente, {nombre}!
                  </h4>
                </div>
                <p className="text-xs sm:text-sm font-sans text-[#222918]/85 leading-relaxed">
                  Tu acceso ha sido confirmado con éxito. Puedes ingresar directamente a la plataforma de exploración.
                </p>
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-[#54662E] text-[#FAF7F2] hover:bg-[#3D4C1F] transition-all w-full text-center shadow-md hover:shadow-lg"
                >
                  <span>Comenzar mi Mapa RAÍZ ahora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Nota de rigor y transparencia ética */}
        <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-white border border-[#222918]/10 flex items-start gap-3.5 max-w-4xl mx-auto shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#5A6836] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-[13px] font-sans text-[#222918]/80 leading-relaxed">
            <strong className="font-bold text-[#222918] block mb-1">
              Nota de transparencia y rigor:
            </strong>
            El Mapa RAÍZ es exclusivamente una herramienta de reflexión consciente y exploración personal.
            No constituye una prueba psicométrica formal ni un diagnóstico psicológico o clínico. Su propósito
            es servir como punto de partida para una conversación sincera contigo misma y reconocer tus recursos.
          </div>
        </div>
      </section>
    </div>
  );
}
