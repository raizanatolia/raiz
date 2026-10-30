import { useState, useMemo } from 'react';
import { PageId } from '../data/content';
import { BRAND_ASSETS } from '../data/images';
import { Play, X, Search, Sparkles, ExternalLink, Sprout, ArrowUpRight, Youtube, CheckCircle2 } from 'lucide-react';

interface CursosRetosPageProps {
  onNavigate: (page: PageId) => void;
}

interface VideoItem {
  id: string;
  youtubeUrl: string;
  title: string;
  description: string;
  category: 'reto' | 'disciplina' | 'herramientas';
  categoryLabel: string;
  duration?: string;
  dayNumber?: string;
}

const YOUTUBE_VIDEOS: VideoItem[] = [
  {
    id: 'Ofdd5Xm3NMU',
    youtubeUrl: 'https://youtu.be/Ofdd5Xm3NMU?si=XUWEmwVLpw9zpRnZ',
    title: 'De CAOS a CALMA - Cómo recuperar el Control cuando el estrés te supera',
    description: 'Día 6 del Reto del Estrés a la Calma. Herramientas de regulación del sistema nervioso y retorno a tu centro.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '45:26',
    dayNumber: 'Día 6',
  },
  {
    id: '1VXnzir_KpI',
    youtubeUrl: 'https://youtu.be/1VXnzir_KpI?si=mfHrSwCw0qcjuZ6l',
    title: 'El truco de la PAUSA - Haz ESTO antes de responder (y evita el estrés)',
    description: 'Día 5 del Reto del Estrés a la Calma. Cómo crear un espacio entre el estímulo y tu respuesta cotidiana.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '27:48',
    dayNumber: 'Día 5',
  },
  {
    id: 'aWK6cgdQWXw',
    youtubeUrl: 'https://youtu.be/aWK6cgdQWXw?si=VTlmHdF0TZHneJiw',
    title: 'Esto lo cambia TODO - La Ecuación que cambiará tu vida: Causa sobre Efecto',
    description: 'Día 4 del Reto del Estrés a la Calma. Pasa de reaccionar a las circunstancias a liderar tus elecciones.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '29:09',
    dayNumber: 'Día 4',
  },
  {
    id: '_UQrdHIaHeM',
    youtubeUrl: 'https://youtu.be/_UQrdHIaHeM?si=kxEBxW2ytbTNPGn6',
    title: 'Hackea tu Cerebro - El interruptor mental que apaga el caos en minutos',
    description: 'Día 3 del Reto del Estrés a la Calma. Neurociencia práctica para desacelerar la mente sobreexigida.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '38:28',
    dayNumber: 'Día 3',
  },
  {
    id: 'HDR1q2YGzn4',
    youtubeUrl: 'https://youtu.be/HDR1q2YGzn4?si=HsKuVkvFNjVMHeBu',
    title: 'Suelta la Carga - Enfócate en lo que SÍ puedes controlar',
    description: 'Día 2 del Reto del Estrés a la Calma. Soltar la culpa y gestionar la carga mental cotidiana.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '30:33',
    dayNumber: 'Día 2',
  },
  {
    id: 'jTrD0f4JglA',
    youtubeUrl: 'https://youtu.be/jTrD0f4JglA?si=PkNDYA0mu3_PzSnD',
    title: 'Técnica de Reprogramación - Deja de reaccionar: El secreto para dominar tus emociones',
    description: 'Día 1 del Reto del Estrés a la Calma. Primer paso para identificar tus detonantes emocionales.',
    category: 'reto',
    categoryLabel: 'Reto Del Estrés a la Calma',
    duration: '38:17',
    dayNumber: 'Día 1',
  },
  {
    id: 'x3_O8eoqE1c',
    youtubeUrl: 'https://youtu.be/x3_O8eoqE1c?si=ZMy6P9VmwHgeevxn',
    title: 'Cómo ser una persona disciplinada #1 - Decisiones y Hábitos',
    description: 'Parte 1 del Mini Curso en YouTube. Construye la disciplina desde la compasión y no desde la autoexigencia.',
    category: 'disciplina',
    categoryLabel: 'Mini Curso Disciplina',
    duration: '15:20',
  },
  {
    id: 'Mfr8vX8OhFQ',
    youtubeUrl: 'https://youtu.be/Mfr8vX8OhFQ?si=l-fGVbkHTqM1oLNt',
    title: 'Cómo ser una persona disciplinada #2 - Sistemas y Sostenibilidad',
    description: 'Parte 2 del Mini Curso en YouTube. Cómo sostener compromisos contigo misma en momentos de cansancio.',
    category: 'disciplina',
    categoryLabel: 'Mini Curso Disciplina',
    duration: '18:10',
  },
  {
    id: 'lqamda5kSaw',
    youtubeUrl: 'https://youtu.be/lqamda5kSaw?si=PY3rP-Kk86jIFQsS',
    title: '¿Pierdes el control y luego te arrepientes? La herramienta infalible para tu bienestar',
    description: 'Aprende a pausar el impulso antes de hablar o reaccionar en momentos de tensión familiar o laboral.',
    category: 'herramientas',
    categoryLabel: 'Tips y Herramientas',
    duration: '3:09',
  },
  {
    id: 'MOGfLEkk-Cw',
    youtubeUrl: 'https://youtu.be/MOGfLEkk-Cw?si=87x1bEoj2svHJova',
    title: 'Soy mamá y estoy agotada: ¿Cómo recargarme sin culpas?',
    description: 'Reflexiones y pautas prácticas para sostener la energía vital en medio de la crianza y el trabajo.',
    category: 'herramientas',
    categoryLabel: 'Tips y Herramientas',
    duration: '3:16',
  },
  {
    id: 'hTt8FcRbbSw',
    youtubeUrl: 'https://youtu.be/hTt8FcRbbSw?si=X4XlXyVAqQDEASMi',
    title: '¿CÓMO SACO TIEMPO PARA MÍ SI SOY MAMÁ Y TRABAJO? ¡AQUÍ EMPIEZA EL CAMBIO!',
    description: 'Estrategias de organización consciente para recuperar espacios propios sin sentir desatención.',
    category: 'herramientas',
    categoryLabel: 'Tips y Herramientas',
    duration: '9:20',
  },
  {
    id: 'Se5oUXmMz3w',
    youtubeUrl: 'https://youtu.be/Se5oUXmMz3w?si=UxDEtIkOVQ0tJ_2b',
    title: 'Pausa consciente y rueda de la vida en la práctica',
    description: 'Aprende a autoevaluar tus 5 recursos y equilibrar las áreas clave de tu presente.',
    category: 'herramientas',
    categoryLabel: 'Tips y Herramientas',
    duration: '12:45',
  },
  {
    id: 'n8InueHaVxk',
    youtubeUrl: 'https://youtu.be/n8InueHaVxk?si=bycpN6To-2_qugfd',
    title: 'Estrategias de desarrollo personal y bienestar cotidiano con Anatolia Zapata',
    description: 'Clase especial para comprender los automatismos y reprogramar las decisiones de tu día a día.',
    category: 'herramientas',
    categoryLabel: 'Tips y Herramientas',
    duration: '22:15',
  },
];

