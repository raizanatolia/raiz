import { PageId } from '../data/content';
import Hero from '../components/Hero';
import AboutHomeSection from '../components/AboutHomeSection';
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

      {/* 03. Oferta principal: «EXPLORA RAÍZ» */}
      <OfferSection onNavigate={onNavigate} />

      {/* 04. Preguntas frecuentes */}
      <FaqSection />
    </div>
  );
}
