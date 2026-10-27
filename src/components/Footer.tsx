import React, { useState } from 'react';
import { PageId, CONTACT } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import {
  User,
  Mail,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  AlertCircle,
  Loader2,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  currentPage?: PageId;
}

export default function Footer({ onNavigate, currentPage = 'home' }: FooterProps) {
  const isHome = currentPage === 'home';

  // Lead capture form state
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const clean = href.replace('#/', '').trim();
    const resolvedPage: PageId = (clean || 'home') as PageId;
    window.location.hash = href;
    onNavigate(resolvedPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFaqScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage === 'home') {
      const el = document.getElementById('faqs') || document.querySelector('section[id*="faq"]');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.location.hash = '#/';
    onNavigate('home');
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' });
    }, 150);
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
      formData.append('apellido', apellido.trim());
      formData.append('email', email.trim());
      formData.append('_subject', 'RAÍZ | Nueva solicitud de Mapa RAÍZ desde formulario de Inicio');
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

  return (
    <footer className="bg-[#242A1A] text-[#F5EFEB] pt-14 sm:pt-16 pb-10 border-t border-[#363D28] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-12 border-b border-[#F5EFEB]/12">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: BRANDING, LINKS & SOCIALS                   */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Cloudinary Official Horizontal Logo */}
              <a
                href="#/"
                onClick={(e) => handleLink('#/', e)}
                className="inline-block mb-4 select-none group"
                aria-label="RAÍZ · Anatolia Zapata - Ir al inicio"
              >
                <img
                  src={BRAND_ASSETS.logoHorizontal}
                  alt="RAÍZ · Anatolia Zapata"
                  className="h-9 sm:h-11 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Tagline / Brand Claim */}
              <p className="text-sm sm:text-base font-sans text-[#F5EFEB]/85 font-light leading-relaxed mb-8 max-w-sm">
                Transforma la raíz de tus decisiones,<br />transforma tu realidad.
              </p>

              {/* Navigation Links in 2 Columns */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 text-xs sm:text-sm font-sans">
                {/* Col 1 */}
                <div className="flex flex-col space-y-2.5">
                  <a
                    href="#/contacto"
                    onClick={(e) => handleLink('#/contacto', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Contacto
                  </a>
                  <a
                    href="#/politica-de-privacidad"
                    onClick={(e) => handleLink('#/politica-de-privacidad', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Términos y condiciones
                  </a>
                  <a
                    href="#/politica-de-privacidad"
                    onClick={(e) => handleLink('#/politica-de-privacidad', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Aviso de privacidad
                  </a>
                  <a
                    href="#/libro-de-reclamaciones"
                    onClick={(e) => handleLink('#/libro-de-reclamaciones', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Libro de reclamaciones
                  </a>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col space-y-2.5">
                  <a
                    href="#/personas"
                    onClick={(e) => handleLink('#/personas', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Trabaja conmigo
                  </a>
                  <a
                    href="#/organizaciones"
                    onClick={(e) => handleLink('#/organizaciones', e)}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    Colaboraciones comerciales
                  </a>
                  <a
                    href="#faqs"
                    onClick={handleFaqScroll}
                    className="text-[#F5EFEB]/75 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-[#F5EFEB]/85 pt-2">
              <a
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Anatolia Zapata"
                className="w-9 h-9 rounded-full bg-[#F5EFEB]/8 hover:bg-[#F5EFEB]/15 flex items-center justify-center transition-colors hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CONTACT.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Anatolia Zapata"
                className="w-9 h-9 rounded-full bg-[#F5EFEB]/8 hover:bg-[#F5EFEB]/15 flex items-center justify-center transition-colors hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={CONTACT.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Anatolia Zapata"
                className="w-9 h-9 rounded-full bg-[#F5EFEB]/8 hover:bg-[#F5EFEB]/15 flex items-center justify-center transition-colors hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={CONTACT.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Canal y videos de Anatolia Zapata"
                className="w-9 h-9 rounded-full bg-[#F5EFEB]/8 hover:bg-[#F5EFEB]/15 flex items-center justify-center transition-colors hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: LEAD FORM (HOME) OR COMPACT CTA (SUBPAGES) */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l lg:border-[#F5EFEB]/15 flex flex-col justify-center">
            
            {/* VARIANT 1: FULL LEAD FORM (AS IN TOP MOCKUP) */}
            {isHome ? (
              <div className="w-full">
                {/* Eyebrow Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-[#E5EDAC] text-[#222918] font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1 rounded-md shadow-xs">
                    EMPIEZA POR AQUÍ
                  </span>
                </div>

                {/* Headline with radiating sparks */}
                <div className="inline-flex items-center gap-3 mb-3">
                  <h3 className="font-sans font-black tracking-tight text-[#F5EFEB] text-2xl sm:text-3xl lg:text-4xl uppercase leading-none">
                    QUIERO MI MAPA RAÍZ
                  </h3>
                  {/* 3 Radiating accent sparks at top-right */}
                  <span className="text-[#D4DF86] pointer-events-none" aria-hidden="true">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="4" y1="18" x2="18" y2="15" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="6" x2="18" y2="9" />
                    </svg>
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-sm sm:text-base font-sans text-[#F5EFEB]/80 font-light leading-relaxed mb-6 max-w-xl">
                  Descubre desde dónde estás tomando tus decisiones y conoce tus principales recursos para seguir avanzando.
                </p>

                {/* Form or Success State */}
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5 max-w-xl">
                    {/* Row 1: Nombre y Apellido */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#222918]/45 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          placeholder="Nombre"
                          className="w-full bg-white text-[#222918] placeholder:text-[#222918]/50 pl-11 pr-4 py-3 sm:py-3.5 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#D4DF86] transition-all shadow-xs"
                        />
                      </div>

                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#222918]/45 pointer-events-none" />
                        <input
                          type="text"
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                          placeholder="Apellido"
                          className="w-full bg-white text-[#222918] placeholder:text-[#222918]/50 pl-11 pr-4 py-3 sm:py-3.5 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#D4DF86] transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Correo electrónico */}
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-[#222918]/45 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo electrónico"
                        className="w-full bg-white text-[#222918] placeholder:text-[#222918]/50 pl-11 pr-4 py-3 sm:py-3.5 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#D4DF86] transition-all shadow-xs"
                      />
                    </div>

                    {/* Consent Checkbox: Ley 29733 */}
                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="footer-privacy-consent"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-[#F5EFEB]/30 text-[#D4DF86] focus:ring-[#D4DF86] accent-[#D4DF86] cursor-pointer"
                      />
                      <label htmlFor="footer-privacy-consent" className="text-xs text-[#F5EFEB]/70 cursor-pointer select-none">
                        Acepto la{' '}
                        <a
                          href="#/politica-de-privacidad"
                          onClick={(e) => handleLink('#/politica-de-privacidad', e)}
                          className="underline underline-offset-2 hover:text-white"
                        >
                          política de privacidad
                        </a>{' '}
                        para recibir el acceso a mi Mapa RAÍZ.
                      </label>
                    </div>

                    {/* Error message */}
                    {errorMessage && (
                      <div className="flex items-center gap-2 text-xs text-amber-300 font-medium py-1">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Action Row: Pill Submit Button + Divider + Leaf Icon & Microcopy */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wider uppercase bg-[#E5EDAC] hover:bg-[#D6E095] text-[#222918] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5EDAC] cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>ENVIANDO...</span>
                          </>
                        ) : (
                          <>
                            <span>QUIERO MI MAPA RAÍZ</span>
                            <span aria-hidden="true">→</span>
                          </>
                        )}
                      </button>

                      {/* Divider & Leaf Microcopy */}
                      <div className="flex items-center gap-3 text-xs font-sans text-[#F5EFEB]/75">
                        <span className="text-[#F5EFEB]/30 font-light hidden sm:inline select-none" aria-hidden="true">
                          |
                        </span>
                        {/* Botanical Leaf SVG */}
                        <svg
                          className="w-6 h-6 text-[#A2BD54] shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2A7 7 0 0 1 11 20z" />
                          <path d="m2 21 7-7" />
                        </svg>
                        <span className="max-w-[210px] leading-snug">
                          Una herramienta gratuita para tu autoconocimiento.
                        </span>
                      </div>
                    </div>
                  </form>
                ) : (
                  /* Success Confirmation Block */
                  <div className="p-6 rounded-2xl bg-[#F5EFEB]/10 border border-[#D4DF86]/30 max-w-xl">
                    <div className="flex items-center gap-3 text-[#D4DF86] mb-3">
                      <CheckCircle2 className="w-6 h-6" />
                      <h4 className="font-sans font-bold text-base sm:text-lg text-white">
                        ¡Listo, {nombre}! Tu solicitud ha sido registrada.
                      </h4>
                    </div>
                    <p className="text-sm font-sans text-[#F5EFEB]/85 leading-relaxed mb-5">
                      Hemos enviado las instrucciones a <strong className="text-white">{email}</strong>. Puedes comenzar a explorar tu Mapa RAÍZ inmediatamente.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        window.location.hash = '#/mapa-raiz';
                        onNavigate('mapa-raiz');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase bg-[#E5EDAC] text-[#222918] hover:bg-[#D6E095] transition-all cursor-pointer"
                    >
                      <span>Abrir mi Mapa RAÍZ ahora</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* VARIANT 2: COMPACT CARD FOR SUBPAGES (AS IN BOTTOM MOCKUP) */
              <div className="w-full">
                <div className="mb-3">
                  <span className="inline-block bg-[#E5EDAC] text-[#222918] font-sans font-bold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1 rounded-md shadow-xs">
                    EMPIEZA POR AQUÍ
                  </span>
                </div>

                <h3 className="font-sans font-bold text-[#F5EFEB] text-xl sm:text-2xl lg:text-3xl mb-3 leading-snug">
                  ¿Desde dónde estás tomando tus decisiones?
                </h3>

                <p className="text-sm sm:text-base font-sans text-[#F5EFEB]/80 font-light leading-relaxed mb-6 max-w-xl">
                  Descubre tu punto de partida con el Mapa RAÍZ.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.hash = '#/mapa-raiz';
                      onNavigate('mapa-raiz');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-sans font-bold tracking-wider uppercase bg-[#E5EDAC] hover:bg-[#D6E095] text-[#222918] transition-all duration-200 shadow-md cursor-pointer"
                  >
                    <span>QUIERO MI MAPA RAÍZ</span>
                    <span aria-hidden="true">→</span>
                  </button>

                  <span className="text-xs text-[#F5EFEB]/75 font-sans">
                    Una herramienta gratuita para comenzar a comprenderte.
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Bottom Copyright and Return to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F5EFEB]/60">
          <p>© {new Date().getFullYear()} RAÍZ · Anatolia Zapata. Todos los derechos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5EFEB] p-1 cursor-pointer"
            aria-label="Volver al inicio de la página"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
