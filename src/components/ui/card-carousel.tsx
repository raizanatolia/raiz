import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SparklesIcon, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ResourceCardItem {
  id: string;
  number: string;
  name: string;
  badge: string;
  image: string;
  alt?: string;
  description: string;
  reflectionPrompt?: string;
  icon?: React.ElementType;
}

export interface CardCarouselProps {
  items?: ResourceCardItem[];
  images?: { src: string; alt: string; title?: string; description?: string; badge?: string }[];
  badgeText?: string;
  title?: string;
  subtitle?: string;
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  className?: string;
  onSelectResource?: (item: ResourceCardItem) => void;
  onNavigateToMap?: () => void;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  items,
  images,
  badgeText = "PUNTO DE PARTIDA",
  title = "Cinco recursos para mirar tu punto de partida",
  subtitle = "Cinco recursos fundamentales que influyen en cada una de tus elecciones cotidianas.",
  autoplayDelay = 3500,
  showPagination = true,
  showNavigation = true,
  className,
  onSelectResource,
  onNavigateToMap,
}) => {
  // Normalize items whether passed as rich ResourceCardItem[] or simple images[]
  const slides: ResourceCardItem[] = React.useMemo(() => {
    if (items && items.length > 0) return items;
    if (images && images.length > 0) {
      return images.map((img, idx) => ({
        id: `slide-${idx}`,
        number: `0${idx + 1}`,
        name: img.title || `Recurso 0${idx + 1}`,
        badge: img.badge || `0${idx + 1}`,
        image: img.src,
        alt: img.alt || `Imagen ${idx + 1}`,
        description: img.description || '',
      }));
    }
    return [];
  }, [items, images]);

  const [activeIndex, setActiveIndex] = React.useState(2);

  return (
    <div
      className={cn(
        "relative w-full bg-transparent",
        className
      )}
    >
      {/* Header section matching container card in reference */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-[#363D28]/10">
        <div>
          <Badge
            variant="secondary"
            className="mb-3 px-3.5 py-1 text-[11px] font-sans tracking-[0.2em] uppercase bg-[#EAE2D2] text-[#363D28] border border-[#363D28]/15 font-semibold inline-flex items-center gap-1.5 shadow-2xs"
          >
            <SparklesIcon className="w-3 h-3 text-[#A18347]" />
            {badgeText}
          </Badge>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#363D28] tracking-tight leading-snug">
            {title}
          </h3>
        </div>

        {subtitle && (
          <p className="text-xs sm:text-sm font-sans text-[#363D28]/75 max-w-md font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Swiper Coverflow Carousel */}
      <div className="relative w-full px-2 sm:px-6">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={Math.min(2, Math.max(0, slides.length - 1))}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1.2,
            slideShadows: false,
          }}
          autoplay={
            autoplayDelay > 0
              ? {
                  delay: autoplayDelay,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          pagination={
            showPagination
              ? {
                  el: ".custom-swiper-pagination",
                  clickable: true,
                  renderBullet: (_index, className) => {
                    return `<span class="${className}"></span>`;
                  },
                }
              : false
          }
          navigation={
            showNavigation
              ? {
                  prevEl: ".custom-swiper-button-prev",
                  nextEl: ".custom-swiper-button-next",
                }
              : false
          }
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full py-4 sm:py-6 overflow-visible"
        >
          {slides.map((item, index) => {
            const isActive = index === activeIndex;
            const IconComponent = item.icon;

            return (
              <SwiperSlide
                key={item.id}
                className="!w-[240px] sm:!w-[280px] md:!w-[320px] transition-all duration-500 ease-out"
                onClick={() => onSelectResource?.(item)}
              >
                <div
                  className={cn(
                    "relative h-[380px] sm:h-[440px] md:h-[480px] w-full rounded-2xl sm:rounded-3xl overflow-hidden group select-none cursor-pointer transition-all duration-500",
                    "border border-white/30 shadow-lg",
                    isActive
                      ? "ring-2 ring-[#C4A76C]/80 shadow-[0_22px_45px_-10px_rgba(27,33,19,0.35)] scale-100"
                      : "opacity-85 hover:opacity-100 hover:shadow-xl scale-95"
                  )}
                >
                  {/* Photo Background (using native img for Vite React SPA) */}
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay (deep olive to transparent) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1A2012]/95 via-[#232B19]/55 to-black/15 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Subtle inner border */}
                  <div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/20 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Top Badge Pill */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                    <Badge
                      variant="glass"
                      className="px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#363D28]"
                    >
                      {item.badge}
                    </Badge>

                    {IconComponent && (
                      <span className="w-8 h-8 rounded-full bg-black/35 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F2EBDD]">
                        <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    )}
                  </div>

                  {/* Bottom Content Info */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 text-[#F2EBDD] flex flex-col justify-end">
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.22em] uppercase text-[#C4A76C] mb-1">
                      RECURSO {item.number}
                    </span>

                    <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-normal text-[#F2EBDD] tracking-tight leading-snug mb-2">
                      {item.name}
                    </h4>

                    {item.description && (
                      <p className="text-xs sm:text-sm font-sans text-[#F2EBDD]/90 font-light leading-relaxed mb-3 line-clamp-3">
                        {item.description}
                      </p>
                    )}

                    {item.reflectionPrompt && (
                      <div className="pt-2.5 border-t border-[#F2EBDD]/20">
                        <span className="text-[10px] font-sans uppercase tracking-wider text-[#C4A76C] block mb-0.5 font-medium">
                          Pregunta de reflexión
                        </span>
                        <p className="text-xs sm:text-sm font-serif italic text-[#F2EBDD]/95 leading-snug">
                          «{item.reflectionPrompt}»
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Footer Navigation Bar: active indicator, bullets, prev/next arrows */}
      <div className="mt-6 sm:mt-8 pt-5 border-t border-[#363D28]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Active resource description kicker */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="text-xs sm:text-sm font-serif font-semibold text-[#A18347]">
            {slides[activeIndex]?.number || '01'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#363D28]/30 hidden sm:inline-block" />
          <span className="text-xs sm:text-sm font-serif italic text-[#363D28]/85">
            {slides[activeIndex]?.name} · {slides[activeIndex]?.reflectionPrompt}
          </span>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-4">
          {showNavigation && (
            <button
              type="button"
              aria-label="Anterior recurso"
              className="custom-swiper-button-prev w-10 h-10 rounded-full border border-[#363D28]/25 bg-[#FAF7F2]/90 text-[#363D28] hover:bg-[#363D28] hover:text-[#F2EBDD] transition-all flex items-center justify-center shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#363D28]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {showPagination && (
            <div className="custom-swiper-pagination flex items-center gap-1.5" />
          )}

          {showNavigation && (
            <button
              type="button"
              aria-label="Siguiente recurso"
              className="custom-swiper-button-next w-10 h-10 rounded-full border border-[#363D28]/25 bg-[#FAF7F2]/90 text-[#363D28] hover:bg-[#363D28] hover:text-[#F2EBDD] transition-all flex items-center justify-center shadow-2xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#363D28]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Call to action toward Mapa RAÍZ */}
      {onNavigateToMap && (
        <div className="mt-6 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={onNavigateToMap}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#363D28] text-[#F2EBDD] hover:bg-[#222719] transition-all shadow-xs"
          >
            <span>Explorar los recursos en el Mapa RAÍZ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
export default CardCarousel;
