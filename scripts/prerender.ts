/**
 * Static Pre-rendering & SEO Script for GitHub Pages
 * RAÍZ · Anatolia Zapata
 *
 * Generates:
 * - dist/index.html (Prerendered Home)
 * - dist/[page]/index.html for each route with unique metadata, canonical, OG and JSON-LD
 * - dist/404.html (GitHub Pages SPA fallback)
 * - dist/sitemap.xml (Verified commercial pages)
 * - dist/robots.txt
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

interface RouteConfig {
  id: string;
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  h1: string;
  isCommercial: boolean;
  getStaticBody: () => string;
  getSchemaJson: () => object[];
}

const SITE_URL = 'https://raizanatolia.github.io/raiz';

const SHARED_ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RAÍZ · Anatolia Zapata',
  url: `${SITE_URL}/`,
  logo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png',
  email: 'raizanatolia@gmail.com',
  sameAs: [
    'https://www.instagram.com/anatoliazapata/',
    'https://www.tiktok.com/@anatoliacoach',
    'https://www.youtube.com/@anatoliazapatap',
    'https://pe.linkedin.com/in/anatolia-%C3%BArsula-zapata-paiva-939786142',
  ],
  founder: {
    '@type': 'Person',
    name: 'Anatolia Zapata',
    jobTitle: 'Ingeniera industrial, Coach y Creadora del Método RAÍZ',
  },
};

const SHARED_PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anatolia Zapata',
  jobTitle: 'Ingeniera industrial, Coach y Creadora del Método RAÍZ',
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
    '@type': 'Organization',
    name: 'RAÍZ',
  },
};

const SHARED_WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RAÍZ · Anatolia Zapata',
  url: `${SITE_URL}/`,
  inLanguage: 'es-PE',
};

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
        text: 'Es mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ. Integra su formación analítica con herramientas de desarrollo humano, programación neurolingüística y una mirada sensible para acompañar procesos de transformación personal y organizacional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el Método RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una filosofía y metodología orientada a comprender desde dónde decidimos, reconociendo tres momentos clave: comprender tu historia, reconocer tus recursos y elegir con conciencia. No impone fórmulas rígidas, sino que ayuda a desactivar automatismos y reconectar con lo que de verdad valoras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia existe entre el Método y el Mapa RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Método RAÍZ es la metodología y mirada global que guía todos los procesos de acompañamiento. El Mapa RAÍZ es una herramienta digital de exploración personal y punto de partida que permite observar el estado actual de tus cinco recursos cotidianos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para quién está dirigido RAÍZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Está dirigido principalmente a mujeres que atraviesan transiciones de vida o encrucijadas personales o profesionales, y a organizaciones que buscan fortalecer el bienestar, el liderazgo consciente y la equidad en sus equipos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es Viaje RAÍZ y cuántas sesiones incluye?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Viaje RAÍZ es el programa insignia de acompañamiento individual de Anatolia Zapata. Consta de 12 sesiones personalizadas a lo largo de tres meses, en las que se profundiza en tu historia, tus cinco recursos y la construcción de acuerdos sostenibles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo acompaña RAÍZ a las organizaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mediante talleres prácticos, conferencias inspiradoras y programas de acompañamiento a medida sobre bienestar integral, liderazgo consciente y toma de decisiones.',
      },
    },
  ],
};

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

const ROUTES: RouteConfig[] = [
  {
    id: 'home',
    path: '',
    title: 'RAÍZ · Anatolia Zapata | Decide con mayor conciencia',
    description:
      'Comprende qué influye en tus decisiones, reconoce tus recursos y explora nuevas posibilidades con RAÍZ, el enfoque de acompañamiento de Anatolia Zapata.',
    canonical: `${SITE_URL}/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'Tus Decisiones También Tienen RAÍZ.',
    isCommercial: true,
    getSchemaJson: () => [SHARED_ORG_SCHEMA, SHARED_PERSON_SCHEMA, SHARED_WEBSITE_SCHEMA, FAQ_AEO_SCHEMA],
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
    id: 'personas',
    path: 'personas',
    title: 'RAÍZ para personas | Acompañamiento personal · Anatolia Zapata',
    description:
      'Un espacio para mujeres que buscan comprender sus decisiones, reconocer sus recursos y construir su siguiente etapa personal o profesional.',
    canonical: `${SITE_URL}/personas/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793034612/anatolia-zapata-raiz-personas.png',
    ogType: 'website',
    h1: 'Un espacio para comprender, elegir y construir tu siguiente etapa.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeBreadcrumbs('Personas', `${SITE_URL}/personas/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'RAÍZ para Personas · Acompañamiento Individual',
        serviceType: 'Acompañamiento para toma de decisiones y transiciones personales',
        provider: { '@type': 'Person', name: 'Anatolia Zapata' },
        url: `${SITE_URL}/personas/`,
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
    id: 'organizaciones',
    path: 'organizaciones',
    title: 'RAÍZ para organizaciones | Desarrollo humano y bienestar · Anatolia Zapata',
    description:
      'Experiencias y programas de desarrollo humano, bienestar, liderazgo con perspectiva y género para crear entornos más conscientes.',
    canonical: `${SITE_URL}/organizaciones/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793034612/anatolia-zapata-raiz-organizaciones.png',
    ogType: 'website',
    h1: 'Personas más conscientes para entornos más humanos.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeBreadcrumbs('Organizaciones', `${SITE_URL}/organizaciones/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'RAÍZ para Organizaciones',
        serviceType: 'Talleres y Programas de Desarrollo Humano, Bienestar y Liderazgo Consciente',
        provider: { '@type': 'Organization', name: 'RAÍZ · Anatolia Zapata' },
        url: `${SITE_URL}/organizaciones/`,
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
    id: 'sobre-mi',
    path: 'sobre-mi',
    title: 'Sobre mí | Anatolia Zapata · Creadora del Método RAÍZ',
    description:
      'Conoce la historia de Anatolia Zapata, mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.',
    canonical: `${SITE_URL}/sobre-mi/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'profile',
    h1: 'Soy Anatolia Zapata.',
    isCommercial: true,
    getSchemaJson: () => [SHARED_PERSON_SCHEMA, makeBreadcrumbs('Sobre mí', `${SITE_URL}/sobre-mi/`)],
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
    id: 'metodo-raiz',
    path: 'metodo-raiz',
    title: 'El Método RAÍZ | Filosofía y Metodología · Anatolia Zapata',
    description:
      'Comprender tu historia, reconocer tus recursos y elegir con conciencia. Descubre la metodología creada por Anatolia Zapata.',
    canonical: `${SITE_URL}/metodo-raiz/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'El Método RAÍZ. Filosofía y Metodología de Toma de Decisiones.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
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
    title: 'Cursos & Retos | Experiencias de Aprendizaje · RAÍZ',
    description:
      'Aprende, explora y pon en práctica nuevas formas de elegir con los talleres online y retos de autoexploración de Anatolia Zapata.',
    canonical: `${SITE_URL}/cursos-retos/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'Cursos & Retos de Autoexploración Consciente.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
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
    id: 'mapa-raiz',
    path: 'mapa-raiz',
    title: 'Descubre tu Mapa RAÍZ | Herramienta de exploración personal',
    description:
      'Una herramienta de exploración personal para observar cinco recursos fundamentales que influyen en tus decisiones cotidianas.',
    canonical: `${SITE_URL}/mapa-raiz/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793037854/bg-conoce-tu-mapa-raiz.png',
    ogType: 'website',
    h1: '¿Estás reaccionando o eligiendo?',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeBreadcrumbs('Mapa RAÍZ', `${SITE_URL}/mapa-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Mapa RAÍZ',
        applicationCategory: 'LifestyleApplication',
        browserRequirements: 'Requires JavaScript. Requires HTML5.',
        description: 'Herramienta digital de exploración consciente sobre tus cinco recursos cotidianos.',
        url: `${SITE_URL}/mapa-raiz/`,
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
    id: 'viaje-raiz',
    path: 'viaje-raiz',
    title: 'Viaje RAÍZ | Acompañamiento personalizado de 12 sesiones',
    description:
      'Un proceso personalizado de 12 sesiones a lo largo de tres meses, orientado a explorar tu historia, tus recursos y lo que deseas construir.',
    canonical: `${SITE_URL}/viaje-raiz/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793036682/bg-hero-raiz-anatolia-zapata-viaje-raiz.png',
    ogType: 'website',
    h1: 'Viaje RAÍZ. Un espacio para comprender tus decisiones y construir con mayor conciencia.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeBreadcrumbs('Viaje RAÍZ', `${SITE_URL}/viaje-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Viaje RAÍZ · Acompañamiento personalizado de 12 sesiones',
        serviceType: 'Coaching y desarrollo consciente individual',
        provider: { '@type': 'Person', name: 'Anatolia Zapata' },
        url: `${SITE_URL}/viaje-raiz/`,
        description:
          'Proceso personalizado de 12 sesiones a lo largo de tres meses, orientado a explorar tu historia, tus recursos y las posibilidades que deseas construir.',
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
    id: 'bitacora-raiz',
    path: 'bitacora-raiz',
    title: 'Bitácora RAÍZ | Un espacio para volver a ti · Anatolia Zapata',
    description:
      'Una herramienta de escritura y reflexión personal que te invita a hacer una pausa, conectar contigo y transformar tus pensamientos en decisiones más conscientes.',
    canonical: `${SITE_URL}/bitacora-raiz/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'product',
    h1: 'Bitácora RAÍZ. Un espacio para volver a ti.',
    isCommercial: true,
    getSchemaJson: () => [
      SHARED_ORG_SCHEMA,
      makeBreadcrumbs('Bitácora RAÍZ', `${SITE_URL}/bitacora-raiz/`),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Bitácora RAÍZ',
        description: 'Herramienta de escritura y reflexión personal creada por Anatolia Zapata.',
        brand: { '@type': 'Brand', name: 'RAÍZ' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '33.00',
          availability: 'https://schema.org/InStock',
        },
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
    id: 'contacto',
    path: 'contacto',
    title: 'Contacto | Conversemos con Anatolia Zapata · RAÍZ',
    description:
      'Conversemos sobre tu proceso personal o explora una propuesta de desarrollo humano a medida para tu equipo u organización.',
    canonical: `${SITE_URL}/contacto/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'Cada decisión deja una huella. Conversemos sobre la tuya.',
    isCommercial: true,
    getSchemaJson: () => [SHARED_ORG_SCHEMA, makeBreadcrumbs('Contacto', `${SITE_URL}/contacto/`)],
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
    id: 'politica-de-privacidad',
    path: 'politica-de-privacidad',
    title: 'Política de Privacidad y Protección de Datos Personales | RAÍZ',
    description:
      'Información sobre el tratamiento de datos personales, finalidades, derechos ARCO y cumplimiento de la Ley N.º 29733 en RAÍZ.',
    canonical: `${SITE_URL}/politica-de-privacidad/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'Política de Privacidad y Protección de Datos Personales',
    isCommercial: false,
    getSchemaJson: () => [SHARED_ORG_SCHEMA, makeBreadcrumbs('Política de Privacidad', `${SITE_URL}/politica-de-privacidad/`)],
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
      'Información sobre el Libro de Reclamaciones conforme al Código de Protección y Defensa del Consumidor (Ley N.º 29571) y Ley N.º 32495.',
    canonical: `${SITE_URL}/libro-de-reclamaciones/`,
    ogImage: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    ogType: 'website',
    h1: 'Libro de Reclamaciones Virtual',
    isCommercial: false,
    getSchemaJson: () => [SHARED_ORG_SCHEMA, makeBreadcrumbs('Libro de Reclamaciones', `${SITE_URL}/libro-de-reclamaciones/`)],
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

    // Replace <html lang="..."> cleanly
    html = html.replace(/<html(\s+[^>]*)?lang=["'][^"']*["']/i, '<html$1lang="es-PE"');

    // Replace <title>
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

    // Ensure <base href="/raiz/"> is present for nested routes on GitHub Pages
    if (!html.includes('<base href="/raiz/">')) {
      html = html.replace('<head>', '<head>\n    <base href="/raiz/">');
    }

    // Remove any existing meta description, canonical, OG, Twitter tags from template before injecting
    html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
    html = html.replace(/<meta\s+property=["']og:[^"']*["'][^>]*>/gi, '');
    html = html.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>/gi, '');

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
  <meta property="og:image" content="${route.ogImage}" />
  <meta property="og:type" content="${route.ogType}" />
  <meta property="og:site_name" content="RAÍZ · Anatolia Zapata" />
  <meta property="og:locale" content="es_PE" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${route.title}" />
  <meta name="twitter:description" content="${route.description}" />
  <meta name="twitter:image" content="${route.ogImage}" />
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

  // 1. Generate dist/404.html (GitHub Pages SPA fallback)
  const notFoundHtml = `<!DOCTYPE html>
<html lang="es-PE">
<head>
  <meta charset="utf-8">
  <title>RAÍZ · Anatolia Zapata</title>
  <script>
    // GitHub Pages SPA router redirect
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

  // 2. Generate dist/sitemap.xml (Commercial verified routes only)
  const today = new Date().toISOString().split('T')[0];
  const sitemapUrls = ROUTES.filter((r) => r.isCommercial)
    .map(
      (r) => `  <url>
    <loc>${r.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '' ? '1.0' : '0.85'}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  // Also put in public/ so future vite builds automatically retain it
  const publicDir = path.resolve(rootDir, 'public');
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  }
  console.log('  ✓ dist/sitemap.xml (Sitemap con rutas públicas)');

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
