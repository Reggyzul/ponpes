import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ChevronDown } from 'lucide-react';
import { PesantrenData } from '../types';

interface HeroSectionProps {
  data: PesantrenData;
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

export default function HeroSection({ data, onRegisterClick, onLearnMoreClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-radial from-emerald-950 via-emerald-900 to-emerald-950 px-4 py-20 text-center dark:from-emerald-950/95 dark:via-gray-950 dark:to-emerald-950">
      {/* Abstract Pattern and Glowing Ambient Gradients from Design HTML */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
        <div className="w-full h-full relative overflow-hidden">
          <div className="w-24 h-24 border border-white/15 rounded-full rotate-45 absolute top-12 left-12 animate-pulse-subtle"></div>
          <div className="w-48 h-48 border border-white/15 rounded-full absolute right-12 -top-12"></div>
          <div className="w-80 h-80 border border-white/10 rounded-full absolute left-1/4 -bottom-32"></div>
        </div>
      </div>
      
      {/* Dynamic Background Overlays for Elegant Islamic Atmosphere */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-500 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-500 blur-3xl"></div>
      </div>
      
      {/* Elegant Islamic Pattern Overlay (Stylized SVGs) */}
      <div className="absolute inset-0 z-0 opacity-5 mix-blend-overlay pointer-events-none">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="islamic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 30,0 L 60,30 L 30,60 L 0,30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M 30,15 L 45,30 L 30,45 L 15,30 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-grid)" className="text-white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        {/* Decorative Badge from Design HTML */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-4.5 py-1.5 text-xs font-bold tracking-widest uppercase text-amber-400 backdrop-blur-md"
        >
          <BookOpen className="h-4 w-4 text-amber-400" />
          <span>Selamat Datang di Portal Penerimaan Santri Baru</span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-200 to-amber-300">
              {data.namaPesantren}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl font-serif text-xl font-medium text-gray-200 sm:text-2xl leading-relaxed"
          >
            {data.slogan}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto max-w-xl text-sm text-gray-300 tracking-wide font-sans leading-relaxed"
          >
            {data.tagline}
          </motion.p>
        </div>

        {/* Buttons / Dual CTA from Design HTML */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4"
        >
          <button
            onClick={onRegisterClick}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 text-emerald-950 hover:bg-amber-400 font-extrabold text-base px-8 py-4 shadow-xl shadow-amber-950/20 transition-all hover:-translate-y-1 sm:w-auto cursor-pointer"
          >
            Daftar Sekarang
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onLearnMoreClick}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-bold text-base px-8 py-4 transition-all hover:border-amber-400/50 sm:w-auto cursor-pointer"
          >
            Pelajari Lebih Lanjut
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block cursor-pointer"
          onClick={onLearnMoreClick}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
