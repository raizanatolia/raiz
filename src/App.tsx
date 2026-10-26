/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PersonasPage from './pages/PersonasPage';
import OrganizacionesPage from './pages/OrganizacionesPage';
import SobreMiPage from './pages/SobreMiPage';
import MapaRaizPage from './pages/MapaRaizPage';
import ViajeRaizPage from './pages/ViajeRaizPage';
import ContactoPage from './pages/ContactoPage';
import { PageId, PAGE_METADATA } from './data/content';

function getPageFromHash(): PageId {
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  const mainPart = rawHash.split('#')[0].split('?')[0].replace(/^\//, '');

  if (mainPart === 'formulario-organizaciones') return 'organizaciones';
  if (mainPart === 'formulario-personas') return 'personas';

  switch (mainPart) {
    case 'personas':
      return 'personas';
    case 'organizaciones':
      return 'organizaciones';
    case 'sobre-mi':
      return 'sobre-mi';
    case 'mapa-raiz':
      return 'mapa-raiz';
    case 'viaje-raiz':
      return 'viaje-raiz';
    case 'contacto':
      return 'contacto';
    default:
      return 'home';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);

  // Sync route on hashchange (browser forward/back)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);

      // Check if there is an anchor element to scroll to
      const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
      if (rawHash === 'formulario-organizaciones' || rawHash.endsWith('#formulario-organizaciones')) {
        setTimeout(() => {
          document.getElementById('formulario-organizaciones')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (rawHash === 'formulario-personas' || rawHash.endsWith('#formulario-personas')) {
        setTimeout(() => {
          document.getElementById('formulario-personas')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync SEO Title & Meta Description on active page change
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;
    document.title = meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EBDD] text-[#363D28] font-sans antialiased selection:bg-[#363D28] selection:text-[#F2EBDD]">
      {/* Primary Header with official horizontal logo and prominent CTA */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View */}
      <main id="contenido-principal" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'personas' && <PersonasPage onNavigate={handleNavigate} />}
        {currentPage === 'organizaciones' && <OrganizacionesPage onNavigate={handleNavigate} />}
        {currentPage === 'sobre-mi' && <SobreMiPage onNavigate={handleNavigate} />}
        {currentPage === 'mapa-raiz' && <MapaRaizPage onNavigate={handleNavigate} />}
        {currentPage === 'viaje-raiz' && <ViajeRaizPage onNavigate={handleNavigate} />}
        {currentPage === 'contacto' && <ContactoPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
