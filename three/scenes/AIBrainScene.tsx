'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function AIBrainScene() {
  const coreRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.4;
      coreRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.8;
      ring1Ref.current.rotation.y = time * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.6;
      ring2Ref.current.rotation.z = time * 0.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -time * 0.5;
      ring3Ref.current.rotation.z = -time * 0.7;
    }
  });

  return (
    <group scale={1.2}>
      {/* Morphing Glowing Brain Core */}
      <Sphere ref={coreRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>

      {/* Inner Glowing Core */}
      <Sphere args={[1.1, 32, 32]}>
        <meshBasicMaterial color="#d946ef" transparent opacity={0.6} />
      </Sphere>

      {/* Cyberpunk Orbit Rings */}
      <Torus ref={ring1Ref} args={[2.2, 0.03, 16, 100]}>
        <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.8} />
      </Torus>

      <Torus ref={ring2Ref} args={[2.8, 0.02, 16, 100]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.8} />
      </Torus>

      <Torus ref={ring3Ref} args={[3.4, 0.015, 16, 100]}>
        <meshStandardMaterial color="#ec4899" emissive="#c026d3" emissiveIntensity={0.8} />
      </Torus>
    </group>
  );
}
