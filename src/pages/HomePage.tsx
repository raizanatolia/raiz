import { PageId } from '../data/content';
import Hero from '../components/Hero';
import AboutHomeSection from '../components/AboutHomeSection';
import ConnectionSection from '../components/ConnectionSection';
import SenseOfRaizSection from '../components/SenseOfRaizSection';
import ApproachSection from '../components/ApproachSection';
import OfferSection from '../components/OfferSection';
import FaqSection from '../components/FaqSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 01. Hero & SÍGUEME EN REDES */}
      <Hero onNavigate={onNavigate} />

      {/* 02. Historia y Manifiesto: «Era tan normal estar para todo y todos» */}
      <AboutHomeSection onNavigate={onNavigate} />

      {/* 03. Identificación: «Una pausa para mirarte» */}
      <ConnectionSection onNavigate={onNavigate} />

      {/* 04 & 05. Qué es RAÍZ (El sentido de RAÍZ) y Dos caminos (Personas y Organizaciones) */}
      <SenseOfRaizSection onNavigate={onNavigate} />

      {/* 06 & 07. El Método RAÍZ (progresión botánica) y Mapa RAÍZ (los cinco recursos) */}
      <ApproachSection onNavigate={onNavigate} />

      {/* 08. Oferta principal: «EXPLORA RAÍZ» (Método RAÍZ, Cursos & Retos, Bitácora RAÍZ) */}
      <OfferSection onNavigate={onNavigate} />

      {/* 09. Preguntas frecuentes */}
      <FaqSection />
    </div>
  );
}
