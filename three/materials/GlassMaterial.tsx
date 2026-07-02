'use client';

import React from 'react';

interface GlassMaterialProps {
  color?: string;
  roughness?: number;
  transmission?: number;
  thickness?: number;
  ior?: number;
}

export default function GlassMaterial({
  color = '#22d3ee',
  roughness = 0.15,
  transmission = 0.85,
  thickness = 1.2,
  ior = 1.5,
}: GlassMaterialProps) {
  return (
    <meshPhysicalMaterial
      color={color}
      roughness={roughness}
      transmission={transmission}
      thickness={thickness}
      ior={ior}
      transparent
      opacity={0.8}
      reflectivity={0.9}
      clearcoat={0.8}
      clearcoatRoughness={0.1}
      wireframe={false}
    />
  );
}
