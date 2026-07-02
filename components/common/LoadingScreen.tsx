'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Sparkles, Cpu } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const bootLogs = [
    'INITIALIZING_NEURAL_KERNEL_V15.0...',
    'CONNECTING_TO_DEVPARTH_KNOWLEDGE_BASE...',
    'LOADING_WEBGL_THREE_FIBER_SHADERS...',
    'SYNCHRONIZING_GITHUB_CONTRIBUTION_MATRIX...',
    'VERIFYING_SEBI_CYBERSECURITY_PROTOCOLS...',
    'COMPILING_CINEMATIC_UI_EXPERIENCE...',
    'SYSTEM_ONLINE • WELCOME_RECRUITER.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 120);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1 < bootLogs.length ? prev + 1 : prev));
    }, 280);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6 transition-opacity duration-700 ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Cyber Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-700 translate-x-32 -translate-y-20" />

      <div className="relative z-10 max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Terminal Boot Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 animate-pulse" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 animate-pulse delay-150" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse delay-300" />
            <span className="text-xs font-mono text-slate-400 ml-2">devparth-os ~ zsh</span>
          </div>
          <div className="flex items-center space-x-1 text-[11px] font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5 animate-spin" />
            <span>AI CORE</span>
          </div>
        </div>

        {/* Boot Status Message */}
        <div className="space-y-3 font-mono text-xs mb-8 min-h-[90px]">
          {bootLogs.slice(0, logIndex + 1).map((log, idx) => (
            <div
              key={idx}
              className={`flex items-center space-x-2 ${
                idx === logIndex ? 'text-cyan-300 font-semibold' : 'text-slate-500'
              }`}
            >
              <span className="text-violet-400">❯</span>
              <span>{log}</span>
              {idx === logIndex && idx !== bootLogs.length - 1 && (
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
              )}
            </div>
          ))}
        </div>

        {/* Loading Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">KERNEL_BOOT_PROGRESS</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 rounded-full transition-all duration-150 shadow-glow-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Security Verified Badge */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center space-x-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SEBI TrustShield Verified</span>
          </div>
          <span className="text-slate-600">Gorakhpur, India • UTC+5:30</span>
        </div>
      </div>
    </div>
  );
}
