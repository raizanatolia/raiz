/**
 * Configuración centralizada de envío de formularios vía FormSubmit.co
 * RAÍZ · Anatolia Zapata
 */

export const FORMSUBMIT_CONFIG = {
  recipientEmail: 'raizanatolia@gmail.com',
  endpoint: 'https://formsubmit.co/ajax/raizanatolia@gmail.com',
  subjects: {
    persona: 'RAÍZ | Nueva consulta personal',
    organizacion: 'RAÍZ | Nueva solicitud de organización',
    contacto: 'RAÍZ | Nueva consulta de contacto',
  },
  template: 'table',
  captcha: 'false',
  honeypotField: '_honey',
  privacyNotice: 'Utilizaremos la información que nos compartas únicamente para atender tu consulta.',
} as const;

export type FormVariant = keyof typeof FORMSUBMIT_CONFIG.subjects;
