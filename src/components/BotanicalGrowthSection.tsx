import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RotateCcw, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BotanicalPhase {
  step: string;
  element: string;
  description: string;
  botanicalNote: string;
  targetProgress: number;
}

export const BOTANICAL_PHASES: BotanicalPhase[] = [
  {
    step: '01',
    element: 'Semilla',
    description: 'Intención y punto de partida',
    botanicalNote: 'Una pequeña semilla descansa sobre la tierra fértil, conteniendo el impulso de todo lo que vendrá.',
    targetProgress: 0.05,
  },
  {
    step: '02',
    element: 'Raíces',
    description: 'Historia, valores y recursos profundos',
    botanicalNote: 'Emergen raíces finas y orgánicas hacia abajo, arraigándose para absorber sustento, verdad y estabilidad.',
    targetProgress: 0.28,
  },
  {
    step: '03',
    element: 'Brote y Tronco',
    description: 'Eje interior y sostén cotidiano',
    botanicalNote: 'Aparece el primer brote y se desarrolla un tallo firme: el eje interior que sostiene tus decisiones diarias.',
    targetProgress: 0.52,
  },
  {
    step: '04',
    element: 'Ramas y Hojas',
    description: 'Nuevas opciones y perspectiva ampliada',
    botanicalNote: 'El tallo se ramifica con delicadeza y se despliegan hojas en verde oliva, abriendo tu mirada hacia nuevas posibilidades.',
    targetProgress: 0.78,
  },
  {
    step: '05',
    element: 'Frutos',
    description: 'Decisiones conscientes y huella positiva',
    botanicalNote: 'La planta alcanza su madurez: brotan pequeños frutos en ocre mate como cosecha de elecciones conscientes.',
    targetProgress: 1.0,
  },
];

