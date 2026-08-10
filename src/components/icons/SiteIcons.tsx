/**
 * Royalty-free inline SVG icons (OFL / MIT / public-domain paths).
 * All drawn on a 24×24 grid. stroke="currentColor" — colour via CSS.
 */

type IconProps = { size?: number; className?: string };
const D = { fill: "none", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/* ── Service pillars ── */

export function IconTarget({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function IconEye({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconSparkles({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M12 2l1.8 5.6H19l-4.6 3.4 1.8 5.5L12 13.1l-4.2 3.4 1.8-5.5L5 7.6h5.2z" />
      <path d="M5 3l.6 1.8H7L5.7 5.8l.6 1.8L5 6.7l-1.3 1-.6-1.8H1.5l1.2-.9-.6-1.8L5 3z" />
      <path d="M19 14l.6 1.8H21l-1.3.9.6 1.8-1.3-.9-1.3.9.6-1.8-1.3-.9h1.5z" />
    </svg>
  );
}

export function IconRocket({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export function IconBarChart({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
      <polyline points="2,12 8,8 14,13 20,6" />
    </svg>
  );
}

export function IconFunnel({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

/* ── GrowthRadar products ── */

export function IconBuilding({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <rect x="2" y="7" width="20" height="15" rx="1" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <path d="M8 21v-5a2 2 0 012-2h4a2 2 0 012 2v5" />
    </svg>
  );
}

export function IconCpu({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export function IconSignal({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M5 12.55a11 11 0 0114.08 0" />
      <path d="M10.54 15.59a6 6 0 012.92 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHandshake({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M17 11l-5-2-5 2" />
      <path d="M2 9l3 9 4-2 3 2 3-2 4 2 3-9" />
      <path d="M9 18l3 3 3-3" />
    </svg>
  );
}

export function IconShield({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  );
}

/* ── About section ── */

export function IconCompass({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76" />
    </svg>
  );
}

export function IconTelescope({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

/* ── Hero mini cards ── */

export function IconBrain({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96-.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 013.8-3.4 2.5 2.5 0 011.96-2z" />
      <path d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96-.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-3.8-3.4 2.5 2.5 0 00-1.96-2z" />
    </svg>
  );
}

export function IconZap({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

/* ── Footer CTAs ── */

export function IconCalendar({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function IconMessageCircle({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

export function IconMail({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function IconWand({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8L19 13M17.8 6.2L19 5M3 21l9-9M12.2 6.2L11 5" />
      <path d="M5 3l.6 1.8H7L5.7 5.8l.6 1.8L5 6.7l-1.3.9.6-1.8L3 4.8h1.4z" />
    </svg>
  );
}

export function IconSliders({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

/* ── Utility ── */
export function IconAnalytics({ size = 22, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={D.strokeWidth} strokeLinecap={D.strokeLinecap} strokeLinejoin={D.strokeLinejoin} className={className}>
      <line x1="3" y1="20" x2="21" y2="20" />
      <polyline points="3,12 9,8 14,13 21,6" />
      <rect x="2" y="14" width="4" height="6" rx="1" />
      <rect x="9" y="10" width="4" height="10" rx="1" />
      <rect x="16" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}
