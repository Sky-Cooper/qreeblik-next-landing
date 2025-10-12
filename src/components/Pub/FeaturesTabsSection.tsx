"use client";

import { motion, type Variants } from 'framer-motion';
import type { ReactElement } from "react";
import { 
    BarChart2, BrainCircuit, Calendar, CalendarPlus, Clock, Gem, 
    LayoutDashboard, Search, Shield, Star, Users, Wallet, Zap, History 
} from "lucide-react";

// --- Data Structures ---
type Feature = {
    icon: ReactElement;
    title: string;
    text: string;
};

// The content is now structured in an array to make it easier to map over
const featureColumns: { title: string; features: Feature[] }[] = [
    {
        title: "🚀 Renforcement de la Pratique",
        features: [
            { icon: <LayoutDashboard className="text-blue-600"/>, title: "Tableau de bord intuitif", text: "Gestion centralisée de vos rendez-vous, abonnements et historique patient complet." },
            { icon: <Calendar className="text-blue-600"/>, title: "Gestion avancée du calendrier", text: "Planifiez vos rendez-vous, congés et shifts avec une flexibilité totale." },
            { icon: <Users className="text-blue-600"/>, title: "Acquisition de nouveaux patients", text: "Augmentez votre visibilité grâce à notre plateforme et une page publique professionnelle offerte." },
            { icon: <BarChart2 className="text-blue-600"/>, title: "Rapports hebdomadaires automatiques", text: "Recevez une vue synthétique de votre activité, progression et tendances." },
        ]
    },
    {
        title: "🌟 Engagement Patient",
        features: [
            { icon: <CalendarPlus className="text-blue-600"/>, title: "Prise de rendez-vous simplifiée", text: "Vos patients réservent un créneau directement dans votre agenda, 24/7." },
            { icon: <Search className="text-blue-600"/>, title: "Recherche intelligente", text: "Les patients vous trouvent facilement par ville, spécialité, prix et popularité." },
            { icon: <Star className="text-blue-600"/>, title: "Programme de fidélisation", text: "Un système de points qui retient vos patients sur le long terme." },
            { icon: <History className="text-blue-600"/>, title: "Historique médical personnel", text: "Vos patients accèdent à leurs données, rendez-vous passés et traitements." },
        ]
    },
    {
        title: "🔒 Valeur Ajoutée & Confiance",
        features: [
            { icon: <Shield className="text-blue-600"/>, title: "Confidentialité sur mesure", text: "Protection totale des données sensibles, confidentialité financière, etc." },
            { icon: <Zap className="text-blue-600"/>, title: "Formation gratuite pour l'assistante", text: "Un accompagnement concret dès le départ pour fluidifier l’usage." },
            { icon: <Clock className="text-blue-600"/>, title: "Téléchargement quotidien des données", text: "Sécurité, sauvegarde et contrôle total de vos informations." },
            { icon: <Gem className="text-blue-600"/>, title: "Tarif abordable et transparent", text: "Un abonnement mensuel, simple et extrêmement compétitif." },
        ]
    }
];

// --- Stable Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make each column appear one after the other
    },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const FeaturesTabsSection = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">Fonctionnalités</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-2 text-slate-900">Une plateforme, tous les outils.</h2>
                </motion.div>
                
                {/* Three-Column Grid */}
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {featureColumns.map((column) => (
                        <motion.div 
                            key={column.title} 
                            className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col"
                            variants={columnVariants}
                        >
                            <h3 className="text-xl font-bold mb-6 text-slate-900">{column.title}</h3>
                            <div className="flex flex-col gap-6">
                                {column.features.map((feature) => (
                                    <div key={feature.title} className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{feature.title}</h4>
                                            <p className="text-slate-600 text-sm mt-1">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesTabsSection;