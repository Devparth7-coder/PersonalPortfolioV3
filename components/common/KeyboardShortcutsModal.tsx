'use client';

import React from 'react';
import { useUIStore } from '../../store/useUIStore';
import { useAudioStore } from '../../store/useAudioStore';
import { Keyboard, X, Sparkles, Command, Music, Sun, Shield, Terminal } from 'lucide-react';

export default function KeyboardShortcutsModal() {
  const { isShortcutsModalOpen, setShortcutsModalOpen } = useUIStore();
  const { playClickSound } = useAudioStore();

  if (!isShortcutsModalOpen) return null;

  const shortcuts = [
    { key: '⌘ / Ctrl + K', description: 'Open Command Palette & Instant Search', icon: <Command className="w-4 h-4 text-cyan-400" /> },
    { key: '? or Shift + /', description: 'Toggle Keyboard Shortcuts Help Guide', icon: <Keyboard className="w-4 h-4 text-violet-400" /> },
    { key: 'M', description: 'Toggle Sci-Fi Ambient Synthwave Music', icon: <Music className="w-4 h-4 text-fuchsia-400" /> },
    { key: 'T', description: 'Cycle Visual Theme (Dark/Light/Cyber/Aurora)', icon: <Sun className="w-4 h-4 text-amber-400" /> },
    { key: 'ESC', description: 'Close any open modal or return to view', icon: <X className="w-4 h-4 text-rose-400" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative max-w-md w-full bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Keyboard Shortcuts</h3>
              <p className="text-xs text-slate-400">Navigate Dev Parth's portfolio like a pro.</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClickSound();
              setShortcutsModalOpen(false);
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="space-y-3 mb-6">
          {shortcuts.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center space-x-3">
                <span className="p-2 rounded-lg bg-black/40 border border-white/5">{item.icon}</span>
                <span className="text-xs font-medium text-slate-200">{item.description}</span>
              </div>
              <kbd className="px-2 py-1 bg-slate-800 text-cyan-300 font-mono text-xs rounded border border-white/10 shadow-sm font-semibold">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Power User Mode Enabled</span>
          </div>
          <button
            onClick={() => setShortcutsModalOpen(false)}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
