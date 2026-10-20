import { getWhatsAppLink } from '../data/content';
import { MessageSquare, Building2 } from 'lucide-react';

export default function OrganizationsSection() {
  const whatsappUrl = getWhatsAppLink('organizaciones');

  return (
    <section id="organizaciones" className="py-20 md:py-24 bg-[#EAE2D2]/60 border-t border-[#363D28]/10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Building2 className="w-4 h-4 text-[#A18347]" aria-hidden="true" />
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold">
            RAÍZ en organizaciones
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] leading-tight mb-5">
          Las decisiones también dejan huella en los equipos.
        </h2>

        <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mx-auto mb-8">
          Si buscas explorar cómo llevar el enfoque RAÍZ a tu organización, conversemos sobre el contexto
          y el desafío de tu equipo.
        </p>

        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Cuéntame sobre tu organización</span>
          </a>
        </div>
      </div>
    </section>
  );
}
