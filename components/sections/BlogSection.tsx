'use client';

import React, { useState } from 'react';
import { BLOG_POSTS } from '../../data/portfolioData';
import { Blog } from '../../types';
import { useAudioStore } from '../../store/useAudioStore';
import { FileText, Search, Clock, Eye, Heart, ArrowRight, X, Calendar, Tag, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<Blog | null>(null);

  const categories = ['All', 'AI & Cybersecurity', 'Frontend & 3D', 'Algorithms & CP', 'AI & Engineering'];

  const filteredBlogs = BLOG_POSTS.filter((post) => {
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <section id="blog" className="relative py-24 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs">
            <FileText className="w-3.5 h-3.5" />
            <span>TECHNICAL ENGINEERING ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Insights & Blog</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Deep technical deep-dives on 3D WebGL rendering, vector embedding ATS pipelines, and competitive programming dynamic programming frameworks.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles by topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 font-sans"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white shadow-glow-violet font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBlogs.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                setActiveArticle(post);
              }}
              className="group cursor-pointer rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-glass hover:shadow-2xl"
            >
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden border-b border-white/10">
                <img
                  src={post.coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-cyan-300 text-[10px] font-mono font-semibold">
                  {post.category}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-slate-300 text-[10px] font-mono flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-violet-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-bold text-cyan-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-8">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                  <span>•</span>
                  <span>{activeArticle.publishedAt}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">{activeArticle.title}</h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Article Content Rendered */}
            <div className="prose prose-invert max-w-none text-slate-300 space-y-6 font-sans text-sm sm:text-base leading-relaxed">
              {activeArticle.content.split('\n\n').map((para, i) => {
                if (para.startsWith('# ')) {
                  return <h2 key={i} className="text-2xl sm:text-3xl font-bold text-white pt-4 border-b border-white/10 pb-2">{para.replace('# ', '')}</h2>;
                }
                if (para.startsWith('## ')) {
                  return <h3 key={i} className="text-xl sm:text-2xl font-bold text-cyan-300 pt-3">{para.replace('## ', '')}</h3>;
                }
                if (para.startsWith('### ')) {
                  return <h4 key={i} className="text-lg font-bold text-violet-300 pt-2">{para.replace('### ', '')}</h4>;
                }
                if (para.startsWith('```')) {
                  return (
                    <pre key={i} className="p-4 rounded-xl bg-black/90 border border-white/10 font-mono text-xs text-cyan-300 overflow-x-auto leading-normal shadow-inner">
                      {para.replace(/```[a-z]*/g, '').trim()}
                    </pre>
                  );
                }
                return <p key={i} className="leading-relaxed text-slate-300">{para}</p>;
              })}
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1"><Eye className="w-4 h-4 text-cyan-400" /><span>{activeArticle.views} Views</span></span>
                <span className="flex items-center space-x-1"><Heart className="w-4 h-4 text-rose-500 fill-current" /><span>{activeArticle.likes} Likes</span></span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs rounded-xl shadow-glow-cyan"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
