import React, { forwardRef } from 'react';

export const ExclamationCircleIcon = forwardRef(
  (props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
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
        d="M12 8v4-4zm0 8h.01H12zm9-4a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
);
ExclamationCircleIcon.displayName = 'ExclamationCircleIcon';
