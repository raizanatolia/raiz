import { useState } from 'react';
import { IMAGES, getImageUrl } from '../data/images';
import { Mail, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);
  const portraitImage = IMAGES.anatoliaPortrait;

  return (
    <section id="sobre-anatolia" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Vertical Portrait / Studio Space Slot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Back subtle outline */}
              <div
                className="absolute -inset-3 rounded-2xl border border-[#A18347]/30 rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-xl overflow-hidden bg-[#EAE2D2] border border-[#363D28]/10 aspect-[3/4] shadow-xs">
                {!imgError ? (
                  <img
                    src={getImageUrl(portraitImage, { width: 900 })}
                    alt="Anatolia Zapata, coach y creadora de RAÍZ"
                    loading="lazy"
                    style={{ objectPosition: portraitImage.cropPosition }}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#DCD4C4]">
                    <span className="font-serif text-2xl text-[#363D28]">Anatolia Zapata</span>
                    <span className="text-xs font-sans tracking-widest uppercase text-[#A18347] mt-1">
                      Creadora de RAÍZ
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 text-center">
                <span className="text-xs font-sans text-[#363D28]/80 font-medium">
                  Anatolia Zapata · Creadora de RAÍZ
                </span>
              </div>
            </div>
          </div>

          {/* Copy and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold block mb-3">
              Sobre Anatolia
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
              Soy Anatolia Zapata.
            </h2>

            {/* Core exact text from brief */}
            <p className="text-lg sm:text-xl font-serif text-[#363D28] leading-relaxed mb-6 font-normal">
              Soy ingeniera industrial y creadora de RAÍZ. Acompaño a mujeres a comprender lo que influye en
              sus decisiones y a desarrollar recursos para elegir con mayor conciencia. Mi mirada considera
              tanto la historia personal como el contexto en el que cada mujer vive.
            </p>

            <div className="space-y-4 text-sm sm:text-base font-sans text-[#363D28]/80 leading-relaxed font-light mb-8">
              <p>
                Concibo el acompañamiento desde una escucha honesta y estructurada: un espacio seguro donde no
                hay fórmulas mágicas ni juicios, sino preguntas precisas que te devuelven la claridad sobre tu
                propio camino.
              </p>
              <p>
                Cada decisión es una semilla que deja una huella en tu vida y en tu entorno. Cuando comprendes
                tus raíces, dejas de reaccionar y comienzas a elegir con serenidad.
              </p>
            </div>

            {/* Conversation CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#242A1A] transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28]"
              >
                <Mail className="w-4 h-4" />
                <span>Conversemos</span>
              </a>

              <span className="text-xs font-sans text-[#363D28]/70 flex items-center gap-1.5 pt-1 sm:pt-0">
                <Sparkles className="w-3.5 h-3.5 text-[#A18347]" />
                Atención directa y personalizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
