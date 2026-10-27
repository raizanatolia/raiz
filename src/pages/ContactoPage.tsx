import React, { useState } from 'react';
import { PageId, CONTACT } from '../data/content';
import { FORMSUBMIT_CONFIG } from '../config/forms';
import { Mail, Send, CheckCircle2, User, Building2, Loader2, AlertCircle, ArrowLeft, RefreshCw, Clock, ArrowRight } from 'lucide-react';

interface ContactoPageProps {
  onNavigate: (page: PageId) => void;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'activation_pending';

export default function ContactoPage({ onNavigate }: ContactoPageProps) {
  const [inquiryType, setInquiryType] = useState<'persona' | 'organizacion'>('persona');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor, indícanos tu nombre completo.';
    }
    if (!email.trim()) {
      newErrors.email = 'Por favor, ingresa tu correo electrónico.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
    }
    if (!message.trim()) {
      newErrors.message = 'Por favor, cuéntanos brevemente cómo podemos acompañarte.';
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = 'Es necesario aceptar la política de privacidad para enviar tu mensaje.';
    }
    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const currentErrors = validate();
    setErrors((prev) => ({
      ...prev,
      [field]: currentErrors[field] || '',
    }));
  };

  const scrollToForm = (type?: 'persona' | 'organizacion') => {
    if (type) {
      setInquiryType(type);
    }
    const el = document.getElementById('formulario-mensaje');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (honey.trim().length > 0) {
      setStatus('success');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      const firstError = Object.keys(validationErrors)[0];
      const el = document.getElementById(`contacto-${firstError}`);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setStatus('submitting');
    setErrorMessage('');

    const formattedType = inquiryType === 'persona' ? 'Proceso Personal' : 'Organización / Equipo';

    const payload: Record<string, string> = {
      _subject: FORMSUBMIT_CONFIG.subjects.contacto,
      _template: FORMSUBMIT_CONFIG.template,
      _captcha: FORMSUBMIT_CONFIG.captcha,
      _honey: '',
      email: email.trim(),
      Nombre: name.trim(),
      'Correo electrónico': email.trim(),
      'Tipo de consulta': formattedType,
      Mensaje: message.trim(),
    };

    try {
      const response = await fetch(FORMSUBMIT_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === 'true' || data?.success === true)) {
        setStatus('success');
        // Clear fields strictly on confirmed success
        setName('');
        setEmail('');
        setMessage('');
        setHoney('');
        setPrivacyConsent(false);
        setTouched({});
        setErrors({});
      } else if (
        data &&
        typeof data.message === 'string' &&
        (data.message.toLowerCase().includes('activate') ||
          data.message.toLowerCase().includes('activar') ||
          data.message.toLowerCase().includes('confirm'))
      ) {
        setStatus('activation_pending');
      } else {
        setStatus('error');
        setErrorMessage(
          (data && data.message) ||
            'No se pudo completar el envío en este momento. Por favor verifica tu conexión o contáctanos a ' +
              FORMSUBMIT_CONFIG.recipientEmail +
              '.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Hubo un problema de conexión al enviar el formulario. Por favor inténtalo nuevamente o escribe directamente a ' +
          FORMSUBMIT_CONFIG.recipientEmail +
          '.'
      );
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setHoney('');
    setErrors({});
    setTouched({});
    setStatus('idle');
    setErrorMessage('');
  };

  const handleGoHome = () => {
    onNavigate('home');
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Encabezado Principal */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
            <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#363D28]/90 font-semibold">
              CONTACTO DIRECTO
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#363D28] tracking-tight leading-[1.12] mb-6">
            Conversemos.
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl">
            Si quieres explorar cómo puedo acompañarte, de manera individual o con tu organización, será un gusto
            conocerte y orientar tu punto de partida.
          </p>
        </div>
      </section>

      {/* Dos Opciones Principales: Personas vs Organizaciones */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opción Personas */}
          <div
            onClick={() => scrollToForm('persona')}
            className={`cursor-pointer p-8 rounded-3xl border transition-all ${
              inquiryType === 'persona'
                ? 'bg-[#FAF7F2] border-[#363D28] shadow-xs'
                : 'bg-[#F2EBDD] border-[#363D28]/15 hover:border-[#363D28]/40'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-4">
              <User className="w-5 h-5 stroke-[1.6]" />
            </div>
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-1">
              Opción A
            </span>
            <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-2">
              Personas
            </h3>
            <p className="text-sm font-sans text-[#363D28]/80 font-light mb-6">
              Quiero conversar sobre mi proceso personal, el Mapa RAÍZ o el acompañamiento de Viaje RAÍZ.
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scrollToForm('persona');
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30"
            >
              <Mail className="w-4 h-4" />
              <span>Escribir por proceso personal</span>
            </button>
          </div>

          {/* Opción Organizaciones */}
          <div
            onClick={() => scrollToForm('organizacion')}
            className={`cursor-pointer p-8 rounded-3xl border transition-all ${
              inquiryType === 'organizacion'
                ? 'bg-[#FAF7F2] border-[#363D28] shadow-xs'
                : 'bg-[#F2EBDD] border-[#363D28]/15 hover:border-[#363D28]/40'
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] mb-4">
              <Building2 className="w-5 h-5 stroke-[1.6]" />
            </div>
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-1">
              Opción B
            </span>
            <h3 className="text-2xl font-serif font-semibold text-[#363D28] mb-2">
              Organizaciones
            </h3>
            <p className="text-sm font-sans text-[#363D28]/80 font-light mb-6">
              Quiero explorar una propuesta para mi equipo en bienestar, liderazgo, género o desarrollo humano.
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                scrollToForm('organizacion');
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30"
            >
              <Mail className="w-4 h-4" />
              <span>Solicitar propuesta de equipo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Formulario de Mensaje Directo con FormSubmit.co */}
      <section id="formulario-mensaje" className="scroll-mt-28 max-w-3xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
        <div className="bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border border-[#363D28]/15">
          <div className="mb-8">
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
              ENVÍO DE MENSAJE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#363D28]">
              Escríbeme un mensaje
            </h2>
            <p className="text-sm font-sans text-[#363D28]/75 font-light mt-1">
              Respondo personalmente cada mensaje con atención y confidencialidad.
            </p>
          </div>

          {status === 'success' ? (
            /* Estado de Éxito */
            <div className="p-8 sm:p-10 rounded-2xl bg-[#EAE2D2] border border-[#363D28]/15 text-center animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-[#363D28] text-[#F2EBDD] flex items-center justify-center mx-auto mb-4 shadow-xs">
                <CheckCircle2 className="w-7 h-7 stroke-[2]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#363D28] mb-3">
                ¡Gracias por escribirnos!
              </h3>

              <p className="text-sm sm:text-base font-sans text-[#363D28]/85 font-light leading-relaxed max-w-md mx-auto mb-8">
                Hemos recibido tu mensaje. Nos pondremos en contacto contigo a través del correo que nos compartiste.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleGoHome}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver al inicio</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-sans text-[#363D28]/75 hover:text-[#363D28] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Enviar otro mensaje</span>
                </button>
              </div>
            </div>
          ) : status === 'activation_pending' ? (
            /* Notificación de activación de FormSubmit para primer envío */
            <div className="p-7 sm:p-9 rounded-2xl bg-[#F2EBDD] border border-[#A18347]/40 text-left animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#A18347]/15 text-[#A18347] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 stroke-[2]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#363D28] mb-2">
                Activación de recepción requerida
              </h3>

              <p className="text-sm font-sans text-[#363D28]/85 font-light leading-relaxed mb-4">
                FormSubmit ha recibido el envío inicial y ha remitido un correo de activación a{' '}
                <strong className="font-semibold text-[#363D28]">{FORMSUBMIT_CONFIG.recipientEmail}</strong>.
              </p>

              <p className="text-xs font-sans text-[#363D28]/75 leading-relaxed mb-6">
                Por favor, abre ese correo y pulsa el botón de activación para que los formularios futuros lleguen con
                normalidad.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#363D28] text-[#F2EBDD]"
              >
                <span>Aceptar</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
              {/* Spam Honeypot Trap */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="contacto-honey">No completar</label>
                <input
                  id="contacto-honey"
                  type="text"
                  name="_honey"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Mensaje de Error (conserva campos completados) */}
              {status === 'error' && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs sm:text-sm font-sans flex items-start gap-3 animate-in fade-in"
                >
                  <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-0.5">No se pudo procesar tu mensaje</p>
                    <p className="text-red-800/90 font-light text-xs">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Tipo de Consulta conmutable */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2">
                  Tipo de consulta *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInquiryType('persona')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-sans transition-colors border text-center ${
                      inquiryType === 'persona'
                        ? 'bg-[#363D28] text-[#F2EBDD] border-[#363D28]'
                        : 'bg-[#F2EBDD] text-[#363D28] border-[#363D28]/20 hover:border-[#363D28]'
                    }`}
                  >
                    Proceso Personal
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('organizacion')}
                    className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-sans transition-colors border text-center ${
                      inquiryType === 'organizacion'
                        ? 'bg-[#363D28] text-[#F2EBDD] border-[#363D28]'
                        : 'bg-[#F2EBDD] text-[#363D28] border-[#363D28]/20 hover:border-[#363D28]'
                    }`}
                  >
                    Organización / Equipo
                  </button>
                </div>
              </div>

              {/* Nombre completo */}
              <div>
                <label
                  htmlFor="contacto-name"
                  className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  id="contacto-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  onBlur={() => handleBlur('name')}
                  placeholder="Tu nombre"
                  disabled={status === 'submitting'}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contacto-name-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm transition-all ${
                    errors.name ? 'border-red-500/80 focus:ring-red-400' : 'border-[#363D28]/20'
                  }`}
                />
                {errors.name && (
                  <p id="contacto-name-error" role="alert" className="mt-1.5 text-xs text-red-700 font-sans">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Correo Electrónico */}
              <div>
                <label
                  htmlFor="contacto-email"
                  className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2"
                >
                  Correo electrónico *
                </label>
                <input
                  id="contacto-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  onBlur={() => handleBlur('email')}
                  placeholder="tu.correo@ejemplo.com"
                  disabled={status === 'submitting'}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contacto-email-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm transition-all ${
                    errors.email ? 'border-red-500/80 focus:ring-red-400' : 'border-[#363D28]/20'
                  }`}
                />
                {errors.email && (
                  <p id="contacto-email-error" role="alert" className="mt-1.5 text-xs text-red-700 font-sans">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="contacto-message"
                  className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2"
                >
                  ¿Cómo puedo acompañarte? *
                </label>
                <textarea
                  id="contacto-message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  onBlur={() => handleBlur('message')}
                  placeholder="Cuéntame brevemente sobre tu momento o el desafío de tu equipo..."
                  disabled={status === 'submitting'}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contacto-message-error' : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm resize-none transition-all ${
                    errors.message ? 'border-red-500/80 focus:ring-red-400' : 'border-[#363D28]/20'
                  }`}
                />
                {errors.message && (
                  <p id="contacto-message-error" role="alert" className="mt-1.5 text-xs text-red-700 font-sans">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Consentimiento Afirmativo de Privacidad */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="contacto-privacy"
                    checked={privacyConsent}
                    onChange={(e) => {
                      setPrivacyConsent(e.target.checked);
                      if (errors.privacyConsent) setErrors((prev) => ({ ...prev, privacyConsent: '' }));
                    }}
                    disabled={status === 'submitting'}
                    className="mt-0.5 w-4 h-4 rounded border-[#363D28]/30 text-[#363D28] focus:ring-[#363D28] accent-[#363D28] cursor-pointer shrink-0"
                  />
                  <span className="text-xs font-sans text-[#363D28]/80 leading-snug">
                    He leído y acepto la{' '}
                    <a
                      href="#/politica-de-privacidad"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '#/politica-de-privacidad';
                        onNavigate('politica-de-privacidad');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#363D28] font-semibold underline underline-offset-2 hover:text-[#A18347] transition-colors"
                    >
                      Política de Privacidad
                    </a>{' '}
                    para el tratamiento de mis datos con el fin exclusivo de atender mi consulta. *
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p role="alert" className="mt-1 text-xs text-red-700 font-sans pl-6.5">
                    {errors.privacyConsent}
                  </p>
                )}
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all flex items-center justify-center gap-2 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>

              {/* Nota de Privacidad */}
              <p className="text-[11px] font-sans text-[#363D28]/70 text-center leading-relaxed">
                {FORMSUBMIT_CONFIG.privacyNotice}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Datos Directos Oficiales */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10 hover:bg-[#EAE2D2] transition-colors flex items-center justify-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#A18347] group-hover:bg-[#363D28] group-hover:text-[#F2EBDD] transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#A18347] font-semibold block">
                Correo oficial
              </span>
              <span className="text-sm font-sans font-medium text-[#363D28]">
                {CONTACT.email}
              </span>
            </div>
          </a>

          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10 flex items-center justify-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#A18347]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#A18347] font-semibold block">
                Tiempo de respuesta
              </span>
              <span className="text-sm font-sans font-medium text-[#363D28]">
                24 a 48 horas hábiles
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
