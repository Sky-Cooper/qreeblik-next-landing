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
        className="bg-white p-8 rounded-2xl shadow-lg text-center border border-slate-100 flex flex-col items-center"
        variants={variant}
    >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mb-5">
            {icon}
        </div>
        <h3 className="static text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">{value}</h3>
        <p className="mt-2 text-slate-600 font-semibold">{label}</p>
    </motion.div>
);

const StatsSection = () => (
    // Made vertical padding responsive for better mobile view
    <section className="py-20 md:py-24 bg-slate-50">
        <motion.div
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* This grid layout is already perfectly responsive */}
            <div className="grid md:grid-cols-3 gap-8">
                <StatCard 
                    variant={fromLeftVariant}
                    icon={<Clock size={32} className="text-blue-600" />}
                    value={
                        <>
                           <span className="md:hidden">8h/semaine</span>
                           <span className="hidden md:inline">8H/S</span>
                        </>
                    }
                    label="de temps administratif économisé"
                />
                <StatCard 
                    variant={fromCenterVariant}
                    icon={<Users size={32} className="text-teal-600" />}
                    value="+25%"
                    label="de augmentation en moyenne"
                />
                <StatCard 
                    variant={fromRightVariant}
                    icon={<Star size={32} className="text-blue-600" />}
                    value="98%"
                    label="de satisfaction "
                />
            </div>
        </motion.div>
    </section>
);

export default StatsSection;

