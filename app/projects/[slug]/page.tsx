import React from 'react';
import Link from 'next/link';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { notFound } from 'next/navigation';
import { Github } from '@/components/common/BrandIcons';
import { ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-950 text-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back navigation */}
        <Link
          href="/#featured"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Featured Showcase</span>
        </Link>

        {/* Header Banner */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
              {project.category.join(' • ')}
            </span>
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs">
              ★ {project.stars || 10} Stars
            </span>
            {project.pinned && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                SEBI Flagship
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-sans">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-black/80 hover:bg-black border border-white/15 text-white text-xs font-bold flex items-center space-x-2 transition-all shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold flex items-center space-x-2 shadow-glow-cyan hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Portal</span>
              </a>
            )}
          </div>
        </div>

        {/* Screenshot Banner */}
        {project.screenshots && project.screenshots[0] && (
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <img src={project.screenshots[0]} alt={project.name} className="w-full h-auto object-cover max-h-[450px]" />
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-rose-400 font-bold">💡 The Engineering Problem</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.problem || 'Legacy architectures suffered from computational bottlenecks, sluggish rendering loops, and complex cognitive overhead for developers.'}
            </p>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">🚀 Our Architecture Solution</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              {project.solution || project.longDescription}
            </p>
          </div>
        </div>

        {/* System Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>System Architecture & Data Flow</span>
            </h3>
            <pre className="p-6 rounded-xl bg-black/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed shadow-inner">
              {project.architectureDiagram}
            </pre>
          </div>
        )}

        {/* Key Features & Capabilities */}
        {project.features && (
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-violet-400 font-bold flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>Verified Features & Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-fuchsia-400 font-bold flex items-center space-x-2">
            <Cpu className="w-4 h-4" />
            <span>Technology Stack & Frameworks</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 font-mono text-xs rounded-xl font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Future Improvements Roadmap */}
        {project.futureImprovements && (
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">🔮 Architectural Roadmap & Next Iteration</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx}>{imp}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
