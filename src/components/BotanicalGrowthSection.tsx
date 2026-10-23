import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RotateCcw } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface BotanicalChapter {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  reflection: string;
  targetTime: number;
}

export const BOTANICAL_CHAPTERS: BotanicalChapter[] = [
  {
    id: 'semilla',
    number: '01',
    name: 'Semilla',
    subtitle: 'Intención y punto de partida',
    reflection:
      'Toda transformación profunda comienza en la quietud de una intención. Bajo la superficie descansa la memoria y el impulso necesario para comenzar a ser.',
    targetTime: 0.8,
  },
  {
    id: 'raices',
    number: '02',
    name: 'Raíces',
    subtitle: 'Historia, valores y recursos profundos',
    reflection:
      'Hacia abajo, en lo invisible, se teje la verdadera estabilidad. Comprender tu historia y asimilar tus vivencias te da un sostén firme que ninguna tempestad superficial puede desestabilizar.',
    targetTime: 2.3,
  },
  {
    id: 'brote',
    number: '03',
    name: 'Brote y tronco',
    subtitle: 'Eje interior y sostén cotidiano',
    reflection:
      'El tallo emerge venciendo la resistencia del suelo. Es la columna vertebral de tu claridad: coherencia entre lo que sientes adentro y la postura con la que te plantas ante el mundo.',
    targetTime: 3.8,
  },
  {
    id: 'ramas',
    number: '04',
    name: 'Ramas y hojas',
    subtitle: 'Nuevas opciones y perspectiva ampliada',
    reflection:
      'La ramificación abre espacio hacia múltiples direcciones. Al ampliar la mirada, descubres recursos que antes no veías y te abres a formas más libres y expansivas de elegir.',
    targetTime: 5.4,
  },
  {
    id: 'frutos',
    number: '05',
    name: 'Frutos',
    subtitle: 'Decisiones conscientes y huella positiva',
    reflection:
      'La madurez se manifiesta en acciones tangibles. Elecciones serenas que enriquecen tu propia vida y aportan valor duradero a quienes te rodean.',
    targetTime: 6.8,
  },
];

