"use client"; // ✅ Ajouté pour Next.js car le composant utilise des hooks

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import type { ReactElement } from "react";
import { 
    BarChart2, BrainCircuit, Calendar, CalendarPlus, Clock, Gem, 
    LayoutDashboard, Search, Shield, Star, Users, Wallet, Zap, History 
} from "lucide-react";

// Définition des types pour une meilleure sécurité avec TypeScript
type Feature = {
    icon: ReactElement;
    title: string;
    text: string;
};

type TabId = 'activite' | 'clients' | 'securite';

// Configuration des variantes d'animation pour Framer Motion
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const cardGridVariants: Variants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    hidden: {
        opacity: 0,
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
};


const FeaturesTabsSection = () => {
    const [activeTab, setActiveTab] = useState<TabId>('activite');

    const tabs: { id: TabId; label: string }[] = [
        // ✨ TEXT CHANGE: Medical terms generalized
        { id: 'activite', label: '🚀 Renforcement de l\'Activité' },
        { id: 'clients', label: '🌟 Engagement Client' },
        { id: 'securite', label: '🔒 Valeur Ajoutée & Sécurité' },
    ];

    const content: Record<TabId, Feature[]> = {
        // ✨ TEXT & COLOR CHANGE: Content updated
        activite: [
            { icon: <LayoutDashboard className="text-white"/>, title: "Tableau de bord intuitif", text: "Gestion centralisée de vos rendez-vous, abonnements et historique client complet." },
            { icon: <Calendar className="text-white"/>, title: "Gestion avancée du calendrier", text: "Planifiez vos rendez-vous, congés et shifts avec une flexibilité totale." },
            { icon: <Users className="text-white"/>, title: "Acquisition de nouveaux clients", text: "Augmentez votre visibilité grâce à notre plateforme et une page publique professionnelle." },
            { icon: <BarChart2 className="text-white"/>, title: "Rapports hebdomadaires automatiques", text: "Recevez une vue synthétique de votre activité, progression et tendances." },
            { icon: <Gem className="text-white"/>, title: "Carte de visite digitale premium", text: "Renforcez votre image avec une carte moderne et un QR code pour une communication simplifiée." },
            { icon: <BrainCircuit className="text-white"/>, title: "Assistant IA multilingue", text: "Un soutien organisationnel pour optimiser votre temps." },
        ],
        clients: [
            { icon: <CalendarPlus className="text-white"/>, title: "Prise de rendez-vous simplifiée", text: "Vos clients réservent un créneau directement dans votre agenda, 24/7." },
            { icon: <Search className="text-white"/>, title: "Recherche intelligente", text: "Les clients vous trouvent facilement par ville, spécialité, prix et popularité." },
            { icon: <Star className="text-white"/>, title: "Programme de fidélisation", text: "Un système de points qui retient vos clients sur le long terme." },
            { icon: <History className="text-white"/>, title: "Historique personnel", text: "Vos clients accèdent à leurs données, rendez-vous passés et achats." },
            { icon: <Wallet className="text-white"/>, title: "Suivi financier transparent", text: "Visualisation claire de tous les paiements : rendez-vous, abonnements, services." },
            { icon: <Users className="text-white"/>, title: "Interaction sociale", text: "Vos clients peuvent vous suivre, liker vos services, et rester connectés." },
        ],
        securite: [
            { icon: <Shield className="text-white"/>, title: "Confidentialité sur mesure", text: "Protection totale des données sensibles, confidentialité financière, etc." },
            { icon: <Zap className="text-white"/>, title: "Formation gratuite pour votre équipe", text: "Un accompagnement concret dès le départ pour fluidifier l’usage." },
            { icon: <Clock className="text-white"/>, title: "Téléchargement quotidien des données", text: "Sécurité, sauvegarde et contrôle total de vos informations." },
            { icon: <Gem className="text-white"/>, title: "Tarif abordable et transparent", text: "Un abonnement mensuel, simple et extrêmement compétitif." },
        ]
    };

    return (
        <motion.section 
            id="features" 
            // ✨ COLOR CHANGE: Section background is black
            className="py-24 bg-black"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    {/* ✨ COLOR CHANGE: Text updated to fit dark theme */}
                    <span className="text-gray-400 font-semibold uppercase tracking-wider">Fonctionnalités</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-white">Une plateforme, tous les outils.</h2>
                </motion.div>
                <motion.div className="flex justify-center flex-wrap gap-2 mb-12" variants={itemVariants}>
                    {tabs.map(tab => (
                        <button 
                            key={tab.id} 
                            onClick={() => setActiveTab(tab.id)} 
                            // ✨ COLOR CHANGE: Tabs updated for dark theme
                            className={`px-6 py-3 font-bold rounded-full transition-all duration-300 relative ${activeTab === tab.id ? 'text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    // ✨ COLOR CHANGE: Active indicator is now white
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                ></motion.div>
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </motion.div>
                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={cardGridVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {content[activeTab].map((item, index) => (
                            <motion.div 
                                key={index} 
                                // ✨ COLOR CHANGE: Cards are dark gray
                                className="bg-gray-900 p-6 rounded-2xl border border-white/10"
                                variants={cardVariants}
                            >
                                {/* ✨ COLOR CHANGE: Icon container is darker gray */}
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 shadow-sm">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default FeaturesTabsSection;
