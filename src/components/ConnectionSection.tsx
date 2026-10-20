import { CONNECTION_SITUATIONS } from '../data/content';
import OrganicTrace from './OrganicTrace';

export default function ConnectionSection() {
  return (
    <section className="py-20 md:py-28 bg-[#EAE2D2]/60 border-y border-[#363D28]/10 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold block mb-3">
            Reconocer el punto de partida
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-normal text-[#363D28] leading-tight mb-5">
            A veces sabes lo que quieres,{' '}
            <span className="italic block sm:inline">pero vuelves al mismo lugar.</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/80 font-light leading-relaxed">
            No se trata de falta de fuerza ni de exigirte más. Todas las decisiones que tomamos tienen raíces:
            emociones que nos cuidan, historias aprendidas y un contexto real que muchas veces nos sobrepasa.
          </p>
        </div>

        {/* Situations Grid: Refined editorial list with subtle borders, NOT generic glossy cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#363D28]/12 border border-[#363D28]/12 rounded-xl overflow-hidden mb-12">
          {CONNECTION_SITUATIONS.map((situation, index) => (
            <div
              key={situation.id}
              className="bg-[#F2EBDD] p-7 sm:p-9 flex flex-col justify-between hover:bg-[#FAF7F2] transition-colors"
            >
              <div>
                <span className="text-xs font-serif italic text-[#A18347] block mb-2">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#363D28] mb-3">
                  {situation.label}
                </h3>
                <p className="text-sm font-sans text-[#363D28]/80 font-normal leading-relaxed">
                  {situation.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empathetic Closing Note */}
        <div className="max-w-3xl mx-auto text-center pt-4">
          <p className="text-base sm:text-lg font-serif italic text-[#363D28] leading-relaxed mb-4">
            “No necesitas sostenerlo todo sola ni culparte por lo que cuesta. 
            El cambio real no empieza exigiendo más resultados, sino comprendiendo desde dónde estás eligiendo.”
          </p>
          <OrganicTrace variant="horizontal" className="my-2" />
        </div>
      </div>
    </section>
  );
}
