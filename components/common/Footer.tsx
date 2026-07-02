'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_DETAILS } from '@/data/portfolioData';
import { useAudioStore } from '@/store/useAudioStore';
import { Github, Linkedin } from '@/components/common/BrandIcons';
import { Terminal, Mail, Globe, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const { playClickSound } = useAudioStore();

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden z-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center shadow-glow-cyan">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">Dev Parth</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_DETAILS.tagline} Building intelligent software that transforms ideas into impactful digital experiences.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-violet-400 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                onClick={playClickSound}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-fuchsia-400 transition-all shadow-sm"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                aria-label="Legacy Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#about" onClick={playClickSound} className="hover:text-white transition-colors">About & Career</a></li>
              <li><a href="#featured" onClick={playClickSound} className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#projects" onClick={playClickSound} className="hover:text-white transition-colors">GitHub Sync</a></li>
              <li><a href="#skills" onClick={playClickSound} className="hover:text-white transition-colors">3D Skill Spheres</a></li>
              <li><a href="#cp" onClick={playClickSound} className="hover:text-white transition-colors">CP Leaderboards</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
              Knowledge Base
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#chatbot" onClick={playClickSound} className="hover:text-white transition-colors">AI Assistant RAG</a></li>
              <li><a href="#research" onClick={playClickSound} className="hover:text-white transition-colors">SEBI Hackathon Case Study</a></li>
              <li><a href="#blog" onClick={playClickSound} className="hover:text-white transition-colors">Engineering Blog</a></li>
              <li><a href="#poetry" onClick={playClickSound} className="hover:text-white transition-colors">Poetry Sanctuary</a></li>
              <li><Link href="/admin" onClick={playClickSound} className="text-cyan-400 hover:underline">Command Center ❯</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Operational • Vercel Ready • 95+ Lighthouse Score</span>
          </div>

          <div className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-current animate-pulse" />
            <span>by</span>
            <span className="text-white font-semibold">Dev Parth</span>
            <span>• © 2026 Gorakhpur, India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
