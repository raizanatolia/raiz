/**
 * Type definitions for RAÍZ · Anatolia Zapata
 */

export interface ImageAsset {
  id: string;
  url: string;
  alt: string;
  source: string;
  isProvisional: boolean;
  cropPosition?: string;
  aspectRatio?: string;
  caption?: string;
}

export interface ResourceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  reflectionPrompt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}
