'use client';

import React from 'react';
import { CP_STATS } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { Trophy, Award, Target, TrendingUp, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompetitiveProgrammingSection() {
  const { playClickSound, playHoverSound } = useAudioStore();

  return (
    <section id="cp" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/3 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>ALGORITHMIC RIGOR & SPEED CODING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Competitive Programming <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">Leaderboards</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Solving complex algorithmic challenges under strict time and memory limits. Over 1,200+ problems solved across data structures, dynamic programming, and graph theory.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CP_STATS.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-amber-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-glass"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white">
                    {stat.platform}
                  </span>
                  <a
                    href={stat.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-slate-500 hover:text-amber-400 transition-colors"
                    title={`View ${stat.platform} Profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-3xl font-black font-mono text-white tracking-tight">
                    {stat.rating}
                  </div>
                  <div className="text-xs font-semibold text-amber-400 font-mono">
                    {stat.badge}
                  </div>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed pt-1">
                  {stat.rank} • Max Rating: <strong className="text-slate-200">{stat.maxRating}</strong>
                </div>
              </div>

              {/* Progress & Solved Counter */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Problems Solved</span>
                  <span className="text-white font-bold">{stat.solved}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-sm"
                    style={{ width: `${Math.min(Number(stat.solved) / 8, 100)}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Contests Participated: <strong>{stat.contestCount}</strong>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Algorithmic Focus Area & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6 shadow-glass">
            <div className="flex items-center space-x-3 text-amber-400">
              <Zap className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white font-mono">Algorithmic Mastery Breakdown</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Competitive programming trains software engineers to write bug-free, asymptotically optimal code under intense pressure. My primary domain expertise includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dynamic Programming & Memoization</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Graph Theory (Dijkstra, A*, BFS/DFS)</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Segment Trees & Fenwick Trees</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bit Manipulation & Number Theory</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900/80 to-transparent border border-amber-500/20 space-y-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-amber-400" />
              <span>Recent Contest Highlight</span>
            </h3>
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2 font-mono text-xs">
              <div className="text-amber-300 font-bold">🏆 LeetCode Biweekly Contest 134</div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Solved all 4 algorithmic problems in 38 minutes without a single Wrong Answer penalty. Ranked in top 100 nationally.
              </p>
            </div>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="inline-block px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md"
            >
              Verify on LeetCode ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
