"use client";
import { motion, type Variants } from 'framer-motion';

// Configuration des variantes pour l'animation séquentielle
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Délai entre l'animation de chaque étape
      delayChildren: 0.2,   // Commence après une petite attente
    },
  },
};

// Animation pour chaque étape (cercle, titre, texte)
const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Animation pour la ligne de connexion qui se "dessine"
const lineVariants: Variants = {
    hidden: { pathLength: 0 },
    visible: {
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.5 // La ligne commence à se dessiner après la première étape
        }
    }
}

const HowItWorksSection = () => (
    <section id="how-it-works" className="py-24 bg-white">
        <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // L'animation se déclenche quand la section entre dans le viewport
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div className="text-center mb-16" variants={stepVariants}>
                <span className="text-blue-600 font-semibold uppercase tracking-wider">Mise en place</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-slate-900">Intégration simple en 3 étapes.</h2>
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-8 text-center relative"
                variants={containerVariants}
            >
                {/* Ligne de connexion animée (SVG) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-full">
                    <svg width="100%" height="100%" viewBox="0 0 800 100" preserveAspectRatio="none">
                        <motion.path
                            d="M 140 50 L 660 50"
                            stroke="#d1d5db"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="transparent"
                            variants={lineVariants}
                        />
                    </svg>
                </div>
                
                {/* Étape 1 */}
                <motion.div className="relative z-10" variants={stepVariants}>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-3xl font-bold">1</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Planifiez votre démo</h3>
                    <p className="text-slate-600">Contactez-nous pour une présentation personnalisée de 15 minutes.</p>
                </motion.div>

                {/* Étape 2 */}
                <motion.div className="relative z-10" variants={stepVariants}>
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-3xl font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Configuration & Formation</h3>
                    <p className="text-slate-600">Nous configurons votre compte et formons gratuitement votre équipe.</p>
                </motion.div>

                {/* Étape 3 */}
                <motion.div className="relative z-10" variants={stepVariants}>
                     <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-3xl font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Modernisez votre cabinet</h3>
                    <p className="text-slate-600">Commencez à optimiser votre temps et à développer votre patientèle.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    </section>
);

export default HowItWorksSection;
