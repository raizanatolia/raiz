/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PersonasPage from './pages/PersonasPage';
import OrganizacionesPage from './pages/OrganizacionesPage';
import SobreMiPage from './pages/SobreMiPage';
import MetodoRaizPage from './pages/MetodoRaizPage';
import CursosRetosPage from './pages/CursosRetosPage';
import MapaRaizPage from './pages/MapaRaizPage';
import ViajeRaizPage from './pages/ViajeRaizPage';
import ContactoPage from './pages/ContactoPage';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';
import LibroReclamacionesPage from './pages/LibroReclamacionesPage';
import { PageId, PAGE_METADATA, SITE_URL } from './data/content';

export function resolvePageFromUrl(): PageId {
  if (typeof window === 'undefined') return 'home';

  // 1. Check path (HTML5 real URLs e.g. /raiz/personas/ or /personas/)
  const pathname = window.location.pathname.replace(/\/+$/, '');
  const pathParts = pathname.split('/').filter(Boolean);
  // If running under /raiz/, the page is the part after 'raiz'
  const lastPart = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';

  const validPages: Record<string, PageId> = {
    personas: 'personas',
    organizaciones: 'organizaciones',
    'sobre-mi': 'sobre-mi',
    'metodo-raiz': 'metodo-raiz',
    'cursos-retos': 'cursos-retos',
    'mapa-raiz': 'mapa-raiz',
    'viaje-raiz': 'viaje-raiz',
    contacto: 'contacto',
    'politica-de-privacidad': 'politica-de-privacidad',
    'libro-de-reclamaciones': 'libro-de-reclamaciones',
  };

  if (lastPart && validPages[lastPart]) {
    return validPages[lastPart];
  }

  // 2. Check hash for backwards-compatibility (#/personas)
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  const mainHashPart = rawHash.split('#')[0].split('?')[0].replace(/^\//, '');

  if (mainHashPart === 'formulario-organizaciones') return 'organizaciones';
  if (mainHashPart === 'formulario-personas') return 'personas';

  if (mainHashPart && validPages[mainHashPart]) {
    return validPages[mainHashPart];
  }

  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(resolvePageFromUrl);

  const getBasePath = useCallback(() => {
    if (typeof window === 'undefined') return '';
    return window.location.pathname.startsWith('/raiz') ? '/raiz' : '';
  }, []);

  const handleNavigate = useCallback(
    (page: PageId) => {
      setCurrentPage(page);
      if (typeof window !== 'undefined') {
        const base = getBasePath();
        const newPath = page === 'home' ? (base ? `${base}/` : '/') : `${base}/${page}/`;
        try {
          window.history.pushState({ page }, '', newPath);
        } catch {
          // Fallback if browser pushState fails
          window.location.hash = page === 'home' ? '#/' : `#/${page}`;
        }
      }
    },
    [getBasePath]
  );

  // Sync on browser forward/back (popstate & hashchange)
  useEffect(() => {
    const handleRouteChange = () => {
      const page = resolvePageFromUrl();
      setCurrentPage(page);

      // Check anchor targets
      const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
      if (rawHash === 'formulario-organizaciones' || rawHash.endsWith('formulario-organizaciones')) {
        setTimeout(() => {
          document.getElementById('formulario-organizaciones')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (rawHash === 'formulario-personas' || rawHash.endsWith('formulario-personas')) {
        setTimeout(() => {
          document.getElementById('formulario-personas')?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  // Sync SEO Metadata in client hydration
  useEffect(() => {
    const meta = PAGE_METADATA[currentPage] || PAGE_METADATA.home;
    document.title = meta.title;

    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(selector.startsWith('meta') ? 'meta' : 'link');
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMetaTag('meta[name="description"]', 'content', meta.description);
    setMetaTag('meta[property="og:title"]', 'content', meta.title);
    setMetaTag('meta[property="og:description"]', 'content', meta.description);
    setMetaTag('meta[property="og:url"]', 'content', meta.canonical);
    setMetaTag('meta[property="og:image"]', 'content', meta.ogImage);
    setMetaTag('link[rel="canonical"]', 'href', meta.canonical);
    setMetaTag('meta[name="twitter:title"]', 'content', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'content', meta.description);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2EBDD] text-[#363D28] font-sans antialiased selection:bg-[#363D28] selection:text-[#F2EBDD]">
      {/* Primary Header with official horizontal logo and prominent CTA */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View with Semantic Structure */}
      <main id="contenido-principal" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'personas' && <PersonasPage onNavigate={handleNavigate} />}
        {currentPage === 'organizaciones' && <OrganizacionesPage onNavigate={handleNavigate} />}
        {currentPage === 'sobre-mi' && <SobreMiPage onNavigate={handleNavigate} />}
        {currentPage === 'metodo-raiz' && <MetodoRaizPage onNavigate={handleNavigate} />}
        {currentPage === 'cursos-retos' && <CursosRetosPage onNavigate={handleNavigate} />}
        {currentPage === 'mapa-raiz' && <MapaRaizPage onNavigate={handleNavigate} />}
        {currentPage === 'viaje-raiz' && <ViajeRaizPage onNavigate={handleNavigate} />}
        {currentPage === 'contacto' && <ContactoPage onNavigate={handleNavigate} />}
        {currentPage === 'politica-de-privacidad' && <PoliticaPrivacidadPage onNavigate={handleNavigate} />}
        {currentPage === 'libro-de-reclamaciones' && <LibroReclamacionesPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} currentPage={currentPage} />
    </div>
  );
}
