'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useUIStore } from '../../store/useUIStore';
import { useAudioStore } from '../../store/useAudioStore';
import { useThemeStore } from '../../store/useThemeStore';
import ThemeSwitcher from './ThemeSwitcher';
import { Terminal, Music, VolumeX, Command, Menu, X, Shield, Sparkles } from 'lucide-react';

export default function Navbar() {
  const { activeSection } = useScrollProgress();
  const { setCommandPaletteOpen, setShowPerformanceMonitor, showPerformanceMonitor } = useUIStore();
  const { isPlaying, toggleMusic, playClickSound } = useAudioStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Featured', href: '#featured', id: 'featured' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'CP Stats', href: '#cp', id: 'cp' },
    { name: 'AI Assistant', href: '#chatbot', id: 'chatbot' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Poetry', href: '#poetry', id: 'poetry' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-md border-b border-white/10 py-3 shadow-glass'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={playClickSound}
          className="flex items-center space-x-2.5 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-glow-cyan group-hover:scale-105 transition-transform duration-300">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-300">
              Dev Parth
            </span>
            <span className="block text-[10px] uppercase tracking-widest font-mono text-cyan-400">
              AI • Full Stack • CP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-lg shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={playClickSound}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions & Utilities */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClickSound();
              setCommandPaletteOpen(true);
            }}
            className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all shadow-sm"
            title="Open Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 rounded border border-white/10 font-mono text-slate-400">
              ⌘K
            </kbd>
          </button>

          {/* Music Synth Toggle */}
          <button
            onClick={() => {
              playClickSound();
              toggleMusic();
            }}
            className={`p-2 rounded-xl border transition-all duration-300 ${
              isPlaying
                ? 'bg-violet-500/20 border-violet-500/50 text-violet-300 shadow-glow-violet animate-pulse'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title={isPlaying ? 'Mute Sci-Fi Ambient Synth' : 'Play Sci-Fi Ambient Synth (M)'}
          >
            {isPlaying ? <Music className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Performance FPS Monitor Toggle */}
          <button
            onClick={() => {
              playClickSound();
              setShowPerformanceMonitor(!showPerformanceMonitor);
            }}
            className={`hidden sm:flex items-center px-2 py-1 rounded-lg border text-[11px] font-mono transition-all ${
              showPerformanceMonitor
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
            title="Toggle WebGL FPS Performance Monitor"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            <span>FPS</span>
          </button>

          {/* Admin Panel Link */}
          <Link
            href="/admin"
            onClick={playClickSound}
            className="p-2 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 border border-white/10 text-slate-300 hover:text-cyan-300 transition-all"
            title="Access Command Center / Admin Panel"
          >
            <Shield className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playClickSound();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-accordion-down shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-xs font-medium text-center border ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-white/5 text-slate-300 border-white/5 hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => {
                setCommandPaletteOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex-1 mr-2 py-2 bg-white/10 rounded-lg text-xs font-medium text-slate-200 flex items-center justify-center space-x-2"
            >
              <Command className="w-4 h-4 text-cyan-400" />
              <span>Search Projects (⌘K)</span>
            </button>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-4 bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-xs font-medium text-cyan-300 flex items-center space-x-1"
            >
              <Shield className="w-4 h-4 mr-1" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
