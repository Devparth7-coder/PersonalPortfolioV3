'use client';

import React, { useState } from 'react';
import { POETRY_COLLECTION } from '../../data/portfolioData';
import { useAudioStore } from '../../store/useAudioStore';
import { Feather, Moon, Sparkles, Volume2, VolumeX, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PoetrySection() {
  const { playClickSound } = useAudioStore();
  const [activeIdx, setActiveIdx] = useState(0);
  const [zenMode, setZenMode] = useState(false);

  const currentPoem = POETRY_COLLECTION[activeIdx];

  const nextPoem = () => {
    playClickSound();
    setActiveIdx((prev) => (prev + 1) % POETRY_COLLECTION.length);
  };

  const prevPoem = () => {
    playClickSound();
    setActiveIdx((prev) => (prev - 1 + POETRY_COLLECTION.length) % POETRY_COLLECTION.length);
  };

  return (
    <section
      id="poetry"
      className={`relative py-24 transition-colors duration-700 border-t border-white/10 overflow-hidden ${
        zenMode ? 'bg-black text-slate-100 py-32' : 'bg-slate-950 text-slate-200'
      }`}
    >
      {/* Subtle ambient light */}
      {!zenMode && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 text-center">
        {/* Header */}
        {!zenMode && (
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-mono text-xs">
              <Feather className="w-3.5 h-3.5" />
              <span>THE TECHNICAL POETRY SANCTUARY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              Silicon & <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400">Soul</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto">
              Where algorithm meets emotion. A collection of verses reflecting on artificial intelligence, nocturnal compilation, and the beauty of logic.
            </p>
          </div>
        )}

        {/* Zen Mode & Navigation Controls */}
        <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto backdrop-blur-md">
          <button
            onClick={prevPoem}
            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center space-x-1 text-xs font-mono"
            title="Previous Poem"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setZenMode(!zenMode);
            }}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all flex items-center space-x-1.5 ${
              zenMode ? 'bg-fuchsia-600 text-white shadow-glow-fuchsia' : 'bg-white/5 text-fuchsia-300 hover:bg-white/10'
            }`}
            title="Toggle Minimalist Zen Reading Room"
          >
            <Moon className="w-3.5 h-3.5" />
            <span>{zenMode ? 'Exit Zen Mode' : 'Enter Zen Room'}</span>
          </button>

          <button
            onClick={nextPoem}
            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center space-x-1 text-xs font-mono"
            title="Next Poem"
          >
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Poem Display Card */}
        <div className="min-h-[380px] flex items-center justify-center p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl shadow-glass relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPoem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 max-w-xl w-full"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-fuchsia-400 font-semibold">
                  {currentPoem.theme}
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif italic font-bold text-white tracking-wide">
                  {currentPoem.title}
                </h3>
                <div className="text-xs font-mono text-slate-500">
                  {currentPoem.date} • {currentPoem.readingTime}
                </div>
              </div>

              {/* Verses */}
              <div className="space-y-3 font-serif italic text-base sm:text-xl text-slate-200 leading-relaxed py-4">
                {currentPoem.lines.map((line, idx) => (
                  <p key={idx} className={line === '' ? 'h-3' : ''}>
                    {line}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-center space-x-2 text-xs font-mono text-slate-500">
                <span>Poem {activeIdx + 1} of {POETRY_COLLECTION.length}</span>
                <span>•</span>
                <span>Dev Parth Original</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
