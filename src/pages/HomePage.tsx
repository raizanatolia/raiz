import { PageId } from '../data/content';
import Hero from '../components/Hero';
import ConnectionSection from '../components/ConnectionSection';
import SenseOfRaizSection from '../components/SenseOfRaizSection';
import ApproachSection from '../components/ApproachSection';
import OfferSection from '../components/OfferSection';
import AboutHomeSection from '../components/AboutHomeSection';
import FaqSection from '../components/FaqSection';
import CloseCtaSection from '../components/CloseCtaSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 01. Hero: Nuevo copy y background sin fotografía de personas */}
      <Hero onNavigate={onNavigate} />

      {/* 02. Identificación: «Una pausa para mirarte» */}
      <ConnectionSection onNavigate={onNavigate} />

      {/* 03 & 04. Qué es RAÍZ (El sentido de RAÍZ) y Dos caminos (Personas y Organizaciones) */}
      <SenseOfRaizSection onNavigate={onNavigate} />

      {/* 05 & 06. El Método RAÍZ (progresión botánica) y Mapa RAÍZ (los cinco recursos) */}
      <ApproachSection onNavigate={onNavigate} />

      {/* 07. Oferta principal: Mapa RAÍZ, Viaje RAÍZ y Bitácora RAÍZ */}
      <OfferSection onNavigate={onNavigate} />

      {/* 08. Sobre Anatolia: Conexión humana e invitación a su historia */}
      <AboutHomeSection onNavigate={onNavigate} />

      {/* 09. Preguntas frecuentes */}
      <FaqSection />

      {/* 10. Cierre: Cada decisión deja una huella */}
      <CloseCtaSection onNavigate={onNavigate} />
    </div>
  );
}
