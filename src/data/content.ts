/**
 * Central copy, content and SEO configuration for RAÍZ · Anatolia Zapata
 *
 * Implements Fase 1: Rediseño visual, experiencia de usuario y conversión
 */

import { FaqItem, NavLink, ResourceItem } from '../types';

export type PageId = 'home' | 'personas' | 'organizaciones' | 'sobre-mi' | 'mapa-raiz' | 'viaje-raiz' | 'contacto';

export interface PageMeta {
  title: string;
  description: string;
}

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
  whatsappDisplay: '+51 949 465 083',
  whatsappRaw: '51949465083',
  email: 'anatolia.zapata@gmail.com',
  mapUrl: 'https://cjyyftsgcb.zite.so/',
  socials: {
    instagram: '',
    linkedin: '',
  },
};

/**
 * Builds pre-filled WhatsApp links with appropriate URL encoding
 */
export function getWhatsAppLink(type: 'viaje' | 'anatolia' | 'organizaciones' | 'contacto_general' | 'mapa'): string {
  const messages: Record<string, string> = {
    viaje:
      'Hola Anatolia, me gustaría consultar por Viaje RAÍZ y conocer los detalles para participar.',
    anatolia:
      'Hola Anatolia, leí sobre tu historia y tu acompañamiento en RAÍZ y me gustaría conversar contigo.',
    organizaciones:
      'Hola Anatolia, me gustaría explorar cómo llevar el enfoque RAÍZ a mi organización o equipo.',
    mapa:
      'Hola Anatolia, exploré el Mapa RAÍZ y me gustaría conversar sobre mis reflexiones y siguientes pasos.',
    contacto_general:
      'Hola Anatolia, me gustaría tener más información sobre el acompañamiento de RAÍZ.',
  };

  const message = messages[type] || messages.contacto_general;
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#/' },
  { label: 'Personas', href: '#/personas' },
  { label: 'Organizaciones', href: '#/organizaciones' },
  { label: 'Sobre mí', href: '#/sobre-mi' },
  { label: 'Viaje RAÍZ', href: '#/viaje-raiz' },
  { label: 'Contacto', href: '#/contacto' },
];

export const PAGE_METADATA: Record<PageId, PageMeta> = {
  home: {
    title: 'RAÍZ · Anatolia Zapata | Decide con mayor conciencia',
    description:
      'Comprende qué influye en tus decisiones, reconoce tus recursos y explora nuevas posibilidades con RAÍZ, el enfoque de acompañamiento de Anatolia Zapata.',
  },
  personas: {
    title: 'RAÍZ para personas | Acompañamiento personal',
    description:
      'Un espacio para mujeres que buscan comprender sus decisiones, reconocer sus recursos y construir su siguiente etapa personal o profesional.',
  },
  organizaciones: {
    title: 'RAÍZ para organizaciones | Desarrollo humano y bienestar',
    description:
      'Experiencias y programas de desarrollo humano, bienestar, liderazgo con perspectiva y género para crear entornos más conscientes.',
  },
  'sobre-mi': {
    title: 'Sobre Anatolia Zapata | La historia detrás de RAÍZ',
    description:
      'Conoce la historia y mirada de Anatolia Zapata, mamá de dos, ingeniera industrial, coach y creadora del Método RAÍZ.',
  },
  'mapa-raiz': {
    title: 'Mapa RAÍZ | Explora tu punto de partida',
    description:
      'Una herramienta de exploración personal para observar cinco recursos fundamentales que influyen en tus decisiones diarias.',
  },
  'viaje-raiz': {
    title: 'Viaje RAÍZ | Acompañamiento personalizado',
    description:
      'Programa de acompañamiento personalizado de 12 sesiones a lo largo de 3 meses para profundizar en tus decisiones y avanzar con serenidad.',
  },
  contacto: {
    title: 'Contacto | Anatolia Zapata · RAÍZ',
    description:
      'Conversemos sobre tu proceso personal o explora una propuesta a medida para tu equipo u organización.',
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
    question: '¿Para quién es RAÍZ?',
    answer:
      'Para mujeres que desean comprender sus patrones, dejar de reaccionar en automático y desarrollar recursos internos para tomar decisiones más conscientes en su vida personal y profesional. También desarrollamos experiencias para organizaciones comprometidas con el bienestar de sus equipos.',
  },
  {
    question: '¿Qué diferencia hay entre Mapa, Método, Viaje y Bitácora?',
    answer:
      'RAÍZ es la marca que reúne las experiencias; el Método RAÍZ es el enfoque y la mirada integradora; el Mapa RAÍZ es el recurso de exploración personal de tu punto de partida; Viaje RAÍZ es el programa de acompañamiento individual de 12 sesiones; y la Bitácora RAÍZ es el soporte físico para registrar tu proceso.',
  },
  {
    question: '¿Cómo puedo empezar?',
    answer:
      'Puedes comenzar explorando tu punto de partida con el Mapa RAÍZ o agendando una conversación previa con Anatolia para evaluar encaje mutuo y conocer las alternativas que mejor se adapten a tu momento.',
  },
  {
    question: '¿Cómo funciona el acompañamiento de Viaje RAÍZ?',
    answer:
      'Es un proceso personalizado individual de 12 sesiones a lo largo de tres meses. Abordamos tu historia, exploramos tus cinco recursos y definimos acuerdos sostenibles respetando tu contexto y tus tiempos.',
  },
  {
    question: '¿Tengo que esperar una fecha grupal para iniciar?',
    answer:
      'No. El inicio de Viaje RAÍZ es continuo y personalizado; se coordina directamente con Anatolia según tu disponibilidad y tu momento actual.',
  },
];
