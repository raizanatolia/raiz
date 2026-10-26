/**
 * Central image & brand assets configuration for RAÍZ · Anatolia Zapata
 *
 * Official Cloudinary Assets:
 * - Logotipo horizontal: https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png
 * - Isotipo / Favicon: https://res.cloudinary.com/rus3f4tb/image/upload/v1792767407/favicon-raiz.png
 */

import { ImageAsset } from '../types';

export const BRAND_ASSETS = {
  logoHorizontal: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png',
  isotipo: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792767407/favicon-raiz.png',
  // Backgrounds oficiales de Hero
  heroBackgroundCloudinaryUrl: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1792767313/background-hero-raiz-anatoliazapata.png',
  heroPersonasBackground: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793034612/anatolia-zapata-raiz-personas.png',
  heroOrganizacionesBackground: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793034612/anatolia-zapata-raiz-organizaciones.png',
  heroViajeRaizBackground: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1793036682/bg-hero-raiz-anatolia-zapata-viaje-raiz.png',
  heroMapaRaizBackground: 'https://res.cloudinary.com/rus3f4tb/image/upload/v1793037854/bg-conoce-tu-mapa-raiz.png',
  // Retrato oficial de Anatolia Zapata
  anatoliaPhoto: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
  // Pasos oficiales de El Sentido de RAÍZ
  senseComprender: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-comprender.png',
  senseReconocer: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-reconocer.png',
  senseElegir: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792773744/raiz-anatolia-zapata-elegir.png',
};

export const CLOUDINARY_CONFIG = {
  cloudName: 'rus3f4tb',
  baseUrl: 'https://res.cloudinary.com/rus3f4tb/image/upload',
  useCloudinary: false,
};

export const IMAGES: Record<string, ImageAsset> = {
  approachSeed: {
    id: 'approach_roots_growth',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Brote en crecimiento con raíces en la tierra fértil, simbolizando el arraigo profundo',
    source: 'Unsplash (Stock provisional)',
    isProvisional: true,
    cropPosition: 'center center',
    aspectRatio: '16/10',
    caption: 'Todo crecimiento nace de una raíz sólida',
  },
  journal: {
    id: 'bitacora_notebook',
    url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=85',
    alt: 'Cuaderno sobrio de lino y papel sobre mesa de madera con pluma, sin logotipos',
    source: 'Unsplash (Stock provisional sin marca)',
    isProvisional: true,
    cropPosition: 'center center',
    aspectRatio: '4/3',
    caption: 'Bitácora de registro personal del proceso',
  },
  anatoliaPortrait: {
    id: 'anatolia_portrait_official',
    url: 'https://res.cloudinary.com/rus3f4tb/image/upload/f_auto,q_auto/v1792769718/Anatolia-Zapata-Coach-RAIZ.png',
    alt: 'Anatolia Zapata, coach y creadora del Método RAÍZ',
    source: 'Cloudinary (Retrato oficial)',
    isProvisional: false,
    cropPosition: 'center 15%',
    aspectRatio: '3/4',
    caption: 'Anatolia Zapata · Creadora de RAÍZ',
  },
  anatoliaSpace: {
    id: 'anatolia_space_botanical',
    url: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
    alt: 'Espacio cálido y luminoso con plantas naturales, reservando el lugar para el retrato oficial de Anatolia Zapata',
    source: 'Unsplash (Stock provisional de espacio/botánica)',
    isProvisional: true,
    cropPosition: 'center 40%',
    aspectRatio: '3/4',
    caption: 'Espacio de trabajo y reflexión de Anatolia Zapata',
  },
  organizations: {
    id: 'org_conversations',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=85',
    alt: 'Conversación reflexiva entre personas en un entorno sobrio y con luz natural',
    source: 'Unsplash (Stock provisional)',
    isProvisional: true,
    cropPosition: 'center center',
    aspectRatio: '16/9',
    caption: 'Alineación consciente en organizaciones',
  },
  natureReflection: {
    id: 'nature_reflection_leaf',
    url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=85',
    alt: 'Luz natural matutina filtrándose suavemente entre follaje sereno',
    source: 'Unsplash (Stock provisional)',
    isProvisional: true,
    cropPosition: 'center center',
    aspectRatio: '16/10',
    caption: 'Pausa y luz natural',
  },
};

export function getImageUrl(asset: ImageAsset, options?: { width?: number; quality?: number }): string {
  if (CLOUDINARY_CONFIG.useCloudinary && CLOUDINARY_CONFIG.baseUrl) {
    const transforms: string[] = ['f_auto', 'q_auto'];
    if (options?.width) transforms.push(`w_${options.width}`);
    return `${CLOUDINARY_CONFIG.baseUrl}/${transforms.join(',')}/${asset.id}`;
  }
  return asset.url;
}
