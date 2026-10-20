/**
 * OrganicTrace Component
 * Subtle, fine botanical hairline stroke evoking the growth path and root metaphor.
 */

interface OrganicTraceProps {
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'connector';
}

export default function OrganicTrace({ className = '', variant = 'vertical' }: OrganicTraceProps) {
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center justify-center overflow-hidden py-4 ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 240 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 md:w-64 h-6 text-[#A18347]/40 stroke-current"
        >
          <path
            d="M2 12 C40 12, 60 7, 90 12 C120 17, 150 7, 180 12 C210 17, 230 12, 238 12"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="120" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (variant === 'connector') {
    return (
      <div className={`flex justify-center overflow-hidden ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 60 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-28 text-[#363D28]/25 stroke-current"
        >
          <path
            d="M30 4 C30 35, 18 55, 18 75 C18 100, 36 110, 30 136"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          <circle cx="30" cy="136" r="1.5" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 32 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-16 text-[#A18347]/35 stroke-current"
      >
        <path
          d="M16 2 V55 M16 55 C16 65, 8 72, 8 78 M16 55 C16 65, 24 72, 24 78"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="16" cy="4" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}