export default function BotanicalGrowthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Build the GSAP timeline and attach ScrollTrigger
  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const ctx = gsap.context(() => {
      // Helper to setup SVG stroke-dasharray/dashoffset for clean drawing
      const prepareStrokes = (selector: string) => {
        const paths = svg.querySelectorAll<SVGGeometryElement>(selector);
        paths.forEach((path) => {
          try {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
          } catch {
            // Fallback if browser can't measure
          }
        });
      };

      prepareStrokes('.root-path');
      prepareStrokes('.stem-path');
      prepareStrokes('.branch-path');

      // Master Timeline
      const tl = gsap.timeline({
        paused: true,
        onUpdate: () => {
          const prog = tl.progress();
          // Determine active phase based on progress thresholds
          if (prog < 0.18) {
            setActivePhaseIndex(0);
          } else if (prog < 0.42) {
            setActivePhaseIndex(1);
          } else if (prog < 0.65) {
            setActivePhaseIndex(2);
          } else if (prog < 0.88) {
            setActivePhaseIndex(3);
          } else {
            setActivePhaseIndex(4);
          }
        },
        onComplete: () => {
          setIsPlaying(false);
        },
      });

      timelineRef.current = tl;

      // --- PHASE 1: Semilla (0.00 -> 0.15) ---
      // Ground and seed pulse in
      tl.fromTo(
        '.seed-group',
        { scale: 0.6, opacity: 0, transformOrigin: 'center center' },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' },
        0
      );
      tl.fromTo(
        '.soil-line',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power1.out' },
        0.1
      );

      // --- PHASE 2: Raíces (0.15 -> 0.40) ---
      // Primary tap root grows downwards
      tl.to(
        '.tap-root',
        { strokeDashoffset: 0, duration: 1.0, ease: 'power1.inOut' },
        0.18
      );
      // Lateral primary roots
      tl.to(
        '.primary-root',
        { strokeDashoffset: 0, duration: 1.1, ease: 'power1.inOut', stagger: 0.1 },
        0.22
      );
      // Delicate secondary rootlets
      tl.to(
        '.secondary-root',
        { strokeDashoffset: 0, duration: 0.9, ease: 'power1.out', stagger: 0.08 },
        0.28
      );

      // --- PHASE 3: Brote y Tronco (0.40 -> 0.65) ---
      // Sprout emerges from top of seed and grows upward
      tl.to(
        '.main-stem',
        { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' },
        0.42
      );
      // Early cotyledon leaves unfolding at middle stem
      tl.fromTo(
        '.cotyledon-leaf',
        { scale: 0, opacity: 0, transformOrigin: 'bottom center' },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.4)', stagger: 0.1 },
        0.5
      );
      // Stem node rings
      tl.fromTo(
        '.stem-node',
        { opacity: 0 },
        { opacity: 0.7, duration: 0.4, stagger: 0.1 },
        0.54
      );

      // --- PHASE 4: Ramas y Hojas (0.65 -> 0.88) ---
      // Branches extend outward in organic succession
      tl.to(
        '.branch-lower',
        { strokeDashoffset: 0, duration: 0.9, ease: 'power1.inOut', stagger: 0.12 },
        0.65
      );
      tl.to(
        '.branch-upper',
        { strokeDashoffset: 0, duration: 0.8, ease: 'power1.inOut', stagger: 0.1 },
        0.72
      );
      // Leaves unfurl with delicate scale and rotation
      tl.fromTo(
        '.botanical-leaf',
        { scale: 0, opacity: 0, transformOrigin: 'bottom center' },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'back.out(1.3)',
          stagger: {
            each: 0.03,
            from: 'start',
          },
        },
        0.7
      );

      // --- PHASE 5: Frutos (0.88 -> 1.00) ---
      // Matte ochre berries appear at branch tips with smooth bounce
      tl.fromTo(
        '.fruit-group',
        { scale: 0, opacity: 0, transformOrigin: 'center center' },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.6)',
          stagger: 0.08,
        },
        0.88
      );

      // ScrollTrigger: start animation when section enters viewport
      ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          setHasEnteredViewport(true);
          if (!reducedMotion) {
            setIsPlaying(true);
            tl.tweenTo(1.0, {
              duration: 4.8,
              ease: 'power1.inOut',
              onComplete: () => setIsPlaying(false),
            });
          } else {
            tl.progress(1.0);
            setActivePhaseIndex(4);
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Handle keyboard navigation across phase tabs (WAI-ARIA)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToPhase((activePhaseIndex + 1) % BOTANICAL_PHASES.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToPhase((activePhaseIndex - 1 + BOTANICAL_PHASES.length) % BOTANICAL_PHASES.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToPhase(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToPhase(BOTANICAL_PHASES.length - 1);
    }
  };

  // Navigate directly to a selected phase
  const goToPhase = useCallback(
    (index: number) => {
      const tl = timelineRef.current;
      if (!tl) return;

      const target = BOTANICAL_PHASES[index].targetProgress;
      setActivePhaseIndex(index);
      setIsPlaying(true);

      if (reducedMotion) {
        tl.progress(target);
        setIsPlaying(false);
      } else {
        gsap.to(tl, {
          progress: target,
          duration: 1.1,
          ease: 'power2.inOut',
          overwrite: 'auto',
          onComplete: () => setIsPlaying(false),
        });
      }
    },
    [reducedMotion]
  );

  // Play / Pause or Replay
  const handleTogglePlay = () => {
    const tl = timelineRef.current;
    if (!tl) return;

    if (isPlaying) {
      tl.pause();
      setIsPlaying(false);
    } else {
      // If at end, replay from beginning
      if (tl.progress() >= 0.98) {
        tl.progress(0);
        goToPhase(4);
      } else {
        setIsPlaying(true);
        gsap.to(tl, {
          progress: 1.0,
          duration: (1 - tl.progress()) * 4.5,
          ease: 'power1.inOut',
          onComplete: () => setIsPlaying(false),
        });
      }
    }
  };

  const handleRestart = () => {
    const tl = timelineRef.current;
    if (!tl) return;
    tl.progress(0);
    goToPhase(0);
  };

  const currentPhase = BOTANICAL_PHASES[activePhaseIndex];

  return (
    <div
      ref={containerRef}
      className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#FAF7F2] border border-[#363D28]/15 shadow-xs relative overflow-hidden"
    >
      {/* Eyebrow & Context Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#363D28]/10">
        <div>
          <span className="text-xs font-sans uppercase tracking-[0.22em] text-[#A18347] font-semibold block mb-2">
            METÁFORA DE CRECIMIENTO
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#363D28]">
            Del arraigo interior a la decisión visible
          </h3>
        </div>

        {/* Playback Controls Toolbar */}
        <div className="flex items-center gap-2 self-start sm:self-end">
          <button
            type="button"
            onClick={handleRestart}
            title="Reiniciar desde la semilla"
            aria-label="Reiniciar crecimiento desde la semilla"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-[#363D28] hover:text-[#A18347] bg-[#F2EBDD] hover:bg-[#EAE2D2] rounded-full border border-[#363D28]/15 transition-all focus-visible:outline-2 focus-visible:outline-[#363D28]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Reiniciar</span>
          </button>

          <button
            type="button"
            onClick={handleTogglePlay}
            title={isPlaying ? 'Pausar animación' : 'Reproducir crecimiento continuo'}
            aria-label={isPlaying ? 'Pausar animación' : 'Reproducir crecimiento continuo'}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-sans font-medium text-[#F2EBDD] bg-[#363D28] hover:bg-[#222719] rounded-full transition-all focus-visible:outline-2 focus-visible:outline-[#363D28]"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pausa</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Animar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Botanical SVG Stage */}
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-[#F2EBDD]/70 border border-[#363D28]/12 p-3 sm:p-6 mb-8 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle vintage botanical plate framing */}
        <div
          className="absolute inset-2 border border-[#363D28]/10 rounded-xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Botanical Plate Label */}
        <div className="w-full flex items-center justify-between text-[11px] font-serif tracking-widest text-[#363D28]/60 px-2 pt-1 mb-1 select-none">
          <span className="italic">FIG. I — PLANTA RADICATA</span>
          <span className="uppercase text-[10px] tracking-wider text-[#A18347]">
            Fase {currentPhase.step} · {currentPhase.element}
          </span>
        </div>

        {/* Accessible SVG illustration */}
        <svg
          ref={svgRef}
          viewBox="0 0 640 480"
          className="w-full h-auto max-h-[380px] sm:max-h-[440px] drop-shadow-xs"
          role="img"
          aria-label={`Ilustración botánica interactiva mostrando la planta en la fase de ${currentPhase.element}: ${currentPhase.description}`}
        >
          <defs>
            {/* Subtle soil gradient below ground */}
            <linearGradient id="soilTint" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#363D28" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#363D28" stopOpacity="0.08" />
            </linearGradient>

            {/* Fruit gradient */}
            <radialGradient id="fruitOchre" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#C4A66B" />
              <stop offset="70%" stopColor="#A18347" />
              <stop offset="100%" stopColor="#82662F" />
            </radialGradient>
          </defs>

          {/* Underground Area Wash (y > 290) */}
          <rect
            x="40"
            y="290"
            width="560"
            height="180"
            fill="url(#soilTint)"
            rx="4"
          />

          {/* Soil / Horizon Line (Fase 1 +) */}
          <g className="soil-line">
            <path
              d="M 50 290 Q 180 288 320 291 T 590 290"
              stroke="#78866A"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.6"
            />
            {/* Earth texture hints */}
            <circle cx="210" cy="308" r="1.2" fill="#78866A" opacity="0.4" />
            <circle cx="260" cy="325" r="1" fill="#78866A" opacity="0.3" />
            <circle cx="380" cy="312" r="1.2" fill="#78866A" opacity="0.4" />
            <circle cx="430" cy="330" r="1" fill="#78866A" opacity="0.3" />
            <circle cx="340" cy="420" r="1.2" fill="#78866A" opacity="0.25" />
            <circle cx="290" cy="445" r="1" fill="#78866A" opacity="0.25" />
          </g>

          {/* FASE 02: RAÍCES (dibujadas progresivamente hacia abajo) */}
          <g id="roots-layer">
            {/* Raíz pivotante central (Taproot) */}
            <path
              d="M 320 294 C 320 325 317 355 322 390 C 325 415 318 440 320 465"
              fill="none"
              stroke="#363D28"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="root-path tap-root"
            />

            {/* Raíces primarias laterales */}
            <path
              d="M 319 310 C 295 335 265 365 235 395 C 215 415 190 435 170 445"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="root-path primary-root"
            />
            <path
              d="M 321 310 C 345 335 375 365 405 390 C 430 410 450 430 470 440"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="root-path primary-root"
            />

            {/* Raíces secundarias delicadas (Salvia #78866A) */}
            <path
              d="M 280 350 C 255 370 235 375 215 385"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 230 400 C 215 420 195 425 178 430"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 319 355 C 305 380 290 410 280 435"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 322 365 C 335 390 350 415 365 442"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 360 345 C 385 365 410 375 430 380"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.2"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 410 395 C 430 415 448 420 468 425"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
            <path
              d="M 321 425 C 314 440 308 455 304 470"
              fill="none"
              stroke="#78866A"
              strokeWidth="1"
              strokeLinecap="round"
              className="root-path secondary-root"
            />
          </g>

          {/* FASE 01: SEMILLA (en el punto de unión y origen) */}
          <g className="seed-group">
            {/* Sutil halo cálido sobre la semilla */}
            <ellipse
              cx="320"
              cy="288"
              rx="9"
              ry="11"
              fill="#A18347"
              fillOpacity="0.2"
            />
            {/* Silueta botánica de la semilla */}
            <path
              d="M 320 279 C 326 279 330 285 329 292 C 328 297 322 301 316 299 C 311 296 313 287 320 279 Z"
              fill="#A18347"
              stroke="#363D28"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Vena interna de la semilla */}
            <path
              d="M 319 283 Q 323 289 318 295"
              fill="none"
              stroke="#363D28"
              strokeWidth="1"
              opacity="0.75"
            />
          </g>

          {/* FASE 03: BROTE Y TRONCO (crece desde la base hacia arriba) */}
          <g id="stem-layer">
            {/* Tallo principal */}
            <path
              d="M 320 279 C 320 248 317 215 321 175 C 323 138 318 95 320 48"
              fill="none"
              stroke="#363D28"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stem-path main-stem"
            />

            {/* Anillos botánicos de crecimiento del tallo */}
            <ellipse
              cx="319.5"
              cy="245"
              rx="3"
              ry="1"
              fill="#78866A"
              className="stem-node"
            />
            <ellipse
              cx="321"
              cy="195"
              rx="2.6"
              ry="0.9"
              fill="#78866A"
              className="stem-node"
            />
            <ellipse
              cx="319.5"
              cy="135"
              rx="2.2"
              ry="0.8"
              fill="#78866A"
              className="stem-node"
            />

            {/* Cotiledones tempranos / Primer brote en el tallo bajo */}
            <g className="cotyledon-leaf">
              <path
                d="M 319 250 C 304 245 295 238 290 230 C 298 232 310 240 319 248 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="1"
              />
              <path
                d="M 319 249 Q 302 240 291 231"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.8"
              />
            </g>
            <g className="cotyledon-leaf">
              <path
                d="M 321 246 C 336 241 345 234 350 226 C 342 228 330 236 321 244 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="1"
              />
              <path
                d="M 321 245 Q 338 236 349 227"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.8"
              />
            </g>
          </g>

          {/* FASE 04: RAMAS Y HOJAS (ramificación y follaje) */}
          <g id="branches-and-leaves-layer">
            {/* Ramas inferiores */}
            <path
              d="M 320 220 C 290 205 255 198 215 205 C 185 210 160 225 140 240"
              fill="none"
              stroke="#363D28"
              strokeWidth="2"
              strokeLinecap="round"
              className="branch-path branch-lower"
            />
            <path
              d="M 321 205 C 350 190 385 185 425 190 C 455 195 480 210 500 225"
              fill="none"
              stroke="#363D28"
              strokeWidth="2"
              strokeLinecap="round"
              className="branch-path branch-lower"
            />

            {/* Ramas medias */}
            <path
              d="M 320 165 C 290 145 258 135 220 142 C 190 148 165 162 145 172"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="branch-path branch-lower"
            />
            <path
              d="M 321 150 C 350 130 382 125 420 130 C 450 135 475 150 495 160"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="branch-path branch-lower"
            />

            {/* Ramas superiores */}
            <path
              d="M 320 110 C 295 90 268 85 240 92"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="branch-path branch-upper"
            />
            <path
              d="M 321 100 C 345 80 372 75 400 80"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="branch-path branch-upper"
            />

            {/* Hojas Botánicas Elegantes con Venación Salvia */}
            {/* Fila Inferior Izquierda */}
            <g className="botanical-leaf">
              <path
                d="M 260 200 C 248 185 235 178 222 175 C 228 188 238 200 258 202 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 258 201 Q 240 188 223 176"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 215 205 C 198 198 185 190 172 188 C 180 200 192 210 213 207 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 213 206 Q 192 198 173 189"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 140 240 C 122 245 110 242 100 235 C 112 230 126 230 138 238 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 138 239 Q 120 237 101 236"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>

            {/* Fila Inferior Derecha */}
            <g className="botanical-leaf">
              <path
                d="M 380 185 C 392 170 405 163 418 160 C 412 173 402 185 382 187 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 382 186 Q 400 173 417 161"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 425 190 C 442 183 455 175 468 173 C 460 185 448 195 427 192 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 427 191 Q 448 183 467 174"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 500 225 C 518 230 530 227 540 220 C 528 215 514 215 502 223 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 502 224 Q 520 222 539 221"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>

            {/* Fila Media Izquierda */}
            <g className="botanical-leaf">
              <path
                d="M 265 140 C 250 125 238 120 225 120 C 235 132 245 142 263 142 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 263 141 Q 245 131 226 121"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 145 172 C 128 175 115 170 105 162 C 118 160 132 162 143 170 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 143 171 Q 125 168 106 163"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>

            {/* Fila Media Derecha */}
            <g className="botanical-leaf">
              <path
                d="M 375 125 C 390 110 402 105 415 105 C 405 117 395 127 377 127 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 377 126 Q 395 116 414 106"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 495 160 C 512 163 525 158 535 150 C 522 148 508 150 497 158 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 497 159 Q 515 156 534 151"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>

            {/* Fila Superior / Corona */}
            <g className="botanical-leaf">
              <path
                d="M 240 92 C 220 85 208 78 198 70 C 212 70 228 78 238 90 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 238 91 Q 218 80 199 71"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 400 80 C 420 73 432 66 442 58 C 428 58 412 66 402 78 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 402 79 Q 422 68 441 59"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.75"
              />
            </g>

            {/* Ápice / Brote terminal superior */}
            <g className="botanical-leaf">
              <path
                d="M 320 48 C 314 32 308 24 300 18 C 312 20 322 28 322 45 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 321 46 Q 312 30 301 19"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.7"
              />
            </g>
            <g className="botanical-leaf">
              <path
                d="M 320 48 C 326 32 332 24 340 18 C 328 20 318 28 318 45 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 319 46 Q 328 30 339 19"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.7"
              />
            </g>
          </g>

          {/* FASE 05: FRUTOS (madurez con frutos en ocre mate #A18347) */}
          <g id="fruits-layer">
            {/* Fruto 1: Rama inferior izquierda */}
            <g className="fruit-group">
              <line
                x1="180"
                y1="220"
                x2="175"
                y2="232"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="175" cy="236" r="6.5" fill="url(#fruitOchre)" />
              <circle
                cx="173"
                cy="234"
                r="2"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
              <path
                d="M 173 230 Q 175 232 177 230"
                fill="none"
                stroke="#363D28"
                strokeWidth="0.8"
              />
            </g>

            {/* Fruto 2: Rama inferior derecha */}
            <g className="fruit-group">
              <line
                x1="460"
                y1="205"
                x2="465"
                y2="218"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="467" cy="223" r="6.5" fill="url(#fruitOchre)" />
              <circle
                cx="465"
                cy="221"
                r="2"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
              <path
                d="M 465 217 Q 467 219 469 217"
                fill="none"
                stroke="#363D28"
                strokeWidth="0.8"
              />
            </g>

            {/* Fruto 3: Rama media izquierda */}
            <g className="fruit-group">
              <line
                x1="185"
                y1="155"
                x2="180"
                y2="167"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="178" cy="172" r="5.8" fill="url(#fruitOchre)" />
              <circle
                cx="176"
                cy="170"
                r="1.8"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
              <path
                d="M 176 167 Q 178 169 180 167"
                fill="none"
                stroke="#363D28"
                strokeWidth="0.8"
              />
            </g>

            {/* Fruto 4: Rama media derecha */}
            <g className="fruit-group">
              <line
                x1="455"
                y1="145"
                x2="460"
                y2="157"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="462" cy="162" r="5.8" fill="url(#fruitOchre)" />
              <circle
                cx="460"
                cy="160"
                r="1.8"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
              <path
                d="M 460 157 Q 462 159 464 157"
                fill="none"
                stroke="#363D28"
                strokeWidth="0.8"
              />
            </g>

            {/* Fruto 5: Rama alta izquierda */}
            <g className="fruit-group">
              <line
                x1="260"
                y1="95"
                x2="255"
                y2="106"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="253" cy="111" r="5.2" fill="url(#fruitOchre)" />
              <circle
                cx="251"
                cy="109"
                r="1.5"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
            </g>

            {/* Fruto 6: Rama alta derecha */}
            <g className="fruit-group">
              <line
                x1="380"
                y1="85"
                x2="385"
                y2="96"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="387" cy="101" r="5.2" fill="url(#fruitOchre)" />
              <circle
                cx="385"
                cy="99"
                r="1.5"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
            </g>

            {/* Fruto 7: Corona apical */}
            <g className="fruit-group">
              <line
                x1="320"
                y1="50"
                x2="320"
                y2="60"
                stroke="#363D28"
                strokeWidth="1"
              />
              <circle cx="320" cy="65" r="5.5" fill="url(#fruitOchre)" />
              <circle
                cx="318.5"
                cy="63.5"
                r="1.6"
                fill="#FAF7F2"
                fillOpacity="0.35"
              />
            </g>
          </g>
        </svg>

        {/* Dynamic Botanical Poetic Note for Active Phase */}
        <div className="w-full mt-4 pt-4 border-t border-[#363D28]/10 text-center px-4">
          <p className="text-xs sm:text-sm font-sans text-[#363D28]/85 font-light leading-relaxed max-w-lg mx-auto">
            <span className="font-medium text-[#363D28]">
              {currentPhase.element}:
            </span>{' '}
            {currentPhase.botanicalNote}
          </p>
        </div>
      </div>

      {/* Five Phases Navigation: Desktop horizontal tabs / Mobile responsive switcher */}
      <div className="w-full">
        {/* Mobile Prev / Next Switcher Controls */}
        <div className="flex md:hidden items-center justify-between gap-3 mb-4">
          <button
            type="button"
            onClick={() => goToPhase(Math.max(0, activePhaseIndex - 1))}
            disabled={activePhaseIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-sans text-[#363D28] bg-[#F2EBDD] rounded-full border border-[#363D28]/15 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Fase anterior"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-xs font-sans font-medium text-[#A18347] uppercase tracking-wider">
            Fase {currentPhase.step} de 05
          </span>

          <button
            type="button"
            onClick={() => goToPhase(Math.min(BOTANICAL_PHASES.length - 1, activePhaseIndex + 1))}
            disabled={activePhaseIndex === BOTANICAL_PHASES.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-sans text-[#363D28] bg-[#F2EBDD] rounded-full border border-[#363D28]/15 disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Fase siguiente"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Phase Selector Cards / Buttons */}
        <div
          role="tablist"
          aria-label="Fases del crecimiento botánico"
          onKeyDown={handleKeyDown}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {BOTANICAL_PHASES.map((phase, idx) => {
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={phase.step}
                type="button"
                role="tab"
                id={`botanical-tab-${phase.step}`}
                aria-selected={isActive}
                aria-controls="botanical-illustration-panel"
                onClick={() => goToPhase(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#363D28] ${
                  isActive
                    ? 'bg-[#363D28] text-[#F2EBDD] shadow-md -translate-y-1'
                    : 'bg-[#F2EBDD]/70 text-[#363D28] hover:bg-[#F2EBDD] border border-[#363D28]/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-serif italic ${
                        isActive ? 'text-[#F2EBDD]/80' : 'text-[#A18347]'
                      }`}
                    >
                      Fase {phase.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? 'bg-[#A18347]' : 'bg-[#363D28]/20'
                      }`}
                      aria-hidden="true"
                    />
                  </div>

                  <h4
                    className={`text-base sm:text-lg font-serif font-semibold mb-1 ${
                      isActive ? 'text-[#F2EBDD]' : 'text-[#363D28]'
                    }`}
                  >
                    {phase.element}
                  </h4>

                  <p
                    className={`text-xs font-sans leading-relaxed font-light line-clamp-3 ${
                      isActive ? 'text-[#F2EBDD]/85' : 'text-[#363D28]/75'
                    }`}
                  >
                    {phase.description}
                  </p>
                </div>

                {/* Status indicator line */}
                <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[11px] font-sans">
                  <span className={isActive ? 'text-[#A18347] font-medium' : 'text-current/50'}>
                    {isActive ? 'Activa' : 'Explorar'}
                  </span>
                  <span className="text-[10px] opacity-60">
                    {idx <= activePhaseIndex ? '✓' : ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
