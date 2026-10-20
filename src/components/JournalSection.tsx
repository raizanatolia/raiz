import { useState } from 'react';
import { IMAGES, getImageUrl } from '../data/images';
import { BookOpen } from 'lucide-react';

export default function JournalSection() {
  const [imgError, setImgError] = useState(false);
  const journalImage = IMAGES.journal;

  return (
    <section className="py-20 md:py-24 bg-[#EAE2D2]/50 border-t border-[#363D28]/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Visual Container: Reserved photo space */}
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#DCD4C4] border border-[#363D28]/10 shadow-xs aspect-[4/3]">
              {!imgError ? (
                <img
                  src={getImageUrl(journalImage, { width: 900 })}
                  alt={journalImage.alt}
                  loading="lazy"
                  style={{ objectPosition: journalImage.cropPosition }}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#E5DDCF]">
                  <BookOpen className="w-8 h-8 text-[#363D28]/50 mb-2" />
                  <p className="text-sm font-serif italic text-[#363D28]/70">
                    Bitácora RAÍZ · Registro personal
                  </p>
                </div>
              )}
            </div>
            <div className="mt-2 text-right">
              <span className="text-[11px] font-sans italic text-[#363D28]/60">
                Material integrado de acompañamiento
              </span>
            </div>
          </div>

          {/* Copy Description */}
          <div className="md:col-span-6 order-1 md:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-[#A18347]" aria-hidden="true" />
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#A18347] font-semibold">
                Material de acompañamiento
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-[#363D28] leading-tight mb-5">
              Bitácora RAÍZ
            </h2>

            <blockquote className="border-l-2 border-[#A18347] pl-4 my-2 mb-6">
              <p className="text-lg sm:text-xl font-serif italic text-[#363D28] leading-relaxed">
                “Un lugar para registrar lo que descubres, volver a tus reflexiones y reconocer tu recorrido.”
              </p>
            </blockquote>

            <p className="text-sm sm:text-base font-sans text-[#363D28]/80 leading-relaxed font-light mb-6">
              El proceso no ocurre solo durante la sesión, sino en los días intermedios: en la pausa frente a
              un dilema, en el registro de cómo te sentiste tras responder diferente o en la escritura
              espontánea de lo que va tomando forma. La bitácora es el soporte físico para no perder de vista
              tu propia voz.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-sans text-[#363D28]/70 bg-[#363D28]/5 px-3 py-1.5 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A18347]" />
              <span>Incluida de forma exclusiva dentro del programa Viaje RAÍZ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
