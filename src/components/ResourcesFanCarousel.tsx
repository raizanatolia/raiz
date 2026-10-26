import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2 } from 'lucide-react';
import { PageId } from '../data/content';

// High-fidelity editorial imagery for each fundamental resource
import imgPerspectiva from '../assets/images/res_perspectiva_1792786331873.jpg';
import imgEmocional from '../assets/images/res_emocional_1792786333298.jpg';
import imgDireccion from '../assets/images/res_direccion_1792786333155.jpg';
import imgEnergia from '../assets/images/res_energia_1792786333532.jpg';
import imgAccion from '../assets/images/res_accion_1792786334539.jpg';

export interface ResourceSlide {
  id: string;
  number: string;
  name: string;
  badge: string;
  image: string;
  description: string;
  reflectionPrompt: string;
  icon: React.ElementType;
}

const RESOURCES_DATA: ResourceSlide[] = [
  {
    id: 'perspectiva',
    number: '01',
    name: 'Perspectiva',
    badge: '01 · Perspectiva',
    image: imgPerspectiva,
    description: 'Cómo interpretas las situaciones y consideras distintas posibilidades antes de actuar.',
    reflectionPrompt: '¿Desde qué mirada estás leyendo lo que vives hoy?',
    icon: Compass,
  },
  {
    id: 'gestion-emocional',
    number: '02',
    name: 'Gestión emocional',
    badge: '02 · Emoción',
    image: imgEmocional,
    description: 'Cómo reconoces, regulas y expresas lo que sientes, permitiendo que las emociones orienten sin desbordar.',
    reflectionPrompt: '¿Qué emoción suele acelerar o frenar tus decisiones?',
    icon: Heart,
  },
  {
    id: 'direccion',
    number: '03',
    name: 'Dirección',
    badge: '03 · Dirección',
    image: imgDireccion,
    description: 'Cómo defines prioridades y orientas tus decisiones en coherencia con tus valores esenciales.',
    reflectionPrompt: '¿Tus elecciones diarias apuntan hacia lo que de verdad valoras?',
    icon: CompassIcon,
  },
  {
    id: 'energia-vital',
    number: '04',
    name: 'Energía vital',
    badge: '04 · Energía',
    image: imgEnergia,
    description: 'Cómo cuidas la energía que necesitas para sostener tu camino sin desgastarte en lo secundario.',
    reflectionPrompt: '¿Qué decisiones te están nutriendo y cuáles drenan tu vitalidad?',
    icon: BatteryCharging,
  },
  {
    id: 'accion-consistente',
    number: '05',
    name: 'Acción consistente',
    badge: '05 · Acción',
    image: imgAccion,
    description: 'Cómo conviertes tus decisiones en pasos concretos y los mantienes a lo largo del tiempo.',
    reflectionPrompt: '¿De qué forma tus acuerdos contigo misma se vuelven realidad?',
    icon: CheckCircle2,
  },
];

interface ResourcesFanCarouselProps {
  onNavigate: (page: PageId) => void;
}

