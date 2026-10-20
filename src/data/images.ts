/**
 * Central image configuration for RAÍZ · Anatolia Zapata
 *
 * Prepared for future Cloudinary integration:
 * To migrate, simply update `CLOUDINARY_BASE_URL` or the individual image URLs.
 * The `getImageUrl` helper normalizes assets and supports responsive sizing.
 */

import { ImageAsset } from '../types';

export const CLOUDINARY_CONFIG = {
  cloudName: '', // e.g. 'raiz-anatolia'
  baseUrl: '',   // e.g. 'https://res.cloudinary.com/raiz-anatolia/image/upload'
  useCloudinary: false,
};

export const IMAGES: Record<string, ImageAsset> = {
  hero: {
    id: 'hero_contemplation',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    alt: 'Mujer en un momento de pausa y serenidad con luz natural cálida',
    source: 'Unsplash (Stock provisional)',
    isProvisional: true,
    cropPosition: 'center 30%',
    aspectRatio: '4/5',
    caption: 'Momento de pausa y claridad',
  },
  approachSeed: {
    id: 'approach_roots_growth',
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Brote en crecimiento con raíces en la tierra, simbolizando el arraigo profundo',
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
};

/**
 * Returns the optimized URL for an image asset.
 * If Cloudinary is enabled in the future, it appends appropriate transformations.
 */
export function getImageUrl(asset: ImageAsset, options?: { width?: number; quality?: number }): string {
  if (CLOUDINARY_CONFIG.useCloudinary && CLOUDINARY_CONFIG.baseUrl) {
    const transforms: string[] = ['f_auto', 'q_auto'];
    if (options?.width) transforms.push(`w_${options.width}`);
    return `${CLOUDINARY_CONFIG.baseUrl}/${transforms.join(',')}/${asset.id}`;
  }
  return asset.url;
}
