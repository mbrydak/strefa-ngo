import React, { forwardRef } from 'react';

export const CheckIcon = forwardRef((props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
CheckIcon.displayName = 'CheckIcon';
