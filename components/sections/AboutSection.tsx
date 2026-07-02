'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_DETAILS, CAREER_TIMELINE } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { Terminal, Award, BookOpen, Briefcase, Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreeCanvas = dynamic(() => import('../../three/ThreeCanvas'), { ssr: false });
const AIBrainScene = dynamic(() => import('../../three/scenes/AIBrainScene'), { ssr: false });

export default function AboutSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [activeTab, setActiveTab] = useState<'all' | 'research' | 'experience' | 'education'>('all');

  const filteredTimeline = CAREER_TIMELINE.filter((node) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'research') return node.type === 'Research';
    if (activeTab === 'experience') return node.type === 'Experience' || node.type === 'Milestone';
    if (activeTab === 'education') return node.type === 'Education';
    return true;
  });

  return (
    <section id="about" className="relative py-24 bg-slate-950/80 border-t border-white/10 overflow-hidden">
      {/* Subtle glowing ambient lights */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL PHILOSOPHY & JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Engineer of <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Intelligent Ecosystems</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            From algorithmic foundations in competitive programming to deploying real-time multi-modal cybersecurity AI for SEBI, my mission is to craft software that operates at the absolute peak of visual and mathematical rigor.
          </p>
        </div>

        {/* Bio Grid with 3D Brain Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Bio & Mission Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-glass space-y-4 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center space-x-3 text-cyan-400">
                <Terminal className="w-5 h-5" />
                <h3 className="font-bold text-lg text-white font-mono">Executive Profile</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {PERSONAL_DETAILS.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 backdrop-blur-md space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Target className="w-5 h-5" />
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider font-mono">Mission</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_DETAILS.mission}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 backdrop-blur-md space-y-3">
                <div className="flex items-center space-x-2 text-violet-400">
                  <Sparkles className="w-5 h-5" />
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider font-mono">Vision</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_DETAILS.vision}
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3D Interactive AI Brain Core */}
          <div className="lg:col-span-5 h-[400px] rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-inner group">
            <ThreeCanvas cameraPosition={[0, 0, 8]} fov={55} enableControls={true} autoRotate={false}>
              <AIBrainScene />
            </ThreeCanvas>
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-center pointer-events-none">
              <span className="text-xs font-mono text-cyan-300 font-semibold">🧠 Interactive Neural Brain Core</span>
              <p className="text-[10px] text-slate-400">Drag to rotate • Real-time shader distortion</p>
            </div>
          </div>
        </div>

        {/* Interactive Career & Education Timeline */}
        <div className="space-y-8 pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white">Interactive Journey Timeline</h3>
              <p className="text-xs text-slate-400">Filter by category to explore milestones and academic credentials.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-xl border border-white/10">
              {[
                { id: 'all', label: 'All Milestones' },
                { id: 'research', label: 'Research & SEBI' },
                { id: 'experience', label: 'Engineering' },
                { id: 'education', label: 'Education' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClickSound();
                    setActiveTab(tab.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {filteredTimeline.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-glass space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                        {node.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono">
                        {node.type}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{node.location}</span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {node.title}
                    </h4>
                    <div className="text-sm font-semibold text-violet-400 font-mono mt-0.5">
                      {node.role} • <span className="text-slate-300">{node.company}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {node.description}
                  </p>

                  {/* Achievements List */}
                  {node.achievements.length > 0 && (
                    <div className="space-y-1.5 pt-2">
                      <div className="text-xs font-mono uppercase text-slate-400 font-semibold">Key Highlights:</div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {node.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {node.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
