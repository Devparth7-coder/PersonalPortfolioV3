'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { Cpu, CheckCircle2, Sparkles, Layers, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreeCanvas = dynamic(() => import('../../three/ThreeCanvas'), { ssr: false });
const SkillSpheresScene = dynamic(() => import('../../three/scenes/SkillSpheresScene'), { ssr: false });

export default function SkillsSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'Frontend', 'Backend', 'DevOps & Databases', 'Core & Problem Solving'];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory === 'All') return true;
    return cat.category === activeCategory;
  });

  return (
    <section id="skills" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            3D Skill Orbit & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Architecture Radar</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Every technology in my arsenal is verified through production deployments and algorithmic contest performance.
          </p>
        </div>

        {/* Top: 3D Skill Spheres Orbit View */}
        <div className="h-[380px] sm:h-[450px] rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-glass group">
          <ThreeCanvas cameraPosition={[0, 4, 10]} fov={55} enableControls={true} autoRotate={true} autoRotateSpeed={0.4}>
            <SkillSpheresScene />
          </ThreeCanvas>
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono text-slate-300 pointer-events-none">
            <span className="text-cyan-300 font-semibold">🌌 3D WebGL Skill Constellation</span>
            <span className="text-[11px] text-slate-500 hidden sm:inline">Drag to orbit • Zoom enabled</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan scale-105'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((catObj) => (
            <div
              key={catObj.category}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl space-y-6 shadow-glass"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-2.5">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-mono">{catObj.category}</h3>
                </div>
                <span className="text-xs font-mono text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md border border-violet-500/20">
                  {catObj.skills.length} Core Tools
                </span>
              </div>

              <div className="space-y-5">
                {catObj.skills.map((sk, idx) => (
                  <div
                    key={sk.name}
                    onMouseEnter={playHoverSound}
                    className="space-y-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-white">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{sk.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-mono text-slate-400">{sk.years}</span>
                        <span className="text-cyan-400 font-mono font-bold">{sk.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 rounded-full shadow-glow-cyan"
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                      {sk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
