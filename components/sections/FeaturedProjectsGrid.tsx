'use client';

import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { Project, ProjectCategory } from '@/types';
import { useAudioStore } from '@/store/useAudioStore';
import { Github } from '@/components/common/BrandIcons';
import { Sparkles, ExternalLink, ArrowRight, Eye, Code2, Layers, CheckCircle, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedProjectsGrid() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI', 'Machine Learning', 'Frontend', 'Backend', 'Full Stack', 'Games', 'Research'];

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category.includes(selectedCategory as ProjectCategory);
  });

  return (
    <section id="featured" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background aurora gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIGNATURE CREATIONS & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Engineering Showcase</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Explore 22+ production-grade web applications, AI cybersecurity engines, and algorithmic game simulations. Every project includes live demos, architectural diagrams, and verified codebases.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 text-white shadow-glow-cyan scale-105'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat} {cat === 'All' ? `(${FEATURED_PROJECTS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={proj.id}
                onMouseEnter={playHoverSound}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-glass hover:shadow-2xl"
              >
                {/* Top Banner / Screenshot Simulation */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-white/10">
                  {proj.screenshots && proj.screenshots[0] ? (
                    <img
                      src={proj.screenshots[0]}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 via-violet-900/40 to-fuchsia-900/40 flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-cyan-400/40 group-hover:scale-125 transition-transform" />
                    </div>
                  )}

                  {/* Pinned Badge */}
                  {proj.pinned && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-cyan-500/90 text-slate-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-md">
                      ★ SEBI / Pinned
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] font-mono">
                    {proj.category[0]}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      <span>{proj.name}</span>
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-3 pt-2 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-500">
                          +{proj.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              playClickSound();
                            }}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                            title="View GitHub Repo"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.stopPropagation();
                              playClickSound();
                            }}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all"
                            title="Open Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      {/* Case Study Trigger */}
                      <button
                        onClick={() => {
                          playClickSound();
                          setActiveModalProject(proj);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 border border-cyan-500/30 hover:border-transparent text-cyan-300 hover:text-white text-xs font-semibold font-mono transition-all flex items-center space-x-1"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Deep Case Study Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED ARCHITECTURAL CASE STUDY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{activeModalProject.name}</h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Overview & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">Category</div>
                <div className="text-sm font-semibold text-white">{activeModalProject.category.join(' • ')}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400">GitHub Stars</div>
                <div className="text-sm font-semibold text-cyan-400 font-mono">★ {activeModalProject.stars || 10} Stars</div>
              </div>
              <div className="flex items-center space-x-3 sm:justify-end">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white flex items-center space-x-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo</span>
                  </a>
                )}
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 text-xs font-bold text-white flex items-center space-x-1 shadow-glow-cyan"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                <h4 className="text-xs font-mono uppercase text-rose-400 font-bold">💡 The Engineering Problem</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.problem || 'Standard implementations lacked computational optimization, scalable state management, and ergonomic UI design.'}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold">🚀 Our Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeModalProject.solution || activeModalProject.longDescription}
                </p>
              </div>
            </div>

            {/* Architecture Diagram */}
            {activeModalProject.architectureDiagram && (
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold">📐 System Architecture Diagram</h4>
                <pre className="p-4 rounded-xl bg-black/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 overflow-x-auto leading-tight">
                  {activeModalProject.architectureDiagram}
                </pre>
              </div>
            )}

            {/* Key Features */}
            {activeModalProject.features && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-violet-400 font-bold">✨ Key Features & Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-fuchsia-400 font-bold">🛠️ Technology Stack & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 font-mono text-xs rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            {activeModalProject.futureImprovements && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase text-amber-400 font-bold">🔮 Future Architectural Roadmap</h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                  {activeModalProject.futureImprovements.map((imp, idx) => (
                    <li key={idx}>{imp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs rounded-xl shadow-glow-cyan"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
