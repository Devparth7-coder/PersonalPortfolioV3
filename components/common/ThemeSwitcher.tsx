'use client';

import React, { useState } from 'react';
import { useThemeStore, ThemeMode } from '../../store/useThemeStore';
import { useAudioStore } from '../../store/useAudioStore';
import { Sun, Moon, Zap, Sparkles } from 'lucide-react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const { playClickSound } = useAudioStore();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeMode; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'apple-dark', label: 'Apple Dark', icon: <Moon className="w-3.5 h-3.5" />, color: 'bg-slate-900 text-blue-400' },
    { id: 'openai-light', label: 'OpenAI Light', icon: <Sun className="w-3.5 h-3.5" />, color: 'bg-amber-100 text-amber-600' },
    { id: 'cyberpunk', label: 'Cyberpunk Neon', icon: <Zap className="w-3.5 h-3.5" />, color: 'bg-fuchsia-950 text-fuchsia-400' },
    { id: 'aurora', label: 'Aurora Borealis', icon: <Sparkles className="w-3.5 h-3.5" />, color: 'bg-teal-950 text-emerald-400' },
  ];

  const currentThemeObj = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="relative">
      <button
        onClick={() => {
          playClickSound();
          setIsOpen(!isOpen);
        }}
        className="flex items-center space-x-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs"
        title="Change Visual Design Theme (T)"
      >
        <span className="text-cyan-400">{currentThemeObj.icon}</span>
        <span className="hidden sm:inline font-medium">{currentThemeObj.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-xl p-1.5 shadow-2xl z-50 animate-accordion-down">
          <div className="text-[10px] font-mono text-slate-500 uppercase px-2 py-1 border-b border-white/5 mb-1">
            Select Visual Theme
          </div>
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                playClickSound();
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                theme === t.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className={`p-1 rounded ${t.color}`}>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
