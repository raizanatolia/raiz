import { Mail, Check } from 'lucide-react';
import { JOURNEY_HIGHLIGHTS } from '../data/content';

export default function JourneySection() {

  return (
    <section id="viaje-raiz" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold block mb-3">
            Programa de acompañamiento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
            Un proceso para llevar esa claridad{' '}
            <span className="italic block sm:inline">a tu vida cotidiana.</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed">
            <strong className="font-medium text-[#363D28]">Viaje RAÍZ</strong> es un acompañamiento
            individual estructurado en <strong>12 sesiones a lo largo de tres meses</strong>. Un espacio
            íntimo y constante para desarticular respuestas automáticas, arraigar tus cinco recursos y
            comenzar a decidir con firmeza serena.
          </p>
        </div>

        {/* Structure & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Highlights List */}
          <div className="lg:col-span-8 bg-[#FAF7F2] border border-[#363D28]/12 rounded-2xl p-6 sm:p-10 divide-y divide-[#363D28]/10">
            {JOURNEY_HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className={`py-5 first:pt-0 last:pb-0 flex items-start gap-4`}
              >
                <div className="w-6 h-6 rounded-full bg-[#363D28]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#363D28]">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[#363D28] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-[#363D28]/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Overview Card */}
          <div className="lg:col-span-4 bg-[#EAE2D2] border border-[#363D28]/12 rounded-2xl p-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#A18347] font-semibold block mb-2">
                Resumen del formato
              </span>
              <h3 className="text-2xl font-serif text-[#363D28] mb-4">
                Viaje RAÍZ
              </h3>

              <div className="space-y-4 text-sm font-sans text-[#363D28]/85 border-y border-[#363D28]/10 py-5 my-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#363D28]/70">Estructura</span>
                  <span className="font-medium">12 sesiones individuales</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#363D28]/70">Duración</span>
                  <span className="font-medium">3 meses de proceso</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#363D28]/70">Modalidad</span>
                  <span className="font-medium">Acompañamiento 1 a 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#363D28]/70">Inicio</span>
                  <span className="font-medium text-[#363D28]">Personalizado y continuo</span>
                </div>
              </div>

              <p className="text-xs font-sans text-[#363D28]/70 leading-relaxed mb-6 italic">
                Cada proceso comienza con una conversación previa con Anatolia para evaluar encaje mutuo y
                acordar el ritmo de trabajo.
              </p>
            </div>

            <a
              href="#/contacto"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-colors text-center shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
            >
              <Mail className="w-4 h-4" />
              <span>Consultar por Viaje RAÍZ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
