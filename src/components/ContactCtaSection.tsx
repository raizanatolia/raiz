import { ArrowUpRight, MessageCircle, Mail, Phone } from 'lucide-react';
import { CONTACT, getWhatsAppLink } from '../data/content';
import OrganicTrace from './OrganicTrace';

export default function ContactCtaSection() {
  const whatsappUrl = getWhatsAppLink('anatolia');

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#363D28]/10 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <OrganicTrace variant="vertical" className="mb-4" />

        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#A18347] font-semibold block mb-3">
          El momento de elegir
        </span>

        {/* Closing Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
          Cada decisión deja una huella.{' '}
          <span className="italic block mt-1">¿Cuál quieres empezar a construir?</span>
        </h2>

        <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Ya sea a través de la exploración inicial con el Mapa RAÍZ o iniciando un proceso personalizado
          en Viaje RAÍZ, el primer paso es concederte el espacio para mirar con calma.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] w-full sm:w-auto"
          >
            <span>Explorar mi Mapa RAÍZ</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Escribir a Anatolia</span>
          </a>
        </div>

        {/* Verified Direct Contact Cards */}
        <div className="pt-10 border-t border-[#363D28]/12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto text-left">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl border border-[#363D28]/10 bg-[#F2EBDD] hover:bg-[#EAE2D2] transition-colors flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#363D28]/10 flex items-center justify-center shrink-0 text-[#363D28] group-hover:bg-[#363D28] group-hover:text-[#F2EBDD] transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#A18347] font-medium block">
                WhatsApp directo
              </span>
              <span className="text-sm font-sans font-medium text-[#363D28]">
                {CONTACT.whatsappDisplay}
              </span>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="p-5 rounded-xl border border-[#363D28]/10 bg-[#F2EBDD] hover:bg-[#EAE2D2] transition-colors flex items-center gap-3.5 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#363D28]/10 flex items-center justify-center shrink-0 text-[#363D28] group-hover:bg-[#363D28] group-hover:text-[#F2EBDD] transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#A18347] font-medium block">
                Correo electrónico
              </span>
              <span className="text-sm font-sans font-medium text-[#363D28] truncate block max-w-[190px]">
                {CONTACT.email}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
