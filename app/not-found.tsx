'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

const ThreeCanvas = dynamic(() => import('@/three/ThreeCanvas'), { ssr: false });
const ParticleGalaxyScene = dynamic(() => import('@/three/scenes/ParticleGalaxyScene'), { ssr: false });

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60">
        <ThreeCanvas cameraPosition={[0, 0, 8]} fov={60} autoRotate={true} autoRotateSpeed={1.5}>
          <ParticleGalaxyScene count={3000} />
        </ThreeCanvas>
      </div>

      <div className="relative z-10 max-w-lg w-full bg-slate-900/80 border border-fuchsia-500/30 rounded-2xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center mx-auto text-fuchsia-400 shadow-glow-fuchsia animate-bounce">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black font-mono text-white tracking-widest">404</h1>
          <h2 className="text-xl font-bold text-fuchsia-300 font-mono">NEURAL SECTOR UNREACHABLE</h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
            The page or data stream you are looking for has drifted outside the verified WebGL coordinate boundaries.
          </p>
        </div>

        <div className="pt-4 border-t border-white/10">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs shadow-glow-cyan hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Reboot to Command Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
