'use client';

import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function CustomCursor() {
  const mouse = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default true to avoid flash on mobile

  useEffect(() => {
    // Check if device is desktop with a mouse
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Primary Glowing Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-10 h-10 bg-cyan-400/30 border border-cyan-400 shadow-glow-cyan'
            : isClicked
            ? 'w-3 h-3 bg-fuchsia-500 shadow-glow-fuchsia'
            : 'w-4 h-4 bg-cyan-400 shadow-glow-cyan'
        }`}
        style={{
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
        }}
      />

      {/* Lagging Ring / Magnetic Aura */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-violet-500/40 transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-16 h-16 bg-violet-500/10 border-violet-400/80 scale-110' : 'w-8 h-8 opacity-60'
        }`}
        style={{
          left: `${mouse.x}px`,
          top: `${mouse.y}px`,
        }}
      />
    </>
  );
}
