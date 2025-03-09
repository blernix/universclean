"use client";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-900">
        <ParallaxProvider> {/* Fournit le contexte de parallaxe globalement */}
          <Header />
          <main>{children}</main>
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}