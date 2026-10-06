import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const LumcasLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  showSubtitle = true,
  size = 'md',
}) => {
  // Color configuration
  // 'color': vibrant purple #8B1FD1 with deep purple #4A0F7A
  // 'light': white for dark backgrounds (Hero transparent / Footer)
  // 'dark': deep purple #4A0F7A for light backgrounds
  const primaryFill =
    variant === 'light' ? '#FFFFFF' : variant === 'dark' ? '#4A0F7A' : '#8B1FD1';
  const secondaryFill =
    variant === 'light' ? '#E9D5FF' : variant === 'dark' ? '#6B21A8' : '#7313B0';
  const textColor =
    variant === 'light' ? 'text-white' : variant === 'dark' ? 'text-[#4A0F7A]' : 'text-[#4A0F7A]';
  const subtitleColor =
    variant === 'light' ? 'text-purple-200' : 'text-slate-500';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg leading-tight tracking-wider',
    md: 'text-xl leading-tight tracking-wider',
    lg: 'text-2xl leading-tight tracking-wider',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-fidelity Vector Representation of the Lumcas Emblem */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          {/* Background Skyscraper Towers (Right) */}
          {/* Main Tower Body */}
          <path
            d="M86 12L98 22V82H86V12Z"
            fill={primaryFill}
          />
          {/* Taller Skyscraper Pillar */}
          <path
            d="M72 20L84 10V82H72V20Z"
            fill={secondaryFill}
          />
          {/* Third Skyscraper Column */}
          <path
            d="M98 34L108 42V82H98V34Z"
            fill={primaryFill}
          />

          {/* Skyscraper Windows (Tower 1) */}
          <rect x="75" y="26" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="75" y="34" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="75" y="42" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="75" y="50" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="75" y="58" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />

          {/* Skyscraper Windows (Tower 2) */}
          <rect x="89" y="28" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="89" y="36" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="89" y="44" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="89" y="52" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />
          <rect x="89" y="60" width="3" height="4" rx="0.5" fill="white" fillOpacity="0.9" />

          {/* Roof Line 1 (Left House Gable) */}
          <path
            d="M6 82L36 52L60 76L55 80L36 61L14 83L6 82Z"
            fill={primaryFill}
          />
          {/* Inner roof accent / fill */}
          <path
            d="M14 83L36 61L55 80L50 83L36 69L20 83H14Z"
            fill={secondaryFill}
          />

          {/* Left House Windows (4-pane window grid) */}
          <rect x="32" y="73" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="37" y="73" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="32" y="78" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="37" y="78" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />

          {/* Roof Line 2 (Center House Gable) */}
          <path
            d="M38 82L70 48L98 76L92 80L70 58L46 82H38Z"
            fill={primaryFill}
          />
          {/* Inner roof accent */}
          <path
            d="M48 82L70 60L90 80L85 82L70 67L54 82H48Z"
            fill={secondaryFill}
          />

          {/* Center House Windows (4-pane window grid) */}
          <rect x="67" y="69" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="72" y="69" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="67" y="74" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />
          <rect x="72" y="74" width="3.5" height="3.5" rx="0.5" fill={primaryFill} />

          {/* Horizontal Ground Baseline Line */}
          <rect x="6" y="84" width="102" height="3" rx="1.5" fill={primaryFill} />

          {/* Stylized Brand Lettering "LUMCAS" base curve accents */}
          <circle cx="20" cy="98" r="2" fill={primaryFill} />
          <circle cx="100" cy="98" r="2" fill={primaryFill} />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold uppercase font-sans tracking-[0.18em] transition-colors ${textColor} ${titleSizes[size]}`}
          style={{ letterSpacing: '0.16em' }}
        >
          LUMCAS
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] uppercase tracking-[0.24em] font-medium transition-colors ${subtitleColor}`}
          >
            Realtor & Properties Ltd
          </span>
        )}
      </div>
    </div>
  );
};
