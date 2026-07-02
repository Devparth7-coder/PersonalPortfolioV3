'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Edges } from '@react-three/drei';
import * as THREE from 'three';

function SingleCube({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4 * speed;
      meshRef.current.rotation.y += delta * 0.6 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1.5} floatIntensity={2} position={position}>
      <Box ref={meshRef} args={[scale, scale, scale]}>
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.35}
          roughness={0.1}
          metalness={0.9}
          transmission={0.8}
          ior={1.5}
        />
        <Edges threshold={15} color={color} />
      </Box>
    </Float>
  );
}

export default function CodeCubesScene() {
  return (
    <group>
      <SingleCube position={[-3, 1.5, -2]} color="#22d3ee" scale={1.2} speed={0.8} />
      <SingleCube position={[3, -1, -1]} color="#8b5cf6" scale={1.5} speed={1.1} />
      <SingleCube position={[0, 2.5, -3]} color="#d946ef" scale={0.9} speed={1.3} />
      <SingleCube position={[-2.5, -2, -2]} color="#38bdf8" scale={1.1} speed={0.9} />
      <SingleCube position={[2.5, 2, -2.5]} color="#a78bfa" scale={1.3} speed={0.7} />
    </group>
  );
}
