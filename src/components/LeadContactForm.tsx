import React, { useState } from 'react';
import { FORMSUBMIT_CONFIG } from '../config/forms';
import { PageId } from '../data/content';
import { CheckCircle2, ShieldCheck, Clock, UserCheck, ChevronDown, Loader2, AlertCircle, ArrowLeft, RefreshCw, Send } from 'lucide-react';

export type LeadFormVariant = 'persona' | 'organizacion';

interface LeadContactFormProps {
  variant: LeadFormVariant;
  id?: string;
  className?: string;
  onNavigate?: (page: PageId) => void;
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'activation_pending';

export default function LeadContactForm({
  variant,
  id,
  className = '',
  onNavigate,
}: LeadContactFormProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [selection, setSelection] = useState('');
  const [notes, setNotes] = useState('');
  const [honey, setHoney] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Status & errors
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isPersona = variant === 'persona';
  const maxNotesLength = isPersona ? 500 : 700;

  // Configuration per variant
  const config = isPersona
    ? {
        eyebrow: 'UN PRIMER PASO',
        title: 'Tu siguiente capítulo puede comenzar con una conversación.',
        description:
          'No necesitas tener todas las respuestas. Cuéntame un poco sobre tu momento y exploremos juntas cómo podría acompañarte.',
        ctaText: 'Enviar consulta',
        selectLabel: '¿Qué te gustaría explorar?',
        selectPlaceholder: 'Selecciona lo que resuena hoy contigo...',
        selectOptions: [
          'Comprender mejor mis decisiones',
          'Conocer Viaje RAÍZ',
          'Explorar mi Mapa RAÍZ',
          'Todavía no estoy segura',
        ],
        notesLabel: '¿Hay algo que quieras contarme? (Opcional)',
        notesPlaceholder: 'Puedes contarme brevemente qué te gustaría cambiar o comprender...',
        trustItems: [
          {
            icon: UserCheck,
            title: 'Atención personalizada',
            desc: 'Anatolia responde personalmente a cada mensaje recibido.',
          },
          {
            icon: ShieldCheck,
            title: 'Privacidad y confidencialidad',
            desc: 'Tus datos se tratan con estricta reserva profesional y conforme a la ley.',
          },
          {
            icon: Clock,
            title: 'Sin compromisos',
            desc: 'Un primer intercambio por correo para conocernos y orientar tu proceso.',
          },
        ],
      }
    : {
        eyebrow: 'CONSTRUYAMOS ALGO JUNTOS',
        title: 'Cada organización tiene una historia. Conversemos sobre la tuya.',
        description:
          'Cuéntame brevemente qué experiencia estás buscando para tu equipo y exploremos una propuesta que responda a su realidad.',
        ctaText: 'Enviar solicitud',
        selectLabel: '¿Qué tipo de experiencia buscan?',
        selectPlaceholder: 'Selecciona una modalidad o formato...',
        selectOptions: [
          'Taller',
          'Conferencia',
          'Programa de acompañamiento',
          'Necesitamos orientación',
        ],
        notesLabel: 'Cuéntame brevemente qué necesitan (Opcional)',
        notesPlaceholder: 'Objetivo del equipo, cantidad aproximada de participantes, tiempos previstos...',
        trustItems: [
          {
            icon: UserCheck,
            title: 'Diseño a medida',
            desc: 'Propuestas construidas según los desafíos culturales de tu equipo.',
          },
          {
            icon: ShieldCheck,
            title: 'Confidencialidad institucional',
            desc: 'Resguardo profesional del contexto y necesidades de tu entidad.',
          },
          {
            icon: Clock,
            title: 'Respuesta ágil',
            desc: 'Coordinamos una conversación inicial por correo o videollamada.',
          },
        ],
      };

  // Validation logic
  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = isPersona
        ? 'Por favor, indícame cómo te llamas.'
        : 'Por favor, ingresa tu nombre y apellido.';
    }

    if (!isPersona && !organization.trim()) {
      newErrors.organization = 'Por favor, ingresa el nombre de la empresa u organización.';
    }

    if (!email.trim()) {
      newErrors.email = 'Por favor, ingresa un correo electrónico de contacto.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido (ej. nombre@dominio.com).';
    }

