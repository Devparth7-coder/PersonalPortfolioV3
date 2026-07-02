'use client';

import React from 'react';
import { RESEARCH_PAPERS } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { BookOpen, Award, ExternalLink, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResearchSection() {
  const { playClickSound, playHoverSound } = useAudioStore();

  return (
    <section id="research" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC INVESTIGATION & HACKATHONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Research Papers & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Exploring multi-modal AI cybersecurity, cryptographic voting integrity, and agricultural computer vision.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESEARCH_PAPERS.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-glass"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                    {paper.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{paper.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                <div className="text-xs font-mono text-violet-400">
                  {paper.institution} • <span className="text-slate-400">Authors: {paper.authors.join(', ')}</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                      Abstract
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {paper.abstract}
                    </p>
                  </div>

                  {paper.results && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-300 flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-300 block font-mono">Key Verified Benchmark:</strong>
                        <span>{paper.results}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[11px] font-mono text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="self-start sm:self-auto px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-glow-cyan shrink-0 hover:scale-105 transition-all"
                  >
                    <span>Read Paper / Repo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
