"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const fromLeftVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fromCenterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fromRightVariant: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

type StatCardProps = {
    variant: Variants;
    icon: React.ReactNode;
    value: React.ReactNode;
    label: string;
};

// Reusable StatCard component
const StatCard = ({ variant, icon, value, label }: StatCardProps) => (
    <motion.div 
        // ✨ COLOR CHANGE: Card is now dark gray with a subtle border
        className="bg-gray-900 p-8 rounded-2xl shadow-lg text-center border border-white/10 flex flex-col items-center"
        variants={variant}
    >
        {/* ✨ COLOR CHANGE: Icon background is a darker gray */}
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-5">
            {icon}
        </div>
        {/* ✨ COLOR CHANGE: Text is now white */}
        <h3 className="static text-4xl sm:text-5xl font-extrabold text-white">{value}</h3>
        {/* ✨ COLOR CHANGE: Label text is a lighter gray */}
        <p className="mt-2 text-gray-400 font-semibold">{label}</p>
    </motion.div>
);

const StatsSection = () => (
    // ✨ COLOR CHANGE: Section background is now black
    <section className="py-20 md:py-24 bg-black">
        <motion.div
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="grid md:grid-cols-3 gap-8">
                <StatCard 
                    variant={fromLeftVariant}
                    // ✨ COLOR CHANGE: Icon is white
                    icon={<Clock size={32} className="text-white" />}
                    value={
                        <>
                            <span className="md:hidden">8h/semaine</span>
                            <span className="hidden md:inline">8H/S</span>
                        </>
                    }
                    // ✨ TEXT CHANGE: Medical term generalized
                    label="de temps de gestion économisé"
                />
                <StatCard 
                    variant={fromCenterVariant}
                    // ✨ COLOR CHANGE: Icon is white
                    icon={<Users size={32} className="text-white" />}
                    value="+25%"
                    // ✨ TEXT CHANGE: Medical term generalized
                    label="de nouveaux clients en moyenne"
                />
                <StatCard 
                    variant={fromRightVariant}
                    // ✨ COLOR CHANGE: Icon is white
                    icon={<Star size={32} className="text-white" />}
                    value="98%"
                    // ✨ TEXT CHANGE: Medical term generalized
                    label="de satisfaction client"
                />
            </div>
        </motion.div>
    </section>
);

export default StatsSection;


