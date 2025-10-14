"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react"; // ✅ Import useRef
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ✅ State for dropdown
    const dropdownRef = useRef<HTMLDivElement>(null); // ✅ Ref to detect outside clicks

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ✅ Effect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: 'Espace Patient', href: '#patients' },
        { name: 'Espace Médecin', href: '#features' },
        { name: 'Comment ça marche', href: '#how-it-works' },
        { name: 'Témoignages', href: '#testimonials' },
        {
            name: 'Nos Politiques',
            dropdown: [
                { name: 'Confidentialité (web)', href: 'https://dashboard.qreeblik.com/privacy-policy' },
                { name: 'Confidentialité (Mobile)', href: 'https://dashboard.qreeblik.com/patient-policy' }
            ]
        }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/assets/logo.png"
                            alt="Qreeb Lik Logo"
                            width={36}
                            height={36}
                            className={`transition-all duration-300 ${isScrolled ? 'h-8 w-8' : 'h-9 w-9'}`}
                        />
                        <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500' : 'text-white'}`}>
                            Qreeb Lik<sup>&trade;</sup>
                        </span>
                    </Link>
                    
                    {/* ✅ Changed to md:flex */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.dropdown ? (
                                <div key={link.name} className="relative group" ref={dropdownRef}>
                                    {/* ✅ Added onClick handler */}
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className={`flex items-center gap-1 font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}
                                    >
                                        {link.name}
                                        {/* ✅ Chevron rotates based on state */}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {/* ✅ Visibility now controlled by state and hover */}
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl p-2 transition-all duration-300 z-10 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                target="_blank" // Opens policy in a new tab
                                                rel="noopener noreferrer"
                                                className="block w-full text-left px-4 py-2 text-slate-600 rounded-md hover:bg-slate-100 hover:text-blue-600"
                                                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a key={link.name} href={link.href} className={`font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>
                                    {link.name}
                                </a>
                            )
                        ))}
                    </nav>

                    {/* ✅ Changed to md:flex */}
                    <div className="hidden md:flex items-center gap-4">
                         <Link href="https://dashboard.qreeblik.com/login" className={`px-6 py-3 font-bold rounded-full shadow-lg transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-105' : 'bg-white text-blue-700 hover:bg-white/90'}`}>
                            Essayer 
                        </Link>
                    </div>

                    {/* ✅ Changed to md:hidden */}
                    <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            
            {/* ✅ Changed to md:hidden */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-200">
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            link.dropdown ? (
                                <div key={link.name} className="pt-2">
                                    <span className="font-bold text-slate-400 text-sm uppercase tracking-wider">{link.name}</span>
                                    <div className="flex flex-col space-y-3 pt-3 pl-3">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold text-slate-600 hover:text-blue-600"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <a key={link.name} href={link.href} className="font-semibold text-slate-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            )
                        ))}
                        <Link href="https://dashboard.qreeblik.com/login" className="px-6 py-3 mt-4 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full shadow-lg">
                            Essayer
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
export default Header;