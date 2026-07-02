'use client';

import React, { useState } from 'react';
import { ACHIEVEMENTS_LIST } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { Trophy, Award, ShieldCheck, BookOpen, Users, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AchievementsSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'Hackathon', 'Award', 'Leadership', 'Research', 'Competitive Programming'];

  const filtered = ACHIEVEMENTS_LIST.filter((ach) => {
    if (selectedCat === 'All') return true;
    return ach.category === selectedCat;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award': return <Award className="w-5 h-5 text-violet-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-fuchsia-400" />;
      default: return <Star className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>EXCELLENCE & RECOGNITION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Honors & <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            National hackathon championships, algorithmic coding badges, and academic leadership milestones.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClickSound();
                setSelectedCat(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                selectedCat === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold shadow-md scale-105'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-amber-500/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-glass group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 shadow-sm">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-amber-300 font-bold">
                    {item.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-violet-400 font-semibold">
                    {item.organization}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="text-cyan-400 uppercase font-bold">{item.category}</span>
                <span className="flex items-center space-x-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Honor</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
