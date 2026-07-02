'use client';

import React, { useState, useEffect } from 'react';
import { useUIStore } from '../../store/useUIStore';
import { useAudioStore } from '../../store/useAudioStore';
import { useThemeStore } from '../../store/useThemeStore';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import { Search, Command, ArrowRight, Shield, Music, Sun, FileText, Mail, Terminal, Trophy, BookOpen, Sparkles, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen, setSelectedProject } = useUIStore();
  const { toggleMusic, playClickSound } = useAudioStore();
  const { setTheme } = useThemeStore();
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isCommandPaletteOpen) setSearch('');
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const handleAction = (callback: () => void) => {
    playClickSound();
    callback();
    setCommandPaletteOpen(false);
  };

  const filteredProjects = FEATURED_PROJECTS.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  ).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-fadeIn">
      <div className="relative max-w-xl w-full bg-slate-900 border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-slate-950/50">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command or search projects (e.g., 'SEBI', 'Resume', 'Contact')..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm font-medium focus:outline-none font-sans"
            autoFocus
          />
          <button
            onClick={() => setCommandPaletteOpen(false)}
            className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-mono px-2 py-1"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[380px] overflow-y-auto p-3 space-y-4 font-sans">
          {/* Section Navigation */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-2 mb-1.5">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleAction(() => { window.location.href = '#about'; })}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-medium transition-all text-left group"
              >
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>About Dev Parth</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
              </button>

              <button
                onClick={() => handleAction(() => { window.location.href = '#featured'; })}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-medium transition-all text-left group"
              >
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>Featured Projects</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
              </button>

              <button
                onClick={() => handleAction(() => { window.location.href = '#cp'; })}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-medium transition-all text-left group"
              >
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>CP Leaderboards</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
              </button>

              <button
                onClick={() => handleAction(() => { window.location.href = '#chatbot'; })}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 text-xs font-medium transition-all text-left group"
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>AI Assistant RAG</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Featured Project Matches */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-2 mb-1.5">
                Matched Projects
              </div>
              <div className="space-y-1">
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleAction(() => setSelectedProject(proj))}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-cyan-500/10 hover:to-violet-500/10 border border-white/5 hover:border-cyan-500/30 text-left transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                        {proj.name}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{proj.description}</div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20 whitespace-nowrap ml-2">
                      View Case Study ❯
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* System Tools & Actions */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 px-2 mb-1.5">
              System Utilities
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleAction(() => toggleMusic())}
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 hover:text-fuchsia-300 transition-all text-left"
              >
                <Music className="w-4 h-4 text-fuchsia-400" />
                <span>Toggle Synth Audio</span>
              </button>

              <button
                onClick={() => handleAction(() => setTheme('cyberpunk'))}
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 hover:text-cyan-300 transition-all text-left"
              >
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Cyberpunk Theme</span>
              </button>

              <button
                onClick={() => handleAction(() => {
                  navigator.clipboard.writeText('devparth.contact@gmail.com');
                  alert('Email copied to clipboard!');
                })}
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 hover:text-emerald-300 transition-all text-left"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Copy Email Address</span>
              </button>

              <button
                onClick={() => handleAction(() => router.push('/admin'))}
                className="flex items-center space-x-2 p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition-all text-left"
              >
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Access Command Center</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center space-x-2">
            <span>↑↓ to navigate</span>
            <span>•</span>
            <span>ENTER to select</span>
          </div>
          <span>Dev Parth OS v15.0</span>
        </div>
      </div>
    </div>
  );
}
