"use client"; 


import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const mobileScreens = ["/assets/pa1.jpg", "/assets/pa2.jpg", "/assets/pa4.jpg"];
const pcScreens = ["/assets/pic1.png", "/assets/pic2.png", "/assets/pic3.png", "/assets/pic4.png"];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }},
};
const mobileSlideVariants: Variants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
const pcSlideVariants: Variants = {
  enter: { y: '100%', opacity: 0 },
  center: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  exit: { y: '-100%', opacity: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const AppStoreBadge = () => (
  <a href="#" aria-label="Télécharger sur l'App Store" className="transform hover:scale-105 transition-transform duration-300">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12 w-auto" />
  </a>
);

const GooglePlayBadge = () => (
  <a href="#" aria-label="Disponible sur Google Play" className="transform hover:scale-105 transition-transform duration-300">
    <Image src="/assets/PlayStore.png" alt="Google Play" width={164} height={48} className="h-12 w-auto" />
  </a>
);

const CTASection = () => {
    const [currentMobileScreen, setCurrentMobileScreen] = useState(0);
    const [currentPcScreen, setCurrentPcScreen] = useState(0);

    useEffect(() => {
        const mobileTimer = setInterval(() => setCurrentMobileScreen(prev => (prev + 1) % mobileScreens.length), 2500);
        const pcTimer = setInterval(() => setCurrentPcScreen(prev => (prev + 1) % pcScreens.length), 3000);
        return () => {
            clearInterval(mobileTimer);
            clearInterval(pcTimer);
        };
    }, []);

  return (
    // ✨ COLOR CHANGE: Switched to a black/dark-gray gradient
    <section className="relative pt-32 pb-40 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* ✨ COLOR CHANGE: Floating blobs are now shades of white/gray */}
      <motion.div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-3xl -translate-x-40 -translate-y-40" animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }} />
      <motion.div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gray-500/10 rounded-full blur-3xl translate-x-32 translate-y-32" animate={{ y: [0, 20, 0], scale: [1, 1.05, 1], transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' } }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="text-center lg:text-left" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
                <motion.h2 variants={sectionVariants} className="text-4xl md:text-5xl font-extrabold tracking-tighter" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                    {/* ✨ TEXT CHANGE: Medical term generalized */}
                    Rejoignez la nouvelle ère numérique
                </motion.h2>
                <motion.p variants={sectionVariants} className="mt-4 text-lg text-gray-300/90 max-w-lg mx-auto lg:mx-0">
                    {/* ✨ TEXT CHANGE: Medical terms generalized */}
                    Que vous soyez professionnel ou client, Qreeb Lik est la solution tout-en-un pour une expérience simplifiée et efficace.
                </motion.p>
                <motion.div variants={sectionVariants} className="mt-10 flex flex-col items-center lg:items-start gap-8">
                    <div>
                        {/* ✨ COLOR & TEXT CHANGE */}
                        <h3 className="text-xl font-semibold text-gray-400">Pour les Professionnels</h3>
                        <p className="text-gray-300 mb-4">Optimisez votre travail et gagnez du temps.</p>
                        <a href="https://dashboard.qreeblik.com/login" className="group inline-block px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300">
                           Essayer Qreeb Lik
                        </a>
                    </div>
                    <div>
                        {/* ✨ COLOR & TEXT CHANGE */}
                        <h3 className="text-xl font-semibold text-gray-400">Pour les Clients</h3>
                        <p className="text-gray-300 mb-4">Le service, à portée de main.</p>
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <AppStoreBadge />
                            <GooglePlayBadge />
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="relative h-[450px] hidden lg:flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true, amount: 0.5 }}>
                {/* These elements already fit the dark theme, no changes needed */}
                <div className="absolute left-0 w-[420px] h-[280px] bg-slate-800/60 rounded-xl shadow-2xl p-2 border border-white/10 backdrop-blur-sm">
                    <div className="w-full h-full bg-black rounded-md overflow-hidden relative">
                        <AnimatePresence>
                            <motion.div key={currentPcScreen} variants={pcSlideVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
                                <Image src={pcScreens[currentPcScreen]} alt="Dashboard" fill style={{ objectFit: 'cover' }} priority />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] h-[440px] bg-slate-800/80 rounded-[32px] shadow-2xl p-2 border-2 border-white/10 backdrop-blur-sm">
                    <div className="w-full h-full bg-black rounded-[24px] overflow-hidden relative">
                        <AnimatePresence>
                            <motion.div key={currentMobileScreen} variants={mobileSlideVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
                                <Image src={mobileScreens[currentMobileScreen]} alt="Application mobile" fill style={{ objectFit: 'cover' }} priority />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        {/* ✨ COLOR CHANGE: SVG wave now uses black and dark gray */}
        <svg viewBox="0 0 1440 160" className="w-full h-full" preserveAspectRatio="none">
          <motion.path fill="#111827" fillOpacity="0.8" d="M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z" animate={{ d: ["M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z", "M0,150 C350,210 700,70 1050,150 C1250,200 1350,90 1440,150 L1440,160 L0,160Z", "M0,140 C350,220 700,60 1050,140 C1250,190 1350,100 1440,140 L1440,160 L0,160Z"], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }} />
          <motion.path fill="#000000" fillOpacity="1" d="M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z" animate={{ d: ["M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z", "M0,130 C300,190 600,50 900,130 C1150,190 1300,90 1440,130 L1440,160 L0,160Z", "M0,120 C300,200 600,40 900,120 C1150,180 1300,80 1440,120 L1440,160 L0,160Z"], transition: { duration: 10, repeat: Infinity, ease: "easeInOut" } }} />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;


