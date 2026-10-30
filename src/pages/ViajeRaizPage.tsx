import { useState, useMemo } from 'react';
import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Mail, MapPin, Laptop, BookOpen, Gift, Play, X, CheckCircle2, ChevronRight, HelpCircle, Target, Calendar, Sparkles, Compass } from 'lucide-react';

interface ViajeRaizPageProps {
  onNavigate: (page: PageId) => void;
}

const PROCESS_STAGES = [
  {
    number: '01',
    title: 'Comprender tu historia',
    subtitle: 'Sesiones 1 a 4',
    description: 'Revisamos los mandatos, exigencias y automatismos desde los que has estado operando para darles sentido y desactivar culpas innecesarias.',
  },
  {
    number: '02',
    title: 'Reconocer tus recursos',
    subtitle: 'Sesiones 5 a 8',
    description: 'Evaluamos tu energía vital, perspectiva, gestión emocional y límites cotidianos a través del Mapa RAÍZ y ejercicios de tu Bitácora.',
  },
  {
    number: '03',
    title: 'Elegir y construir',
    subtitle: 'Sesiones 9 a 12',
    description: 'Diseñamos acuerdos reales y sostenibles para tu vida cotidiana, profesional y familiar, alineados con la vida que verdaderamente deseas.',
  },
];

const VIAJE_FAQS = [
  {
    question: '¿Cuánto dura exactamente el programa Viaje RAÍZ?',
    answer: 'Consta de 12 sesiones individuales distribuidas a lo largo de 3 meses. Este tiempo permite profundizar sin prisa y asentar cambios reales en tu vida cotidiana.',
  },
  {
    question: '¿Las sesiones son individuales o grupales?',
    answer: 'Es un programa 100% individual y personalizado 1 a 1 con Anatolia Zapata. Todo el espacio está enfocado en tu historia, tus prioridades y tu ritmo.',
  },
  {
    question: '¿Cómo funciona la Bitácora y el Kit de Bienvenida?',
    answer: 'Si te encuentras en Perú, recibirás en tu domicilio la versión física de la Bitácora RAÍZ junto con tu Kit de Bienvenida. Si estás en el extranjero, recibirás la versión digital interactiva de la Bitácora.',
  },
  {
    question: '¿Cómo se coordinan las sesiones de inicio y cierre presenciales en Lima?',
    answer: 'Si estás en Lima, la primera y la última sesión pueden realizarse de manera presencial en Surco o Miraflores. El resto de las sesiones se realizan vía videollamada. Si estás en regiones u otro país, el proceso es 100% online.',
  },
];

const BASE_PRICE = 1200;

const BASE_INCLUSIONS = [
  '12 sesiones individuales 1 a 1 de 60 min con Anatolia Zapata',
  'Diagnóstico profundo inicial con el Mapa RAÍZ',
  'Bitácora RAÍZ (física para Perú / digital interactiva para el exterior)',
  'Kit de Bienvenida exclusivo para iniciar tu proceso (Perú)',
  'Acompañamiento reflexivo y soporte entre sesiones por WhatsApp',
  'Grabación o síntesis de acuerdos para cada una de tus 12 sesiones',
];

