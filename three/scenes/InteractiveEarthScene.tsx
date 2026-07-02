'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveEarthScene() {
  const earthRef = useRef<THREE.Group>(null!);

  // Convert Latitude (26.7606 N) and Longitude (83.3732 E) to 3D sphere coordinate
  const lat = 26.7606;
  const lon = 83.3732;
  const radius = 2.05;
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const beaconX = -(radius * Math.sin(phi) * Math.cos(theta));
  const beaconZ = radius * Math.sin(phi) * Math.sin(theta);
  const beaconY = radius * Math.cos(phi);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={earthRef} rotation={[0.2, -1.2, 0]}>
        {/* Wireframe Holographic Globe */}
        <Sphere args={[2, 48, 48]}>
          <meshStandardMaterial
            color="#06b6d4"
            wireframe={true}
            transparent
            opacity={0.35}
            emissive="#0891b2"
            emissiveIntensity={0.5}
          />
        </Sphere>

        {/* Inner Dark Sphere for contrast */}
        <Sphere args={[1.96, 32, 32]}>
          <meshBasicMaterial color="#0f172a" />
        </Sphere>

        {/* Gorakhpur India Location Beacon */}
        <group position={[beaconX, beaconY, beaconZ]}>
          <Sphere args={[0.08, 16, 16]}>
            <meshBasicMaterial color="#d946ef" />
          </Sphere>
          
          {/* Pulsing Beacon Ring */}
          <Sphere args={[0.15, 16, 16]}>
            <meshBasicMaterial color="#f87171" wireframe={true} transparent opacity={0.8} />
          </Sphere>

          <Html distanceFactor={12} position={[0, 0.3, 0]}>
            <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-fuchsia-500/50 text-xs font-mono text-fuchsia-300 shadow-glow-fuchsia whitespace-nowrap animate-bounce">
              📍 Gorakhpur, UP, India • Dev Parth
            </div>
          </Html>
        </group>
      </group>
    </Float>
  );
}
