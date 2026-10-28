import { PageId } from '../data/content';
import { Package, Laptop, Sprout, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface BitacoraRaizPageProps {
  onNavigate: (page: PageId) => void;
}

export default function BitacoraRaizPage({ onNavigate }: BitacoraRaizPageProps) {
  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ------------------------------------------------------------- */}
      {/* HERO: BITÁCORA RAÍZ - UN ESPACIO PARA VOLVER A TI (Ref Image) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
        <div className="text-center space-y-3 mb-10 md:mb-14">
          {/* Eyebrow Pill */}
          <div className="inline-block bg-[#F4EDE2] text-[#222918] font-black text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider border border-[#363D28]/10 shadow-2xs">
            BITÁCORA RAÍZ
          </div>

          {/* Titular con chispas */}
          <div className="relative inline-flex items-center justify-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#222918]">
              Un espacio para volver a ti.
            </h1>
            <div className="hidden sm:block absolute -top-4 -right-8 text-[#222918] text-xl font-mono tracking-tighter select-none font-bold">
              ///
            </div>
          </div>
        </div>

        {/* Layout en 2 Columnas: Cuaderno Físico + Textos y Opciones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Columna Izquierda: Mockup Visual de la Bitácora RAÍZ */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-[#363D28]/15 bg-[#EFE7D8] p-6 sm:p-8 flex items-center justify-center">
              {/* Representación elegante del cuaderno con espiral y logo */}
              <div className="w-full aspect-[3/4] bg-[#FAF7F2] rounded-r-2xl rounded-l-md shadow-lg border-r-4 border-b-4 border-black/10 relative p-6 sm:p-8 flex flex-col justify-between text-center select-none">
                {/* Espiral izquierdo */}
                <div className="absolute left-1.5 top-6 bottom-6 flex flex-col justify-between w-4">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-4 h-2 rounded-full bg-[#363D28]/60 border border-black/30 shadow-inner" />
                  ))}
                </div>

                {/* Sombra de lomo */}
                <div className="absolute left-6 top-0 bottom-0 w-3 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />

                {/* Header Cuaderno */}
                <div className="pt-6 space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                    <Sprout className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-xs font-serif tracking-[0.3em] uppercase text-[#363D28] block">
                      R A Í Z
                    </span>
                    <div className="w-8 h-[1px] bg-[#363D28]/40 mx-auto mt-1" />
                  </div>
                </div>

                {/* Título Central */}
                <div className="space-y-1.5 my-auto">
                  <h3 className="text-xl sm:text-2xl font-serif tracking-widest text-[#222918] font-bold">
                    BITÁCORA
                  </h3>
                  <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-[#5A6836] font-semibold">
                    TRANSFORMACIÓN CONSCIENTE
                  </p>
                </div>

                {/* Autor al pie */}
                <div className="pb-4">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#363D28]/80 font-medium">
                    ANATOLIA ZAPATA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Explicación Editorial + 2 Opciones de Compra */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Texto de introducción */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-[#222918] leading-relaxed font-normal">
                Una herramienta de <strong className="font-bold">escritura</strong> y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.
              </p>

              {/* Callout de manifiesto */}
              <div className="bg-[#F4EDE2] p-5 sm:p-6 rounded-2xl border border-[#363D28]/10 space-y-2">
                <p className="text-sm sm:text-base text-[#363D28] leading-relaxed font-medium">
                  «No necesitas tener todas las respuestas. Necesitas un espacio para escucharte, comprender tu historia y reconocer qué quieres construir.»
                </p>
                <p className="text-xs text-[#5A6836] font-bold uppercase tracking-wider">
                  — Método RAÍZ · Anatolia Zapata
                </p>
              </div>
            </div>

            {/* Dos Opciones de Compra (Física y Digital) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Opción 1: Bitácora Física */}
              <div className="bg-[#F4EDE2] rounded-2xl p-5 border border-[#363D28]/15 space-y-4 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                      <Package className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#222918]">
                      BITÁCORA FÍSICA
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl font-black text-[#222918]">
                      US$ 33
                    </div>
                    <p className="text-xs text-[#363D28]/80 mt-1">
                      Envíos a todo el Perú.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20comprar%20la%20Bit%C3%A1cora%20F%C3%ADsica%20(US$33)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#363D28] hover:bg-[#222719] text-[#FAF7F2] font-black text-xs uppercase tracking-wider py-3 px-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>COMPRAR FÍSICA →</span>
                </a>
              </div>

              {/* Opción 2: Bitácora Digital */}
              <div className="bg-[#FAF5EE] rounded-2xl p-5 border border-[#363D28]/15 space-y-4 flex flex-col justify-between shadow-xs">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#DFEC9C] flex items-center justify-center text-[#222918]">
                      <Laptop className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#222918]">
                      BITÁCORA DIGITAL
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl font-black text-[#222918]">
                      US$ 17
                    </div>
                    <p className="text-xs text-[#363D28]/80 mt-1">
                      Acceso digital inmediato. Formato PDF.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20comprar%20la%20Bit%C3%A1cora%20Digital%20(US$17)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-[#222918] hover:bg-[#222918] hover:text-white text-[#222918] font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-full inline-flex items-center justify-center gap-2 transition-all"
                >
                  <span>COMPRAR DIGITAL →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BANNER INFERIOR OLIVA: EMPIEZA POR TI. UNA PÁGINA A LA VEZ */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#5A6836] text-[#FAF7F2] py-8 sm:py-10 px-5 sm:px-8 mt-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Sprout className="w-7 h-7 text-[#DFEC9C]" />
          </div>
          <div className="space-y-1">
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Empieza por ti.{' '}
              <span className="relative inline-block">
                Una página a la vez.
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#DFEC9C] rounded-full" />
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN DETALLES: ¿QUÉ INCLUYE LA BITÁCORA? */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-24 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A6836]">
            CONTENIDO EXCLUSIVO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
            ¿Cómo te acompaña la Bitácora RAÍZ?
          </h2>
          <p className="text-sm sm:text-base text-[#363D28]/85 font-normal">
            Estructurada para ayudarte a ordenar el ruido mental y aterrizar tus reflexiones en compromisos cotidianos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F6F0E8] p-6 rounded-3xl border border-[#363D28]/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] font-black text-sm">
              01
            </div>
            <h3 className="font-bold text-lg text-[#222918]">Pausas conscientes</h3>
            <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal">
              Preguntas detonantes diseñadas para salir de la reacción automática y observar qué emoción o mandato está guiando tu día.
            </p>
          </div>

          <div className="bg-[#F6F0E8] p-6 rounded-3xl border border-[#363D28]/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] font-black text-sm">
              02
            </div>
            <h3 className="font-bold text-lg text-[#222918]">Los 5 recursos en papel</h3>
            <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal">
              Espacio para evaluar periódicamente tu perspectiva, gestión emocional, dirección, energía vital y acción consistente.
            </p>
          </div>

          <div className="bg-[#F6F0E8] p-6 rounded-3xl border border-[#363D28]/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] font-black text-sm">
              03
            </div>
            <h3 className="font-bold text-lg text-[#222918]">Plan de acción gradual</h3>
            <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal">
              Plantillas simples para convertir tus descubrimientos en acuerdos pequeños, sin sobrecargarte ni caer en el perfeccionismo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
