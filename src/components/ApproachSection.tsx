import { PageId } from '../data/content';
import { ArrowRight, Compass, Heart, CompassIcon, BatteryCharging, CheckCircle2 } from 'lucide-react';
import BotanicalGrowthSection from './BotanicalGrowthSection';
import { CardCarousel, ResourceCardItem } from '@/components/ui/card-carousel';

import imgPerspectiva from '../assets/images/res_perspectiva_1792786331873.jpg';
import imgEmocional from '../assets/images/res_emocional_1792786333298.jpg';
import imgDireccion from '../assets/images/res_direccion_1792786333155.jpg';
import imgEnergia from '../assets/images/res_energia_1792786333532.jpg';
import imgAccion from '../assets/images/res_accion_1792786334539.jpg';

const RESOURCES: ResourceCardItem[] = [
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

interface ApproachSectionProps {
  onNavigate: (page: PageId) => void;
}

export default function ApproachSection({ onNavigate }: ApproachSectionProps) {
  const handleNavigateToMap = () => {
    window.location.hash = '#/mapa-raiz';
    onNavigate('mapa-raiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="enfoque" className="py-20 md:py-28 bg-[#EAE2D2]/40 border-t border-[#363D28]/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 05. El Método RAÍZ */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans tracking-[0.24em] uppercase text-[#A18347] font-semibold block mb-3">
            EL MÉTODO RAÍZ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#363D28] leading-tight mb-6">
            El crecimiento comienza{' '}
            <span className="italic block sm:inline">por la raíz.</span>
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#363D28]/85 font-light leading-relaxed mb-6">
            El Método RAÍZ orienta un proceso de reflexión y acción para reconocer lo que influye en nuestras
            decisiones y explorar nuevas posibilidades.
          </p>

          <button
            type="button"
            onClick={handleNavigateToMap}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#363D28] hover:text-[#A18347] transition-colors py-1.5 border-b border-[#363D28]/40 hover:border-[#A18347]"
          >
            <span>Conoce el Método RAÍZ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Metáfora interactiva de crecimiento botánico (SVG + GSAP) */}
        <div className="mb-20">
          <BotanicalGrowthSection />
        </div>

        {/* 06. Mapa RAÍZ: los cinco recursos con CardCarousel */}
        <div className="pt-4">
          <CardCarousel
            items={RESOURCES}
            badgeText="PUNTO DE PARTIDA"
            title="Cinco recursos para mirar tu punto de partida"
            subtitle="Cinco recursos fundamentales que influyen en cada una de tus elecciones cotidianas."
            onNavigateToMap={handleNavigateToMap}
            onSelectResource={() => handleNavigateToMap()}
          />
        </div>
      </div>
    </section>
  );
}
