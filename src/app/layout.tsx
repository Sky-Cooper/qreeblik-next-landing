import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Pub/Header";
import Footer from "@/components/Pub/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = 'https://www.qreeblik.com';

export const metadata: Metadata = {
  title: "Qreeb Lik - Gestion de Cabinet Médical et Prise de RDV en Ligne",
  description: "Qreeb Lik est la solution tout-en-un pour les médecins au Maroc. Optimisez votre temps, attirez de nouveaux patients et offrez une expérience de soin moderne.",
  
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },

  keywords: ["gestion cabinet médical Maroc", "prise de rendez-vous en ligne", "logiciel médecin", "téléconsultation Maroc", "Qreeb Lik", "agenda médical en ligne", "dossier patient informatisé"],
  
  openGraph: {
    title: "Qreeb Lik - La Santé, Simplifiée.",
    description: "La solution moderne pour la gestion de cabinets médicaux et la prise de rendez-vous au Maroc.",
    url: siteUrl,
    siteName: 'Qreeb Lik',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Qreeb Lik - Plateforme de gestion médicale',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Qreeb Lik - Révolutionnez votre pratique médicale.",
    description: "Simplifiez la gestion de votre cabinet et améliorez l'expérience de vos patients avec notre plateforme tout-en-un.",
    images: [`${siteUrl}/og-image.png`], // Chemin complet vers l'image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

