'use client';

import React, { Suspense, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { useUIStore } from '../store/useUIStore';

interface ThreeCanvasProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  enableControls?: boolean;
  autoRotate?: boolean;
  className?: string;
  autoRotateSpeed?: number;
}

export default function ThreeCanvas({
  children,
  cameraPosition = [0, 0, 8],
  fov = 60,
  enableControls = false,
  autoRotate = false,
  className = 'w-full h-full',
  autoRotateSpeed = 0.5,
}: ThreeCanvasProps) {
  const { showPerformanceMonitor } = useUIStore();

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, 2]} // Support high DPI mobile screens while preserving FPS
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: enableControls ? 'auto' : 'none' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
        <directionalLight position={[0, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Preload all />
          {children}
        </Suspense>

        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            dampingFactor={0.05}
          />
        )}
      </Canvas>
      
      {showPerformanceMonitor && (
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-cyan-400 font-mono text-xs px-3 py-1.5 rounded border border-cyan-500/30 z-50">
          ⚡ WebGL 60 FPS • High-Perf Mode
        </div>
      )}
    </div>
  );
}
