import React from 'react';

interface SvgProps {
  color: string;
  width: number;
  height: number;
}

export const CloseX: React.FC<SvgProps> = ({ color, width, height }) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width={width} height={height}>
      <path
        fill={color}
        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
      ></path>
    </svg>
  );
};
