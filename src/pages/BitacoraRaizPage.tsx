import { PageId } from '../data/content';
import { Package, Laptop, Sprout } from 'lucide-react';

interface BitacoraRaizPageProps {
  onNavigate: (page: PageId) => void;
}

export default function BitacoraRaizPage({ onNavigate }: BitacoraRaizPageProps) {
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const bitacoraImg = `${cleanBase}assets/cards/bitacora_mockup_clean.png`;

  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 pb-16 md:pt-36 md:pb-24">
      {/* ------------------------------------------------------------- */}
      {/* HERO CARD BITÁCORA RAÍZ (Fiel a Imagen 3 de Referencia)       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Contenedor Superior Blanco/Marfil con Borde y Barra Oliva pegada al pie */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-[#222918]/10 shadow-lg overflow-hidden">
          <div className="p-6 sm:p-10 lg:p-12 text-center">
            {/* Eyebrow Pill */}
            <div className="inline-block bg-[#EFE9DF] text-[#363D28] font-bold text-xs sm:text-sm px-6 py-2 rounded-full uppercase tracking-wider mb-4 shadow-2xs">
              BITÁCORA RAÍZ
            </div>

            {/* Titular con chispas / rayos en "ti." */}
            <div className="relative inline-flex items-center justify-center mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#222918]">
                Un espacio para volver a ti.
              </h1>
              {/* Rayos verdes dibujados estilo boceto */}
              <div className="absolute -top-3.5 sm:-top-5 -right-6 sm:-right-8 text-[#54662E] font-mono text-xl sm:text-2xl select-none font-bold tracking-tight">
                \ | /
              </div>
            </div>

            {/* Grid 2 Columnas: Foto Mockup Cuaderno + Textos y Precios */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              {/* Columna Izquierda: Foto Mockup de la Bitácora */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#222918]/10 bg-[#FAF7F2]">
                  <img
                    src={bitacoraImg}
                    alt="Bitácora RAÍZ · Transformación Consciente por Anatolia Zapata"
                    className="w-full h-auto object-cover select-none"
                  />
                </div>
              </div>

              {/* Columna Derecha: Explicación Editorial + 2 Cards de Precios */}
              <div className="md:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-[#222918] leading-relaxed font-normal">
                  Una herramienta de <strong className="font-bold">escritura</strong> y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.
                </p>

                {/* Grid 2 Opciones de Compra: Física y Digital */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Card 1: BITÁCORA FÍSICA */}
                  <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#222918]/10 space-y-4 flex flex-col justify-between shadow-2xs text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-[#54662E]" />
                        <span className="text-xs font-black uppercase tracking-wider text-[#222918]">
                          BITÁCORA FÍSICA
                        </span>
                      </div>

                      <div>
                        <div className="text-3xl font-black text-[#222918]">
                          US$ 33
                        </div>
                        <p className="text-xs text-[#363D28]/85 mt-1 font-medium">
                          Envíos a todo el Perú.
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20comprar%20la%20Bit%C3%A1cora%20F%C3%ADsica%20(US$33)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#54662E] hover:bg-[#3D4C1F] text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-2xs text-center"
                    >
                      <span>COMPRAR FÍSICA →</span>
                    </a>
                  </div>

                  {/* Card 2: BITÁCORA DIGITAL */}
                  <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#222918]/10 space-y-4 flex flex-col justify-between shadow-2xs text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Laptop className="w-5 h-5 text-[#54662E]" />
                        <span className="text-xs font-black uppercase tracking-wider text-[#222918]">
                          BITÁCORA DIGITAL
                        </span>
                      </div>

                      <div>
                        <div className="text-3xl font-black text-[#222918]">
                          US$ 17
                        </div>
                        <p className="text-xs text-[#363D28]/85 mt-1 font-medium">
                          Acceso digital inmediato. Formato PDF.
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/51940497864?text=Hola%20Anatolia,%20quiero%20comprar%20la%20Bit%C3%A1cora%20Digital%20(US$17)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white hover:bg-[#222918] hover:text-white border-2 border-[#222918] text-[#222918] font-black text-xs uppercase tracking-wider py-3 px-4 rounded-full inline-flex items-center justify-center gap-2 transition-all text-center"
                    >
                      <span>COMPRAR DIGITAL →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Barra Verde Oliva Pegada al Pie del Contenedor */}
          <div className="bg-[#54662E] text-white py-4 sm:py-4.5 px-6 sm:px-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center">
            <Sprout className="w-6 h-6 text-[#D3E07C] shrink-0" />
            <div className="hidden sm:block w-[1.5px] h-5 bg-white/30" />
            <p className="text-base sm:text-lg font-bold tracking-tight text-white">
              Empieza por ti.{' '}
              <span className="relative inline-block ml-1">
                Una página a la vez.
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#D3E07C]" viewBox="0 0 100 8" preserveAspectRatio="none" fill="none">
                  <path d="M0 6 Q 50 1, 100 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </p>
          </div>
        </div>

        {/* Card Manifiesto Inferior (Segunda caja en Imagen 3 de Referencia) */}
        <div className="mt-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-[#222918]/10 shadow-sm space-y-4 text-left">
          <p className="text-base sm:text-lg text-[#222918] font-normal leading-relaxed">
            No necesitas tener todas las respuestas. Necesitas un espacio para escucharte, comprender tu historia y reconocer qué quieres construir.
          </p>
          <p className="text-base sm:text-lg text-[#222918] font-normal leading-relaxed">
            La <strong className="font-bold">Bitácora RAÍZ</strong> es una herramienta de escritura y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.
          </p>
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
            <div className="w-10 h-10 rounded-full bg-[#D3E07C] flex items-center justify-center text-[#222918] font-black text-sm">
              01
            </div>
            <h3 className="font-bold text-lg text-[#222918]">Pausas conscientes</h3>
            <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal">
              Preguntas detonantes diseñadas para salir de la reacción automática y observar qué emoción o mandato está guiando tu día.
            </p>
          </div>

          <div className="bg-[#F6F0E8] p-6 rounded-3xl border border-[#363D28]/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#D3E07C] flex items-center justify-center text-[#222918] font-black text-sm">
              02
            </div>
            <h3 className="font-bold text-lg text-[#222918]">Los 5 recursos en papel</h3>
            <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal">
              Espacio para evaluar periódicamente tu perspectiva, gestión emocional, dirección, energía vital y acción consistente.
            </p>
          </div>

          <div className="bg-[#F6F0E8] p-6 rounded-3xl border border-[#363D28]/10 space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#D3E07C] flex items-center justify-center text-[#222918] font-black text-sm">
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
