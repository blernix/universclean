"use client";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        {/* Meta SEO */}
        <title>Univers Clean - Nettoyage professionnel</title>
        <meta name="description" content="Découvrez nos services de nettoyage pour voitures, terrasses et bien plus. Univers Clean, votre expert du nettoyage." />
        <meta name="keywords" content="nettoyage voiture, car staging, nettoyage terrasse, lavage auto, detailing" />
        <meta name="author" content="Univers Clean" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://univers-clean77.fr/" />
        <meta property="og:title" content="Univers Clean - Nettoyage professionnel" />
        <meta property="og:description" content="Découvrez nos services de nettoyage pour voitures, terrasses et bien plus. Univers Clean, votre expert du nettoyage." />
        <meta property="og:image" content="/photo_hero.jpg" />
        <meta property="og:site_name" content="Univers Clean" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://univers-clean77.fr/" />
        <meta name="twitter:title" content="Univers Clean - Nettoyage professionnel" />
        <meta name="twitter:description" content="Découvrez nos services de nettoyage pour voitures, terrasses et bien plus." />
        <meta name="twitter:image" content="/photo_hero.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-neutral-900">
        <ParallaxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}