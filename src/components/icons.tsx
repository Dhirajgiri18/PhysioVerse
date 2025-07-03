import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2.66663C8.63636 2.66663 2.66669 8.63629 2.66669 16C2.66669 23.3636 8.63636 29.3333 16 29.3333C23.3637 29.3333 29.3334 23.3636 29.3334 16C29.3334 8.63629 23.3637 2.66663 16 2.66663Z"
      className="stroke-primary fill-primary/20"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.6667V21.3333"
      className="stroke-primary"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.6667 16H21.3334"
      className="stroke-primary"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
