/**
 * Logo Component for RAÍZ · Anatolia Zapata
 *
 * Designed as a modular, easily replaceable component.
 * Following brand instructions:
 * "Presenta provisionalmente el nombre RAÍZ con la firma ANATOLIA ZAPATA
 * mediante texto elegante. No inventes otro isotipo. Separa el logo de los
 * textos de la interfaz para reemplazarlo fácilmente."
 */

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'dark', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-[#F2EBDD]' : 'text-[#363D28]';
  const subtextColor = isLight ? 'text-[#F2EBDD]/75' : 'text-[#363D28]/80';

  const sizeClasses = {
    sm: {
      title: 'text-xl tracking-[0.22em]',
      subtitle: 'text-[9px] tracking-[0.28em]',
      container: 'gap-0.5',
    },
    md: {
      title: 'text-2xl md:text-3xl tracking-[0.24em]',
      subtitle: 'text-[10px] md:text-[11px] tracking-[0.32em]',
      container: 'gap-0.5',
    },
    lg: {
      title: 'text-4xl md:text-5xl tracking-[0.26em]',
      subtitle: 'text-xs md:text-sm tracking-[0.34em]',
      container: 'gap-1',
    },
  }[size];

  return (
    <a
      href="#"
      className={`group inline-flex flex-col items-start select-none transition-opacity hover:opacity-90 focus-visible:ring-1 focus-visible:ring-[#363D28] rounded-sm ${className}`}
      aria-label="RAÍZ · Anatolia Zapata - Inicio"
      data-logo-slot="definitive-logo-placeholder"
    >
      <span
        className={`font-serif font-medium uppercase leading-none transition-colors ${textColor} ${sizeClasses.title}`}
      >
        RAÍZ
      </span>
      <span
        className={`font-sans font-medium uppercase leading-tight ${subtextColor} ${sizeClasses.subtitle}`}
      >
        Anatolia Zapata
      </span>
    </a>
  );
}
