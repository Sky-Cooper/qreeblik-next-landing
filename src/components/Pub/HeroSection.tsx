"use client"; // ✅ This component is interactive, so it must be a Client Component.

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; 

const images = ["/assets/pic1.png", "/assets/pic2.png", "/assets/pic3.png", "/assets/pic4.png"];

// --- ANIMATION VARIANTS (No changes needed) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const imageVariants: Variants = {
  enter: { opacity: 0, y: 100, scale: 0.95 },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.95,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const floatingVariants = (duration: number, delay: number): Variants => ({
  animate: {
    y: [0, -30, 0],
    opacity: [0.1, 0.3, 0.1],
    transition: { duration, ease: 'easeInOut', repeat: Infinity, delay },
  },
});

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <motion.section
      // ✨ COLOR CHANGE: Switched to a black/dark-gray gradient
      className="relative bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ✨ COLOR CHANGE: Floating blobs are now shades of white/gray */}
      <motion.div className="absolute top-0 left-0 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl -translate-x-40 -translate-y-40" variants={floatingVariants(12, 0)} animate="animate" />
      <motion.div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gray-500/10 rounded-full blur-3xl translate-x-32 translate-y-32" variants={floatingVariants(14, 1)} animate="animate" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="text-center md:text-left space-y-6" variants={containerVariants}>
            {/* ✨ COLOR CHANGE: Tag is now white with black text */}
            <motion.span className="inline-flex px-6 py-2 bg-white text-black text-sm font-semibold rounded-full tracking-widest uppercase shadow-md" variants={itemVariants}>
              Qreeb Lik
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.3)' }} variants={itemVariants}>
              {/* ✨ TEXT CHANGE: "Santé" (Health) removed */}
              La Solution Complète{' '}
              {/* ✨ COLOR CHANGE: Highlighted text is now a subtle gray */}
              <span className="text-gray-400">Tout-En-Un</span>
            </motion.h1>
            <motion.p className="max-w-lg mx-auto md:mx-0 text-lg text-gray-300/90 leading-relaxed" variants={itemVariants}>
              {/* ✨ TEXT CHANGE: Medical terms generalized */}
              Une expérience utilisateur optimisée et un outil de
              gestion puissant pour les professionnels.
            </motion.p>
            <motion.div className="flex justify-center md:justify-start gap-4 flex-wrap pt-3" variants={itemVariants}>
              <Link href="https://dashboard.qreeblik.com/login" className="group px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 hover:-translate-y-1 duration-300">
                Explorer{' '}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features" className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                Fonctionnalités
              </a>
            </motion.div>
            <motion.div className="flex justify-center md:justify-start gap-8 pt-8" variants={itemVariants}>
              {[
                // ✨ TEXT CHANGE: Medical terms generalized
                { value: '25+', label: 'Professionnels' },
                { value: '100+', label: 'Utilisateurs' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  {/* ✨ COLOR CHANGE: Label text is now a darker gray */}
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative flex justify-center mt-12 md:mt-0">
            {/* ✨ COLOR CHANGE: Image frame glow is now gray */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-gray-500 to-gray-700 blur-2xl opacity-30 animate-pulse"></div>
            <motion.div className="relative z-10 w-full max-w-2xl aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl" whileHover={{ y: -6 }}>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0"
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt="Aperçu de l'application Qreeb Lik"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={currentImageIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-3 h-3 rounded-full transition-all ${ i === currentImageIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60' }`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        {/* ✨ COLOR CHANGE: SVG wave now uses black and dark gray */}
        <svg viewBox="0 0 1440 160" className="w-full h-full" preserveAspectRatio="none">
          <motion.path fill="#111827" fillOpacity="1" d="M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z" animate={{ d: ["M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z", "M0,150 C350,210 700,70 1050,150 C1250,200 1350,90 1440,150 L1440,160 L0,160Z", "M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z"], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }} />
          <motion.path fill="#000000" fillOpacity="0.8" d="M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z" animate={{ d: ["M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z", "M0,130 C300,190 600,50 900,130 C1150,190 1300,90 1440,130 L1440,160 L0,160Z", "M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z"], transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } }} />
        </svg>
      </div>
    </motion.section>
  );
};

export default HeroSection;

