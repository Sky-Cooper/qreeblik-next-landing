"use client"; 

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { CalendarCheck, Bot, Star } from 'lucide-react';
import Image from 'next/image'; 

const mobileScreens = [
  "/assets/pa7.jpg",
  "/assets/pa2.jpg",
  "/assets/pa3.jpg",
  "/assets/pa4.jpg",
  "/assets/pa5.jpg",
  "/assets/pa1.jpg",
  "/assets/pa6.jpg",
];

// Les variantes d'animation restent inchangées
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
};

const PatientsSection = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentScreenIndex((prevIndex) =>
        (prevIndex + 1) % mobileScreens.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const patientFeatures = [
    {
      icon: <CalendarCheck className="w-6 h-6 text-cyan-600" />,
      title: 'Prise de rendez-vous simplifiée',
      text: 'Réservez un créneau directement dans l’agenda du praticien qui vous convient, 24/7.',
    },
    {
      icon: <Bot className="w-6 h-6 text-cyan-600" />,
      title: 'Assistant médical intelligent (IA)',
      text: 'Un conseiller virtuel qui vous aide à comprendre vos symptômes et vous oriente vers le bon médecin.',
    },
    {
      icon: <Star className="w-6 h-6 text-cyan-600" />,
      title: 'Programme de fidélité & réductions',
      text: 'Cumulez des points à chaque consultation et recevez des tickets promotionnels exclusifs.',
    },
  ];

  return (
    <section id="patients" className="py-24 bg-sky-50 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div className="relative h-[600px] flex justify-center items-center">
            <div className="relative z-10 w-[320px] h-[580px] rounded-[40px] shadow-2xl border-8 border-slate-800 bg-slate-900 overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                {/* ✅ Remplacer motion.img par motion.div enveloppant Image */}
                <motion.div
                  key={currentScreenIndex}
                  className="absolute inset-0"
                  variants={slideVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Image
                    src={mobileScreens[currentScreenIndex]}
                    alt={`Écran de l'application Qreeb Lik ${currentScreenIndex + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={currentScreenIndex <= 1} // Précharger les premières images
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300/40 rounded-full blur-3xl" />
          </motion.div>

          <motion.div variants={containerVariants}>
            <motion.span className="text-cyan-600 font-semibold uppercase tracking-wider" variants={itemVariants}>
              Pour les Patients
            </motion.span>
            <motion.h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 mb-6 text-slate-900" variants={itemVariants}>
              Une expérience de soin pensée pour vous.
            </motion.h2>
            <motion.p className="text-lg text-slate-600 mb-10" variants={itemVariants}>
              Simplifiez chaque étape de votre parcours médical, du premier symptôme au suivi de votre traitement, directement depuis votre mobile.
            </motion.p>
            <div className="space-y-8">
              {patientFeatures.map((feature, index) => (
                <motion.div key={index} className="flex items-start gap-5" variants={itemVariants}>
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 mt-1">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PatientsSection;