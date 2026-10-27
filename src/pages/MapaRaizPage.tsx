import React, { useState } from 'react';
import { CONTACT, PageId } from '../data/content';
import {
  Eye,
  Heart,
  Compass,
  Sun,
  BarChart3,
  User,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface MapaRaizPageProps {
  onNavigate: (page: PageId) => void;
}

export default function MapaRaizPage({ onNavigate }: MapaRaizPageProps) {
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const heroDeskImage = `${cleanBase}assets/cards/mapa-raiz-desk.png`;

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

  const resources = [
    {
      id: 'perspectiva',
      number: '01',
      name: 'Perspectiva',
      icon: Eye,
      description: 'Cómo interpretas lo que sucede.',
    },
    {
      id: 'gestion-emocional',
      number: '02',
      name: 'Gestión emocional',
      icon: Heart,
      description: 'Cómo reconoces y gestionas lo que sientes.',
    },
    {
      id: 'direccion',
      number: '03',
      name: 'Dirección',
      icon: Compass,
      description: 'Qué priorizas y hacia dónde vas.',
    },
    {
      id: 'energia-vital',
      number: '04',
      name: 'Energía vital',
      icon: Sun,
      description: 'Cómo cuidas tu energía y bienestar.',
    },
    {
      id: 'accion-consistente',
      number: '05',
      name: 'Acción consistente',
      icon: BarChart3,
      description: 'Cómo llevas tus decisiones a la práctica.',
    },
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#222918] min-h-screen">
      
      {/* ======================================================== */}
      {/* 01. HERO SECTION: ¿Estás reaccionando o eligiendo?       */}
      {/* ======================================================== */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 border-b border-[#222918]/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headline, Story copy & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="text-xs sm:text-[13px] font-sans font-bold tracking-[0.22em] uppercase text-[#363D28]">
                  MAPA RAÍZ
                </span>
                <span className="w-12 h-[1.5px] bg-[#363D28]/40" aria-hidden="true" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#222918] leading-[1.12] tracking-tight font-normal mb-5 sm:mb-6">
                ¿Estás reaccionando<br />
                o eligiendo?
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-sm sm:text-base md:text-lg font-sans text-[#222918]/85 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
                Tu historia influye en cómo interpretas lo que pasa, lo que sientes y las decisiones que tomas.<br className="hidden sm:inline" />
                {' '}El Mapa RAÍZ te ayuda a reconocer tu punto de partida y los recursos que puedes fortalecer.
              </p>

              {/* CTA Button & Microcopy */}
              <div className="flex flex-col items-start gap-2.5 mb-2">
                <button
                  type="button"
                  onClick={scrollToLeadCard}
                  className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wider uppercase bg-[#363D28] hover:bg-[#222719] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] cursor-pointer"
                >
                  <span>Quiero mi Mapa RAÍZ</span>
                  <span aria-hidden="true">→</span>
                </button>
                <span className="text-xs font-sans text-[#222918]/70 font-normal">
                  Un primer paso para comprenderte mejor.
                </span>
              </div>
            </div>

            {/* Right Column: Cozy Desk Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-[#222918]/10 bg-[#EFE9DF]">
                <img
                  src={heroDeskImage}
                  alt="Espacio de reflexión con cuaderno de notas, pluma y café para el Mapa RAÍZ"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 02. CINCO RECURSOS QUE INFLUYEN EN TU FORMA DE DECIDIR    */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#FAF6F0] border-b border-[#222918]/10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow Header */}
          <h2 className="text-center font-sans font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#222918] mb-10 sm:mb-14">
            CINCO RECURSOS QUE INFLUYEN EN TU FORMA DE DECIDIR, SENTIR Y ACTUAR.
          </h2>

          {/* 5 Equal Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 lg:gap-6 items-stretch">
            {resources.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-start ${
                    index < resources.length - 1 ? 'md:border-r md:border-[#222918]/15 md:pr-4' : ''
                  }`}
                >
                  {/* Resource Icon */}
                  <div className="mb-3 text-[#222918]">
                    <Icon className="w-6 h-6 stroke-[1.6]" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#222918] mb-1.5 leading-snug">
                    {item.number}. {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#222918]/75 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Banner: ¿Qué te llevas? */}
          <div className="mt-10 sm:mt-14 bg-[#EFE9DF] rounded-2xl sm:rounded-full px-6 sm:px-8 py-4 sm:py-4.5 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 max-w-4xl mx-auto text-center sm:text-left shadow-xs border border-[#222918]/8">
            <span className="font-sans font-bold text-sm sm:text-base text-[#222918] shrink-0">
              ¿Qué te llevas?
            </span>
            <span className="hidden sm:inline text-[#222918]/30 select-none" aria-hidden="true">
              |
            </span>
            <span className="font-sans text-xs sm:text-sm text-[#222918]/85 leading-snug font-normal">
              Una lectura de tus recursos para reconocer tus fortalezas e identificar qué puedes seguir desarrollando.
            </span>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 03. FORMULARIO: Descubre tu punto de partida             */}
      {/* ======================================================== */}
      <section id="registro-mapa-raiz" className="py-16 sm:py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Card Container matching bottom mockup in image_411ddf5c.png */}
          <div className="bg-[#FAF6F0] rounded-3xl p-7 sm:p-11 md:p-14 border border-[#222918]/12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Column: Botanical Two-Leaf Icon, Title & Subtitle */}
            <div className="md:col-span-6 flex flex-col justify-center">
              {/* Botanical Two-Leaf Outline SVG matching reference */}
              <div className="mb-4 text-[#5A6836]" aria-hidden="true">
                <svg
                  className="w-10 h-10 sm:w-11 sm:h-11"
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

              <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[2rem] text-[#222918] tracking-tight mb-3 leading-snug">
                Descubre tu punto de partida.
              </h2>

              <p className="text-sm sm:text-base font-sans text-[#222918]/80 leading-relaxed font-normal">
                Conoce tu nivel, reconoce tus fortalezas e identifica qué recursos puedes seguir desarrollando.
              </p>
            </div>

            {/* Right Column: Pill Form Inputs & Submit */}
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
                      placeholder="Tu nombre"
                      className="w-full bg-white text-[#222918] placeholder:text-gray-400 pl-12 pr-5 py-3.5 sm:py-4 rounded-full border border-gray-300 font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#363D28] transition-all shadow-xs"
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
                      className="w-full bg-white text-[#222918] placeholder:text-gray-400 pl-12 pr-5 py-3.5 sm:py-4 rounded-full border border-gray-300 font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#363D28] transition-all shadow-xs"
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
                    className="w-full py-4 px-6 rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#363D28] hover:bg-[#222719] text-[#FAF7F2] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>PROCESANDO...</span>
                      </>
                    ) : (
                      <>
                        <span>QUIERO DESCUBRIR MI MAPA RAÍZ</span>
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Feedback */
                <div className="p-6 rounded-2xl bg-[#EFE9DF] border border-[#363D28]/20">
                  <div className="flex items-center gap-2.5 text-[#363D28] mb-2.5">
                    <CheckCircle2 className="w-6 h-6 text-[#5A6836]" />
                    <h4 className="font-sans font-bold text-base sm:text-lg text-[#222918]">
                      ¡Excelente, {nombre}!
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm font-sans text-[#222918]/85 leading-relaxed mb-4">
                    Tu acceso ha sido confirmado. Puedes ingresar directamente a la plataforma de exploración.
                  </p>
                  <a
                    href={CONTACT.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase bg-[#363D28] text-[#FAF7F2] hover:bg-[#222719] transition-all w-full text-center"
                  >
                    <span>Comenzar mi Mapa RAÍZ ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Rigor and Ethical transparency note */}
          <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#EFE9DF]/60 border border-[#222918]/10 flex items-start gap-3.5 max-w-4xl mx-auto">
            <AlertCircle className="w-5 h-5 text-[#5A6836] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-[13px] font-sans text-[#222918]/80 leading-relaxed">
              <strong className="font-semibold text-[#222918] block mb-1">
                Nota de transparencia y rigor:
              </strong>
              El Mapa RAÍZ es exclusivamente una herramienta de reflexión consciente y exploración personal.
              No constituye una prueba psicométrica formal ni un diagnóstico psicológico o clínico. Su propósito
              es servir como punto de partida para una conversación sincera contigo misma y reconocer tus recursos.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
