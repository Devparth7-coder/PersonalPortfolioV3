import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/portfolioData';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Eye, Heart, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-28 pb-20 bg-slate-950 text-slate-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link
          href="/#blog"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-cyan-400">
            <span>{post.category}</span>
            <span>•</span>
            <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5" /><span>{post.readTime}</span></span>
            <span>•</span>
            <span className="flex items-center space-x-1"><Calendar className="w-3.5 h-3.5" /><span>{post.publishedAt}</span></span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight font-sans">
            {post.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {post.coverImage && (
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover max-h-[400px]" />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 font-sans text-base sm:text-lg leading-relaxed pt-4 border-t border-white/10">
          {post.content.split('\n\n').map((para, idx) => {
            if (para.startsWith('# ')) {
              return <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-white pt-6 pb-2 border-b border-white/10">{para.replace('# ', '')}</h2>;
            }
            if (para.startsWith('## ')) {
              return <h3 key={idx} className="text-xl sm:text-2xl font-bold text-cyan-300 pt-4">{para.replace('## ', '')}</h3>;
            }
            if (para.startsWith('### ')) {
              return <h4 key={idx} className="text-lg font-bold text-violet-300 pt-2">{para.replace('### ', '')}</h4>;
            }
            if (para.startsWith('```')) {
              return (
                <pre key={idx} className="p-5 rounded-xl bg-black/90 border border-white/10 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed shadow-inner">
                  {para.replace(/```[a-z]*/g, '').trim()}
                </pre>
              );
            }
            return <p key={idx} className="leading-relaxed text-slate-300">{para}</p>;
          })}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 font-mono text-xs rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-slate-400">
            <span className="flex items-center space-x-1.5"><Eye className="w-4 h-4 text-cyan-400" /><span>{post.views} Views</span></span>
            <span className="flex items-center space-x-1.5"><Heart className="w-4 h-4 text-rose-500 fill-current" /><span>{post.likes} Likes</span></span>
          </div>
        </div>
      </div>
    </article>
  );
}
