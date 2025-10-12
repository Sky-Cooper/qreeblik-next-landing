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

type TabId = 'pratique' | 'patients' | 'confiance';

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
    const [activeTab, setActiveTab] = useState<TabId>('pratique');

    const tabs: { id: TabId; label: string }[] = [
        { id: 'pratique', label: '🚀 Renforcement de la Pratique' },
        { id: 'patients', label: '🌟 Engagement Patient' },
        { id: 'confiance', label: '🔒 Valeur Ajoutée & Confiance' },
    ];

    const content: Record<TabId, Feature[]> = {
        pratique: [
            { icon: <LayoutDashboard className="text-blue-600"/>, title: "Tableau de bord intuitif", text: "Gestion centralisée de vos rendez-vous, abonnements et historique patient complet." },
            { icon: <Calendar className="text-blue-600"/>, title: "Gestion avancée du calendrier", text: "Planifiez vos rendez-vous, congés et shifts avec une flexibilité totale." },
            { icon: <Users className="text-blue-600"/>, title: "Acquisition de nouveaux patients", text: "Augmentez votre visibilité grâce à notre plateforme et une page publique professionnelle offerte." },
            { icon: <BarChart2 className="text-blue-600"/>, title: "Rapports hebdomadaires automatiques", text: "Recevez une vue synthétique de votre activité, progression et tendances." },
            { icon: <Gem className="text-blue-600"/>, title: "Carte de visite digitale premium", text: "Renforcez votre image avec une carte moderne et un QR code pour une communication simplifiée." },
            { icon: <BrainCircuit className="text-blue-600"/>, title: "Assistant IA multilingue", text: "Un soutien organisationnel et médical pour optimiser votre temps." },
        ],
        patients: [
            { icon: <CalendarPlus className="text-blue-600"/>, title: "Prise de rendez-vous simplifiée", text: "Vos patients réservent un créneau directement dans votre agenda, 24/7." },
            { icon: <Search className="text-blue-600"/>, title: "Recherche intelligente", text: "Les patients vous trouvent facilement par ville, spécialité, prix et popularité." },
            { icon: <Star className="text-blue-600"/>, title: "Programme de fidélisation", text: "Un système de points qui retient vos patients sur le long terme." },
            { icon: <History className="text-blue-600"/>, title: "Historique médical personnel", text: "Vos patients accèdent à leurs données, rendez-vous passés et traitements." },
            { icon: <Wallet className="text-blue-600"/>, title: "Suivi financier transparent", text: "Visualisation claire de tous les paiements : rendez-vous, abonnements, services." },
            { icon: <Users className="text-blue-600"/>, title: "Interaction sociale", text: "Vos patients peuvent vous suivre, liker vos services, et rester connectés." },
        ],
        confiance: [
            { icon: <Shield className="text-blue-600"/>, title: "Confidentialité sur mesure", text: "Protection totale des données sensibles, confidentialité financière, etc." },
            { icon: <Zap className="text-blue-600"/>, title: "Formation gratuite pour l'assistante", text: "Un accompagnement concret dès le départ pour fluidifier l’usage." },
            { icon: <Clock className="text-blue-600"/>, title: "Téléchargement quotidien des données", text: "Sécurité, sauvegarde et contrôle total de vos informations." },
            { icon: <Gem className="text-blue-600"/>, title: "Tarif abordable et transparent", text: "Un abonnement mensuel, simple et extrêmement compétitif." },
        ]
    };

    return (
        <motion.section
            id="features"
            className="py-24 bg-white"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">Fonctionnalités</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-slate-900">Une plateforme, tous les outils.</h2>
                </motion.div>
                <motion.div className="flex justify-center flex-wrap gap-2 mb-12" variants={itemVariants}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 font-bold rounded-full transition-all duration-300 relative ${activeTab === tab.id ? 'text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 bg-blue-600 rounded-full"
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
                        className="flex flex-wrap justify-center gap-8" // <-- MODIFICATION 1
                        variants={cardGridVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {content[activeTab].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 w-full md:w-2/5 lg:w-[30%] flex-grow" // <-- MODIFICATION 2
                                variants={cardVariants}
                            >
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default FeaturesTabsSection;