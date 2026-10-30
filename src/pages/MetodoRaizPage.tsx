import { useState } from 'react';
import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Play, X, Compass, Heart, Sun, BarChart3, Sprout, ChevronRight } from 'lucide-react';

interface MetodoRaizPageProps {
  onNavigate: (page: PageId) => void;
}

export default function MetodoRaizPage({ onNavigate }: MetodoRaizPageProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleNavigateMapa = () => {
    window.location.hash = '#/mapa-raiz';
    onNavigate('mapa-raiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 md:pt-36 pb-0">
      {/* ------------------------------------------------------------- */}
      {/* HERO: TUS DECISIONES TAMBIÉN TIENEN RAÍZ. (Referencia Pestaña 2) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 text-center space-y-8 md:space-y-12">
        {/* Titular Principal con Chispas y Destacado Verde Lima */}
        <div className="relative inline-block text-center max-w-3xl mx-auto">
          {/* Fila 1: Tus decisiones */}
          <div className="relative inline-flex items-center justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#222918]">
              Tus decisiones
            </h1>
            {/* Chispas decorativas arriba a la derecha */}
            <div className="absolute -top-3 -right-8 sm:-right-10 text-[#222918] text-lg sm:text-2xl font-mono tracking-tighter select-none font-bold">
              ///
            </div>
          </div>

          {/* Fila 2: también tienen RAÍZ. */}
          <div className="mt-1 sm:mt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#222918]">
              también tienen
            </span>
            <div className="inline-block bg-[#DFEC9C] px-4 sm:px-6 py-1 sm:py-2 rounded-2xl shadow-xs">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#222918]">
                RAÍZ.
              </span>
            </div>
          </div>
        </div>

        {/* Card de Video Central con Foto de Anatolia Zapata */}
        <div className="relative max-w-2xl mx-auto">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="group relative rounded-3xl overflow-hidden shadow-md border border-[#363D28]/12 cursor-pointer bg-[#363D28] transition-transform hover:scale-[1.01]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setIsVideoOpen(true);
            }}
            aria-label="Reproducir video explicativo del Método RAÍZ en 3 minutos"
          >
            {/* Imagen de vista previa de Anatolia */}
            <img
              src={BRAND_ASSETS.anatoliaHeroHorizontal}
              alt="Anatolia Zapata - Método RAÍZ"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-center opacity-95 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Botón Play central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#5A6836]/90 group-hover:bg-[#5A6836] text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
              </div>
            </div>
          </div>

          {/* Texto explicativo debajo del video */}
          <div className="relative mt-4 sm:mt-6 text-center max-w-xl mx-auto px-4">
            <p className="text-sm sm:text-base md:text-lg text-[#363D28] font-medium leading-snug">
              Entiende el Método RAÍZ en 3 minutos y descubre cómo comprender lo que influye en tus decisiones para elegir con mayor conciencia.
            </p>
            {/* Chispas a la derecha del texto */}
            <div className="hidden sm:block absolute -right-6 bottom-0 text-[#222918] text-lg font-mono tracking-tighter opacity-80 select-none font-bold">
              ///
            </div>
          </div>
        </div>

        {/* Callout Pill Beige / Almendra */}
        <div className="max-w-3xl mx-auto bg-[#F4EDE2] text-[#222918] font-bold text-base sm:text-lg md:text-xl p-5 sm:p-6 rounded-[2.5rem] shadow-xs leading-snug text-center border border-[#363D28]/10">
          ¿Te has sentido en piloto automático, haciendo de todo para todos, menos lo que realmente quieres?
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN: LOS 5 RECURSOS QUE EXPLORA EL MÉTODO RAÍZ */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto mt-12 md:mt-20 border-t border-[#363D28]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Lado Izquierdo: Titular */}
          <div className="lg:col-span-4 text-left space-y-2">
            <div className="relative inline-block">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#222918] leading-tight">
                Los 5 recursos<br />
                que explora el<br />
                Método RAÍZ
              </h2>
              {/* Underline verde lima */}
              <div className="w-full h-2.5 bg-[#DFEC9C] rounded-full mt-1" />
            </div>
          </div>

          {/* Lado Derecho: 5 Columnas de Recursos con Iconos */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            {/* Recurso 1: Perspectiva */}
            <div className="flex flex-col items-center space-y-2 bg-[#F6F0E8] p-4 rounded-2xl border border-[#363D28]/8">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
                <Sprout className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#222918] pt-1">
                Perspectiva
              </h3>
              <p className="text-xs text-[#363D28]/85 font-normal leading-tight">
                Cómo interpretas lo que sucede.
              </p>
            </div>

            {/* Recurso 2: Gestión emocional */}
            <div className="flex flex-col items-center space-y-2 bg-[#F6F0E8] p-4 rounded-2xl border border-[#363D28]/8">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#222918] pt-1">
                Gestión emocional
              </h3>
              <p className="text-xs text-[#363D28]/85 font-normal leading-tight">
                Cómo reconoces y gestionas lo que sientes.
              </p>
            </div>

            {/* Recurso 3: Dirección */}
            <div className="flex flex-col items-center space-y-2 bg-[#F6F0E8] p-4 rounded-2xl border border-[#363D28]/8">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#222918] pt-1">
                Dirección
              </h3>
              <p className="text-xs text-[#363D28]/85 font-normal leading-tight">
                Qué valoras y hacia dónde quieres ir.
              </p>
            </div>

            {/* Recurso 4: Energía vital */}
            <div className="flex flex-col items-center space-y-2 bg-[#F6F0E8] p-4 rounded-2xl border border-[#363D28]/8">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#222918] pt-1">
                Energía vital
              </h3>
              <p className="text-xs text-[#363D28]/85 font-normal leading-tight">
                Cómo cuidas tu energía y recuperación.
              </p>
            </div>

            {/* Recurso 5: Acción consistente */}
            <div className="flex flex-col items-center space-y-2 bg-[#F6F0E8] p-4 rounded-2xl border border-[#363D28]/8 col-span-2 sm:col-span-1">
              <div className="w-12 h-12 rounded-full bg-[#DFEC9C] flex items-center justify-center text-[#222918] shadow-2xs">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[#222918] pt-1">
                Acción consistente
              </h3>
              <p className="text-xs text-[#363D28]/85 font-normal leading-tight">
                Cómo llevas tus decisiones a la práctica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BANNER INFERIOR VERDE OLIVA: QUIERO MI MAPA RAÍZ (PEGADO AL FOOTER) */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#5A6836] text-[#FAF7F2] py-8 sm:py-10 px-5 sm:px-8 mt-16 sm:mt-24 mb-0 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Lado Izquierdo: Icono Hoja + Mensaje */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sprout className="w-7 h-7 text-[#DFEC9C]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                No tienes que tenerlo todo claro para empezar.
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/85 font-light">
                Empieza por comprenderte y decidir qué quieres construir.
              </p>
            </div>
          </div>

          {/* Lado Derecho: Botón Blanco con Chispas */}
          <div className="relative inline-block shrink-0">
            <button
              type="button"
              onClick={handleNavigateMapa}
              className="bg-white hover:bg-[#DFEC9C] text-[#222918] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>QUIERO MI MAPA RAÍZ</span>
              <span aria-hidden="true" className="font-sans text-lg">→</span>
            </button>
            {/* Chispas a la derecha */}
            <div className="hidden sm:block absolute -top-3 -right-6 text-white text-base font-mono tracking-tighter opacity-80 select-none font-bold">
              ///
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MODAL VIDEO EXPLICATIVO (3 MIN) */}
      {/* ------------------------------------------------------------- */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl overflow-hidden shadow-2xl border border-[#363D28]/20">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#363D28]/10 bg-[#F6F0E8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#DFEC9C] text-[#222918] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  MÉTODO RAÍZ EN 3 MINUTOS
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="w-9 h-9 rounded-full bg-[#363D28]/10 hover:bg-[#363D28]/20 flex items-center justify-center text-[#222918] transition-all"
                aria-label="Cerrar video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido del Video */}
            <div className="p-6 sm:p-8 text-center space-y-6">
              <div className="relative rounded-2xl overflow-hidden bg-[#222918] aspect-video flex items-center justify-center shadow-inner">
                <img
                  src={BRAND_ASSETS.anatoliaHeroHorizontal}
                  alt="Anatolia Zapata"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white space-y-3">
                  <div className="w-16 h-16 bg-[#DFEC9C] rounded-full flex items-center justify-center text-[#222918] shadow-lg">
                    <Play className="w-8 h-8 fill-[#222918] ml-1" />
                  </div>
                  <p className="text-base sm:text-lg font-bold max-w-md">
                    «Comprender lo que influye en tus decisiones para elegir con mayor conciencia.»
                  </p>
                  <p className="text-xs text-white/80 font-mono">
                    Anatolia Zapata · Creadora del Método RAÍZ
                  </p>
                </div>
              </div>

              <div className="text-center space-y-3 max-w-xl mx-auto">
                <p className="text-sm text-[#363D28]/90 font-normal leading-relaxed">
                  Descubre cómo el Método RAÍZ te brinda claridad para reconocer tus 5 recursos esenciales y tomar decisiones cotidianas en verdadera coherencia contigo.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoOpen(false);
                    handleNavigateMapa();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A6836] text-[#FAF7F2] font-bold text-xs uppercase tracking-wider hover:bg-[#222719] transition-all"
                >
                  <span>Realizar mi Mapa RAÍZ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
