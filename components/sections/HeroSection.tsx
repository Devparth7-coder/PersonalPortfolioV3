'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_DETAILS } from '@/data/portfolioData';
import { useAudioStore } from '@/store/useAudioStore';
import { Github } from '@/components/common/BrandIcons';
import { Terminal, ArrowDown, Download, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreeCanvas = dynamic(() => import('@/three/ThreeCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950 animate-pulse" />,
});

const NeuralNetworkScene = dynamic(() => import('@/three/scenes/NeuralNetworkScene'), {
  ssr: false,
});

export default function HeroSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [typingIndex, setTypingIndex] = useState(0);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const headlines = [
    'AI Engineer',
    'Full Stack Developer',
    'Competitive Programmer',
    'Algorithmic Researcher',
    'SEBI Hackathon Winner',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % headlines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* 3D WebGL Neural Background */}
      <div className="absolute inset-0 z-0">
        <ThreeCanvas cameraPosition={[0, 0, 10]} fov={65} autoRotate={true} autoRotateSpeed={0.3}>
          <NeuralNetworkScene count={75} />
        </ThreeCanvas>
      </div>

      {/* Radial Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950 z-1 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-300 font-mono text-xs backdrop-blur-md shadow-glow-cyan"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for High-Impact Software Engineering Roles • Gorakhpur, India</span>
        </motion.div>

        {/* Large Cinematic Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white font-sans drop-shadow-lg">
            Hi, I&apos;m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
              {PERSONAL_DETAILS.name}
            </span>
          </h1>

          {/* Typing Animated Subtitle */}
          <div className="h-10 sm:h-12 flex items-center justify-center">
            <span className="text-xl sm:text-3xl font-mono font-bold text-slate-200">
              ❯ {headlines[typingIndex]}
              <span className="inline-block w-3 h-7 bg-cyan-400 animate-pulse ml-1.5 align-middle" />
            </span>
          </div>
        </motion.div>

        {/* Tagline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed"
        >
          {PERSONAL_DETAILS.tagline}
        </motion.p>

        {/* Professional CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* Resume Download Trigger */}
          <button
            onClick={() => {
              playClickSound();
              setShowResumeModal(true);
            }}
            onMouseEnter={playHoverSound}
            className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 text-white font-semibold text-sm shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>

          {/* Projects Button */}
          <a
            href="#featured"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Explore Projects</span>
          </a>

          {/* GitHub Button */}
          <a
            href={PERSONAL_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="px-5 py-3.5 rounded-2xl bg-black/60 hover:bg-black/80 border border-white/10 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 font-semibold text-sm backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2"
          >
            <Send className="w-4 h-4 text-violet-400" />
            <span>Contact</span>
          </a>
        </motion.div>

        {/* Stats Summary Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-10 border-t border-white/10"
        >
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-black font-mono text-cyan-400">1,200+</div>
            <div className="text-xs text-slate-400">CP Problems Solved</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-black font-mono text-violet-400">1985★</div>
            <div className="text-xs text-slate-400">LeetCode Rating</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-black font-mono text-fuchsia-400">22+</div>
            <div className="text-xs text-slate-400">Production Projects</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-2xl font-black font-mono text-emerald-400">1st Place</div>
            <div className="text-xs text-slate-400">SEBI & React Hackathons</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <a
            href="#about"
            onClick={playClickSound}
            className="flex flex-col items-center space-y-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>

      {/* Interactive Resume Preview Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn text-left">
          <div className="relative max-w-3xl w-full bg-slate-900 border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dev Parth • Executive Resume</h3>
                  <p className="text-xs text-slate-400">Gorakhpur, India • UTC+5:30</p>
                </div>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Resume Content Preview */}
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div>
                <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-2">Executive Summary</h4>
                <p className="bg-white/5 p-3.5 rounded-xl border border-white/5 leading-relaxed">
                  {PERSONAL_DETAILS.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-violet-400 font-bold mb-2">Key Competencies & Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js 15', 'React 19', 'TypeScript', 'Three.js / WebGL', 'Python', 'PyTorch', 'Node.js', 'MongoDB', 'Data Structures & Algorithms', 'Dynamic Programming', 'Deepfake Detection', 'Cybersecurity'].map((sk) => (
                    <span key={sk} className="px-2.5 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs rounded-lg font-mono">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-fuchsia-400 font-bold mb-2">Signature Highlights</h4>
                <ul className="list-disc list-inside space-y-1.5 bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-slate-300">
                  <li><strong>SEBI Hackathon Lead AI Researcher:</strong> Built TrustShield AI for synthetic voice and video deepfake verification in financial markets.</li>
                  <li><strong>Competitive Programming:</strong> Solved 1,200+ algorithms across LeetCode (1985 rating), Codeforces (1640 Expert), and CodeChef.</li>
                  <li><strong>Open Source Innovator:</strong> Created AI Resume Analyzer, DevUnity collaborative IDE, and 3D WebGL portals.</li>
                </ul>
              </div>
            </div>

            {/* Download Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-mono">Verified ATS Readable Format</span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => {
                    playClickSound();
                    const element = document.createElement("a");
                    const file = new Blob([`# DEV PARTH - EXECUTIVE RESUME\n\nHeadline: ${PERSONAL_DETAILS.headline}\nLocation: ${PERSONAL_DETAILS.location}\nEmail: ${PERSONAL_DETAILS.email}\nGitHub: ${PERSONAL_DETAILS.github}\nLinkedIn: ${PERSONAL_DETAILS.linkedin}\n\n## SUMMARY\n${PERSONAL_DETAILS.bio}\n\n## KEY SKILLS\nNext.js 15, React 19, TypeScript, Three.js, Python, PyTorch, Node.js, MongoDB, Algorithms.\n\n## ACHIEVEMENTS\n* SEBI National Cybersecurity Hackathon Winner\n* LeetCode Knight Rating (1985+)\n* 1st Place Winner - React-A-Thon CSE\n`], {type: 'text/plain'});
                    element.href = URL.createObjectURL(file);
                    element.download = "Dev_Parth_Resume_2026.md";
                    document.body.appendChild(element);
                    element.click();
                    alert("Resume markdown/text file downloaded!");
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-xs font-bold rounded-xl shadow-glow-cyan hover:scale-105 transition-all flex items-center space-x-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download File (.md / text)</span>
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-xl font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