export default function CursosRetosPage({ onNavigate }: CursosRetosPageProps) {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'reto' | 'disciplina' | 'herramientas'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    return YOUTUBE_VIDEOS.filter((video) => {
      const matchesCategory = activeCategory === 'todos' || video.category === activeCategory;
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleFilterCategory = (cat: 'todos' | 'reto' | 'disciplina' | 'herramientas') => {
    setActiveCategory(cat);
    const galleryElem = document.getElementById('galeria-youtube');
    if (galleryElem) {
      galleryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF5EE] text-[#222918] font-sans min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      {/* ------------------------------------------------------------- */}
      {/* HERO: PEQUEÑOS PASOS. NUEVAS FORMAS DE ELEGIR. (Background Premium) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-12 md:mb-16">
        <div className="relative rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex items-center shadow-lg border border-[#222918]/15 bg-[#FAF7F2]">
          {/* Foto como background cubriendo el hero */}
          <div
            className="absolute inset-0 bg-cover bg-right md:bg-center transition-transform duration-1000"
            style={{ backgroundImage: `url(${BRAND_ASSETS.heroCursosBackground})` }}
          />

          {/* Degradado marfil premium superpuesto para máxima legibilidad del texto en el lado izquierdo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF5EE] via-[#FAF5EE]/95 via-50% to-[#FAF5EE]/30 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EE]/80 via-transparent to-transparent md:hidden" />

          {/* Contenido principal en el lado izquierdo */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16 max-w-2xl text-left space-y-5">
            {/* Badge */}
            <div className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-2xs">
              APRENDE A TU RITMO
            </div>

            {/* Titular con chispas */}
            <div className="relative inline-block">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#222918] leading-[1.08]">
                Pequeños pasos.<br />
                Nuevas formas de elegir.
              </h1>
              {/* Chispas arriba a la derecha */}
              <div className="hidden sm:block absolute -top-4 -right-8 text-[#222918] text-xl font-mono tracking-tighter select-none font-bold">
                ///
              </div>
            </div>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#363D28] font-normal leading-relaxed max-w-xl">
              Explora cursos, herramientas y retos gratuitos para comprenderte mejor y llevar lo que aprendes a tu vida.
            </p>

            {/* Botón CTA */}
            <div className="pt-2">
              <a
                href="#galeria-youtube"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#52632C] hover:bg-[#435224] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>VER VIDEOS Y CLASES GRATUITAS</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECCIÓN: EMPIEZA POR AQUÍ (3 Tarjetas Principales) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20 space-y-8">
        {/* Titulo con chispas */}
        <div className="text-center space-y-2">
          <div className="relative inline-flex items-center justify-center">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
              Empieza por aquí
            </h2>
            <div className="absolute -top-3 -right-8 text-[#222918] text-lg font-mono tracking-tighter select-none font-bold">
              ///
            </div>
          </div>
        </div>

        {/* Grid de 3 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: MINI CURSO EN YOUTUBE */}
          <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#363D28]/12 shadow-xs hover:border-[#363D28]/30 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#363D28] relative group cursor-pointer" onClick={() => handleFilterCategory('disciplina')}>
                <img
                  src="https://img.youtube.com/vi/x3_O8eoqE1c/hqdefault.jpg"
                  alt="Mini curso cómo ser una persona disciplinada"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-[#5A6836] fill-[#5A6836] ml-0.5" />
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  MINI CURSO EN YOUTUBE
                </span>
                <h3 className="text-xl font-bold text-[#222918] leading-snug">
                  Cómo ser una persona disciplinada
                </h3>
              </div>

              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Una serie para explorar la disciplina desde tus decisiones y hábitos.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleFilterCategory('disciplina')}
                className="w-full py-3 px-5 rounded-full border-2 border-[#222918] hover:bg-[#222918] hover:text-white text-[#222918] font-black text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all"
              >
                <span>VER MINI CURSO</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: VIDEOS GRATUITOS */}
          <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#363D28]/12 shadow-xs hover:border-[#363D28]/30 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#363D28] relative group cursor-pointer" onClick={() => handleFilterCategory('herramientas')}>
                <img
                  src="https://img.youtube.com/vi/lqamda5kSaw/hqdefault.jpg"
                  alt="Tips y herramientas Anatolia Zapata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-[#5A6836] fill-[#5A6836] ml-0.5" />
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  VIDEOS GRATUITOS
                </span>
                <h3 className="text-xl font-bold text-[#222918] leading-snug">
                  Tips y herramientas
                </h3>
              </div>

              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Ideas prácticas para reflexionar y aplicar en tu día a día.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleFilterCategory('herramientas')}
                className="w-full py-3 px-5 rounded-full border-2 border-[#222918] hover:bg-[#222918] hover:text-white text-[#222918] font-black text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all"
              >
                <span>EXPLORAR VIDEOS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: RETO GRATUITO · 6 DÍAS */}
          <div className="bg-[#FAF5EE] rounded-3xl p-6 sm:p-8 border border-[#363D28]/12 shadow-xs hover:border-[#363D28]/30 transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-video bg-[#363D28] relative group cursor-pointer" onClick={() => handleFilterCategory('reto')}>
                <img
                  src="https://img.youtube.com/vi/Ofdd5Xm3NMU/hqdefault.jpg"
                  alt="Reto gratuito del estrés a la calma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-[#5A6836] fill-[#5A6836] ml-0.5" />
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block bg-[#DFEC9C] text-[#222918] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  RETO GRATUITO · 6 DÍAS
                </span>
                <h3 className="text-xl font-bold text-[#222918] leading-snug">
                  Del estrés a la calma
                </h3>
              </div>

              <p className="text-sm text-[#363D28]/85 font-normal leading-relaxed">
                Seis días para practicar herramientas que te ayuden a responder al estrés de otra manera.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleFilterCategory('reto')}
                className="w-full py-3 px-5 rounded-full border-2 border-[#222918] hover:bg-[#222918] hover:text-white text-[#222918] font-black text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all"
              >
                <span>EMPEZAR EL RETO</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BANNER INTERMEDIO VERDE OLIVA */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#5A6836] text-[#FAF7F2] py-8 sm:py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sprout className="w-7 h-7 text-[#DFEC9C]" />
            </div>
            <p className="text-base sm:text-xl font-bold tracking-tight text-white leading-snug">
              Empieza con una herramienta. Sigue a tu ritmo.
            </p>
          </div>

          <div className="relative inline-block shrink-0">
            <a
              href="https://www.youtube.com/@anatoliazapatap"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#DFEC9C] text-[#222918] font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              <span>EXPLORAR EN YOUTUBE</span>
              <span aria-hidden="true" className="font-sans text-lg">→</span>
            </a>
            {/* Chispas a la derecha */}
            <div className="hidden sm:block absolute -top-3 -right-6 text-white text-base font-mono tracking-tighter opacity-80 select-none font-bold">
              ///
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* GALERÍA COMPLETA DE VIDEOS EN YOUTUBE */}
      {/* ------------------------------------------------------------- */}
      <section id="galeria-youtube" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5A6836]">
            CANAL OFICIAL ANATOLIA ZAPATA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#222918] tracking-tight">
            Galería de Clases y Videos
          </h2>
          <p className="text-sm sm:text-base text-[#363D28]/85 font-normal">
            Haz clic en cualquier video para reproducirlo directamente sin salir de la página.
          </p>
        </div>

        {/* Filtros y Buscador */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory('todos')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'todos'
                  ? 'bg-[#222918] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F6F0E8] text-[#363D28] hover:bg-[#363D28]/10'
              }`}
            >
              Todos ({YOUTUBE_VIDEOS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('reto')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'reto'
                  ? 'bg-[#5A6836] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F6F0E8] text-[#363D28] hover:bg-[#363D28]/10'
              }`}
            >
              Reto Del Estrés a la Calma (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('disciplina')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'disciplina'
                  ? 'bg-[#5A6836] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F6F0E8] text-[#363D28] hover:bg-[#363D28]/10'
              }`}
            >
              Mini Curso Disciplina (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('herramientas')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'herramientas'
                  ? 'bg-[#5A6836] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F6F0E8] text-[#363D28] hover:bg-[#363D28]/10'
              }`}
            >
              Tips y Herramientas (5)
            </button>
          </div>

          {/* Campo de Búsqueda */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#363D28]/50 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema (ej. estrés, límites, culpa...)"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#363D28]/15 text-xs sm:text-sm text-[#222918] focus:outline-none focus:ring-2 focus:ring-[#5A6836]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-[#363D28]/60 hover:text-[#222918] bg-gray-100 px-2 py-0.5 rounded-full"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Grid de Videos */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12 bg-[#F6F0E8] rounded-3xl p-8 max-w-md mx-auto space-y-3">
            <p className="text-base font-bold text-[#222918]">
              No se encontraron videos con ese término.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#5A6836] underline"
            >
              Mostrar todos los videos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group bg-[#FAF5EE] rounded-3xl overflow-hidden border border-[#363D28]/12 shadow-xs hover:shadow-md hover:border-[#363D28]/30 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail de YouTube */}
                  <div className="relative aspect-video bg-[#222918] overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 group-hover:bg-[#DFEC9C] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                        <Play className="w-7 h-7 text-[#222918] fill-[#222918] ml-0.5" />
                      </div>
                    </div>

                    {/* Tag Día o Duración */}
                    {video.dayNumber && (
                      <span className="absolute top-3 left-3 bg-[#DFEC9C] text-[#222918] font-black text-xs px-3 py-1 rounded-full shadow-xs uppercase">
                        {video.dayNumber}
                      </span>
                    )}

                    {video.duration && (
                      <span className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-xs px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                        {video.duration}
                      </span>
                    )}
                  </div>

                  {/* Info del Video */}
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6836]">
                      {video.categoryLabel}
                    </span>
                    <h3 className="font-bold text-base text-[#222918] leading-snug group-hover:text-[#5A6836] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-[#363D28]/80 leading-relaxed line-clamp-2 font-normal">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Footer de la tarjeta */}
                <div className="p-5 pt-0 text-right">
                  <span className="text-xs font-bold text-[#222918] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Reproducir clase</span>
                    <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ------------------------------------------------------------- */}
      {/* MODAL DE REPRODUCCIÓN DE YOUTUBE */}
      {/* ------------------------------------------------------------- */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
          <div className="relative w-full max-w-4xl bg-[#FAF5EE] rounded-3xl overflow-hidden shadow-2xl border border-[#363D28]/20">
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#363D28]/10 bg-[#F6F0E8]">
              <div className="flex items-center gap-2 max-w-md truncate">
                <span className="bg-[#DFEC9C] text-[#222918] text-xs font-bold px-3 py-1 rounded-full uppercase shrink-0">
                  {selectedVideo.categoryLabel}
                </span>
                <span className="text-sm font-bold text-[#222918] truncate">
                  {selectedVideo.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="w-9 h-9 rounded-full bg-[#363D28]/10 hover:bg-[#363D28]/20 flex items-center justify-center text-[#222918] transition-all shrink-0"
                aria-label="Cerrar reproductor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenedor Iframe YouTube */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-inner border border-[#363D28]/10">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Detalles y Enlace a YouTube */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="space-y-1 max-w-2xl">
                  <h3 className="font-bold text-base sm:text-lg text-[#222918]">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#363D28]/85 leading-relaxed font-normal">
                    {selectedVideo.description}
                  </p>
                </div>

                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#222918] hover:bg-[#5A6836] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-xs"
                >
                  <Youtube className="w-4 h-4 text-red-500 fill-current" />
                  <span>Ver en YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
