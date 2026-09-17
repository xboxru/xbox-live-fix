interface XboxMarkProps {
  size?: number;
  glow?: boolean;
  className?: string;
}

export default function XboxMark({ size = 40, glow = false, className = "" }: XboxMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${glow ? "xbox-glow" : ""} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="xbox-sphere" cx="36%" cy="28%" r="95%">
          <stop offset="0%" stopColor="#e4ffa1" />
          <stop offset="32%" stopColor="#9bf00b" />
          <stop offset="72%" stopColor="#3fae26" />
          <stop offset="100%" stopColor="#0e5f10" />
        </radialGradient>
        <clipPath id="xbox-clip">
          <circle cx="60" cy="60" r="55" />
        </clipPath>
      </defs>
      <circle cx="60" cy="60" r="55" fill="url(#xbox-sphere)" />
      <g clipPath="url(#xbox-clip)">
        <rect x="-32" y="52" width="184" height="16.5" rx="8.5" fill="#061007" transform="rotate(45 60 60)" />
        <rect x="-32" y="52" width="184" height="16.5" rx="8.5" fill="#061007" transform="rotate(-45 60 60)" />
        <ellipse cx="60" cy="10" rx="64" ry="22" fill="#ffffff" opacity="0.28" />
        <ellipse cx="60" cy="118" rx="70" ry="20" fill="#061007" opacity="0.35" />
      </g>
      <circle cx="60" cy="60" r="55" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    </svg>
  );
}
