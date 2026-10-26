import React, { useState } from 'react';
import { CONTACT } from '../data/content';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Clock, UserCheck, ChevronDown, RotateCcw } from 'lucide-react';

export type LeadFormVariant = 'persona' | 'organizacion';

interface LeadContactFormProps {
  variant: LeadFormVariant;
  id?: string;
  className?: string;
}

export default function LeadContactForm({ variant, id, className = '' }: LeadContactFormProps) {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [selection, setSelection] = useState('');
  const [notes, setNotes] = useState('');

  // Status & errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const isPersona = variant === 'persona';
  const maxNotesLength = isPersona ? 500 : 700;

  // Configuration per variant
  const config = isPersona
    ? {
        eyebrow: 'UN PRIMER PASO',
        title: 'Tu siguiente capítulo puede comenzar con una conversación.',
        description:
          'No necesitas tener todas las respuestas. Cuéntame un poco sobre tu momento y exploremos juntas cómo podría acompañarte.',
        ctaText: 'Continuar por WhatsApp →',
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
            desc: 'Anatolia responde directamente a cada mensaje.',
          },
          {
            icon: ShieldCheck,
            title: 'Privacidad absoluta',
            desc: 'Tus datos se transmiten directamente a WhatsApp sin intermediarios.',
          },
          {
            icon: Clock,
            title: 'Sin compromisos',
            desc: 'Una primera conversación para conocernos y orientar tu proceso.',
          },
        ],
      }
    : {
        eyebrow: 'CONSTRUYAMOS ALGO JUNTOS',
        title: 'Cada organización tiene una historia. Conversemos sobre la tuya.',
        description:
          'Cuéntame brevemente qué experiencia estás buscando para tu equipo y exploremos una propuesta que responda a su realidad.',
        ctaText: 'Solicitar conversación →',
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
            desc: 'Coordinamos una videollamada exploratoria o intercambio inicial.',
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

  const buildWhatsAppMessage = () => {
    if (isPersona) {
      const parts = [
        'Hola Anatolia, llegué desde la página RAÍZ para personas.',
        '',
        `Mi nombre es: ${name.trim()}`,
        `Mi correo es: ${email.trim()}`,
        '',
        'Me gustaría explorar:',
        selection,
      ];

      if (notes.trim()) {
        parts.push('');
        parts.push('Quisiera contarte:');
        parts.push(notes.trim());
      }

      parts.push('');
      parts.push('Me gustaría conocer cómo podemos empezar.');
      return parts.join('\n');
    } else {
      const parts = [
        'Hola Anatolia, te contacto desde RAÍZ para organizaciones.',
        '',
        `Mi nombre es: ${name.trim()}`,
        `Organización: ${organization.trim()}`,
        `Correo: ${email.trim()}`,
        '',
        'Estamos interesados en:',
        selection,
      ];

      if (notes.trim()) {
        parts.push('');
        parts.push('Nuestro contexto o necesidad:');
        parts.push(notes.trim());
      }

      parts.push('');
      parts.push('Me gustaría conversar sobre una posible propuesta.');
      return parts.join('\n');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        email: true,
        organization: true,
        selection: true,
      });

      // Focus first error field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`${variant}-${firstErrorField}`);
      if (el) {
        el.focus();
      }
      return;
    }

    setErrors({});
    const message = buildWhatsAppMessage();
    const waUrl = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;

    setSubmittedUrl(waUrl);

    // Open WhatsApp in a new tab via direct user action
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setOrganization('');
    setSelection('');
    setNotes('');
    setErrors({});
    setTouched({});
    setSubmittedUrl(null);
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

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              {submittedUrl ? (
                /* Success / WhatsApp Preparation Screen */
                <div className="bg-[#F2EBDD] rounded-2xl border border-[#363D28]/15 p-6 sm:p-8 text-left animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#363D28] text-[#F2EBDD] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#363D28] mb-2">
                    Tu mensaje está preparado
                  </h3>

                  <p className="text-sm font-sans text-[#363D28]/85 font-light leading-relaxed mb-5">
                    Se ha intentado abrir WhatsApp con tu conversación lista para Anatolia Zapata. Podrás revisarla y personalizar cualquier detalle antes de enviarla.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#363D28]/10 mb-6">
                    <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#A18347] mb-1.5">
                      Vista previa del mensaje
                    </div>
                    <pre className="text-xs font-sans text-[#363D28]/90 whitespace-pre-wrap font-light leading-relaxed">
                      {buildWhatsAppMessage()}
                    </pre>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp ahora</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-sans text-[#363D28]/70 hover:text-[#363D28] transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Editar datos o preparar otro mensaje</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Form */
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-[#F2EBDD]/60 rounded-2xl border border-[#363D28]/12 p-6 sm:p-8 space-y-5"
                >
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
                        required
                        value={selection}
                        onChange={(e) => {
                          setSelection(e.target.value);
                          if (errors.selection) setErrors((prev) => ({ ...prev, selection: '' }));
                        }}
                        onBlur={() => handleBlur('selection')}
                        aria-invalid={Boolean(errors.selection)}
                        aria-describedby={errors.selection ? `${variant}-selection-error` : undefined}
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
                      rows={3}
                      maxLength={maxNotesLength}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={config.notesPlaceholder}
                      aria-describedby={`${variant}-counter`}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#363D28]/20 text-[#363D28] placeholder-[#363D28]/40 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#363D28] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all flex items-center justify-center gap-2.5 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      <span>{config.ctaText}</span>
                    </button>
                  </div>

                  {/* Privacy & WhatsApp Flow Notice */}
                  <div className="pt-1 text-center">
                    <p className="text-[11px] sm:text-xs font-sans text-[#363D28]/70 leading-relaxed">
                      Al continuar, se abrirá WhatsApp con tu mensaje preparado. Podrás revisarlo antes de enviarlo.
                    </p>
                    <p className="text-[10px] font-sans text-[#363D28]/50 mt-1">
                      Tus datos se utilizan exclusivamente para responder a tu consulta con total confidencialidad.
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
