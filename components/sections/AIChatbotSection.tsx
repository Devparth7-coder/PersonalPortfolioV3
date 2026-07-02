'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PREDEFINED_QUESTIONS } from '@/data/aiKnowledgeBase';
import { useAudioStore } from '@/store/useAudioStore';
import { Bot, Send, Sparkles, Terminal, Cpu, RefreshCw, Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreeCanvas = dynamic(() => import('@/three/ThreeCanvas'), { ssr: false });
const AIBrainScene = dynamic(() => import('@/three/scenes/AIBrainScene'), { ssr: false });

export default function AIChatbotSection() {
  const { playClickSound, playHoverSound } = useAudioStore();
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string; time: string }>>([
    {
      role: 'assistant',
      text: "👋 Hi! I am Dev Parth's **autonomous AI portfolio assistant**. My neural circuits are trained on his entire knowledge base—resume, SEBI hackathon case studies, competitive programming ratings, and 3D WebGL projects.\n\nAsk me anything below or click one of the quick prompt chips to explore!",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsPlayingSpeech] = useState(false);

  const handleSend = async (questionText?: string) => {
    const queryToAsk = questionText || input;
    if (!queryToAsk || !queryToAsk.trim() || loading) return;

    playClickSound();
    const newMsgTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { role: 'user', text: queryToAsk, time: newMsgTime }]);
    if (!questionText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryToAsk }),
      });
      const data = await res.json();
      const answerTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (data.success && data.answer) {
        setMessages((prev) => [...prev, { role: 'assistant', text: data.answer, time: answerTime }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', text: data.error || 'My neural circuits encountered a temporary hiccup. Please ask again!', time: answerTime },
        ]);
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Network connection error. Please check your connection or try another prompt!', time: 'Just now' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Your browser does not support speech synthesis.');
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsPlayingSpeech(false);
      return;
    }

    const cleanText = text.replace(/[*#>`~_-]/g, '').replace(/\[(.*?)\]\([^)]*\)/g, '$1');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsPlayingSpeech(false);
    utterance.onerror = () => setIsPlayingSpeech(false);

    setIsPlayingSpeech(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="chatbot" className="relative py-24 bg-slate-950/90 border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
            <Bot className="w-3.5 h-3.5 animate-bounce" />
            <span>LOCAL RAG LLM SIMULATION & VOICE TTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            Portfolio <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">AI Assistant</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Trained on Dev Parth&apos;s complete resume, engineering career, GitHub commits, and competitive coding statistics. Try asking a question or click a prompt below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-6">
            <div className="h-64 sm:h-72 rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-glass group">
              <ThreeCanvas cameraPosition={[0, 0, 7]} fov={55} enableControls={true} autoRotate={true} autoRotateSpeed={0.8}>
                <AIBrainScene />
              </ThreeCanvas>
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-center pointer-events-none text-xs font-mono text-cyan-300">
                ✨ DevParth Neural Orb v2026
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold px-1 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Suggested Questions:</span>
              </div>
              <div className="flex flex-col gap-2">
                {PREDEFINED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    onMouseEnter={playHoverSound}
                    disabled={loading}
                    className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm flex items-center justify-between group"
                  >
                    <span>{q}</span>
                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">❯</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-slate-950/60 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 flex items-center justify-center shadow-glow-cyan">
                  <Cpu className="w-4 h-4 text-white animate-spin" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white font-mono flex items-center space-x-2">
                    <span>DevParth AI Assistant</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">Online</span>
                  </h3>
                  <p className="text-[11px] text-slate-400">Semantic RAG Engine • Powered by Open Source Knowledge</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => speakText(messages[messages.length - 1]?.text || '')}
                  className={`p-2 rounded-xl border text-xs font-mono transition-all ${
                    isSpeaking
                      ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-fuchsia-300 animate-pulse'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                  }`}
                  title={isSpeaking ? 'Stop Speech' : 'Read Latest Answer Aloud (TTS)'}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    setMessages([
                      {
                        role: 'assistant',
                        text: "Neural memory wiped! Ask me a fresh question about Dev Parth's software engineering background.",
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                      },
                    ]);
                  }}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all"
                  title="Clear Chat Memory"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 font-sans">
              {messages.map((msg, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx}
                  className={`flex items-start space-x-3 ${
                    msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs ${
                      msg.role === 'user'
                        ? 'bg-violet-600 text-white shadow-glow-violet'
                        : 'bg-slate-800 border border-white/10 text-cyan-400'
                    }`}
                  >
                    {msg.role === 'user' ? 'YOU' : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-tr-none shadow-md'
                        : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none space-y-2'
                    }`}
                  >
                    <div className="whitespace-pre-wrap font-sans">{msg.text}</div>
                    <div className={`text-[10px] font-mono text-right pt-1 opacity-60`}>
                      {msg.time}
                    </div>
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex items-center space-x-3 animate-pulse">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-cyan-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Synthesizing RAG response from Dev Parth&apos;s portfolio data...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/10 bg-slate-950/80">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center space-x-3"
              >
                <input
                  type="text"
                  placeholder="Ask any question about Dev Parth (e.g., 'What are your strengths?', 'Explain AimTrainer')..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  className="flex-1 bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-sans"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-105 active:scale-95 disabled:opacity-50 text-white font-bold text-xs flex items-center space-x-1.5 transition-all shadow-glow-cyan shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
