"use client";
import { Linkedin, Facebook, X, Instagram, Youtube, MessageSquare, Phone } from 'lucide-react';
import Image from 'next/image';

const TikTokIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2h2.7c.1.8.4 1.6.9 2.3a4.7 4.7 0 0 0 2.7 1.9v2.8c-1 0-2-.2-2.9-.6v7.3a6.3 6.3 0 1 1-6.3-6.3c.2 0 .5 0 .8.1v2.9a3.5 3.5 0 1 0 2.8 3.4V2Z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { href: "https://wa.me/212632614894", Icon: MessageSquare, label: "WhatsApp" },
    { href: "tel:+212628436082", Icon: Phone, label: "Phone" },
    { href: "https://www.tiktok.com/@qreeblik", Icon: TikTokIcon, label: "TikTok" },
    { href: "https://www.linkedin.com/in/qreeb-lik-683324384/", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/qreeb_lik/", Icon: Instagram, label: "Instagram" },
    { href: "https://web.facebook.com/profile.php?id=61580543696364", Icon: Facebook, label: "Facebook" },
    { href: "https://x.com/QreebLik", Icon: X, label: "X" },
    { href: "https://www.youtube.com/@Qreeblik", Icon: Youtube, label: "YouTube" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div>
            <Image
              src="/assets/logo.png"
              alt="Qreeb Lik Logo"
              width={32}
              height={32}
            />
            <p className="text-slate-400 mt-4">La santé, simplifiée.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-slate-200">Navigation</h4>
            <ul className="space-y-3 mt-4">
              <li><a href="#features" className="text-slate-400 hover:text-sky-400 hover:underline transition-colors">Fonctionnalités</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-sky-400 hover:underline transition-colors">Comment ça marche</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-sky-400 hover:underline transition-colors">Témoignages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-slate-200">Légal</h4>
            <ul className="space-y-3 mt-4">
              {/* ✅ Corrected apostrophe here */}
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-sky-400 hover:underline transition-colors">Conditions d&apos;utilisation</a></li>
              <li><a href="/privacy-policy" className="text-slate-400 hover:text-sky-400 hover:underline transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-slate-200">Suivez-nous</h4>
            <div className="grid grid-cols-4 gap-3 mt-4 max-w-[180px] mx-auto md:mx-0">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Suivez-nous sur ${label}`}
                  className="flex items-center justify-center p-2.5 bg-slate-700/50 rounded-full text-slate-300 transform transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700/50 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Qreeb Lik. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;