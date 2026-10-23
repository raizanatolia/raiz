/**
 * Official Logo Component for RAÍZ · Anatolia Zapata
 *
 * Utilizes the official Cloudinary brand assets:
 * - Logotipo horizontal: https://res.cloudinary.com/rus3f4tb/image/upload/v1792767322/RAIZ_HorizontalLogoTransparente.png
 * - Isotipo: https://res.cloudinary.com/rus3f4tb/image/upload/v1792767407/favicon-raiz.png
 *
 * Preserves original proportions and does not duplicate text manually.
 */

import { useState } from 'react';
import { BRAND_ASSETS } from '../data/images';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'isotipo';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

export default function Logo({
  className = '',
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  href = '#/',
  onClick,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const isLight = theme === 'light';

  // Responsive sizing based on official image proportions
  const sizeClasses = {
    sm: variant === 'horizontal' ? 'h-7 sm:h-8' : 'h-7 w-7',
    md: variant === 'horizontal' ? 'h-9 sm:h-10 md:h-11' : 'h-9 w-9',
    lg: variant === 'horizontal' ? 'h-12 sm:h-14' : 'h-12 w-12',
  }[size];

  const src = variant === 'horizontal' ? BRAND_ASSETS.logoHorizontal : BRAND_ASSETS.isotipo;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center select-none transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#363D28] rounded-xs ${className}`}
      aria-label="RAÍZ · Anatolia Zapata - Ir al inicio"
    >
      {!imgError ? (
        <img
          src={src}
          alt="RAÍZ · Anatolia Zapata"
          className={`${sizeClasses} w-auto object-contain transition-all duration-200 ${
            isLight ? 'brightness-0 invert opacity-95' : ''
          }`}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Typographic fallback if image ever fails to load */
        <span className={`inline-flex flex-col items-start ${isLight ? 'text-[#F2EBDD]' : 'text-[#363D28]'}`}>
          <span className="font-serif text-2xl tracking-[0.24em] font-medium leading-none">RAÍZ</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-80">Anatolia Zapata</span>
        </span>
      )}
    </a>
  );
}
