'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { PERSONAL_DETAILS } from '@/data/portfolioData';
import { useAudioStore } from '@/store/useAudioStore';
import { Github, Linkedin } from '@/components/common/BrandIcons';
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const ThreeCanvas = dynamic(() => import('@/three/ThreeCanvas'), { ssr: false });
const InteractiveEarthScene = dynamic(() => import('@/three/scenes/InteractiveEarthScene'), { ssr: false });

export default function ContactSection() {
  const { playClickSound, playHoverSound, playSuccessSound } = useAudioStore();
  const [submitting, setSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    playClickSound();
    setSubmitting(true);
    setServerStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok && responseData.success) {
        playSuccessSound();
        setServerStatus({
          type: 'success',
          message: responseData.message || 'Message delivered! Dev Parth will respond to your email shortly.',
        });
        reset();

        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#22d3ee', '#8b5cf6', '#d946ef', '#10b981'],
          });
        } catch (e) {}
      } else {
        setServerStatus({
          type: 'error',
          message: responseData.error || 'Failed to send message. Please try emailing directly at devparth.contact@gmail.com.',
        });
      }
    } catch (e) {
      setServerStatus({
        type: 'error',
        message: 'Network error. Please try copying the email address directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const copyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>INTERACTIVE GLOBAL CONTACT PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Let&apos;s Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Something Legendary</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Whether you are recruiting for a Senior Software Engineer / AI Architect role or want to discuss a groundbreaking product idea, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="h-[360px] sm:h-[420px] rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-glass group">
              <ThreeCanvas cameraPosition={[0, 0, 6.5]} fov={55} enableControls={true} autoRotate={false}>
                <InteractiveEarthScene />
              </ThreeCanvas>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-center pointer-events-none">
                <span className="text-xs font-mono text-cyan-300 font-semibold">🌍 Interactive Holographic Earth</span>
                <p className="text-[10px] text-slate-400">Pinpointed: Gorakhpur, UP, India • Drag to rotate globe</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4 shadow-glass">
              <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-fuchsia-400" />
                <span>Direct Contact Channels</span>
              </h3>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{PERSONAL_DETAILS.email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    onMouseEnter={playHoverSound}
                    className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center space-x-1"
                    title="Copy Email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Linkedin className="w-4 h-4 text-violet-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <a
                    href={PERSONAL_DETAILS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="px-3 py-1 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-bold transition-all"
                  >
                    Connect ❯
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Github className="w-4 h-4 text-slate-200" />
                    <span>GitHub Repositories</span>
                  </div>
                  <a
                    href={PERSONAL_DETAILS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-all"
                  >
                    Follow ❯
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-6">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <h3 className="text-2xl font-bold text-white">Send an Inquiry</h3>
              <p className="text-xs text-slate-400">
                All fields are validated with Zod. Submitting stores your message and sends instant notifications.
              </p>
            </div>

            {serverStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border flex items-start space-x-3 text-xs sm:text-sm font-medium ${
                  serverStatus.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}
              >
                {serverStatus.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>{serverStatus.message}</div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    {...register('name')}
                    placeholder="e.g. Recruiter / Eng Manager"
                    className={`w-full bg-slate-950/80 border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.name ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] font-mono text-rose-400">{errors.name.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-300">Your Email Address *</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="e.g. name@company.com"
                    className={`w-full bg-slate-950/80 border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.email ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] font-mono text-rose-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300">Subject / Intent *</label>
                <input
                  {...register('subject')}
                  placeholder="e.g. Full-Time Role Opportunity / AI Architecture Consultation"
                  className={`w-full bg-slate-950/80 border rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all ${
                    errors.subject ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                  }`}
                />
                {errors.subject && <p className="text-[11px] font-mono text-rose-400">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-slate-300">Detailed Message *</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me about the project, technical requirements, or team culture..."
                  className={`w-full bg-slate-950/80 border rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                    errors.message ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                  }`}
                />
                {errors.message && <p className="text-[11px] font-mono text-rose-400">{errors.message.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">🔒 Rate limited & SSL encrypted</span>
                <button
                  type="submit"
                  disabled={submitting}
                  onMouseEnter={playHoverSound}
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 hover:scale-105 active:scale-95 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-glow-cyan"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