export default function BotanicalGrowthSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [isInteractiveMoving, setIsInteractiveMoving] = useState<boolean>(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // GSAP Timeline & ScrollTrigger setup
  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const ctx = gsap.context(() => {
      // Helper to initialize stroke dashoffset for realistic botanical line drawing
      const initStrokes = (selector: string) => {
        const paths = svg.querySelectorAll<SVGGeometryElement>(selector);
        paths.forEach((path) => {
          try {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
          } catch {
            // Browser SVG fallback
          }
        });
      };

      initStrokes('.root-draw');
      initStrokes('.stem-draw');
      initStrokes('.branch-draw');

      // Set initial hidden states so foliage/fruits do not float prematurely
      gsap.set('.foliage-leaf, .fruit-cluster, .cotyledon-group', {
        opacity: 0,
        scale: 0,
        transformOrigin: 'bottom center',
      });
      gsap.set('.fruit-cluster', {
        transformOrigin: 'center center',
      });

      // Master Timeline with total natural duration ~7.0s
      const tl = gsap.timeline({
        paused: true,
        onUpdate: () => {
          const t = tl.time();
          if (t < 1.4) {
            setActiveChapterIndex(0);
          } else if (t < 2.9) {
            setActiveChapterIndex(1);
          } else if (t < 4.4) {
            setActiveChapterIndex(2);
          } else if (t < 5.8) {
            setActiveChapterIndex(3);
          } else {
            setActiveChapterIndex(4);
          }
        },
        onComplete: () => {
          setActiveChapterIndex(4);
          setIsInteractiveMoving(false);
        },
      });

      timelineRef.current = tl;

      // --- CHAPTER 1: Semilla (0.0s -> 1.4s) ---
      tl.addLabel('semilla', 0.8);
      tl.fromTo(
        '.horizon-earth',
        { opacity: 0 },
        { opacity: 0.6, duration: 0.8, ease: 'power1.out' },
        0.1
      );
      tl.fromTo(
        '.botanical-seed',
        { scale: 0.4, opacity: 0, transformOrigin: 'center center' },
        { scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out' },
        0.2
      );

      // --- CHAPTER 2: Raíces profundas (1.4s -> 2.9s) ---
      tl.addLabel('raices', 2.3);
      tl.to(
        '.taproot-primary',
        { strokeDashoffset: 0, duration: 1.3, ease: 'power1.inOut' },
        1.4
      );
      tl.to(
        '.root-lateral-main',
        { strokeDashoffset: 0, duration: 1.4, ease: 'power1.inOut', stagger: 0.1 },
        1.6
      );
      tl.to(
        '.root-secondary',
        { strokeDashoffset: 0, duration: 1.1, ease: 'power1.out', stagger: 0.08 },
        1.9
      );

      // --- CHAPTER 3: Brote y Tronco (2.9s -> 4.4s) ---
      tl.addLabel('brote', 3.8);
      tl.to(
        '.trunk-main',
        { strokeDashoffset: 0, duration: 1.4, ease: 'power1.inOut' },
        2.9
      );
      tl.to(
        '.cotyledon-group',
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.3)', stagger: 0.1 },
        3.5
      );

      // --- CHAPTER 4: Ramas y Hojas (4.4s -> 5.8s) ---
      tl.addLabel('ramas', 5.4);
      // Branches draw first
      tl.to(
        '.branch-lower-tier',
        { strokeDashoffset: 0, duration: 1.0, ease: 'power1.inOut', stagger: 0.09 },
        4.4
      );
      tl.to(
        '.branch-upper-tier',
        { strokeDashoffset: 0, duration: 0.85, ease: 'power1.inOut', stagger: 0.08 },
        4.7
      );
      // Leaves unfold gently once branches have established their path
      tl.to(
        '.foliage-leaf',
        {
          scale: 1,
          opacity: 1,
          duration: 0.65,
          ease: 'power2.out',
          stagger: {
            each: 0.025,
            from: 'start',
          },
        },
        5.0
      );

      // --- CHAPTER 5: Frutos en ocre mate (5.8s -> 7.0s) ---
      tl.addLabel('frutos', 6.8);
      tl.to(
        '.fruit-cluster',
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.5)',
          stagger: 0.07,
        },
        5.9
      );

      // Viewport trigger: plays all the way from Chapter 01 to Chapter 05
      ScrollTrigger.create({
        trigger: container,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          if (!reducedMotion) {
            tl.play(0);
          } else {
            tl.progress(1.0);
            setActiveChapterIndex(4);
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, [reducedMotion]);

  // Navigate smoothly to chapter
  const goToChapter = useCallback(
    (index: number) => {
      const tl = timelineRef.current;
      if (!tl) return;

      setActiveChapterIndex(index);
      setIsInteractiveMoving(true);

      const targetLabel = BOTANICAL_CHAPTERS[index].id;

      if (reducedMotion) {
        tl.seek(targetLabel);
        setIsInteractiveMoving(false);
      } else {
        tl.tweenTo(targetLabel, {
          duration: 1.1,
          ease: 'power2.inOut',
          onComplete: () => setIsInteractiveMoving(false),
        });
      }
    },
    [reducedMotion]
  );

  // Keyboard navigation for chapter tabs
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goToChapter((activeChapterIndex + 1) % BOTANICAL_CHAPTERS.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goToChapter((activeChapterIndex - 1 + BOTANICAL_CHAPTERS.length) % BOTANICAL_CHAPTERS.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToChapter(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToChapter(BOTANICAL_CHAPTERS.length - 1);
    }
  };

  const handleReplay = () => {
    const tl = timelineRef.current;
    if (!tl) return;
    setActiveChapterIndex(0);
    if (!reducedMotion) {
      tl.restart();
    } else {
      tl.progress(1.0);
      setActiveChapterIndex(4);
    }
  };

  const currentChapter = BOTANICAL_CHAPTERS[activeChapterIndex];

  return (
    <div
      ref={containerRef}
      className="w-full relative py-6 md:py-10"
      aria-label="Experiencia editorial interactiva de crecimiento botánico del Método RAÍZ"
    >
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-[11px] font-sans tracking-[0.28em] uppercase text-[#A18347] font-semibold block mb-3">
          EXPERIENCIA VISUAL · CRECIMIENTO BOTÁNICO
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#363D28] font-normal leading-snug">
          Todo lo que florece tiene una historia que lo sostiene.
        </h3>
        <p className="mt-3 text-xs sm:text-sm font-sans text-[#363D28]/70 font-light max-w-xl mx-auto">
          Una alegoría viva de cómo las decisiones visibles nacen del arraigo interior.
        </p>
      </div>

      {/* Main Botanical Canvas */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center">
        <svg
          ref={svgRef}
          viewBox="0 0 700 620"
          className="w-full h-auto max-h-[460px] sm:max-h-[540px] md:max-h-[580px] overflow-visible select-none"
          role="img"
          aria-label={`Ilustración botánica viva en la fase de ${currentChapter.name}: ${currentChapter.subtitle}`}
        >
          <defs>
            {/* Ocre fruit gradient for organic depth */}
            <radialGradient id="fruitGlow" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#C9AC73" />
              <stop offset="65%" stopColor="#A18347" />
              <stop offset="100%" stopColor="#7E632B" />
            </radialGradient>
          </defs>

          {/* Whispered Earth Horizon Line (y = 350) */}
          <g className="horizon-earth">
            {/* Soft textured horizon */}
            <path
              d="M 90 350 C 210 348 300 351 350 350 C 400 349 490 352 610 350"
              stroke="#78866A"
              strokeWidth="0.9"
              strokeDasharray="3 5"
              fill="none"
              opacity="0.45"
            />
            {/* Minimalist soil stipples echoing classic etching */}
            <circle cx="210" cy="365" r="1.1" fill="#78866A" opacity="0.3" />
            <circle cx="270" cy="380" r="0.9" fill="#78866A" opacity="0.25" />
            <circle cx="330" cy="368" r="1" fill="#78866A" opacity="0.35" />
            <circle cx="390" cy="375" r="0.9" fill="#78866A" opacity="0.25" />
            <circle cx="450" cy="365" r="1.1" fill="#78866A" opacity="0.3" />
            <circle cx="510" cy="385" r="0.9" fill="#78866A" opacity="0.2" />
          </g>

          {/* FASE 02: RAÍCES PROFUNDAS (Underground: y > 350) */}
          <g id="underground-roots" className="roots-system">
            {/* Taproot Principal (Vertical axis of grounding) */}
            <path
              d="M 350 350 C 349 375 352 405 348 440 C 344 478 353 518 350 565 C 348 584 351 598 350 610"
              fill="none"
              stroke="#363D28"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="root-draw taproot-primary"
            />

            {/* Raíces Laterales Principales */}
            <path
              d="M 349 365 C 328 395 300 425 265 455 C 232 482 195 508 165 528"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="root-draw root-lateral-main"
            />
            <path
              d="M 351 365 C 372 395 400 425 435 455 C 468 482 505 508 535 528"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="root-draw root-lateral-main"
            />
            <path
              d="M 348 410 C 322 445 292 480 255 515 C 230 538 205 560 185 575"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="root-draw root-lateral-main"
            />
            <path
              d="M 352 415 C 378 448 410 482 445 515 C 472 538 495 560 515 575"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="root-draw root-lateral-main"
            />

            {/* Raíces Secundarias Finas (Color Salvia #78866A) */}
            <path
              d="M 305 418 C 280 435 258 445 235 455"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 230 485 C 210 505 190 515 168 522"
              fill="none"
              stroke="#78866A"
              strokeWidth="1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 395 418 C 420 435 442 445 465 455"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 470 485 C 490 505 510 515 532 522"
              fill="none"
              stroke="#78866A"
              strokeWidth="1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 349 465 C 335 490 320 520 308 545"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 351 475 C 365 500 380 530 392 555"
              fill="none"
              stroke="#78866A"
              strokeWidth="1.1"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 350 540 C 342 560 334 580 328 600"
              fill="none"
              stroke="#78866A"
              strokeWidth="0.9"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
            <path
              d="M 350 550 C 358 570 366 590 372 605"
              fill="none"
              stroke="#78866A"
              strokeWidth="0.9"
              strokeLinecap="round"
              className="root-draw root-secondary"
            />
          </g>

          {/* FASE 01: SEMILLA BOTÁNICA (Germination Node at 350, 345) */}
          <g className="botanical-seed">
            <ellipse
              cx="350"
              cy="344"
              rx="8.5"
              ry="11"
              fill="#A18347"
              fillOpacity="0.22"
            />
            <path
              d="M 350 334 C 356 334 360 341 359 348 C 358 353 352 357 346 355 C 341 352 343 343 350 334 Z"
              fill="#A18347"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M 349 338 Q 353 344 348 350"
              fill="none"
              stroke="#363D28"
              strokeWidth="0.9"
              opacity="0.75"
            />
          </g>

          {/* FASE 03: TRONCO Y BROTE (Above Ground: y from 350 to 50) */}
          <g id="trunk-and-sprout">
            {/* Trunk with natural, organic curvature */}
            <path
              d="M 350 334 C 351 300 347 265 352 220 C 356 175 348 125 350 55"
              fill="none"
              stroke="#363D28"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="stem-draw trunk-main"
            />

            {/* Cotiledón inferior izquierdo */}
            <g className="cotyledon-group">
              <path
                d="M 349 300 C 332 294 322 286 316 278 C 326 280 339 288 349 298 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 349 299 Q 330 289 317 279"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.7"
              />
            </g>

            {/* Cotiledón inferior derecho */}
            <g className="cotyledon-group">
              <path
                d="M 351 294 C 368 288 378 280 384 272 C 374 274 361 282 351 292 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path
                d="M 351 293 Q 370 283 383 273"
                fill="none"
                stroke="#78866A"
                strokeWidth="0.7"
              />
            </g>
          </g>

          {/* FASE 04: RAMAS Y HOJAS (Foliage canopy) */}
          <g id="canopy-branches-and-leaves">
            {/* Tier 1 Lower Branches */}
            <path
              d="M 350 250 C 315 232 272 224 225 230 C 190 236 160 252 135 268"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.9"
              strokeLinecap="round"
              className="branch-draw branch-lower-tier"
            />
            <path
              d="M 351 238 C 385 220 428 212 475 218 C 510 224 540 240 565 256"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.9"
              strokeLinecap="round"
              className="branch-draw branch-lower-tier"
            />

            {/* Tier 2 Middle Branches */}
            <path
              d="M 351 185 C 318 162 278 152 235 158 C 200 164 170 178 145 192"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="branch-draw branch-lower-tier"
            />
            <path
              d="M 352 170 C 385 148 425 140 468 146 C 502 152 532 168 555 182"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.7"
              strokeLinecap="round"
              className="branch-draw branch-lower-tier"
            />

            {/* Tier 3 Upper Branches */}
            <path
              d="M 350 125 C 320 102 285 95 250 100 C 225 106 202 118 185 130"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="branch-draw branch-upper-tier"
            />
            <path
              d="M 351 112 C 380 90 415 84 450 90 C 475 96 498 106 515 118"
              fill="none"
              stroke="#363D28"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="branch-draw branch-upper-tier"
            />

            {/* Delicate Botanical Leaves with Salvia Spine */}
            {/* Tier 1 Left Leaves */}
            <g className="foliage-leaf">
              <path
                d="M 275 225 C 262 208 248 200 232 196 C 240 210 252 224 273 227 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 273 226 Q 252 210 233 197" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 225 230 C 206 222 192 212 178 210 C 187 223 200 234 223 232 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 223 231 Q 200 221 179 211" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 135 268 C 116 274 102 270 92 262 C 105 257 120 257 133 266 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 133 267 Q 114 264 93 263" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>

            {/* Tier 1 Right Leaves */}
            <g className="foliage-leaf">
              <path
                d="M 428 213 C 441 196 455 189 471 185 C 463 199 451 213 430 215 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 430 214 Q 451 199 470 186" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 475 218 C 494 210 508 200 522 198 C 513 211 500 222 477 220 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 477 219 Q 500 209 521 199" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 565 256 C 584 262 598 258 608 250 C 595 245 580 245 567 254 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 567 255 Q 586 252 607 251" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>

            {/* Tier 2 Mid Leaves */}
            <g className="foliage-leaf">
              <path
                d="M 278 154 C 261 137 247 131 231 131 C 241 145 253 157 276 156 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 276 155 Q 255 143 232 132" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 145 192 C 126 196 112 190 102 182 C 116 179 132 181 143 190 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 143 191 Q 124 187 103 183" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 425 142 C 442 125 456 118 472 118 C 462 132 450 144 427 144 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 427 143 Q 448 131 471 119" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 555 182 C 574 186 588 180 598 172 C 584 169 568 171 557 180 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 557 181 Q 576 177 597 173" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>

            {/* Tier 3 Upper Leaves */}
            <g className="foliage-leaf">
              <path
                d="M 250 100 C 228 92 215 84 204 75 C 219 76 236 85 248 98 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 248 97 Q 226 85 205 76" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 450 90 C 472 82 485 74 496 65 C 481 66 464 75 452 88 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 452 87 Q 474 75 495 66" fill="none" stroke="#78866A" strokeWidth="0.75" />
            </g>

            {/* Apical Crown Shoots at Top (350, 55) */}
            <g className="foliage-leaf">
              <path
                d="M 350 55 C 343 38 336 28 327 22 C 340 24 352 33 352 52 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 351 50 Q 341 33 328 23" fill="none" stroke="#78866A" strokeWidth="0.7" />
            </g>
            <g className="foliage-leaf">
              <path
                d="M 350 55 C 357 38 364 28 373 22 C 360 24 348 33 348 52 Z"
                fill="#363D28"
                stroke="#363D28"
                strokeWidth="0.8"
              />
              <path d="M 349 50 Q 359 33 372 23" fill="none" stroke="#78866A" strokeWidth="0.7" />
            </g>
          </g>

          {/* FASE 05: FRUTOS EN OCRE MATE (#A18347) */}
          <g id="fruits-harvest">
            {/* Fruit 1: Lower Left Node */}
            <g className="fruit-cluster">
              <line x1="185" y1="245" x2="180" y2="258" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="178" cy="263" r="6.2" fill="url(#fruitGlow)" />
              <circle cx="176.5" cy="261" r="1.6" fill="#F2EBDD" fillOpacity="0.4" />
              <path d="M 176 258 Q 178 260 180 258" fill="none" stroke="#363D28" strokeWidth="0.75" />
            </g>

            {/* Fruit 2: Lower Right Node */}
            <g className="fruit-cluster">
              <line x1="515" y1="235" x2="520" y2="248" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="522" cy="253" r="6.2" fill="url(#fruitGlow)" />
              <circle cx="520.5" cy="251" r="1.6" fill="#F2EBDD" fillOpacity="0.4" />
              <path d="M 520 248 Q 522 250 524 248" fill="none" stroke="#363D28" strokeWidth="0.75" />
            </g>

            {/* Fruit 3: Mid Left Node */}
            <g className="fruit-cluster">
              <line x1="190" y1="175" x2="185" y2="188" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="183" cy="193" r="5.5" fill="url(#fruitGlow)" />
              <circle cx="181.5" cy="191" r="1.5" fill="#F2EBDD" fillOpacity="0.4" />
              <path d="M 181 188 Q 183 190 185 188" fill="none" stroke="#363D28" strokeWidth="0.7" />
            </g>

            {/* Fruit 4: Mid Right Node */}
            <g className="fruit-cluster">
              <line x1="505" y1="165" x2="510" y2="178" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="512" cy="183" r="5.5" fill="url(#fruitGlow)" />
              <circle cx="510.5" cy="181" r="1.5" fill="#F2EBDD" fillOpacity="0.4" />
              <path d="M 510 178 Q 512 180 514 178" fill="none" stroke="#363D28" strokeWidth="0.7" />
            </g>

            {/* Fruit 5: Upper Left Node */}
            <g className="fruit-cluster">
              <line x1="280" y1="108" x2="275" y2="119" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="273" cy="124" r="5" fill="url(#fruitGlow)" />
              <circle cx="271.5" cy="122.5" r="1.3" fill="#F2EBDD" fillOpacity="0.4" />
            </g>

            {/* Fruit 6: Upper Right Node */}
            <g className="fruit-cluster">
              <line x1="420" y1="98" x2="425" y2="109" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="427" cy="114" r="5" fill="url(#fruitGlow)" />
              <circle cx="425.5" cy="112.5" r="1.3" fill="#F2EBDD" fillOpacity="0.4" />
            </g>

            {/* Fruit 7: Crown Summit */}
            <g className="fruit-cluster">
              <line x1="350" y1="60" x2="350" y2="70" stroke="#363D28" strokeWidth="0.9" />
              <circle cx="350" cy="75" r="5.2" fill="url(#fruitGlow)" />
              <circle cx="348.5" cy="73.5" r="1.4" fill="#F2EBDD" fillOpacity="0.4" />
            </g>
          </g>
        </svg>
      </div>

      {/* Editorial Chapter Timeline Navigation */}
      <div className="w-full max-w-3xl mx-auto mt-6 sm:mt-8">
        {/* Continuous Hairline Timeline with 5 interactive chapter markers */}
        <div
          role="tablist"
          aria-label="Capítulos de la evolución botánica"
          onKeyDown={handleKeyDown}
          className="relative pt-6 pb-4"
        >
          {/* Subtle background connecting line */}
          <div
            className="absolute top-[35px] left-4 right-4 h-px bg-[#363D28]/15"
            aria-hidden="true"
          />

          {/* Active progress track */}
          <div
            className="absolute top-[35px] left-4 h-px bg-[#A18347] transition-all duration-500 ease-out"
            style={{
              width: `calc(${(activeChapterIndex / (BOTANICAL_CHAPTERS.length - 1)) * 100}% * ((100% - 32px) / 100%))`,
            }}
            aria-hidden="true"
          />

          {/* Chapter Selector Nodes */}
          <div className="relative flex justify-between items-start gap-1">
            {BOTANICAL_CHAPTERS.map((chapter, idx) => {
              const isActive = idx === activeChapterIndex;
              const isPast = idx <= activeChapterIndex;

              return (
                <button
                  key={chapter.id}
                  type="button"
                  role="tab"
                  id={`botanical-chapter-tab-${chapter.id}`}
                  aria-selected={isActive}
                  aria-controls="botanical-chapter-panel"
                  onClick={() => goToChapter(idx)}
                  className="group flex flex-col items-center text-center focus-visible:outline-2 focus-visible:outline-[#363D28] rounded-sm transition-all duration-300 max-w-[80px] sm:max-w-[120px] px-1 cursor-pointer"
                >
                  {/* Indicator Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 mb-2.5 ${
                      isActive
                        ? 'border-[#A18347] bg-[#A18347] scale-110 shadow-xs'
                        : isPast
                        ? 'border-[#363D28]/40 bg-[#FAF7F2] group-hover:border-[#363D28]'
                        : 'border-[#363D28]/20 bg-[#FAF7F2] group-hover:border-[#363D28]/50'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive
                          ? 'bg-[#FAF7F2]'
                          : isPast
                          ? 'bg-[#363D28]/60'
                          : 'bg-transparent group-hover:bg-[#363D28]/30'
                      }`}
                    />
                  </div>

                  {/* Chapter Number */}
                  <span
                    className={`text-[10px] font-mono tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-[#A18347] font-semibold'
                        : 'text-[#363D28]/40 group-hover:text-[#363D28]/70'
                    }`}
                  >
                    {chapter.number}
                  </span>

                  {/* Chapter Label */}
                  <span
                    className={`text-xs sm:text-sm font-serif tracking-tight mt-0.5 transition-colors duration-300 line-clamp-1 ${
                      isActive
                        ? 'text-[#363D28] font-semibold'
                        : 'text-[#363D28]/60 group-hover:text-[#363D28]'
                    }`}
                  >
                    {chapter.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Seamless Narrative Box (Fade transition between phases) */}
        <div
          id="botanical-chapter-panel"
          role="tabpanel"
          aria-labelledby={`botanical-chapter-tab-${currentChapter.id}`}
          className="mt-6 pt-6 border-t border-[#363D28]/12 text-center max-w-2xl mx-auto px-4 min-h-[140px] flex flex-col justify-center"
        >
          <div
            key={currentChapter.id}
            className="transition-opacity duration-500 ease-out"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[11px] font-sans tracking-[0.22em] uppercase text-[#A18347] font-semibold">
                Capítulo {currentChapter.number} · {currentChapter.name}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl md:text-2xl font-serif text-[#363D28] font-medium mb-3">
              «{currentChapter.subtitle}»
            </h4>

            <p className="text-xs sm:text-sm md:text-base font-sans text-[#363D28]/80 font-light leading-relaxed max-w-xl mx-auto">
              {currentChapter.reflection}
            </p>
          </div>
        </div>

        {/* Quiet Replay Action */}
        <div className="mt-8 flex justify-center items-center">
          <button
            type="button"
            onClick={handleReplay}
            disabled={isInteractiveMoving}
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-sans tracking-widest uppercase text-[#363D28]/60 hover:text-[#363D28] transition-colors py-1.5 focus-visible:outline-2 focus-visible:outline-[#363D28] cursor-pointer"
            title="Volver a contemplar la secuencia desde el origen"
          >
            <RotateCcw className="w-3.5 h-3.5 stroke-[1.6]" />
            <span>Volver a contemplar el crecimiento completo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