    if (!selection) {
      newErrors.selection = isPersona
        ? 'Por favor, selecciona qué te gustaría explorar.'
        : 'Por favor, selecciona qué tipo de experiencia buscan.';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap: silently succeed without hitting the API
    if (honey.trim().length > 0) {
      setStatus('success');
      return;
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        email: true,
        organization: true,
        selection: true,
      });

      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`${variant}-${firstErrorField}`);
      if (el) {
        el.focus();
      }
      return;
    }

    setErrors({});
    setStatus('submitting');
    setErrorMessage('');

    const subject = FORMSUBMIT_CONFIG.subjects[variant];

    const payload: Record<string, string> = {
      _subject: subject,
      _template: FORMSUBMIT_CONFIG.template,
      _captcha: FORMSUBMIT_CONFIG.captcha,
      _honey: '',
      email: email.trim(), // FormSubmit uses this for Reply-To
      Nombre: name.trim(),
      'Correo electrónico': email.trim(),
      ...(isPersona
        ? {
            'Tipo de formulario': 'Acompañamiento individual (Personas)',
            'Interés principal': selection,
            'Mensaje o notas': notes.trim() || 'Sin notas adicionales',
          }
        : {
            'Tipo de formulario': 'Consultas comerciales (Organizaciones)',
            'Empresa u organización': organization.trim(),
            'Tipo de experiencia': selection,
            'Contexto o necesidad': notes.trim() || 'Sin notas adicionales',
          }),
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
        // Clear fields exclusively on confirmed success
        setName('');
        setEmail('');
        setOrganization('');
        setSelection('');
        setNotes('');
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
        // FormSubmit requires email activation for first-time use
        setStatus('activation_pending');
      } else {
        setStatus('error');
        setErrorMessage(
          (data && data.message) ||
            'No se pudo completar el envío en este momento. Por favor verifica tu conexión o escríbenos directamente a ' +
              FORMSUBMIT_CONFIG.recipientEmail +
              '.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Hubo un problema de conexión al enviar el formulario. Por favor, inténtalo nuevamente o escribe a ' +
          FORMSUBMIT_CONFIG.recipientEmail +
          '.'
      );
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setOrganization('');
    setSelection('');
    setNotes('');
    setHoney('');
    setErrors({});
    setTouched({});
    setStatus('idle');
    setErrorMessage('');
  };

  const handleGoHome = () => {
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#/';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#363D28]/15 p-7 sm:p-10 lg:p-12 shadow-xs transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Context & Editorial Copy */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="w-6 h-[1.5px] bg-[#A18347]" aria-hidden="true" />
                  <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold">
                    {config.eyebrow}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#363D28] leading-[1.18] tracking-tight mb-4">
                  {config.title}
                </h2>

                <p className="text-sm sm:text-base font-sans text-[#363D28]/80 font-light leading-relaxed mb-8">
                  {config.description}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-[#363D28]/10 space-y-4">
                {config.trustItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#363D28]">
                          {item.title}
                        </h4>
                        <p className="text-xs font-sans text-[#363D28]/70 font-light leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Form or States */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                /* Success Screen (Exact requested text) */
                <div className="bg-[#F2EBDD] rounded-2xl border border-[#363D28]/15 p-7 sm:p-10 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#363D28] text-[#F2EBDD] flex items-center justify-center mx-auto mb-5 shadow-xs">
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
                /* FormSubmit Activation Notice */
                <div className="bg-[#FAF7F2] rounded-2xl border border-[#A18347]/40 p-7 sm:p-9 text-left animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#A18347]/15 text-[#A18347] flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#363D28] mb-2">
                    Activación de recepción pendiente
                  </h3>

                  <p className="text-sm font-sans text-[#363D28]/85 font-light leading-relaxed mb-4">
                    FormSubmit ha recibido la primera solicitud y ha enviado un correo de confirmación a{' '}
                    <strong className="font-semibold text-[#363D28]">{FORMSUBMIT_CONFIG.recipientEmail}</strong> para
                    autorizar la entrega de formularios.
                  </p>

                  <p className="text-xs font-sans text-[#363D28]/75 leading-relaxed mb-6">
                    Por favor, confirma la activación en la bandeja de entrada para que las respuestas comiencen a llegar
                    directamente.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#363D28] text-[#F2EBDD]"
                  >
                    <span>Entendido</span>
                  </button>
                </div>
              ) : (
                /* Primary Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-[#F2EBDD]/60 rounded-2xl border border-[#363D28]/12 p-6 sm:p-8 space-y-5"
                >
                  {/* Anti-spam honeypot field (hidden from legitimate users) */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor={`${variant}-honey`}>No completar este campo</label>
                    <input
                      id={`${variant}-honey`}
                      type="text"
                      name="_honey"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Error Notification Banner */}
                  {status === 'error' && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-red-50/90 border border-red-200 text-red-900 text-xs sm:text-sm font-sans flex items-start gap-3 animate-in fade-in"
                    >
                      <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium mb-0.5">No pudimos procesar tu mensaje</p>
                        <p className="text-red-800/90 font-light text-xs">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor={`${variant}-name`}
                      className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-1.5"
                    >
                      {isPersona ? '¿Cómo te llamas? *' : 'Nombre y apellido *'}
                    </label>
                    <input
                      id={`${variant}-name`}
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      onBlur={() => handleBlur('name')}
                      placeholder={isPersona ? 'Tu nombre' : 'Tu nombre y apellido'}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? `${variant}-name-error` : undefined}
                      disabled={status === 'submitting'}
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FAF7F2] text-[#363D28] placeholder-[#363D28]/40 text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border border-red-500/80 focus:ring-red-400'
                          : 'border border-[#363D28]/20 focus:ring-[#363D28] focus:border-transparent'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id={`${variant}-name-error`}
                        role="alert"
                        className="mt-1.5 text-xs text-red-700 font-sans"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Organization field (Only for organizaciones) */}
                  {!isPersona && (
                    <div>
                      <label
                        htmlFor={`${variant}-organization`}
                        className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-1.5"
                      >
                        Empresa u organización *
                      </label>
                      <input
                        id={`${variant}-organization`}
                        name="organization"
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => {
                          setOrganization(e.target.value);
                          if (errors.organization) setErrors((prev) => ({ ...prev, organization: '' }));
                        }}
                        onBlur={() => handleBlur('organization')}
                        placeholder="Nombre de tu organización o empresa"
                        aria-invalid={Boolean(errors.organization)}
                        aria-describedby={errors.organization ? `${variant}-organization-error` : undefined}
                        disabled={status === 'submitting'}
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FAF7F2] text-[#363D28] placeholder-[#363D28]/40 text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.organization
                            ? 'border border-red-500/80 focus:ring-red-400'
                            : 'border border-[#363D28]/20 focus:ring-[#363D28] focus:border-transparent'
                        }`}
                      />
                      {errors.organization && (
                        <p
                          id={`${variant}-organization-error`}
                          role="alert"
                          className="mt-1.5 text-xs text-red-700 font-sans"
                        >
                          {errors.organization}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor={`${variant}-email`}
                      className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-1.5"
                    >
                      {isPersona ? 'Correo electrónico *' : 'Correo corporativo *'}
                    </label>
                    <input
                      id={`${variant}-email`}
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      onBlur={() => handleBlur('email')}
                      placeholder={isPersona ? 'tu.correo@ejemplo.com' : 'tu.nombre@empresa.com'}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? `${variant}-email-error` : undefined}
                      disabled={status === 'submitting'}
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#FAF7F2] text-[#363D28] placeholder-[#363D28]/40 text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border border-red-500/80 focus:ring-red-400'
                          : 'border border-[#363D28]/20 focus:ring-[#363D28] focus:border-transparent'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id={`${variant}-email-error`}
                        role="alert"
                        className="mt-1.5 text-xs text-red-700 font-sans"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Selection / Dropdown field */}
                  <div>
                    <label
                      htmlFor={`${variant}-selection`}
                      className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-1.5"
                    >
                      {config.selectLabel} *
                    </label>
                    <div className="relative">
                      <select
                        id={`${variant}-selection`}
                        name="selection"
                        required
                        value={selection}
                        onChange={(e) => {
                          setSelection(e.target.value);
                          if (errors.selection) setErrors((prev) => ({ ...prev, selection: '' }));
                        }}
                        onBlur={() => handleBlur('selection')}
                        aria-invalid={Boolean(errors.selection)}
                        aria-describedby={errors.selection ? `${variant}-selection-error` : undefined}
                        disabled={status === 'submitting'}
                        className={`w-full min-h-[48px] px-4 py-3 pr-10 rounded-xl bg-[#FAF7F2] text-[#363D28] text-sm appearance-none transition-all focus:outline-none focus:ring-2 cursor-pointer ${
                          !selection ? 'text-[#363D28]/50' : 'text-[#363D28]'
                        } ${
                          errors.selection
                            ? 'border border-red-500/80 focus:ring-red-400'
                            : 'border border-[#363D28]/20 focus:ring-[#363D28] focus:border-transparent'
                        }`}
                      >
                        <option value="" disabled>
                          {config.selectPlaceholder}
                        </option>
                        {config.selectOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-[#363D28] bg-[#FAF7F2] py-1">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#363D28]/60 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.selection && (
                      <p
                        id={`${variant}-selection-error`}
                        role="alert"
                        className="mt-1.5 text-xs text-red-700 font-sans"
                      >
                        {errors.selection}
                      </p>
                    )}
                  </div>

                  {/* Notes / Textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label
                        htmlFor={`${variant}-notes`}
                        className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold"
                      >
                        {config.notesLabel}
                      </label>
                      <span
                        id={`${variant}-counter`}
                        className="text-[11px] font-sans text-[#363D28]/60"
                      >
                        {notes.length} / {maxNotesLength}
                      </span>
                    </div>
                    <textarea
                      id={`${variant}-notes`}
                      name="notes"
                      rows={3}
                      maxLength={maxNotesLength}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={config.notesPlaceholder}
                      aria-describedby={`${variant}-counter`}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#363D28]/20 text-[#363D28] placeholder-[#363D28]/40 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#363D28] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Consentimiento Afirmativo de Privacidad */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        id={`${variant}-privacy`}
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
                            if (onNavigate) onNavigate('politica-de-privacidad');
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

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all flex items-center justify-center gap-2.5 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 shrink-0" />
                          <span>{config.ctaText}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy Notice */}
                  <div className="pt-1 text-center">
                    <p className="text-[11px] sm:text-xs font-sans text-[#363D28]/70 leading-relaxed">
                      {FORMSUBMIT_CONFIG.privacyNotice}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
