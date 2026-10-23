import { PageId, getWhatsAppLink } from '../data/content';
import { ArrowRight, MessageCircle } from 'lucide-react';
import OrganicTrace from './OrganicTrace';

interface CloseCtaSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function CloseCtaSection({ onNavigate }: CloseCtaSectionProps) {
  const whatsappUrl = getWhatsAppLink('anatolia');

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#363D28]/10 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <OrganicTrace variant="vertical" className="mb-4" />

        <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
          EL MOMENTO DE EMPEZAR
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-5">
          Cada decisión deja una huella.{' '}
          <span className="italic block mt-1">¿Cuál quieres empezar a construir?</span>
        </h2>

        <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed max-w-xl mx-auto mb-10">
          No necesitas tener todas las respuestas para comenzar. Puedes empezar por mirar con mayor claridad
          desde dónde estás decidiendo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              window.location.hash = '#/mapa-raiz';
              onNavigate('mapa-raiz');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] w-full sm:w-auto"
          >
            <span>Descubre tu Mapa RAÍZ</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#363D28] border border-[#363D28]/30 hover:border-[#363D28] hover:bg-[#363D28]/5 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversemos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
