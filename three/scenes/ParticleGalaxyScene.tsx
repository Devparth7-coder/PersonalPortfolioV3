'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMousePosition } from '../../hooks/useMousePosition';

export default function ParticleGalaxyScene({ count = 2500 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouse = useMousePosition();

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorCyan = new THREE.Color('#22d3ee');
    const colorViolet = new THREE.Color('#8b5cf6');
    const colorFuchsia = new THREE.Color('#d946ef');

    for (let i = 0; i < count; i++) {
      // Spiral galaxy math
      const radius = Math.random() * 8;
      const spinAngle = radius * 1.5;
      const branchAngle = ((i % 3) * 2 * Math.PI) / 3;

      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.8;

      pos[i * 3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      pos[i * 3 + 1] = randomY;
      pos[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color mixing based on radius
      const mixedColor = colorCyan.clone();
      if (radius > 4) {
        mixedColor.lerp(colorFuchsia, (radius - 4) / 4);
      } else {
        mixedColor.lerp(colorViolet, radius / 4);
      }

      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
      pointsRef.current.rotation.z += delta * 0.05;

      // React to mouse tilt
      pointsRef.current.rotation.x = mouse.normalizedY * 0.4;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
