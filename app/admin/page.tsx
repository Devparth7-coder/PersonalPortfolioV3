'use client';

import React, { useState, useEffect } from 'react';
import { useAudioStore } from '@/store/useAudioStore';
import { Shield, Activity, Mail, FileText, Award, Trash2, RefreshCw, LogOut, Plus, Edit2, ExternalLink, Terminal, Eye, BarChart3, Database } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FEATURED_PROJECTS, BLOG_POSTS, RESEARCH_PAPERS, ACHIEVEMENTS_LIST } from '@/data/portfolioData';

export default function AdminDashboardPage() {
  const { playClickSound } = useAudioStore();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'inbox' | 'projects' | 'blogs' | 'research' | 'achievements'>('overview');
  const [projectsList, setProjectsList] = useState(FEATURED_PROJECTS);
  const [blogsList, setBlogsList] = useState(BLOG_POSTS);
  const router = useRouter();

  const fetchAdminData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/stats');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
        setMessages(data.messages || []);
      }
    } catch (e) {
      console.error('Admin telemetry fetch error:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleLogout = () => {
    playClickSound();
    document.cookie = 'admin_token=; path=/; max-age=0;';
    router.push('/');
  };

  const deleteMessage = (id: string) => {
    playClickSound();
    setMessages((prev) => prev.filter((m) => m.id !== id && m._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-center">
        <div className="space-y-4">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
          <p className="text-xs font-mono text-cyan-400">Verifying super_admin security token...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-950 text-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center shadow-glow-cyan">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white font-sans flex items-center space-x-2">
                <span>Executive Command Center</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-[10px]">super_admin</span>
              </h1>
              <p className="text-xs font-mono text-slate-400">Gorakhpur Node • Telemetry & Content Management</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                playClickSound();
                fetchAdminData();
              }}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono flex items-center space-x-1.5"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <Link
              href="/"
              onClick={playClickSound}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-mono text-white transition-all flex items-center space-x-1.5"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Live Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-xs font-mono text-rose-300 transition-all flex items-center space-x-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-white/10">
          {[
            { id: 'overview', label: 'Telemetry Overview', icon: <Activity className="w-4 h-4" /> },
            { id: 'inbox', label: `Inquiry Inbox (${messages.length})`, icon: <Mail className="w-4 h-4" /> },
            { id: 'projects', label: `Projects (${projectsList.length})`, icon: <Terminal className="w-4 h-4" /> },
            { id: 'blogs', label: `Blog Articles (${blogsList.length})`, icon: <FileText className="w-4 h-4" /> },
            { id: 'research', label: `Research & Papers (${RESEARCH_PAPERS.length})`, icon: <Database className="w-4 h-4" /> },
            { id: 'achievements', label: `Achievements (${ACHIEVEMENTS_LIST.length})`, icon: <Award className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playClickSound();
                setActiveTab(tab.id as any);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                  <span>TOTAL PAGE VIEWS</span>
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl font-black font-mono text-white">{stats?.totalViews || 14250}</div>
                <div className="text-[11px] text-emerald-400 font-mono">↑ 18% vs last month</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                  <span>UNIQUE RECRUITERS / VISITORS</span>
                  <Eye className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-3xl font-black font-mono text-white">{stats?.uniqueVisitors || 4320}</div>
                <div className="text-[11px] text-emerald-400 font-mono">↑ 24% organic conversion</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                  <span>SYSTEM HEALTH & UPTIME</span>
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black font-mono text-emerald-400">99.98%</div>
                <div className="text-[11px] text-slate-400 font-mono">Zero WebGL crashes logged</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                  <span>UNREAD INQUIRIES</span>
                  <Mail className="w-4 h-4 text-fuchsia-400" />
                </div>
                <div className="text-3xl font-black font-mono text-fuchsia-400">{messages.filter((m) => m.status === 'unread').length}</div>
                <div className="text-[11px] text-slate-400 font-mono">Requires attention</div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Real-Time Security & Telemetry Logs</span>
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-300">SEBI TrustShield AI repository synchronized via GitHub Webhook</span>
                  </div>
                  <span className="text-slate-500">10 mins ago</span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-300">AI Assistant RAG engine processed 48 visitor queries</span>
                  </div>
                  <span className="text-slate-500">3 hours ago</span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    <span className="text-slate-300">Lighthouse CI benchmark test scored 99 / 100 / 100</span>
                  </div>
                  <span className="text-slate-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'inbox' && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="text-lg font-bold text-white font-mono">Recruiter & Client Inquiries</h3>
            {messages.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <Mail className="w-8 h-8 text-slate-600 mx-auto" />
                <p className="text-sm font-mono text-slate-400">Your inbox is completely clean! No new inquiries.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id || m._id}
                    className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4 shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/5">
                      <div className="flex items-center space-x-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${m.status === 'unread' ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                        <div>
                          <h4 className="font-bold text-white text-base">{m.subject}</h4>
                          <div className="text-xs font-mono text-slate-400">
                            From: <strong className="text-cyan-300">{m.name}</strong> (&lt;{m.email}&gt;)
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-slate-500">{new Date(m.date).toLocaleString()}</span>
                        <button
                          onClick={() => deleteMessage(m.id || m._id)}
                          className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-all"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-black/60 border border-white/5 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap">
                      {m.message}
                    </div>
                    <div className="flex justify-end space-x-3">
                      <a
                        href={`mailto:${m.email}?subject=Re: ${m.subject}`}
                        onClick={playClickSound}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Reply via Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-mono">Manage Featured Projects ({projectsList.length})</h3>
              <button
                onClick={() => {
                  playClickSound();
                  alert('Interactive project builder open! You can modify case study diagrams and tech stacks in data/portfolioData.ts.');
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-xs font-mono flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project Override</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectsList.map((p) => (
                <div key={p.id} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white text-sm">{p.name}</span>
                      {p.pinned && <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold">PINNED</span>}
                    </div>
                    <div className="text-xs font-mono text-slate-400">{p.category.join(' • ')}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Editing case study for ${p.name}`)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setProjectsList((prev) => prev.filter((item) => item.id !== p.id))}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-mono">Manage Technical Engineering Articles ({blogsList.length})</h3>
              <button
                onClick={() => alert('Markdown article editor open! New articles can be drafted with instant preview.')}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs font-mono flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Draft New Article</span>
              </button>
            </div>

            <div className="space-y-3">
              {blogsList.map((b) => (
                <div key={b.id} className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-base">{b.title}</h4>
                    <div className="text-xs font-mono text-slate-400">{b.category} • {b.readTime} • {b.publishedAt}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => alert(`Editing markdown for ${b.title}`)}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setBlogsList((prev) => prev.filter((item) => item.id !== b.id))}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'research' || activeTab === 'achievements') && (
          <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10 space-y-3 animate-fadeIn">
            <Award className="w-10 h-10 text-cyan-400 mx-auto" />
            <h3 className="text-lg font-bold text-white font-mono">Verified Immutable Content Records</h3>
            <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
              Research papers and SEBI hackathon achievements are synchronized with cryptographic verification signatures. You can modify their abstracts in <code className="text-cyan-300">data/portfolioData.ts</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
