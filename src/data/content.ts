/**
 * Central copy and content configuration for RAÍZ · Anatolia Zapata
 */

import { FaqItem, NavLink, ResourceItem } from '../types';

export const BRAND = {
  name: 'RAÍZ',
  founder: 'Anatolia Zapata',
  fullName: 'RAÍZ · Anatolia Zapata',
  tagline: 'Comprende tu raíz. Transforma tus decisiones.',
  subtagline: 'Cada decisión deja una huella.',
  heroDescription:
    'Un espacio para comprender lo que influye en tus decisiones y desarrollar recursos para avanzar con mayor conciencia, desde tu historia y tu realidad.',
};

export const CONTACT = {
  whatsappDisplay: '+51 949 465 083',
  whatsappRaw: '51949465083',
  email: 'anatolia.zapata@gmail.com',
  mapUrl: 'https://cjyyftsgcb.zite.so/',
  socials: {
    // Hidden until confirmed URLs are provided
    instagram: '',
    linkedin: '',
  },
};

/**
 * Builds pre-filled WhatsApp links with appropriate URL encoding
 */
export function getWhatsAppLink(type: 'viaje' | 'anatolia' | 'organizaciones' | 'general'): string {
  const messages: Record<string, string> = {
    viaje:
      'Hola Anatolia, me gustaría consultar por Viaje RAÍZ y conocer los detalles para participar.',
    anatolia:
      'Hola Anatolia, leí sobre tu propuesta de acompañamiento en RAÍZ y me gustaría conversar contigo.',
    organizaciones:
      'Hola Anatolia, me gustaría explorar cómo llevar el enfoque RAÍZ a mi organización o equipo.',
    general:
      'Hola Anatolia, me gustaría tener más información sobre el acompañamiento de RAÍZ.',
  };

  const message = messages[type] || messages.general;
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'El enfoque', href: '#enfoque' },
  { label: 'Mapa RAÍZ', href: '#mapa-raiz' },
  { label: 'Viaje RAÍZ', href: '#viaje-raiz' },
  { label: 'Anatolia', href: '#sobre-anatolia' },
  { label: 'Organizaciones', href: '#organizaciones' },
];

export const CONNECTION_SITUATIONS = [
  {
    id: 'urgencia',
    label: 'Decisiones desde la prisa',
    description: 'Tomas decisiones desde la urgencia del momento, sintiendo que no hay tiempo para pausar y mirar con perspectiva.',
  },
  {
    id: 'patrones',
    label: 'Patrones que se repiten',
    description: 'Repites hábitos o respuestas automáticas que deseas cambiar, aún cuando tienes clara la intención de hacerlo diferente.',
  },
  {
    id: 'sostener',
    label: 'Dificultad para sostener',
    description: 'Te cuesta sostener en el tiempo lo que decides cuando la energía decae o las exigencias cotidianas aumentan.',
  },
  {
    id: 'claridad',
    label: 'Búsqueda del siguiente paso',
    description: 'Necesitas un espacio sereno para ordenar prioridades y elegir tu siguiente paso con verdadera certeza personal.',
  },
];

export const FUNDAMENTAL_RESOURCES: ResourceItem[] = [
  {
    id: 'perspectiva',
    number: '01',
    name: 'Perspectiva',
    description: 'Cómo interpretas lo que ocurre a tu alrededor y consideras distintas posibilidades antes de actuar.',
    reflectionPrompt: '¿Desde qué mirada estás leyendo lo que vives hoy?',
  },
  {
    id: 'gestion-emocional',
    number: '02',
    name: 'Gestión emocional',
    description: 'Cómo reconoces, regulas y expresas lo que sientes, permitiendo que las emociones informen sin desbordar tus elecciones.',
    reflectionPrompt: '¿Qué emoción suele acelerar o frenar tus decisiones?',
  },
  {
    id: 'direccion',
    number: '03',
    name: 'Dirección',
    description: 'Cómo defines tus prioridades y orientas tus decisiones cotidianas en coherencia con tus valores profundos.',
    reflectionPrompt: '¿Tus elecciones diarias apuntan hacia lo que de verdad valoras?',
  },
  {
    id: 'energia-vital',
    number: '04',
    name: 'Energía vital',
    description: 'Cómo cuidas, dosificas y renuevas la energía física y mental que necesitas para sostener tu propio camino.',
    reflectionPrompt: '¿Qué decisiones te están nutriendo y cuáles drenan tu vitalidad?',
  },
  {
    id: 'accion-consistente',
    number: '05',
    name: 'Acción consistente',
    description: 'Cómo conviertes tus decisiones conscientes en pasos concretos y los mantienes a lo largo del tiempo.',
    reflectionPrompt: '¿De qué forma tus acuerdos contigo misma se vuelven realidad?',
  },
];

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
    question: '¿A quién está dirigido Viaje RAÍZ?',
    answer:
      'Está dirigido a mujeres que desean comprender sus patrones, dejar de reaccionar en automático y desarrollar recursos internos para tomar decisiones más conscientes en su vida personal y profesional.',
  },
  {
    question: '¿Cuánto dura el acompañamiento?',
    answer:
      'El programa se desarrolla a lo largo de 12 sesiones personalizadas durante un período de tres meses, brindando el tiempo necesario para asentar cada descubrimiento.',
  },
  {
    question: '¿Tengo que esperar una fecha de inicio?',
    answer:
      'No. El inicio de Viaje RAÍZ es personalizado y se coordina de manera directa con Anatolia de acuerdo con tu momento y disponibilidad.',
  },
  {
    question: '¿Qué es el Mapa RAÍZ?',
    answer:
      'Es un recurso de exploración personal diseñado para observar cómo se encuentran tus cinco recursos fundamentales: perspectiva, gestión emocional, dirección, energía vital y acción consistente. Abre una primera conversación sobre tus decisiones.',
  },
  {
    question: '¿Cómo conozco los detalles para participar?',
    answer:
      'Puedes escribirle directamente a Anatolia por WhatsApp para conversar sobre tu situación actual, conocer el funcionamiento del programa y resolver cualquier duda antes de dar el paso.',
  },
];
