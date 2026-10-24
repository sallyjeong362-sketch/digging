import type { SVGProps } from 'react';

export function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="7.2" />
      <circle cx="10" cy="10" r="2.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="10" cy="10" r="7.2" />
      <path d="M12.6 7.4 L9 9 L7.4 12.6 L11 11 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLayers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6.5 H17" />
      <path d="M3 10.5 H17" opacity="0.65" />
      <path d="M3 14.5 H17" opacity="0.35" />
      <circle cx="13.5" cy="6.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** The app's brand mark: an arrow digging down through the ground line. */
export function DigMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <rect x="3" y="19" width="22" height="3.4" rx="1.7" fill="currentColor" opacity="0.32" />
      <path d="M14 2.5 V15.5 M8 10 L14 16 L20 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
