'use client';

import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '@/types';
import { useAudioStore } from '@/store/useAudioStore';
import { Github } from '@/components/common/BrandIcons';
import { Search, ExternalLink, RefreshCw, Star, GitFork, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState<'stars' | 'date' | 'name'>('stars');

  const fetchRepos = async (forceRefresh = false) => {
    try {
      if (forceRefresh) setSyncing(true);
      else setLoading(true);

      const res = await fetch(`/api/github?refresh=${forceRefresh}`);
      const data = await res.json();
      if (data.success && data.data) {
        setProjects(data.data);
      }
    } catch (e) {
      console.error('Failed to fetch repos:', e);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filterTags = ['All', 'Python', 'TypeScript', 'JavaScript', 'HTML', 'AI', 'Next.js', 'React', 'Three.js'];

  const filtered = projects
    .filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchTag = selectedTag === 'All' || p.techStack.includes(selectedTag) || p.category.includes(selectedTag as any);
      return matchSearch && matchTag;
    })
    .sort((a, b) => {
      if (sortBy === 'stars') return (b.stars || 0) - (a.stars || 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <section id="projects" className="relative py-24 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header & Live Sync */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB API REAL-TIME INTEGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
              All Open Source <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Repositories</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Dynamically fetched from <code className="text-cyan-400 bg-white/5 px-1.5 py-0.5 rounded">github.com/Devparth7-coder</code>.
            </p>
          </div>

          <button
            onClick={() => {
              playClickSound();
              fetchRepos(true);
            }}
            disabled={syncing}
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-cyan-300 flex items-center space-x-2 transition-all shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin text-fuchsia-400' : ''}`} />
            <span>{syncing ? 'Syncing GitHub...' : 'Sync Live Repos'}</span>
          </button>
        </div>

        {/* Search & Sort Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search repositories by title, tech stack, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-sans"
            />
          </div>

          {/* Filter Tags */}
          <div className="md:col-span-4 flex items-center space-x-1.5 overflow-x-auto pb-1 md:pb-0">
            {filterTags.slice(0, 5).map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  playClickSound();
                  setSelectedTag(tag);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="md:col-span-2 flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => {
                playClickSound();
                setSortBy(e.target.value as any);
              }}
              className="w-full sm:w-auto bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 font-mono focus:outline-none focus:border-violet-500"
            >
              <option value="stars">Sort by ★ Stars</option>
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Repos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
            {[1, 2, 3, 4, 5, 6].map((sk) => (
              <div key={sk} className="h-44 rounded-2xl bg-white/5 animate-pulse border border-white/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={playHoverSound}
                className="p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {proj.name}
                      </h3>
                    </div>
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClickSound}
                        className="text-slate-400 hover:text-white"
                        title="View on GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[10px] font-mono text-violet-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{proj.stars || 0}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-slate-400">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{proj.forks || 0}</span>
                      </span>
                    </div>
                    <span>{proj.createdAt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