export default function ResourcesFanCarousel({ onNavigate }: ResourcesFanCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start centered on "03 · Dirección"
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = RESOURCES_DATA.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTouchStartX(null);
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX !== null && Math.abs(e.clientX - dragStartX) > 10) {
      setIsDragging(true);
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX !== null) {
      const diff = e.clientX - dragStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    }
    setDragStartX(null);
    setTimeout(() => setIsDragging(false), 50);
  };

  // Compute 3D curved arc transform for each card relative to activeIndex
  const getCardTransform = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -2) diff += 5;
    if (diff > 2) diff -= 5;

    let rot = 0;
    let tx = 0;
    let ty = 0;
    let scale = 1;
    let zIndex = 20;
    let opacity = 1;
    let brightness = 100;

    if (!isMobile) {
      // Desktop parameters
      switch (diff) {
        case 0:
          rot = 0;
          tx = 0;
          ty = 0;
          scale = 1.05;
          zIndex = 30;
          opacity = 1;
          brightness = 100;
          break;
        case -1:
          rot = -7;
          tx = -165;
          ty = 16;
          scale = 0.92;
          zIndex = 20;
          opacity = 0.92;
          brightness = 85;
          break;
        case 1:
          rot = 7;
          tx = 165;
          ty = 16;
          scale = 0.92;
          zIndex = 20;
          opacity = 0.92;
          brightness = 85;
          break;
        case -2:
          rot = -14;
          tx = -310;
          ty = 44;
          scale = 0.82;
          zIndex = 10;
          opacity = 0.75;
          brightness = 70;
          break;
        case 2:
          rot = 14;
          tx = 310;
          ty = 44;
          scale = 0.82;
          zIndex = 10;
          opacity = 0.75;
          brightness = 70;
          break;
      }
    } else {
      // Mobile parameters
      switch (diff) {
        case 0:
          rot = 0;
          tx = 0;
          ty = 0;
          scale = 1.02;
          zIndex = 30;
          opacity = 1;
          brightness = 100;
          break;
        case -1:
          rot = -6;
          tx = -85;
          ty = 12;
          scale = 0.88;
          zIndex = 20;
          opacity = 0.88;
          brightness = 84;
          break;
        case 1:
          rot = 6;
          tx = 85;
          ty = 12;
          scale = 0.88;
          zIndex = 20;
          opacity = 0.88;
          brightness = 84;
          break;
        case -2:
          rot = -12;
          tx = -155;
          ty = 28;
          scale = 0.76;
          zIndex = 10;
          opacity = 0.6;
          brightness = 66;
          break;
        case 2:
          rot = 12;
          tx = 155;
          ty = 28;
          scale = 0.76;
          zIndex = 10;
          opacity = 0.6;
          brightness = 66;
          break;
      }
    }

    return {
      diff,
      rot,
      tx,
      ty,
      scale,
      zIndex,
      opacity,
      brightness,
      isActive: diff === 0,
    };
  };

  const activeResource = RESOURCES_DATA[activeIndex];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      aria-label="Carrusel de los cinco recursos fundamentales del Método RAÍZ"
      className="relative select-none outline-none focus-visible:ring-1 focus-visible:ring-[#363D28]/30 rounded-3xl"
    >
      {/* Curved Arc Stage Viewport */}
      <div className="relative w-full h-[460px] sm:h-[520px] md:h-[570px] flex items-center justify-center overflow-hidden py-4 sm:py-6">
        {RESOURCES_DATA.map((item, idx) => {
          const transformState = getCardTransform(idx);
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (!isDragging) {
                  setActiveIndex(idx);
                }
              }}
              style={{
                zIndex: transformState.zIndex,
                opacity: transformState.opacity,
                filter: `brightness(${transformState.brightness}%)`,
                transform: `translate3d(${transformState.tx}px, ${transformState.ty}px, 0) rotate(${transformState.rot}deg) scale(${transformState.scale})`,
                transformOrigin: '50% 120%',
              }}
              className={`absolute top-6 sm:top-8 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                w-[220px] h-[350px] sm:w-[270px] sm:h-[420px] md:w-[300px] md:h-[460px]
                rounded-[24px] sm:rounded-[28px] overflow-hidden group shadow-lg hover:shadow-2xl
                ${transformState.isActive ? 'ring-2 ring-[#C4A76C]/60 shadow-[0_24px_50px_-12px_rgba(27,33,19,0.4)]' : ''}
              `}
            >
              {/* Inner Card Shell */}
              <div className="w-full h-full relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-[#2C3421]">
                {/* Background Photographic Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Editorial Gradient Scrim (deep olive to transparent) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1A2012]/95 via-[#232B19]/55 to-black/15 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Delicate border */}
                <div
                  className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Top Pill Badge (matching reference image) */}
                <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#363D28] text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-xs">
                    {item.badge}
                  </span>

                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F2EBDD]">
                    <IconComponent className="w-3 sm:w-3.5 h-3 sm:h-3.5" aria-hidden="true" />
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 z-10 text-white flex flex-col justify-end">
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C4A76C] mb-1">
                    RECURSO {item.number}
                  </span>

                  <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#F2EBDD] tracking-tight leading-snug mb-2">
                    {item.name}
                  </h4>

                  {/* Description */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      transformState.isActive
                        ? 'max-h-36 opacity-100'
                        : 'max-h-10 opacity-75 line-clamp-2'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/90 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Guiding Question Prompt on active card */}
                  {transformState.isActive && (
                    <div className="mt-3 pt-3 border-t border-[#F2EBDD]/20 animate-fade-in">
                      <span className="text-[10px] font-sans uppercase tracking-wider text-[#C4A76C] block mb-0.5 font-medium">
                        Pregunta guía
                      </span>
                      <p className="text-xs sm:text-sm font-serif italic text-[#F2EBDD] leading-tight mb-2">
                        «{item.reflectionPrompt}»
                      </p>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.hash = '#/mapa-raiz';
                          onNavigate('mapa-raiz');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-sans tracking-wide text-[#C4A76C] hover:text-white transition-colors underline underline-offset-4 pointer-events-auto"
                      >
                        <span>Explorar en Mapa RAÍZ</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modern Editorial Navigation Bar */}
      <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-5 px-4 sm:px-6">
        {/* Active Resource Kicker */}
        <div className="flex items-center gap-2.5 text-[#363D28] text-center sm:text-left">
          <span className="text-sm font-serif font-semibold text-[#A18347]">
            {activeResource.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#363D28]/30 hidden sm:inline-block" aria-hidden="true" />
          <span className="text-sm font-serif italic text-[#363D28]/90">
            {activeResource.name} · {activeResource.reflectionPrompt}
          </span>
        </div>

        {/* Carousel Controls: Arrows and Dots */}
        <div className="flex items-center gap-4">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Recurso anterior"
            className="w-11 h-11 rounded-full border border-[#363D28]/20 bg-[#FAF7F2] text-[#363D28] hover:bg-[#363D28] hover:text-[#F2EBDD] transition-all flex items-center justify-center shadow-xs focus-visible:outline-2 focus-visible:outline-[#363D28] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {RESOURCES_DATA.map((dot, dIdx) => (
              <button
                key={dot.id}
                type="button"
                onClick={() => setActiveIndex(dIdx)}
                aria-label={`Ir al recurso ${dot.number}: ${dot.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dIdx === activeIndex
                    ? 'w-7 h-2.5 bg-[#363D28]'
                    : 'w-2.5 h-2.5 bg-[#363D28]/25 hover:bg-[#363D28]/60'
                }`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Recurso siguiente"
            className="w-11 h-11 rounded-full border border-[#363D28]/20 bg-[#FAF7F2] text-[#363D28] hover:bg-[#363D28] hover:text-[#F2EBDD] transition-all flex items-center justify-center shadow-xs focus-visible:outline-2 focus-visible:outline-[#363D28] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
