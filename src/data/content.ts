/**
 * Central copy, content and SEO configuration for RAÍZ · Anatolia Zapata
 *
 * Implements Fase 1: Rediseño visual, experiencia de usuario y conversión
 */

import { FaqItem, NavLink, ResourceItem } from '../types';

export type PageId =
  | 'home'
  | 'personas'
  | 'organizaciones'
  | 'sobre-mi'
  | 'metodo-raiz'
  | 'cursos-retos'
  | 'mapa-raiz'
  | 'viaje-raiz'
  | 'bitacora-raiz'
  | 'contacto'
  | 'politica-de-privacidad'
  | 'libro-de-reclamaciones';

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType?: string;
  h1: string;
}

export const SITE_URL = 'https://raizanatolia.github.io/raiz';

export const BRAND = {
  name: 'RAÍZ',
  founder: 'Anatolia Zapata',
  fullName: 'RAÍZ · Anatolia Zapata',
  heroEyebrow: 'RAÍZ · UN ESPACIO PARA ELEGIR CON CONCIENCIA',
  tagline: 'Comprende tu raíz. Transforma tus decisiones.',
  subtagline: 'Cada decisión deja una huella.',
  heroTitle: 'Sabes que necesitas un cambio. Es momento de descubrir qué quieres construir.',
  heroDescription:
    'A veces sabes que algo necesita cambiar, pero entre responsabilidades, dudas y expectativas no es fácil reconocer qué deseas. RAÍZ te acompaña a comprender qué influye en tus decisiones y encontrar un punto de partida que tenga sentido para ti.',
};

