import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2L12 10" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18L12 22" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 14L21 14" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 14L8 14" className="stroke-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
