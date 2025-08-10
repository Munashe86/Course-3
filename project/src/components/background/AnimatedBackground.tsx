import React from 'react';
import { BackgroundShapes } from './BackgroundShapes';
import { BackgroundGrid } from './BackgroundGrid';
import { BackgroundGradient } from './BackgroundGradient';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AnimatedBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {!prefersReducedMotion ? (
        <>
          <div className="absolute inset-0 bg-deep-space/80" />
          <BackgroundGradient />
          <BackgroundGrid />
          <BackgroundShapes />
        </>
      ) : (
        <div className="absolute inset-0 bg-deep-space" />
      )}
    </div>
  );
};