export const CONTACT = {
  email: 'raizanatolia@gmail.com',
  mapUrl: 'https://cjyyftsgcb.zite.so/',
  socials: {
    instagram: 'https://www.instagram.com/anatoliazapata/',
    tiktok: 'https://www.tiktok.com/@anatoliacoach',
    linkedin: 'https://pe.linkedin.com/in/anatolia-%C3%BArsula-zapata-paiva-939786142',
    youtube: 'https://www.youtube.com/@anatoliazapatap',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#/' },
  { label: 'Método Raíz', href: '#/metodo-raiz' },
  { label: 'Cursos & Retos', href: '#/cursos-retos' },
  { label: 'Organizaciones', href: '#/organizaciones' },
  { label: 'Viaje Raíz', href: '#/viaje-raiz' },
  { label: 'Sobre mi', href: '#/sobre-mi' },
  { label: 'Contacto', href: '#/contacto' },
];

export const OFFICIAL_OG_IMAGE =
  'https://res.cloudinary.com/rus3f4tb/image/upload/v1793378140/og-anatolia-zapata-raiz-lq.jpg';
export const OFFICIAL_OG_IMAGE_ALT =
  'RAÍZ · Anatolia Zapata · Espacio de acompañamiento para tomar decisiones con mayor conciencia';
export const OFFICIAL_OG_WIDTH = 1200;
export const OFFICIAL_OG_HEIGHT = 630;
export const OFFICIAL_OG_TYPE = 'image/jpeg';

export const PAGE_METADATA: Record<PageId, PageMeta> = {
  home: {
    title: 'RAÍZ · Anatolia Zapata | Decide con Mayor Conciencia',
    description:
      'Descubre qué influye en tus decisiones, reconoce tus recursos internos y construye tu siguiente etapa con RAÍZ y el acompañamiento de Anatolia Zapata.',
    canonical: `${SITE_URL}/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Sabes que necesitas un cambio. Es momento de descubrir qué quieres construir.',
  },
  personas: {
    title: 'RAÍZ para Personas | Acompañamiento y Crecimiento Consciente',
    description:
      'Un espacio dedicado a mujeres que buscan comprender sus patrones, reconectar con sus recursos internos y elegir su siguiente paso con convicción y calma.',
    canonical: `${SITE_URL}/personas/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Un espacio para comprender, elegir y construir tu siguiente etapa.',
  },
  organizaciones: {
    title: 'RAÍZ para Organizaciones | Bienestar y Liderazgo Consciente',
    description:
      'Programas, conferencias y talleres a medida de desarrollo humano, bienestar y liderazgo consciente para equipos y organizaciones con Anatolia Zapata.',
    canonical: `${SITE_URL}/organizaciones/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Personas más conscientes para entornos más humanos.',
  },
  'sobre-mi': {
    title: 'Sobre Mí | Anatolia Zapata · Creadora del Método RAÍZ',
    description:
      'Mamá de dos, ingeniera industrial, coach y fundadora de RAÍZ. Conoce la historia y vocación de Anatolia Zapata acompañando procesos de cambio consciente.',
    canonical: `${SITE_URL}/sobre-mi/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'profile',
    h1: 'Soy Anatolia Zapata.',
  },
  'metodo-raiz': {
    title: 'Método RAÍZ | Filosofía y Toma de Decisiones Conscientes',
    description:
      'Conoce la metodología creada por Anatolia Zapata: comprender tu historia, reconocer tus recursos y elegir con conciencia el camino que quieres construir.',
    canonical: `${SITE_URL}/metodo-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'El Método RAÍZ. Filosofía y Metodología de Toma de Decisiones.',
  },
  'cursos-retos': {
    title: 'Cursos y Retos | Aprendizaje y Reflexión · RAÍZ',
    description:
      'Explora talleres online y retos prácticos de autoexploración guiados por Anatolia Zapata para aprender a elegir a tu propio ritmo con mayor serenidad.',
    canonical: `${SITE_URL}/cursos-retos/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Cursos & Retos de Autoexploración Consciente.',
  },
  'mapa-raiz': {
    title: 'Mapa RAÍZ | Herramienta de Autoexploración Personal',
    description:
      'Explora tus 5 recursos cotidianos (Perspectiva, Emociones, Dirección, Energía y Acción) con el Mapa RAÍZ, la herramienta interactiva de Anatolia Zapata.',
    canonical: `${SITE_URL}/mapa-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: '¿Estás reaccionando o eligiendo?',
  },
  'viaje-raiz': {
    title: 'Viaje RAÍZ | Acompañamiento Individual de 12 Sesiones',
    description:
      'Proceso personalizado de 12 sesiones individuales durante 3 meses con Anatolia Zapata para comprender tu historia y construir tu siguiente capítulo.',
    canonical: `${SITE_URL}/viaje-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Viaje RAÍZ. Un espacio para comprender tus decisiones y construir con mayor conciencia.',
  },
  'bitacora-raiz': {
    title: 'Bitácora RAÍZ | Espacio de Escritura y Reflexión',
    description:
      'Cuaderno guiado de escritura consciente para pausar, ordenar pensamientos y registrar tus decisiones. Disponible en edición física (Perú) y digital PDF.',
    canonical: `${SITE_URL}/bitacora-raiz/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'product',
    h1: 'Bitácora RAÍZ. Un espacio para volver a ti.',
  },
  contacto: {
    title: 'Contacto | Conversemos con Anatolia Zapata · RAÍZ',
    description:
      'Inicia una conversación directa sobre tu proceso en Viaje RAÍZ o solicita una propuesta formativa para tu organización escribiendo a Anatolia Zapata.',
    canonical: `${SITE_URL}/contacto/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Cada decisión deja una huella. Conversemos sobre la tuya.',
  },
  'politica-de-privacidad': {
    title: 'Política de Privacidad y Protección de Datos | RAÍZ',
    description:
      'Información legal sobre el tratamiento de datos personales, finalidades y ejercicio de derechos ARCO en RAÍZ conforme a la Ley N.º 29733 de Perú.',
    canonical: `${SITE_URL}/politica-de-privacidad/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Política de Privacidad y Protección de Datos Personales',
  },
  'libro-de-reclamaciones': {
    title: 'Libro de Reclamaciones Virtual | RAÍZ · Anatolia Zapata',
    description:
      'Hoja de reclamación virtual conforme a la Ley N.º 29571 (Código del Consumidor de Perú) y Ley N.º 32495 para canalizar quejas o reclamos ante INDECOPI.',
    canonical: `${SITE_URL}/libro-de-reclamaciones/`,
    ogImage: OFFICIAL_OG_IMAGE,
    ogType: 'website',
    h1: 'Libro de Reclamaciones Virtual',
  },
};

/**
 * Sección de Identificación: «Una pausa para mirarte» (Home y Personas)
 */
export const IDENTIFICATION_CARDS = [
  {
    id: 'bienestar',
    title: 'Bienestar',
    description:
      'Cuando lo que haces y lo que deseas parecen ir en direcciones distintas, puedes sentirte cada vez más cansada o desconectada de ti.',
  },
  {
    id: 'relaciones',
    title: 'Relaciones',
    description:
      'Reconocer tus patrones puede ayudarte a comprender mejor cómo te comunicas, cuidas y estableces límites.',
  },
  {
    id: 'oportunidades',
    title: 'Oportunidades',
    description:
      'Hay ideas y posibilidades que merecen ser exploradas, incluso cuando todavía no tienes todas las respuestas.',
  },
  {
    id: 'forma-elegir',
    title: 'Tu forma de elegir',
    description:
      'Puedes aprender a reconocer qué influye en tus respuestas y considerar otras maneras de actuar.',
  },
];

/**
 * Tres conceptos del sentido de RAÍZ
 */
export const SENSE_OF_RAIZ_CONCEPTS = [
  {
    number: '01',
    title: 'Comprender tu historia',
    description:
      'Mirar con respeto las vivencias, acuerdos aprendidos y circunstancias que han dado forma a tu manera de responder al mundo.',
  },
  {
    number: '02',
    title: 'Reconocer tus recursos',
    description:
      'Identificar la claridad, la energía, la templanza y las fortalezas que ya habitan en ti, dejando de actuar solo desde la autoexigencia.',
  },
  {
    number: '03',
    title: 'Elegir y actuar con conciencia',
    description:
      'Diseñar pasos reales, graduales y sostenibles en coherencia con tus prioridades actuales y tu propia visión de vida.',
  },
];

/**
 * Los cinco recursos fundamentales oficiales del Mapa RAÍZ
 */
export const FUNDAMENTAL_RESOURCES: ResourceItem[] = [
  {
    id: 'perspectiva',
    number: '01',
    name: 'Perspectiva',
    description: 'Cómo interpretas las situaciones y consideras distintas posibilidades antes de actuar.',
    reflectionPrompt: '¿Desde qué mirada estás leyendo lo que vives hoy?',
  },
  {
    id: 'gestion-emocional',
    number: '02',
    name: 'Gestión emocional',
    description: 'Cómo reconoces, regulas y expresas lo que sientes, permitiendo que las emociones orienten sin desbordar.',
    reflectionPrompt: '¿Qué emoción suele acelerar o frenar tus decisiones?',
  },
  {
    id: 'direccion',
    number: '03',
    name: 'Dirección',
    description: 'Cómo defines prioridades y orientas tus decisiones en coherencia con tus valores esenciales.',
    reflectionPrompt: '¿Tus elecciones diarias apuntan hacia lo que de verdad valoras?',
  },
  {
    id: 'energia-vital',
    number: '04',
    name: 'Energía vital',
    description: 'Cómo cuidas la energía que necesitas para sostener tu camino sin desgastarte en lo secundario.',
    reflectionPrompt: '¿Qué decisiones te están nutriendo y cuáles drenan tu vitalidad?',
  },
  {
    id: 'accion-consistente',
    number: '05',
    name: 'Acción consistente',
    description: 'Cómo conviertes tus decisiones en pasos concretos y los mantienes a lo largo del tiempo.',
    reflectionPrompt: '¿De qué forma tus acuerdos contigo misma se vuelven realidad?',
  },
];

/**
 * Preguntas frecuentes generales (Home y páginas interiores)
 */
export const JOURNEY_HIGHLIGHTS = [
  {
    title: 'Atención a tu historia y tu contexto real',
    description: 'Un proceso respetuoso que no impone fórmulas prefabricadas ni te responsabiliza de todo de forma aislada, sino que comprende tus vivencias y tus circunstancias.',
  },
  {
    title: 'Exploración profunda de los cinco recursos',
    description: 'Trabajamos sobre tu perspectiva, gestión emocional, dirección, energía vital y acción consistente para que tus decisiones nazcan de un suelo firme.',
  },
  {
    title: 'Orientación hacia tus valores y prioridades',
    description: 'Clarificamos lo que genuinamente importa en esta etapa de tu vida para que cada elección responda a tu propia brújula.',
  },
  {
    title: 'Bitácora RAÍZ como compañera de camino',
    description: 'Un material cuidado para asentar descubrimientos, pausar y documentar la huella consciente que vas trazando semana a semana.',
  },
  {
    title: 'Inicio personalizado',
    description: 'No dependes de convocatorias grupales; la fecha y el ritmo de inicio se coordinan de forma individual y cercana con Anatolia.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Qué es RAÍZ?',
    answer:
      'RAÍZ es un espacio fundado por Anatolia Zapata que acompaña a personas y organizaciones a comprender qué influye en sus decisiones, reconocer sus recursos internos y construir su siguiente etapa con mayor conciencia, serenidad y claridad.',
  },
  {
    question: '¿Quién es Anatolia Zapata?',
    answer:
      'Es mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ. Integra su formación analítica con herramientas de desarrollo humano, programación neurolingüística y una mirada sensible para acompañar procesos de transformación personal y organizacional.',
  },
  {
    question: '¿Qué es el Método RAÍZ?',
    answer:
      'Es una filosofía y metodología orientada a comprender desde dónde decidimos, reconociendo tres momentos clave: comprender tu historia, reconocer tus recursos y elegir con conciencia. No impone fórmulas rígidas, sino que ayuda a desactivar automatismos y reconectar con lo que de verdad valoras.',
  },
  {
    question: '¿Qué diferencia existe entre el Método y el Mapa RAÍZ?',
    answer:
      'El Método RAÍZ es la metodología y mirada global que guía todos los procesos de acompañamiento. El Mapa RAÍZ es una herramienta digital de exploración personal y punto de partida que permite observar el estado actual de tus cinco recursos cotidianos (Perspectiva, Gestión emocional, Dirección, Energía vital y Acción consistente).',
  },
  {
    question: '¿Para quién está dirigido RAÍZ?',
    answer:
      'Está dirigido principalmente a mujeres que atraviesan transiciones de vida, dudas o encrucijadas personales o profesionales, y que desean dejar de decidir desde la autoexigencia o el miedo para elegir con mayor coherencia. En el ámbito corporativo, está dirigido a organizaciones que buscan fortalecer el bienestar, el liderazgo consciente y la equidad en sus equipos.',
  },
  {
    question: '¿Qué es Viaje RAÍZ y cuántas sesiones incluye?',
    answer:
      'Viaje RAÍZ es el programa insignia de acompañamiento individual de Anatolia Zapata. Consta de 12 sesiones personalizadas a lo largo de tres meses, en las que se profundiza en tu historia, tus cinco recursos y la construcción de acuerdos graduales y sostenibles para tu siguiente capítulo.',
  },
  {
    question: '¿Cómo acompaña RAÍZ a las organizaciones?',
    answer:
      'Mediante talleres prácticos, conferencias inspiradoras y programas de acompañamiento a medida sobre bienestar integral, liderazgo consciente, toma de decisiones y equidad de género, adaptados a la cultura y necesidades específicas de cada empresa o equipo.',
  },
  {
    question: '¿Cómo puedo dar un primer paso?',
    answer:
      'Puedes comenzar realizando la autoexploración del Mapa RAÍZ en línea o escribiendo directamente a través de nuestro formulario de contacto para agendar una primera conversación exploratoria sin compromiso.',
  },
];
