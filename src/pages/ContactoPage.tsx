import { useState } from 'react';
import { PageId, CONTACT, getWhatsAppLink } from '../data/content';
import { MessageCircle, Mail, Phone, Send, CheckCircle2, User, Building2 } from 'lucide-react';

interface ContactoPageProps {
  onNavigate: (page: PageId) => void;
}

export default function ContactoPage({ onNavigate }: ContactoPageProps) {
  const [inquiryType, setInquiryType] = useState<'persona' | 'organizacion'>('persona');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor completa todos los campos requeridos para continuar.');
      return;
    }
    setError('');
    setSubmitted(true);

    // Prepare WhatsApp message redirect with exact user details
    const formattedType = inquiryType === 'persona' ? 'Proceso Personal' : 'Organización / Equipo';
    const waText = encodeURIComponent(
      `Hola Anatolia, te escribo a través de tu web.\n\n*Nombre:* ${name}\n*Correo:* ${email}\n*Tipo de consulta:* ${formattedType}\n*Mensaje:* ${message}`
    );
    const waUrl = `https://wa.me/${CONTACT.whatsappRaw}?text=${waText}`;

    // Auto-open WhatsApp after a brief delay so user sees confirmation
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 900);
  };

  const whatsappPersonalUrl = getWhatsAppLink('anatolia');
  const whatsappOrgUrl = getWhatsAppLink('organizaciones');

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
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
            conocerte.
          </p>
        </div>
      </section>

      {/* Dos Opciones Principales: Personas vs Organizaciones */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Opción Personas */}
          <div
            onClick={() => setInquiryType('persona')}
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
            <a
              href={whatsappPersonalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar una conversación</span>
            </a>
          </div>

          {/* Opción Organizaciones */}
          <div
            onClick={() => setInquiryType('organizacion')}
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
            <a
              href={whatsappOrgUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#363D28] hover:text-[#A18347] py-2 border-b border-[#363D28]/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar información</span>
            </a>
          </div>
        </div>
      </section>

      {/* Formulario de Mensaje Directo */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 mb-20 md:mb-28">
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

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#EAE2D2] border border-[#363D28]/15 text-center">
              <CheckCircle2 className="w-10 h-10 text-[#363D28] mx-auto mb-3" />
              <h3 className="text-xl font-serif font-semibold text-[#363D28] mb-2">
                ¡Gracias por escribir, {name}!
              </h3>
              <p className="text-sm font-sans text-[#363D28]/80 leading-relaxed max-w-md mx-auto mb-6">
                Tu mensaje ha sido preparado. Si WhatsApp no se abrió automáticamente en tu navegador,
                puedes pulsar el botón para iniciar la conversación ahora mismo.
              </p>
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
                  `Hola Anatolia, te escribo desde tu formulario web. Mi nombre es ${name} (${email}): ${message}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir WhatsApp ahora</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-50 text-red-800 text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Tipo de Consulta conmutable */}
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2">
                  Tipo de consulta
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

              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border border-[#363D28]/20 text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm"
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label htmlFor="email" className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.correo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border border-[#363D28]/20 text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-xs font-sans uppercase tracking-wider text-[#363D28] font-semibold mb-2">
                  ¿Cómo puedo acompañarte? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntame brevemente sobre tu momento o el desafío de tu equipo..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F2EBDD] border border-[#363D28]/20 text-[#363D28] placeholder-[#363D28]/40 focus:outline-none focus:ring-2 focus:ring-[#363D28] text-sm resize-none"
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Enviar mensaje a Anatolia</span>
              </button>

              <p className="text-[11px] font-sans text-[#363D28]/60 text-center">
                Tus datos son tratados de manera confidencial y utilizados únicamente para responder a tu consulta.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Datos Directos */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`https://wa.me/${CONTACT.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10 hover:bg-[#EAE2D2] transition-colors flex items-center justify-center gap-3"
          >
            <Phone className="w-4 h-4 text-[#A18347]" />
            <span className="text-sm font-sans font-medium text-[#363D28]">
              {CONTACT.whatsappDisplay}
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#363D28]/10 hover:bg-[#EAE2D2] transition-colors flex items-center justify-center gap-3"
          >
            <Mail className="w-4 h-4 text-[#A18347]" />
            <span className="text-sm font-sans font-medium text-[#363D28]">
              {CONTACT.email}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
