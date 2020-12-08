import React, { forwardRef } from 'react';

export const UserCircleIcon = forwardRef((props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M5.121 17.804A13.936 13.936 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
UserCircleIcon.displayName = 'UserCircleIcon';
