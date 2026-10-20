import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { CONTACT } from '../data/content';

export default function MapSection() {
  return (
    <section id="mapa-raiz" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Special Featured Box: Deep Olive with warm ivory & ochre accents */}
        <div className="relative rounded-3xl bg-[#363D28] text-[#F2EBDD] p-8 sm:p-12 md:p-16 overflow-hidden shadow-md">
          {/* Subtle botanical line motif in background (accessible opacity) */}
          <div
            className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border border-[#A18347]/20 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-10 bottom-10 w-48 h-48 rounded-full border border-[#F2EBDD]/10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-[#C4A76C]" aria-hidden="true" />
              <span className="text-xs font-sans tracking-[0.25em] uppercase text-[#C4A76C] font-semibold">
                Herramienta de exploración personal
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal leading-[1.18] tracking-tight mb-6">
              Tu punto de partida puede empezar{' '}
              <span className="italic block sm:inline text-[#C4A76C]">
                con una pregunta.
              </span>
            </h2>

            {/* Core Message */}
            <p className="text-base sm:text-lg font-sans text-[#F2EBDD]/90 font-light leading-relaxed mb-6">
              El <strong className="font-semibold text-white">Mapa RAÍZ</strong> es un recurso creado para
              observar cómo están hoy tus cinco recursos fundamentales y abrir una conversación sincera sobre
              tus decisiones, tus bloqueos habituales y lo que necesitas fortalecer.
            </p>

            <p className="text-sm font-sans text-[#F2EBDD]/75 leading-relaxed mb-10 max-w-2xl">
              Es una invitación a mirarte con curiosidad y sin juicio. Te permite reconocer desde qué lugar
              estás decidiendo y evaluar si el acompañamiento de <em>Viaje RAÍZ</em> es el siguiente paso adecuado para ti.
            </p>

            {/* Action CTA & External Indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#F2EBDD] text-[#363D28] hover:bg-white transition-all duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2EBDD]"
              >
                <span>Explorar mi Mapa RAÍZ</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <span className="text-xs font-sans text-[#F2EBDD]/60 flex items-center gap-1.5 self-center sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#C4A76C]" aria-hidden="true" />
                Acceso en línea · Sin costo
              </span>
            </div>

            {/* Clarification Notice: Transparent and honest */}
            <div className="pt-6 border-t border-[#F2EBDD]/15">
              <p className="text-xs font-sans text-[#F2EBDD]/70 leading-relaxed">
                <strong className="text-[#F2EBDD]/90 font-medium">Nota de claridad:</strong> El Mapa RAÍZ es
                un recurso de reflexión y autoexploración consciente. No constituye una evaluación clínica,
                diagnóstico psicológico ni prueba psicométrica. Al completar tu exploración, podrás ponerte en
                contacto directo con Anatolia para conversar sobre tus reflexiones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
