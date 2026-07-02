import React from 'react';
import PoetrySection from '@/components/sections/PoetrySection';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PoetryPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
      <PoetrySection />
    </div>
  );
}