export default function ViajeRaizPage({ onNavigate }: ViajeRaizPageProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado del configurador adaptado exclusivamente a los 3 servicios:
  // 1. Plan Base: US$1,200 (marcado por defecto con 12 sesiones)
  // 2. Una sesión estratégica: cambia a US$1,350
  // 3. Dos sesiones de seguimiento: cambia a US$1,600
  const [addonAccion, setAddonAccion] = useState(false);
  const [addonContinuidad, setAddonContinuidad] = useState(false);

  const toggleAccion = () => {
    if (addonContinuidad) {
      setAddonContinuidad(false);
      setAddonAccion(false);
    } else {
      setAddonAccion((prev) => !prev);
    }
  };

  const toggleContinuidad = () => {
    if (!addonContinuidad) {
      setAddonContinuidad(true);
      setAddonAccion(true);
    } else {
      setAddonContinuidad(false);
      setAddonAccion(true);
    }
  };

  const handleSelectPreset = (preset: 'base' | 'accion' | 'continuidad') => {
    if (preset === 'base') {
      setAddonAccion(false);
      setAddonContinuidad(false);
    } else if (preset === 'accion') {
      setAddonAccion(true);
      setAddonContinuidad(false);
    } else if (preset === 'continuidad') {
      setAddonAccion(true);
      setAddonContinuidad(true);
    }
  };

  const currentPlan = useMemo(() => {
    if (addonContinuidad) {
      return {
        id: 'continuidad',
        name: 'Viaje RAÍZ Continuidad',
        badge: 'Continuidad y consolidación',
        price: 1600,
        breakdown: 'Base: US$1,200 + Estratégica y Seguimiento: US$400',
        description: 'Todo lo anterior + dos sesiones de seguimiento: una a los 6 meses y otra a los 12 meses.',
        ctaText: 'QUIERO SEGUIR CULTIVANDO MI RAÍZ →',
        whatsAppMessage:
          '¡Hola Anatolia! Quiero comenzar mi Viaje RAÍZ Continuidad (12 sesiones individuales + sesión estratégica + 2 sesiones de seguimiento a los 6 y 12 meses) por US$1,600. Quisiera coordinar mi agenda.',
      };
    }
    if (addonAccion) {
      return {
        id: 'accion',
        name: 'Viaje RAÍZ + Acción',
        badge: 'Experiencia ampliada',
        price: 1350,
        breakdown: 'Base: US$1,200 + Sesión estratégica: US$150',
        description: '12 sesiones individuales + una sesión estratégica para convertir tus descubrimientos en un plan de acción 10-10-10-1.',
        ctaText: 'QUIERO PASAR A LA ACCIÓN →',
        whatsAppMessage:
          '¡Hola Anatolia! Quiero comenzar mi Viaje RAÍZ + Acción (12 sesiones individuales + una sesión estratégica para plan de acción 10-10-10-1) por US$1,350. Quisiera coordinar mi agenda.',
      };
    }
    return {
      id: 'base',
      name: 'Viaje RAÍZ',
      badge: 'Marcado por defecto',
      price: 1200,
      breakdown: 'Base: US$1,200 (12 sesiones individuales)',
      description: '12 sesiones individuales para comprender tu historia y elegir qué quieres construir.',
      ctaText: 'QUIERO COMENZAR MI VIAJE RAÍZ →',
      whatsAppMessage:
        '¡Hola Anatolia! Quiero comenzar mi Viaje RAÍZ (12 sesiones individuales) por US$1,200. Quisiera coordinar mi agenda.',
    };
  }, [addonAccion, addonContinuidad]);

  const whatsAppCheckoutUrl = `https://wa.me/51940497864?text=${encodeURIComponent(currentPlan.whatsAppMessage)}`;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    fetch('https://formsubmit.co/ajax/raizanatolia@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      })
      .catch(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
      });
  };

  const handleCtaClick = () => {
    const pricingElem = document.getElementById('opciones-inversion');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF7F2] text-[#222918] font-sans min-h-screen">
      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN 1: HERO VIAJE RAÍZ (Fiel a Panel 1 de Referencia)    */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-28 pb-8 md:pt-36 md:pb-0 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-end">
          {/* Columna Izquierda: Textos y titulares */}
          <div className="md:col-span-6 lg:col-span-6 space-y-5 text-left pb-4 md:pb-12">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.2em] uppercase text-[#363D28] block mb-1">
                MÉTODO RAÍZ · ANATOLIA ZAPATA
              </span>
              <div className="w-14 h-[2px] bg-[#A18347]" />
            </div>

            {/* Título Principal con brocha verde claro / lima */}
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-[#222918] uppercase leading-none">
                VIAJE RAÍZ
              </h1>
              {/* Lime brush underline graphic effect */}
              <div className="w-full h-3 sm:h-3.5 bg-[#D3E07C] rounded-full mt-1.5 opacity-90 -skew-x-6" />
            </div>

            {/* Titular Impactante */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans text-[#222918] leading-[1.15] tracking-tight uppercase pt-2">
              ERES ADULTA Y AHORA ERES TÚ QUIEN CUIDA A QUIENES AMAS.
            </h2>

            {/* Párrafo narrativo */}
            <p className="text-base sm:text-lg text-[#363D28]/90 font-normal leading-relaxed max-w-xl">
              Jurabas que, cuando llegara ese momento, serías la máster de tu vida. La que tendría las respuestas, sabría qué hacer y tendría todo bajo control.
            </p>

            {/* Callout destacado en verde lima redondeado (exacto a la referencia) */}
            <div className="inline-block bg-[#D3E07C] text-[#222918] font-bold text-base sm:text-lg p-4 sm:p-5 rounded-2xl shadow-2xs leading-snug max-w-xl">
              Pero nadie te dijo que la adultez venía con cero manual, ¿verdad?
            </div>
          </div>

          {/* Columna Derecha: Foto de Anatolia Zapata integrada en gran tamaño */}
          <div className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-end items-end self-end">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-none flex justify-center md:justify-end">
              <img
                src={BRAND_ASSETS.heroViajeRaizImage}
                alt="Anatolia Zapata · Creadora del Método RAÍZ"
                className="w-full max-h-[520px] sm:max-h-[600px] lg:max-h-[660px] object-contain object-bottom select-none drop-shadow-sm scale-100 sm:scale-105 md:scale-110 lg:scale-115 origin-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN 2: VIDEO Y MANIFIESTO (Fiel a Panel 2 de Referencia) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-14 md:py-20 px-5 sm:px-8 bg-[#FAF7F2] border-t border-[#363D28]/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header del Video con Badge \ VIDEO / y chispas */}
          <div className="space-y-3">
            {/* Pill de \ VIDEO / */}
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-base font-bold text-[#222918] select-none -rotate-12">\</span>
              <span className="bg-[#D3E07C] text-[#222918] px-5 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xs">
                VIDEO
              </span>
              <span className="font-mono text-base font-bold text-[#222918] select-none rotate-12">/</span>
            </div>

            {/* Título con pill rosa 2 MINUTOS */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-[#222918] leading-tight">
              CONOCE VIAJE RAÍZ<br />
              <span className="inline-flex items-center gap-2.5 mt-1 justify-center flex-wrap">
                <span>EN</span>
                <span className="inline-block bg-[#FFD6E8] text-[#222918] px-5 py-1 rounded-full font-black text-2xl sm:text-3xl md:text-4xl align-middle shadow-2xs">
                  2 MINUTOS
                </span>
              </span>
            </h2>
          </div>

          {/* Card de Video interactivo con Chispas laterales */}
          <div className="relative max-w-2xl mx-auto my-4">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-[#363D28]/10 cursor-pointer bg-[#363D28] transition-transform hover:scale-[1.01]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsVideoModalOpen(true);
              }}
              aria-label="Reproducir video de presentación de Viaje RAÍZ"
            >
              {/* Imagen de preview de Anatolia con chin on hand */}
              <img
                src={BRAND_ASSETS.anatoliaSplitCard}
                alt="Presentación en video de Viaje RAÍZ con Anatolia Zapata"
                className="w-full h-72 sm:h-96 object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Botón Play central blanco limpio */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#222918] fill-[#222918] ml-1" />
                </div>
              </div>

              {/* Tag de click para ver */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="bg-[#222918]/85 text-[#FAF7F2] text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-xs">
                  Haz click para reproducir el video (2 min)
                </span>
              </div>
            </div>

            {/* Chispas decorativas a la derecha del video (//) */}
            <div className="hidden sm:block absolute -right-8 bottom-10 text-[#222918] text-xl font-mono tracking-tighter select-none font-black opacity-80">
              //
            </div>
          </div>

          {/* Manifiesto y Reflexión */}
          <div className="pt-2 max-w-2xl mx-auto space-y-4">
            {/* Destacado Verde Lima */}
            <div className="bg-[#D3E07C] text-[#222918] font-bold text-base sm:text-lg md:text-xl py-3 px-6 rounded-2xl md:rounded-full inline-block text-center shadow-2xs leading-snug">
              Creo que desarrollarte y cuidar a quienes amas no deberían ser caminos opuestos.
            </div>

            {/* Texto con pill rosa final y chispas */}
            <div className="text-base sm:text-lg text-[#363D28] leading-relaxed font-normal">
              <p>Porque una cosa es vivir reaccionando a todo lo que pasa</p>
              <div className="relative inline-flex items-center gap-2 mt-1 flex-wrap justify-center">
                <span>y otra es detenerte a pensar:</span>
                <span className="inline-block bg-[#FFD6E8] text-[#222918] font-bold px-4 py-1 rounded-full text-sm sm:text-base shadow-2xs">
                  ¿estoy eligiendo la vida que quiero construir?
                </span>
                <span className="text-[#222918] font-mono font-bold text-sm select-none">//</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN 3: ¿QUÉ PASA EN VIAJE RAÍZ? (Fiel a Panel 3 Ref)      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto border-t border-[#363D28]/10">
        <div className="text-center space-y-12">
          {/* Header de la sección con chispas */}
          <div className="relative inline-block text-center">
            {/* ¿QUE PASA EN con chispas a la derecha */}
            <div className="relative inline-flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#222918] tracking-tight">
                ¿QUE PASA EN
              </h2>
              {/* Chispas decorativas arriba a la derecha */}
              <div className="absolute -top-3 sm:-top-4 -right-9 text-[#222918] text-lg sm:text-xl font-mono tracking-tighter opacity-85 select-none font-bold">
                ///
              </div>
            </div>

            {/* VIAJE RAÍZ? dentro de bubble verde lima orgánico */}
            <div className="mt-2 block">
              <div className="inline-block bg-[#D3E07C] px-8 py-2 sm:py-2.5 rounded-[2rem] shadow-xs">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#222918] tracking-tight">
                  VIAJE RAÍZ?
                </span>
              </div>
              {/* Línea curva sutil de brocha debajo */}
              <div className="w-4/5 mx-auto h-[3px] bg-[#D3E07C] rounded-full mt-1.5 opacity-90" />
            </div>
          </div>

          {/* 3 Columnas continuas con divisores verticales (sin tarjetas cerradas) */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#363D28]/15 pt-4 max-w-5xl mx-auto items-stretch">
            {/* Columna 1: 12 SESIONES ONLINE */}
            <div className="flex flex-col items-center justify-between text-center px-4 sm:px-6 md:px-8 py-8 md:py-2 space-y-6">
              <div className="space-y-5 flex flex-col items-center w-full">
                {/* Icono circular con chispas a la izquierda */}
                <div className="relative">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#D3E07C] flex items-center justify-center shadow-xs">
                    {/* SVG Laptop lineal estilo dibujo de ref */}
                    <svg
                      className="w-11 h-11 text-[#222918]"
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="10" width="30" height="20" rx="2.5" />
                      <line x1="15" y1="26" x2="33" y2="26" strokeWidth="2" opacity="0.6" />
                      <path d="M4 34h40l-3 4H7l-3-4z" />
                      <path d="M21 34v1a1 1 0 001 1h4a1 1 0 001-1v-1" />
                    </svg>
                  </div>
                  {/* Chispas a la izquierda del icono */}
                  <div className="absolute -top-2 -left-5 text-[#222918] font-mono text-sm sm:text-base tracking-tighter opacity-80 select-none font-bold">
                    \\\
                  </div>
                </div>

                {/* Pill Titular en 2 líneas */}
                <div className="bg-[#D3E07C] text-[#222918] font-black text-sm sm:text-base uppercase tracking-wide py-2.5 px-6 rounded-full shadow-xs leading-tight min-w-[200px]">
                  12 SESIONES<br />ONLINE
                </div>

                {/* Subtexto */}
                <p className="text-sm sm:text-base text-[#363D28]/90 font-normal leading-relaxed max-w-xs">
                  Para comprenderte y elegir qué quieres construir.
                </p>
              </div>

              {/* Location Badge */}
              <div className="w-full max-w-xs bg-[#F5EEE4] text-[#363D28] text-xs font-medium py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs border border-[#363D28]/10 text-left">
                <span className="w-4 h-4 rounded-full bg-[#363D28] flex items-center justify-center text-[#F5EEE4] shrink-0">
                  <MapPin className="w-2.5 h-2.5 fill-current" />
                </span>
                <span className="leading-snug">Si estás en Lima: 1 sesión de inicio y cierre presencial (Surco o Miraflores).</span>
              </div>
            </div>

            {/* Columna 2: TU BITÁCORA. TU HISTORIA. */}
            <div className="flex flex-col items-center justify-between text-center px-4 sm:px-6 md:px-8 py-8 md:py-2 space-y-6">
              <div className="space-y-5 flex flex-col items-center w-full">
                {/* Icono circular */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#D3E07C] flex items-center justify-center shadow-xs">
                  {/* SVG Cuaderno con espiral y líneas */}
                  <svg
                    className="w-11 h-11 text-[#222918]"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="13" y="7" width="26" height="34" rx="3" />
                    {/* Anillos espiral */}
                    <line x1="9" y1="12" x2="16" y2="12" strokeWidth="2.5" />
                    <line x1="9" y1="18" x2="16" y2="18" strokeWidth="2.5" />
                    <line x1="9" y1="24" x2="16" y2="24" strokeWidth="2.5" />
                    <line x1="9" y1="30" x2="16" y2="30" strokeWidth="2.5" />
                    <line x1="9" y1="36" x2="16" y2="36" strokeWidth="2.5" />
                    {/* Líneas de texto */}
                    <line x1="20" y1="14" x2="33" y2="14" strokeWidth="2" />
                    <line x1="20" y1="20" x2="33" y2="20" strokeWidth="2" />
                    <line x1="20" y1="26" x2="33" y2="26" strokeWidth="2" />
                    <line x1="20" y1="32" x2="28" y2="32" strokeWidth="2" />
                  </svg>
                </div>

                {/* Pill Titular en 2 líneas */}
                <div className="bg-[#D3E07C] text-[#222918] font-black text-sm sm:text-base uppercase tracking-wide py-2.5 px-6 rounded-full shadow-xs leading-tight min-w-[200px]">
                  TU BITÁCORA.<br />TU HISTORIA.
                </div>

                {/* Subtexto */}
                <p className="text-sm sm:text-base text-[#363D28]/90 font-normal leading-relaxed max-w-xs">
                  Un espacio para poner en papel lo que descubres, ordenar tus ideas y llevar tus aprendizajes a la vida cotidiana.
                </p>

                {/* Botón para conocer la Bitácora */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      window.location.hash = '#/bitacora-raiz';
                      onNavigate('bitacora-raiz');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#222918] text-[#FAF7F2] hover:bg-[#5A6836] transition-all shadow-2xs"
                  >
                    <span>Conocer la Bitácora</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="w-full max-w-xs bg-[#F5EEE4] text-[#363D28] text-xs font-medium py-2.5 px-4 rounded-full text-center shadow-xs border border-[#363D28]/10 leading-snug">
                Perú: versión física.<br className="hidden sm:inline" /> Fuera de Perú: versión virtual.
              </div>
            </div>

            {/* Columna 3: TU KIT DE BIENVENIDA. */}
            <div className="flex flex-col items-center justify-between text-center px-4 sm:px-6 md:px-8 py-8 md:py-2 space-y-6">
              <div className="space-y-5 flex flex-col items-center w-full">
                {/* Icono circular */}
                <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#D3E07C] flex items-center justify-center shadow-xs">
                  {/* SVG Caja de regalo con lazo */}
                  <svg
                    className="w-11 h-11 text-[#222918]"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="10" y="20" width="28" height="20" rx="1.5" />
                    <rect x="7" y="14" width="34" height="6" rx="1.5" />
                    <line x1="24" y1="14" x2="24" y2="40" />
                    {/* Moño / lazo */}
                    <path d="M24 14c-2.5-4-8-5.5-9.5-2.5-1.8 3.5 4.5 6 9.5 2.5z" />
                    <path d="M24 14c2.5-4 8-5.5 9.5-2.5 1.8 3.5-4.5 6-9.5 2.5z" />
                  </svg>
                </div>

                {/* Pill Titular en 2 líneas */}
                <div className="bg-[#D3E07C] text-[#222918] font-black text-sm sm:text-base uppercase tracking-wide py-2.5 px-6 rounded-full shadow-xs leading-tight min-w-[200px]">
                  TU KIT DE<br />BIENVENIDA.
                </div>

                {/* Subtexto */}
                <p className="text-sm sm:text-base text-[#363D28]/90 font-normal leading-relaxed max-w-xs">
                  Porque empezar un viaje también merece algo especial.
                </p>
              </div>

              {/* Location Badge */}
              <div className="w-full max-w-xs bg-[#F5EEE4] text-[#363D28] text-xs font-medium py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-xs border border-[#363D28]/10">
                <span className="w-4 h-4 rounded-full bg-[#363D28] flex items-center justify-center text-[#F5EEE4] shrink-0">
                  <MapPin className="w-2.5 h-2.5 fill-current" />
                </span>
                <span>Solo en Perú.</span>
              </div>
            </div>
          </div>

          {/* Botón CTA inferior con Chispas */}
          <div className="relative inline-block pt-6">
            <button
              type="button"
              onClick={handleCtaClick}
              className="bg-[#54662E] hover:bg-[#3D4C1F] text-[#FAF7F2] font-black text-sm sm:text-base md:text-lg uppercase tracking-wider px-10 py-4 sm:py-4.5 rounded-full inline-flex items-center gap-2.5 shadow-md hover:shadow-lg transition-all"
            >
              <span>QUIERO VIAJAR A LA RAÍZ</span>
              <span aria-hidden="true" className="font-sans text-xl">→</span>
            </button>
            {/* Chispas decorativas a la derecha del botón */}
            <div className="hidden sm:block absolute -top-4 -right-9 text-[#222918] font-mono text-lg sm:text-xl tracking-tighter opacity-80 select-none font-bold">
              ///
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN 4: OPCIONES DE INVERSIÓN (Formato Interactivo Toggle)  */}
      {/* ------------------------------------------------------------- */}
      <section id="opciones-inversion" className="py-16 md:py-24 px-5 sm:px-8 max-w-6xl mx-auto scroll-mt-12">
        {/* Encabezado Principal fiel a Referencia */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-block bg-[#EAE4D7] text-[#363D28] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full shadow-2xs">
            Arma tu experiencia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#222918] tracking-tight leading-tight">
            Solo paga por lo que necesitas
          </h2>
          <p className="text-sm sm:text-base text-[#363D28]/85 leading-relaxed font-normal">
            Empieza con el programa base individual y activa los módulos de acción y seguimiento según lo que buscas. Total flexibilidad, a tu ritmo.
          </p>

          {/* Selector de paquetes predeterminados rápidos */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs font-bold uppercase text-[#363D28]/70 mr-1">
              Planes:
            </span>
            <button
              type="button"
              onClick={() => handleSelectPreset('base')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                !addonAccion && !addonContinuidad
                  ? 'bg-[#222918] text-[#FAF7F2] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#363D28] border border-[#222918]/15'
              }`}
            >
              Viaje RAÍZ (US$1,200)
            </button>
            <button
              type="button"
              onClick={() => handleSelectPreset('accion')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                addonAccion && !addonContinuidad
                  ? 'bg-[#222918] text-[#FAF7F2] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#363D28] border border-[#222918]/15'
              }`}
            >
              Viaje + Acción (US$1,350)
            </button>
            <button
              type="button"
              onClick={() => handleSelectPreset('continuidad')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                addonContinuidad
                  ? 'bg-[#222918] text-[#FAF7F2] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#363D28] border border-[#222918]/15'
              }`}
            >
              Viaje Continuidad (US$1,600)
            </button>
          </div>
        </div>

        {/* Layout en 2 Columnas fiel a image_3a0f40b8.png adaptado a los 3 servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna Izquierda: Los 3 Servicios con Switch Interactivo */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#222918] tracking-tight">
                Servicios del programa
              </h3>
              <p className="text-xs sm:text-sm text-[#363D28]/70 mt-1">
                El plan base de 12 sesiones está activo por defecto. Marca las opciones de acción o seguimiento para actualizar tu inversión.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Servicio 1: Plan Base (Marcado por defecto, siempre activo) */}
              <div className="p-4 sm:p-5 rounded-2xl border bg-white border-[#222918] shadow-xs flex items-center justify-between gap-4 select-none">
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#222918] text-[#FAF7F2]">
                    <CheckCircle2 className="w-5 h-5 text-[#D3E07C]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-[#222918] text-sm sm:text-base leading-snug">
                        Viaje RAÍZ (12 sesiones individuales)
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#D3E07C] text-[#222918]">
                        Marcado por defecto
                      </span>
                    </div>
                    <p className="text-xs text-[#363D28]/75 leading-relaxed font-normal">
                      12 sesiones individuales para comprender tu historia y elegir qué quieres construir.
                    </p>
                    <div className="text-xs font-bold text-[#54662E] pt-0.5">
                      US$1,200 · Base del programa
                    </div>
                  </div>
                </div>

                {/* Switch activo bloqueado (representa que viene por defecto) */}
                <div className="shrink-0 pl-2">
                  <div
                    aria-label="Plan base activo por defecto"
                    className="relative inline-flex h-7 w-12 shrink-0 cursor-default rounded-full p-0.5 bg-[#222918]"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-6 w-6 transform rounded-full bg-white shadow-md translate-x-5 transition duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Servicio 2: Una sesión estratégica para plan de acción 10-10-10-1 */}
              <div
                onClick={toggleAccion}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 select-none ${
                  addonAccion
                    ? 'bg-white border-[#222918] shadow-sm ring-1 ring-[#222918]/20'
                    : 'bg-white/60 hover:bg-white border-[#222918]/10 hover:border-[#222918]/25'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      addonAccion
                        ? 'bg-[#222918] text-[#FAF7F2]'
                        : 'bg-[#ECE6DA] text-[#363D28]'
                    }`}
                  >
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-[#222918] text-sm sm:text-base leading-snug">
                        Una sesión estratégica para plan de acción
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAE4D7] text-[#363D28]">
                        Experiencia ampliada
                      </span>
                    </div>
                    <p className="text-xs text-[#363D28]/75 leading-relaxed font-normal">
                      Una sesión estratégica para convertir tus descubrimientos en un plan de acción 10-10-10-1.
                    </p>
                    <div className="text-xs font-bold text-[#54662E] pt-0.5">
                      +US$150 · Cambia a US$1,350
                    </div>
                  </div>
                </div>

                {/* Switch Toggle */}
                <div className="shrink-0 pl-2">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={addonAccion}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAccion();
                    }}
                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#54662E] focus:ring-offset-2 ${
                      addonAccion ? 'bg-[#222918]' : 'bg-[#D6CFC2]'
                    }`}
                    aria-label="Activar sesión estratégica"
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        addonAccion ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Servicio 3: Dos sesiones de seguimiento */}
              <div
                onClick={toggleContinuidad}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 select-none ${
                  addonContinuidad
                    ? 'bg-white border-[#222918] shadow-sm ring-1 ring-[#222918]/20'
                    : 'bg-white/60 hover:bg-white border-[#222918]/10 hover:border-[#222918]/25'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      addonContinuidad
                        ? 'bg-[#222918] text-[#FAF7F2]'
                        : 'bg-[#ECE6DA] text-[#363D28]'
                    }`}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-[#222918] text-sm sm:text-base leading-snug">
                        Dos sesiones de seguimiento (6 y 12 meses)
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAE4D7] text-[#363D28]">
                        Continuidad
                      </span>
                    </div>
                    <p className="text-xs text-[#363D28]/75 leading-relaxed font-normal">
                      Todo lo anterior + dos sesiones de seguimiento: una a los 6 meses y otra a los 12 meses.
                    </p>
                    <div className="text-xs font-bold text-[#54662E] pt-0.5">
                      Cambia a US$1,600
                    </div>
                  </div>
                </div>

                {/* Switch Toggle */}
                <div className="shrink-0 pl-2">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={addonContinuidad}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleContinuidad();
                    }}
                    className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#54662E] focus:ring-offset-2 ${
                      addonContinuidad ? 'bg-[#222918]' : 'bg-[#D6CFC2]'
                    }`}
                    aria-label="Activar dos sesiones de seguimiento"
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                        addonContinuidad ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Resumen en Tiempo Real */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#222918]/15 shadow-md space-y-6">
              {/* Encabezado del Resumen */}
              <div className="space-y-1.5 border-b border-[#222918]/10 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#222918]">
                    Tu plan seleccionado
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#D3E07C] text-[#222918]">
                    {currentPlan.badge}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-[#222918]">
                  {currentPlan.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#363D28]/75 leading-relaxed">
                  {currentPlan.description}
                </p>
              </div>

              {/* Precio Dinámico Grande */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#222918]">US$</span>
                  <span className="text-5xl sm:text-6xl font-black text-[#222918] tracking-tight transition-all duration-300">
                    {currentPlan.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#363D28]/75 mt-1.5">
                  <span>{currentPlan.breakdown}</span>
                </div>
              </div>

              {/* Botón de Acción Principal a WhatsApp con el plan configurado */}
              <div>
                <a
                  href={whatsAppCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#111111] hover:bg-[#363D28] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-full inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all text-center group"
                >
                  <span>{currentPlan.ctaText}</span>
                  <span className="text-base group-hover:translate-x-0.5 transition-transform" aria-hidden="true">↗</span>
                </a>
                <p className="text-[11px] text-[#363D28]/60 text-center mt-2">
                  Conversa directamente con Anatolia para coordinar inicio y agenda.
                </p>
              </div>

              {/* Sección Siempre Incluido con Checkmarks Circulares */}
              <div className="border-t border-[#222918]/10 pt-5 space-y-3.5">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#222918]">
                  Siempre incluido en tu programa:
                </h5>
                <ul className="space-y-2.5">
                  {BASE_INCLUSIONS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#363D28]/90">
                      <span className="w-4 h-4 rounded-full bg-[#222918] flex items-center justify-center text-white shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN 5: FORMULARIO DE CONSULTA & FAQ */}
      {/* ------------------------------------------------------------- */}
      <section id="contacto-viaje" className="py-16 md:py-24 px-5 sm:px-8 max-w-5xl mx-auto space-y-16">
        {/* Formulario de Consulta Directa */}
        <div className="bg-[#222918] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Texto de invitación */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8E488]">
                CONVERSA CON ANATOLIA ZAPATA
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
                ¿Sientes que es tu momento para viajar a la raíz?
              </h3>
              <p className="text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
                Completa tus datos para agendar una breve llamada de valoración directa y revisar la disponibilidad de cupos para tu acompañamiento individual.
              </p>
            </div>

            {/* Formulario FormSubmit */}
            <div className="md:col-span-7 bg-[#FAF5EE] text-[#222918] p-6 sm:p-8 rounded-2xl">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-[#D8E488] rounded-full flex items-center justify-center mx-auto text-[#222918]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold uppercase">¡Mensaje enviado con éxito!</h4>
                  <p className="text-sm text-[#363D28]/80 max-w-sm mx-auto">
                    Anatolia responderá personalmente a tu correo a la brevedad posible para coordinar nuestra primera conversación.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="Nueva consulta de Viaje RAÍZ desde la web" />
                  <input type="hidden" name="origen" value="Viaje RAÍZ Sublanding Page" />

                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1">
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Ej. Maria Elena"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-[#363D28] mb-1">
                      ¿Qué te motiva a realizar este proceso hoy?
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      required
                      placeholder="Cuéntame brevemente sobre tu momento actual..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#363D28]/20 focus:outline-none focus:ring-2 focus:ring-[#5A6836] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5A6836] hover:bg-[#222719] text-[#FAF7F2] font-bold uppercase tracking-wider py-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Enviando consulta...</span>
                    ) : (
                      <>
                        <Mail className="w-4 h-4" />
                        <span>Enviar consulta sobre Viaje RAÍZ</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#222918]">
              Preguntas Frecuentes
            </h3>
            <p className="text-sm text-[#363D28]/80">
              Respuestas claras para tomar la decisión con tranquilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VIAJE_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EE] p-6 rounded-2xl border border-[#363D28]/12 space-y-2"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#5A6836] shrink-0 mt-0.5" />
                  <h4 className="font-bold text-[#222918] text-base">
                    {faq.question}
                  </h4>
                </div>
                <p className="text-sm text-[#363D28]/85 leading-relaxed font-normal pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MODAL DE VIDEO PRESENTACIÓN DE VIAJE RAÍZ */}
      {/* ------------------------------------------------------------- */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-[#FAF5EE] rounded-3xl overflow-hidden shadow-2xl border border-[#363D28]/20">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#363D28]/10 bg-[#F6F0E8]">
              <div className="flex items-center gap-2">
                <span className="bg-[#D8E488] text-[#222918] text-xs font-bold px-3 py-1 rounded-full uppercase">
                  PRESENTACIÓN EN VIDEO
                </span>
                <span className="text-sm font-bold text-[#222918]">Conoce Viaje RAÍZ (2 min)</span>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
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
                  src={BRAND_ASSETS.anatoliaSplitCard}
                  alt="Anatolia Zapata"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white space-y-3">
                  <div className="w-16 h-16 bg-[#D8E488] rounded-full flex items-center justify-center text-[#222918] shadow-lg">
                    <Play className="w-8 h-8 fill-[#222918] ml-1" />
                  </div>
                  <p className="text-base sm:text-lg font-bold max-w-md">
                    «Creo que desarrollarte y cuidar a quienes amas no deberían ser caminos opuestos.»
                  </p>
                  <p className="text-xs text-white/80 font-mono">
                    Anatolia Zapata · Creadora del Método RAÍZ
                  </p>
                </div>
              </div>

              <div className="text-center space-y-3 max-w-xl mx-auto">
                <p className="text-sm text-[#363D28]/90 font-normal leading-relaxed">
                  En este breve video de 2 minutos, Anatolia comparte cómo nació el programa Viaje RAÍZ y por qué está diseñado especialmente para mujeres que deciden dejar de vivir reaccionando y empezar a elegir conscientemente su camino.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    handleCtaClick();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5A6836] text-[#FAF7F2] font-bold text-xs uppercase tracking-wider hover:bg-[#222719] transition-all"
                >
                  <span>Conversar sobre Viaje RAÍZ</span>
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
