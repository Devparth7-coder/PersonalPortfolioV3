'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, AdminLoginFormData } from '@/lib/validations';
import { useAudioStore } from '@/store/useAudioStore';
import { Shield, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const { playClickSound, playSuccessSound } = useAudioStore();
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginFormData>({
    resolver: zodResolver(adminLoginSchema),
  });

  const onSubmit = async (data: AdminLoginFormData) => {
    playClickSound();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        playSuccessSound();
        router.push('/admin');
      } else {
        setErrorMsg(result.error || 'Authentication failed. Please verify credentials.');
      }
    } catch (e) {
      setErrorMsg('Network error connecting to command server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-md w-full bg-slate-900/80 border border-white/15 rounded-2xl p-8 backdrop-blur-2xl shadow-2xl space-y-6">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-violet-600 mx-auto flex items-center justify-center shadow-glow-cyan">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white font-sans">Command Center Login</h1>
          <p className="text-xs text-slate-400 font-mono">
            Restricted access • Dev Parth Executive OS
          </p>
          <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 py-1.5 px-3 rounded-lg border border-cyan-500/20">
            Default Demo: <code className="font-bold text-white">admin</code> / <code className="font-bold text-white">admin123</code>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans">
          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-slate-300">Username *</label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                {...register('username')}
                placeholder="Enter admin username"
                defaultValue="admin"
                className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                  errors.username ? 'border-rose-500/60' : 'border-white/10 focus:border-cyan-500'
                }`}
              />
            </div>
            {errors.username && <p className="text-[11px] font-mono text-rose-400">{errors.username.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-slate-300">Password *</label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                {...register('password')}
                type="password"
                placeholder="Enter super secret key"
                defaultValue="admin123"
                className={`w-full bg-slate-950/80 border rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                  errors.password ? 'border-rose-500/60' : 'border-white/10 focus:border-cyan-500'
                }`}
              />
            </div>
            {errors.password && <p className="text-[11px] font-mono text-rose-400">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.02] active:scale-98 disabled:opacity-50 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-glow-cyan"
          >
            <span>{loading ? 'Verifying Key...' : 'Authorize Access'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-white/10 text-center">
          <Link href="/" className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors">
            ❮ Return to Public Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
