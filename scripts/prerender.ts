/**
 * Static Pre-rendering & SEO/AEO Engine for GitHub Pages
 * RAÍZ · Anatolia Zapata
 *
 * Generates:
 * - dist/index.html (Prerendered Home)
 * - dist/[page]/index.html for each route with unique metadata, canonical, OG, Twitter, and Schema.org JSON-LD
 * - dist/404.html (GitHub Pages SPA fallback router)
 * - dist/sitemap.xml (Comprehensive, valid sitemap)
 * - dist/robots.txt (Crawler directives)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

export const SITE_URL = 'https://raizanatolia.github.io/raiz';

export const OFFICIAL_OG_IMAGE =
  'https://res.cloudinary.com/rus3f4tb/image/upload/v1793378140/og-anatolia-zapata-raiz-lq.jpg';
export const OFFICIAL_OG_IMAGE_ALT =
  'RAÍZ · Anatolia Zapata · Espacio de acompañamiento para tomar decisiones con mayor conciencia';
export const OFFICIAL_OG_WIDTH = 1200;
export const OFFICIAL_OG_HEIGHT = 630;
export const OFFICIAL_OG_TYPE = 'image/jpeg';

interface RouteConfig {
  id: string;
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  h1: string;
  priority: string;
  changefreq: string;
  getStaticBody: () => string;
  getSchemaJson: () => object[];
}

const SHARED_ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'RAÍZ',
  alternateName: 'RAÍZ · Anatolia Zapata',
  url: `${SITE_URL}/`,
  logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png',
  image: OFFICIAL_OG_IMAGE,
  email: 'raizanatolia@gmail.com',
  sameAs: [
    'https://www.instagram.com/anatoliazapata/',
    'https://www.tiktok.com/@anatoliacoach',
    'https://www.youtube.com/@anatoliazapatap',
    'https://pe.linkedin.com/in/anatolia-%C3%BArsula-zapata-paiva-939786142',
  ],
  founder: {
    '@id': `${SITE_URL}/#person`,
  },
};

const SHARED_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Anatolia Zapata',
  alternateName: 'Anatolia Úrsula Zapata Paiva',
  jobTitle: 'Ingeniera industrial, Coach y Creadora del Método RAÍZ',
  description:
    'Mamá de dos, ingeniera industrial, coach y fundadora de RAÍZ. Acompaña procesos de toma de decisiones conscientes, liderazgo y bienestar personal y organizacional.',
  email: 'raizanatolia@gmail.com',
  url: `${SITE_URL}/sobre-mi/`,
  image: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
  sameAs: [
    'https://www.instagram.com/anatoliazapata/',
    'https://www.tiktok.com/@anatoliacoach',
    'https://www.youtube.com/@anatoliazapatap',
    'https://pe.linkedin.com/in/anatolia-%C3%BArsula-zapata-paiva-939786142',
  ],
  worksFor: {
    '@id': `${SITE_URL}/#organization`,
  },
};

const SHARED_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'RAÍZ · Anatolia Zapata',
  url: `${SITE_URL}/`,
  description:
    'Comprende qué influye en tus decisiones, reconoce tus recursos internos y construye tu siguiente etapa con RAÍZ y el acompañamiento de Anatolia Zapata.',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
  inLanguage: 'es-PE',
};

function makeWebPage(route: RouteConfig, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${route.canonical}#webpage`,
    url: route.canonical,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'es-PE',
  };
}

function makeBreadcrumbs(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

const FAQ_AEO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAÍZ es un espacio fundado por Anatolia Zapata que acompaña a personas y organizaciones a comprender qué influye en sus decisiones, reconocer sus recursos internos y construir su siguiente etapa con mayor conciencia, serenidad y claridad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Quién es Anatolia Zapata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anatolia Zapata es mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ. Integra su formación analítica con herramientas de desarrollo humano, programación neurolingüística y una mirada sensible para acompañar procesos de transformación personal y organizacional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el Método RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Método RAÍZ es una filosofía y metodología orientada a comprender desde dónde decidimos, reconociendo tres momentos clave: comprender tu historia, reconocer tus recursos y elegir con conciencia. No impone fórmulas rígidas, sino que ayuda a desactivar automatismos y reconectar con lo que de verdad valoras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia existe entre el Método RAÍZ y el Mapa RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Método RAÍZ es la metodología y mirada global que guía todos los procesos de acompañamiento de Anatolia Zapata. El Mapa RAÍZ es una herramienta digital interactiva de autoexploración personal y punto de partida que permite observar el estado actual de tus cinco recursos cotidianos (Perspectiva, Gestión emocional, Dirección, Energía vital y Acción consistente). Es una herramienta reflexiva y no constituye diagnóstico ni tratamiento psicológico o médico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el Mapa RAÍZ y qué evalúa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Mapa RAÍZ es una herramienta reflexiva para observar cinco recursos clave: Perspectiva (cómo interpretas las situaciones), Gestión emocional (cómo regulas lo que sientes), Dirección (cómo defines tus prioridades), Energía vital (cómo cuidas tu vitalidad) y Acción consistente (cómo sostienes tus acuerdos). Permite identificar tu punto de partida antes de iniciar un proceso de cambio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es Viaje RAÍZ y cuántas sesiones incluye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Viaje RAÍZ es el programa insignia de acompañamiento individual de Anatolia Zapata. Consta de 12 sesiones individuales a lo largo de 3 meses en las que se profundiza en tu historia, tus recursos y la construcción de acuerdos sostenibles. Cuenta con un plan base (US$1,200), una modalidad con sesión estratégica de acción (US$1,350) y una opción de continuidad con sesiones de seguimiento a los 6 y 12 meses (US$1,600).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la Bitácora RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Bitácora RAÍZ es una herramienta de escritura y reflexión personal creada para pausar, ordenar pensamientos y registrar el avance en tus decisiones. Está disponible en formato impreso para Perú (US$33) y en formato digital descargable PDF (US$17).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo acompaña RAÍZ a las organizaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mediante talleres prácticos, conferencias inspiradoras y programas de acompañamiento a medida sobre bienestar integral, liderazgo consciente, toma de decisiones y cultura de cuidado en los equipos de trabajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para quién está dirigido RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Está dirigido a personas (principalmente mujeres) que atraviesan transiciones de vida o encrucijadas personales o profesionales y desean elegir con mayor coherencia interna, y a organizaciones interesadas en cultivar equipos más humanos, colaborativos y conscientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo puedo ponerme en contacto con Anatolia Zapata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes escribir directamente a raizanatolia@gmail.com o enviar un mensaje a través del formulario oficial de contacto en la web para coordinar una conversación inicial sin compromiso.',
      },
    },
  ],
};

const ROUTES: RouteConfig[] = [
  {
    id: 'home',
    path: '',
    title: 'RAÍZ · Anatolia Zapata | Decide con Mayor Conciencia',
    description:
      'Descubre qué influye en tus decisiones, reconoce tus recursos internos y construye tu siguiente etapa con RAÍZ y el acompañamiento de Anatolia Zapata.',
    canonical: `${SITE_URL}/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Sabes que necesitas un cambio. Es momento de descubrir qué quieres construir.',
    priority: '1.0',
    changefreq: 'weekly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      SHARED_PERSON_SCHEMA,
      SHARED_WEBSITE_SCHEMA,
      FAQ_AEO_SCHEMA,
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: 'RAÍZ · Anatolia Zapata | Decide con Mayor Conciencia',
        description:
          'Descubre qué influye en tus decisiones, reconoce tus recursos internos y construye tu siguiente etapa con RAÍZ y el acompañamiento de Anatolia Zapata.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'es-PE',
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-sans font-black text-[#222918] uppercase tracking-tight mb-4">Tus Decisiones También Tienen RAÍZ.</h1>
        <p class="text-lg font-sans text-[#2E3622]/90 font-medium leading-relaxed max-w-xl mx-auto mb-6">
          Descubre qué influye en tus decisiones y empieza a construir lo que sí quieres.
        </p>
        <div class="inline-block bg-[#5A6836] text-[#FAF7F2] font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full">
          MAPA RAÍZ
        </div>
      </header>
    `,
  },
  {
    id: 'metodo-raiz',
    path: 'metodo-raiz',
    title: 'Método RAÍZ | Filosofía y Toma de Decisiones Conscientes',
    description:
      'Conoce la metodología creada por Anatolia Zapata: comprender tu historia, reconocer tus recursos y elegir con conciencia el camino que quieres construir.',
    canonical: `${SITE_URL}/metodo-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'El Método RAÍZ. Filosofía y Metodología de Toma de Decisiones.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'metodo-raiz',
        path: 'metodo-raiz',
        title: 'Método RAÍZ | Filosofía y Toma de Decisiones Conscientes',
        description:
          'Conoce la metodología creada por Anatolia Zapata: comprender tu historia, reconocer tus recursos y elegir con conciencia el camino que quieres construir.',
        canonical: `${SITE_URL}/metodo-raiz/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'El Método RAÍZ',
        priority: '0.85',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Método RAÍZ', `${SITE_URL}/metodo-raiz/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#363D28] font-bold mb-3">MÉTODO RAÍZ</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#222918] leading-tight mb-6">El Método RAÍZ</h1>
        <p class="text-lg font-sans text-[#222918]/85 font-normal leading-relaxed max-w-2xl mb-8">
          Comprender desde dónde decides, reconocer tus recursos internos y elegir con conciencia el camino que quieres construir.
        </p>
      </header>
    `,
  },
  {
    id: 'cursos-retos',
    path: 'cursos-retos',
    title: 'Cursos y Retos | Aprendizaje y Reflexión · RAÍZ',
    description:
      'Explora talleres online y retos prácticos de autoexploración guiados por Anatolia Zapata para aprender a elegir a tu propio ritmo con mayor serenidad.',
    canonical: `${SITE_URL}/cursos-retos/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Cursos & Retos de Autoexploración Consciente.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'cursos-retos',
        path: 'cursos-retos',
        title: 'Cursos y Retos | Aprendizaje y Reflexión · RAÍZ',
        description:
          'Explora talleres online y retos prácticos de autoexploración guiados por Anatolia Zapata para aprender a elegir a tu propio ritmo con mayor serenidad.',
        canonical: `${SITE_URL}/cursos-retos/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Cursos & Retos',
        priority: '0.85',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Cursos & Retos', `${SITE_URL}/cursos-retos/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#363D28] font-bold mb-3">CURSOS & RETOS</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#222918] leading-tight mb-6">Cursos & Retos</h1>
        <p class="text-lg font-sans text-[#222918]/85 font-normal leading-relaxed max-w-2xl mb-8">
          Aprende, explora y pon en práctica nuevas formas de elegir. Espacios de aprendizaje flexible para avanzar a tu propio ritmo.
        </p>
      </header>
    `,
  },
  {
    id: 'organizaciones',
    path: 'organizaciones',
    title: 'RAÍZ para Organizaciones | Bienestar y Liderazgo Consciente',
    description:
      'Programas, conferencias y talleres a medida de desarrollo humano, bienestar y liderazgo consciente para equipos y organizaciones con Anatolia Zapata.',
    canonical: `${SITE_URL}/organizaciones/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Personas más conscientes para entornos más humanos.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'organizaciones',
        path: 'organizaciones',
        title: 'RAÍZ para Organizaciones | Bienestar y Liderazgo Consciente',
        description:
          'Programas, conferencias y talleres a medida de desarrollo humano, bienestar y liderazgo consciente para equipos y organizaciones con Anatolia Zapata.',
        canonical: `${SITE_URL}/organizaciones/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Personas más conscientes para entornos más humanos.',
        priority: '0.85',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Organizaciones', `${SITE_URL}/organizaciones/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'RAÍZ para Organizaciones',
        serviceType: 'Talleres, Conferencias y Programas de Desarrollo Humano, Bienestar y Liderazgo Consciente',
        provider: { '@id': `${SITE_URL}/#organization` },
        url: `${SITE_URL}/organizaciones/`,
        description:
          'Diseño y facilitación de experiencias a medida de bienestar integral, liderazgo consciente y toma de decisiones para equipos de trabajo.',
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">RAÍZ PARA ORGANIZACIONES</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#363D28] leading-tight mb-6">Personas más conscientes para entornos más humanos.</h1>
        <p class="text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
          Diseño y facilito experiencias de desarrollo humano, bienestar, liderazgo y género, adaptadas al contexto y las necesidades de cada organización.
        </p>
      </header>
    `,
  },
  {
    id: 'viaje-raiz',
    path: 'viaje-raiz',
    title: 'Viaje RAÍZ | Acompañamiento Individual de 12 Sesiones',
    description:
      'Proceso personalizado de 12 sesiones individuales durante 3 meses con Anatolia Zapata para comprender tu historia y construir tu siguiente capítulo.',
    canonical: `${SITE_URL}/viaje-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Viaje RAÍZ. Un espacio para comprender tus decisiones y construir con mayor conciencia.',
    priority: '0.9',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      SHARED_PERSON_SCHEMA,
      makeWebPage({
        id: 'viaje-raiz',
        path: 'viaje-raiz',
        title: 'Viaje RAÍZ | Acompañamiento Individual de 12 Sesiones',
        description:
          'Proceso personalizado de 12 sesiones individuales durante 3 meses con Anatolia Zapata para comprender tu historia y construir tu siguiente capítulo.',
        canonical: `${SITE_URL}/viaje-raiz/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Viaje RAÍZ',
        priority: '0.9',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Viaje RAÍZ', `${SITE_URL}/viaje-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Viaje RAÍZ · Acompañamiento individual de 12 sesiones',
        serviceType: 'Acompañamiento individual para la toma de decisiones conscientes',
        provider: { '@id': `${SITE_URL}/#person` },
        url: `${SITE_URL}/viaje-raiz/`,
        description:
          'Proceso personalizado de 12 sesiones individuales a lo largo de 3 meses, orientado a explorar tu historia, tus 5 recursos y la construcción de acuerdos sostenibles.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Viaje RAÍZ Base',
            price: '1200.00',
            priceCurrency: 'USD',
            description: '12 sesiones individuales para comprender tu historia y elegir qué quieres construir.',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Viaje RAÍZ + Acción',
            price: '1350.00',
            priceCurrency: 'USD',
            description: '12 sesiones individuales + una sesión estratégica para convertir tus descubrimientos en un plan de acción 10-10-10-1.',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Viaje RAÍZ Continuidad',
            price: '1600.00',
            priceCurrency: 'USD',
            description: '12 sesiones individuales + sesión estratégica de acción + dos sesiones de seguimiento (a los 6 y 12 meses).',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">ACOMPAÑAMIENTO PERSONALIZADO</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#363D28] leading-tight mb-6">Viaje RAÍZ. Un espacio para comprender tus decisiones y construir con mayor conciencia.</h1>
        <p class="text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
          Un proceso personalizado de 12 sesiones a lo largo de tres meses, orientado a explorar tu historia, tus recursos y las posibilidades que deseas construir.
        </p>
      </header>
    `,
  },
  {
    id: 'mapa-raiz',
    path: 'mapa-raiz',
    title: 'Mapa RAÍZ | Herramienta de Autoexploración Personal',
    description:
      'Explora tus 5 recursos cotidianos (Perspectiva, Emociones, Dirección, Energía y Acción) con el Mapa RAÍZ, la herramienta interactiva de Anatolia Zapata.',
    canonical: `${SITE_URL}/mapa-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: '¿Estás reaccionando o eligiendo?',
    priority: '0.9',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'mapa-raiz',
        path: 'mapa-raiz',
        title: 'Mapa RAÍZ | Herramienta de Autoexploración Personal',
        description:
          'Explora tus 5 recursos cotidianos (Perspectiva, Emociones, Dirección, Energía y Acción) con el Mapa RAÍZ, la herramienta interactiva de Anatolia Zapata.',
        canonical: `${SITE_URL}/mapa-raiz/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Mapa RAÍZ',
        priority: '0.9',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Mapa RAÍZ', `${SITE_URL}/mapa-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Mapa RAÍZ',
        applicationCategory: 'LifestyleApplication',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description:
          'Herramienta digital de autoexploración consciente sobre tus cinco recursos cotidianos: Perspectiva, Gestión emocional, Dirección, Energía vital y Acción consistente. Herramienta reflexiva sin carácter clínico ni diagnóstico médico.',
        url: `${SITE_URL}/mapa-raiz/`,
        provider: { '@id': `${SITE_URL}/#organization` },
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#363D28] font-bold mb-3">MAPA RAÍZ</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#222918] leading-tight mb-6">¿Estás reaccionando o eligiendo?</h1>
        <p class="text-lg font-sans text-[#222918]/85 font-normal leading-relaxed max-w-2xl mb-8">
          Tu historia influye en cómo interpretas lo que pasa, lo que sientes y las decisiones que tomas. El Mapa RAÍZ te ayuda a reconocer tu punto de partida y los recursos que puedes fortalecer.
        </p>
      </header>
    `,
  },
  {
    id: 'bitacora-raiz',
    path: 'bitacora-raiz',
    title: 'Bitácora RAÍZ | Espacio de Escritura y Reflexión',
    description:
      'Cuaderno guiado de escritura consciente para pausar, ordenar pensamientos y registrar tus decisiones. Disponible en edición física (Perú) y digital PDF.',
    canonical: `${SITE_URL}/bitacora-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'product',
    h1: 'Bitácora RAÍZ. Un espacio para volver a ti.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'bitacora-raiz',
        path: 'bitacora-raiz',
        title: 'Bitácora RAÍZ | Espacio de Escritura y Reflexión',
        description:
          'Cuaderno guiado de escritura consciente para pausar, ordenar pensamientos y registrar tus decisiones. Disponible en edición física (Perú) y digital PDF.',
        canonical: `${SITE_URL}/bitacora-raiz/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'product',
        h1: 'Bitácora RAÍZ',
        priority: '0.85',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Bitácora RAÍZ', `${SITE_URL}/bitacora-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Bitácora RAÍZ',
        description:
          'Herramienta de escritura y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.',
        brand: { '@id': `${SITE_URL}/#organization` },
        image: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793207342/channels4_profile.jpg',
        offers: [
          {
            '@type': 'Offer',
            name: 'Bitácora Física (Perú)',
            price: '33.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/bitacora-raiz/`,
          },
          {
            '@type': 'Offer',
            name: 'Bitácora Digital (PDF)',
            price: '17.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/bitacora-raiz/`,
          },
        ],
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto text-center">
        <p class="text-xs uppercase tracking-widest text-[#5A6836] font-bold mb-3">BITÁCORA RAÍZ</p>
        <h1 class="text-4xl md:text-5xl font-sans font-black text-[#222918] uppercase tracking-tight mb-4">Un espacio para volver a ti.</h1>
        <p class="text-lg font-sans text-[#363D28]/90 font-medium leading-relaxed max-w-xl mx-auto mb-6">
          Una herramienta de escritura y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.
        </p>
      </header>
    `,
  },
  {
    id: 'sobre-mi',
    path: 'sobre-mi',
    title: 'Sobre Mí | Anatolia Zapata · Creadora del Método RAÍZ',
    description:
      'Mamá de dos, ingeniera industrial, coach y fundadora de RAÍZ. Conoce la historia y vocación de Anatolia Zapata acompañando procesos de cambio consciente.',
    canonical: `${SITE_URL}/sobre-mi/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'profile',
    h1: 'Soy Anatolia Zapata.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_PERSON_SCHEMA,
      SHARED_ORG_SCHEMA,
      makeWebPage(
        {
          id: 'sobre-mi',
          path: 'sobre-mi',
          title: 'Sobre Mí | Anatolia Zapata · Creadora del Método RAÍZ',
          description:
            'Mamá de dos, ingeniera industrial, coach y fundadora de RAÍZ. Conoce la historia y vocación de Anatolia Zapata acompañando procesos de cambio consciente.',
          canonical: `${SITE_URL}/sobre-mi/`,
          ogImage: OFFICIAL_OG_IMAGE,
          ogType: 'profile',
          h1: 'Soy Anatolia Zapata.',
          priority: '0.85',
          changefreq: 'monthly',
          getStaticBody: () => '',
          getSchemaJson: () => [],
        },
        'AboutPage'
      ),
      makeBreadcrumbs('Sobre mí', `${SITE_URL}/sobre-mi/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">CONOCE MI HISTORIA</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#363D28] leading-tight mb-6">Soy Anatolia Zapata.</h1>
        <p class="text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
          Aprendí que cuidar a quienes amas no debería significar dejar de elegirte a ti misma. Mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.
        </p>
      </header>
    `,
  },
  {
    id: 'contacto',
    path: 'contacto',
    title: 'Contacto | Conversemos con Anatolia Zapata · RAÍZ',
    description:
      'Inicia una conversación directa sobre tu proceso en Viaje RAÍZ o solicita una propuesta formativa para tu organización escribiendo a Anatolia Zapata.',
    canonical: `${SITE_URL}/contacto/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Cada decisión deja una huella. Conversemos sobre la tuya.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage(
        {
          id: 'contacto',
          path: 'contacto',
          title: 'Contacto | Conversemos con Anatolia Zapata · RAÍZ',
          description:
            'Inicia una conversación directa sobre tu proceso en Viaje RAÍZ o solicita una propuesta formativa para tu organización escribiendo a Anatolia Zapata.',
          canonical: `${SITE_URL}/contacto/`,
          ogImage: OFFICIAL_OG_IMAGE,
          ogType: 'website',
          h1: 'Contacto',
          priority: '0.85',
          changefreq: 'monthly',
          getStaticBody: () => '',
          getSchemaJson: () => [],
        },
        'ContactPage'
      ),
      makeBreadcrumbs('Contacto', `${SITE_URL}/contacto/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">CONVERSEMOS</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#363D28] leading-tight mb-6">Cada decisión deja una huella. Conversemos sobre la tuya.</h1>
        <p class="text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
          Escríbeme para explorar juntas el acompañamiento individual de Viaje RAÍZ o diseñar una propuesta a medida para tu organización.
        </p>
      </header>
    `,
  },
  {
    id: 'personas',
    path: 'personas',
    title: 'RAÍZ para Personas | Acompañamiento y Crecimiento Consciente',
    description:
      'Un espacio dedicado a mujeres que buscan comprender sus patrones, reconectar con sus recursos internos y elegir su siguiente paso con convicción y calma.',
    canonical: `${SITE_URL}/personas/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Un espacio para comprender, elegir y construir tu siguiente etapa.',
    priority: '0.85',
    changefreq: 'monthly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      SHARED_PERSON_SCHEMA,
      makeWebPage({
        id: 'personas',
        path: 'personas',
        title: 'RAÍZ para Personas | Acompañamiento y Crecimiento Consciente',
        description:
          'Un espacio dedicado a mujeres que buscan comprender sus patrones, reconectar con sus recursos internos y elegir su siguiente paso con convicción y calma.',
        canonical: `${SITE_URL}/personas/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'RAÍZ para Personas',
        priority: '0.85',
        changefreq: 'monthly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Personas', `${SITE_URL}/personas/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'RAÍZ para Personas · Acompañamiento Individual',
        serviceType: 'Acompañamiento para toma de decisiones y transiciones personales',
        provider: { '@id': `${SITE_URL}/#person` },
        url: `${SITE_URL}/personas/`,
        description: 'Acompañamiento individual para mujeres en transiciones de vida o profesionales.',
      },
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-5xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">RAÍZ PARA PERSONAS</p>
        <h1 class="text-4xl md:text-5xl font-serif text-[#363D28] leading-tight mb-6">Un espacio para comprender, elegir y construir tu siguiente etapa.</h1>
        <p class="text-lg font-sans text-[#363D28]/85 font-light leading-relaxed max-w-2xl mb-8">
          Acompaño a mujeres que desean comprender qué está influyendo en sus decisiones, reconocer sus recursos y avanzar hacia lo que consideran importante.
        </p>
      </header>
    `,
  },
  {
    id: 'politica-de-privacidad',
    path: 'politica-de-privacidad',
    title: 'Política de Privacidad y Protección de Datos | RAÍZ',
    description:
      'Información legal sobre el tratamiento de datos personales, finalidades y ejercicio de derechos ARCO en RAÍZ conforme a la Ley N.º 29733 de Perú.',
    canonical: `${SITE_URL}/politica-de-privacidad/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Política de Privacidad y Protección de Datos Personales',
    priority: '0.3',
    changefreq: 'yearly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'politica-de-privacidad',
        path: 'politica-de-privacidad',
        title: 'Política de Privacidad y Protección de Datos | RAÍZ',
        description:
          'Información legal sobre el tratamiento de datos personales, finalidades y ejercicio de derechos ARCO en RAÍZ conforme a la Ley N.º 29733 de Perú.',
        canonical: `${SITE_URL}/politica-de-privacidad/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Política de Privacidad',
        priority: '0.3',
        changefreq: 'yearly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Política de Privacidad', `${SITE_URL}/politica-de-privacidad/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-4xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">TRANSPARENCIA Y PROTECCIÓN DE DATOS</p>
        <h1 class="text-3xl md:text-4xl font-serif text-[#363D28] leading-tight mb-4">Política de Privacidad y Protección de Datos Personales</h1>
        <p class="text-sm font-sans text-[#363D28]/70">Conforme a la Ley N.º 29733 de Perú y su Reglamento D.S. N.º 016-2024-JUS.</p>
      </header>
    `,
  },
  {
    id: 'libro-de-reclamaciones',
    path: 'libro-de-reclamaciones',
    title: 'Libro de Reclamaciones Virtual | RAÍZ · Anatolia Zapata',
    description:
      'Hoja de reclamación virtual conforme a la Ley N.º 29571 (Código del Consumidor de Perú) y Ley N.º 32495 para canalizar quejas o reclamos ante INDECOPI.',
    canonical: `${SITE_URL}/libro-de-reclamaciones/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Libro de Reclamaciones Virtual',
    priority: '0.3',
    changefreq: 'yearly',
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeWebPage({
        id: 'libro-de-reclamaciones',
        path: 'libro-de-reclamaciones',
        title: 'Libro de Reclamaciones Virtual | RAÍZ · Anatolia Zapata',
        description:
          'Hoja de reclamación virtual conforme a la Ley N.º 29571 (Código del Consumidor de Perú) y Ley N.º 32495 para canalizar quejas o reclamos ante INDECOPI.',
        canonical: `${SITE_URL}/libro-de-reclamaciones/`,
        ogImage: OFFICIAL_OG_IMAGE,
        ogType: 'website',
        h1: 'Libro de Reclamaciones Virtual',
        priority: '0.3',
        changefreq: 'yearly',
        getStaticBody: () => '',
        getSchemaJson: () => [],
      }),
      makeBreadcrumbs('Libro de Reclamaciones', `${SITE_URL}/libro-de-reclamaciones/`),
    ],
    getStaticBody: () => `
      <header class="py-12 px-6 max-w-4xl mx-auto">
        <p class="text-xs uppercase tracking-widest text-[#A18347] font-semibold mb-3">CUMPLIMIENTO NORMATIVO PERUANO</p>
        <h1 class="text-3xl md:text-4xl font-serif text-[#363D28] leading-tight mb-4">Libro de Reclamaciones Virtual</h1>
        <p class="text-sm font-sans text-[#363D28]/75">Canal oficial para la atención de disconformidades, reclamos y quejas conforme a directivas de INDECOPI.</p>
      </header>
    `,
  },
];

async function runPrerender() {
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html does not exist. Run "vite build" first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, 'utf8');

  console.log(`Prerendering ${ROUTES.length} routes for GitHub Pages...`);

  for (const route of ROUTES) {
    let html = baseHtml;

    // Replace <html lang="..."> cleanly with es-PE
    html = html.replace(/<html(\s+[^>]*)?lang=["'][^"']*["']/i, '<html$1lang="es-PE"');

    // Replace <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

    // Ensure <base href="/raiz/"> is present for nested routes on GitHub Pages
    if (!html.includes('<base href="/raiz/">')) {
      html = html.replace('<head>', '<head>\n    <base href="/raiz/">');
    }

    // Clean any existing meta description, canonical, OG, Twitter, comments, and JSON-LD tags from template before injecting
    html = html.replace(/^[ \t]*<meta\s+name=["']description["'][^>]*>\r?\n?/gim, '');
    html = html.replace(/^[ \t]*<link\s+rel=["']canonical["'][^>]*>\r?\n?/gim, '');
    html = html.replace(/^[ \t]*<meta\s+property=["']og:[^"']*["'][^>]*>\r?\n?/gim, '');
    html = html.replace(/^[ \t]*<meta\s+name=["']twitter:[^"']*["'][^>]*>\r?\n?/gim, '');
    html = html.replace(/^[ \t]*<!--\s*(?:Open Graph Oficial|Twitter Card)\s*-->\r?\n?/gim, '');
    html = html.replace(/<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi, '');
    html = html.replace(/\n{3,}/g, '\n\n');

    // Prepare tags block (canonical, OG, Twitter, JSON-LD)
    const jsonLdScripts = route
      .getSchemaJson()
      .map(
        (schema) =>
          `  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>`
      )
      .join('\n');

    const metaTagsBlock = `
  <meta name="description" content="${route.description}" />
  <link rel="canonical" href="${route.canonical}" />
  <meta property="og:title" content="${route.title}" />
  <meta property="og:description" content="${route.description}" />
  <meta property="og:url" content="${route.canonical}" />
  <meta property="og:image" content="${OFFICIAL_OG_IMAGE}" />
  <meta property="og:image:secure_url" content="${OFFICIAL_OG_IMAGE}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${OFFICIAL_OG_IMAGE_ALT}" />
  <meta property="og:type" content="${route.ogType}" />
  <meta property="og:site_name" content="RAÍZ · Anatolia Zapata" />
  <meta property="og:locale" content="es_PE" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />
  <meta name="twitter:image" content="${OFFICIAL_OG_IMAGE}" />
${jsonLdScripts}
`;

    // Inject meta tags before </head>
    html = html.replace('</head>', `${metaTagsBlock}\n</head>`);

    // Inject initial semantic HTML inside <div id="root">
    const staticBody = route.getStaticBody();
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${staticBody}</div>`
    );

    // Write file
    if (route.path === '') {
      fs.writeFileSync(templatePath, html, 'utf8');
      console.log(`  ✓ dist/index.html (Home)`);
    } else {
      const pageDir = path.resolve(distDir, route.path);
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.resolve(pageDir, 'index.html'), html, 'utf8');
      console.log(`  ✓ dist/${route.path}/index.html`);
    }
  }

  // 1. Generate dist/404.html (GitHub Pages SPA fallback router)
  const notFoundHtml = `<!DOCTYPE html>
<html lang="es-PE">
<head>
  <meta charset="utf-8">
  <title>RAÍZ · Anatolia Zapata</title>
  <script>
    // GitHub Pages SPA router redirect: preserves subpath in hash
    var path = window.location.pathname;
    var base = '/raiz/';
    if (path.indexOf(base) === 0) {
      var segment = path.substring(base.length).replace(/^\\/+/, '');
      window.location.replace(base + '#/' + segment);
    } else {
      window.location.replace(base);
    }
  </script>
</head>
<body style="font-family: sans-serif; padding: 2rem; background: #F2EBDD; color: #363D28;">
  <p>Cargando página de RAÍZ...</p>
</body>
</html>`;
  fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf8');
  console.log('  ✓ dist/404.html (GitHub Pages SPA Redirect)');

  // 2. Generate dist/sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  const sitemapUrls = ROUTES.map(
    (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');

  // Also write to public/ so any local dev or static copy retains it
  const publicDir = path.resolve(rootDir, 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  }
  console.log('  ✓ dist/sitemap.xml (Sitemap con todas las rutas canónicas)');

  // 3. Generate dist/robots.txt
  const robotsTxt = `User-agent: *
Allow: /raiz/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf8');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8');
  }
  console.log('  ✓ dist/robots.txt');

  console.log('Static pre-rendering complete!');
}

runPrerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
