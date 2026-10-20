import { FUNDAMENTAL_RESOURCES } from '../data/content';
import { IMAGES, getImageUrl } from '../data/images';
import { Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const RESOURCE_ICONS = [
  Compass,         // Perspectiva
  Heart,           // Gestión emocional
  CompassIcon,     // Dirección
  BatteryCharging, // Energía vital
  CheckCircle2,    // Acción consistente
];

export default function ApproachSection() {
  const [imgError, setImgError] = useState(false);
  const approachImage = IMAGES.approachSeed;

  return (
    <section id="enfoque" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Editorial Heading & Metaphor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold block mb-3">
              El enfoque RAÍZ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight">
              Todo crecimiento{' '}
              <span className="italic block sm:inline">empieza por la raíz.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base font-sans text-[#363D28]/85 font-light leading-relaxed">
              La metáfora de la semilla orienta nuestro trabajo: antes de ver hojas o frutos en la superficie,
              la vida desarrolla raíces firmes bajo tierra. Comprender tu historia y tus recursos es la base
              para que cualquier decisión florezca con estabilidad y calma.
            </p>
          </div>
        </div>

        {/* Botanical Visual & Metaphor Card */}
        <div className="mb-20 rounded-2xl overflow-hidden bg-[#EAE2D2] border border-[#363D28]/10 p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative overflow-hidden rounded-xl aspect-[16/10] bg-[#DCD4C4]">
            {!imgError ? (
              <img
                src={getImageUrl(approachImage, { width: 800 })}
                alt={approachImage.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs font-serif italic text-[#363D28]/60 p-4 text-center">
                El arraigo que precede al florecimiento
              </div>
            )}
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-sans uppercase tracking-widest text-[#A18347] font-medium mb-2">
              Bases del Método RAÍZ
            </span>
            <h3 className="text-2xl font-serif text-[#363D28] mb-3">
              Mirar hacia adentro para decidir hacia adelante
            </h3>
            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 leading-relaxed font-light mb-4">
              El proceso invita a pausar el ruido externo, revisar las experiencias que han configurado tus
              respuestas actuales, y orientar tus decisiones cotidianas hacia lo que es verdaderamente
              valioso para ti hoy.
            </p>
            <div className="flex items-center gap-3 text-xs font-sans text-[#363D28]/70 italic">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A18347]" />
              <span>Sin exigencias desmedidas · Con respeto por tu ritmo y tu realidad</span>
            </div>
          </div>
        </div>

        {/* The 5 Fundamental Resources of Mapa RAÍZ */}
        <div>
          <div className="border-b border-[#363D28]/15 pb-5 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans tracking-widest uppercase text-[#A18347] font-semibold block mb-1">
                Recursos fundamentales
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28]">
                Los cinco recursos del Mapa RAÍZ
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-sans text-[#363D28]/70 max-w-sm">
              Dimensiones internas que exploramos para comprender desde dónde tomas cada decisión.
            </p>
          </div>

          {/* Integrated Editorial Rows (Not cards-inside-cards or fake scores) */}
          <div className="space-y-4">
            {FUNDAMENTAL_RESOURCES.map((resource, idx) => {
              const Icon = RESOURCE_ICONS[idx];
              return (
                <div
                  key={resource.id}
                  className="p-6 sm:p-7 rounded-xl border border-[#363D28]/12 bg-[#FAF7F2] hover:bg-[#F2EBDD] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center"
                >
                  {/* Resource Number & Name */}
                  <div className="md:col-span-4 flex items-center gap-4">
                    <span className="text-xl sm:text-2xl font-serif text-[#A18347] font-medium min-w-[2.5rem]">
                      {resource.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#363D28]/5 flex items-center justify-center text-[#363D28]">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif font-semibold text-[#363D28]">
                        {resource.name}
                      </h4>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="text-sm font-sans text-[#363D28]/85 font-normal leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  {/* Reflection Question */}
                  <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#363D28]/10 pt-3 md:pt-0 md:pl-5">
                    <span className="text-[11px] uppercase tracking-wider text-[#A18347] font-semibold block mb-1">
                      Pregunta de reflexión
                    </span>
                    <p className="text-xs font-serif italic text-[#363D28]/80 leading-snug">
                      {resource.reflectionPrompt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
