'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface OrbitSkillProps {
  name: string;
  radius: number;
  speed: number;
  color: string;
  offsetAngle: number;
}

function OrbitSkill({ name, radius, speed, color, offsetAngle }: OrbitSkillProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed;
    }
  });

  const x = Math.cos(offsetAngle) * radius;
  const z = Math.sin(offsetAngle) * radius;

  return (
    <group ref={groupRef}>
      <group position={[x, 0, z]}>
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[0.35, 32, 32]}>
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <Text
            position={[0, 0.6, 0]}
            fontSize={0.22}
            color="#f8fafc"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#0f172a"
          >
            {name}
          </Text>
        </Float>
      </group>
    </group>
  );
}

export default function SkillSpheresScene() {
  const skills = [
    { name: 'Next.js 15', radius: 2.2, speed: 0.4, color: '#22d3ee', offset: 0 },
    { name: 'PyTorch AI', radius: 2.2, speed: 0.4, color: '#d946ef', offset: Math.PI },
    { name: 'React 19', radius: 3.4, speed: -0.3, color: '#38bdf8', offset: Math.PI / 3 },
    { name: 'Three.js', radius: 3.4, speed: -0.3, color: '#8b5cf6', offset: (4 * Math.PI) / 3 },
    { name: 'TypeScript', radius: 4.6, speed: 0.25, color: '#a78bfa', offset: Math.PI / 2 },
    { name: 'MongoDB', radius: 4.6, speed: 0.25, color: '#10b981', offset: (3 * Math.PI) / 2 },
    { name: 'CP / Algorithms', radius: 5.6, speed: -0.2, color: '#fbbf24', offset: 0 },
  ];

  return (
    <group rotation={[0.3, 0, 0.1]}>
      {/* Central Skill Orbit Hub */}
      <Sphere args={[0.8, 32, 32]}>
        <meshPhysicalMaterial color="#0f172a" emissive="#06b6d4" emissiveIntensity={0.5} roughness={0.1} />
      </Sphere>

      {skills.map((s, idx) => (
        <OrbitSkill
          key={idx}
          name={s.name}
          radius={s.radius}
          speed={s.speed}
          color={s.color}
          offsetAngle={s.offset}
        />
      ))}
    </group>
  );
}
