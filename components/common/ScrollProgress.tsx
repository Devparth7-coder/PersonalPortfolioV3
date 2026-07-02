'use client';

import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const { progress, activeSection } = useScrollProgress();

  const navDots = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'featured', label: 'Featured Projects' },
    { id: 'projects', label: 'All Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'cp', label: 'CP Stats' },
    { id: 'chatbot', label: 'AI Assistant' },
    { id: 'research', label: 'Research' },
    { id: 'blog', label: 'Blog' },
    { id: 'poetry', label: 'Poetry' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Fixed Gradient Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-all duration-150 shadow-glow-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Right Side Elevator Indicator Dots */}
      <div className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-3 pointer-events-auto">
        {navDots.map((dot) => {
          const isActive = activeSection === dot.id;
          return (
            <a
              key={dot.id}
              href={`#${dot.id}`}
              className="group flex items-center space-x-2 py-1"
              title={dot.label}
            >
              <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-0.5 rounded border border-white/10 shadow-md whitespace-nowrap">
                {dot.label}
              </span>
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-150 bg-cyan-400 shadow-glow-cyan border-2 border-slate-900'
                    : 'bg-white/20 hover:bg-white/60 hover:scale-125'
                }`}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
