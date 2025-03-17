"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; 
import { Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full p-1 transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo et réseaux sociaux */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo_univers_clean.png"
            alt="Logo Univers Clean"
            width={80}
            height={80}
          />
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/universclean77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Facebook"
              className="focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Facebook className="w-6 h-6 hover:text-gray-400 text-white transition" />
            </a>
            <a
              href="https://www.instagram.com/universclean77/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Instagram"
              className="focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              <Instagram className="w-6 h-6 hover:text-gray-400 text-white transition" />
            </a>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav role="navigation" aria-label="Menu principal" className="hidden md:flex space-x-6">
          <a href="#propos" className="hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Présentation</a>
          <a href="#tarifs" className="hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Service</a>
          <a href="#contact" className="hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1">Contact</a>
        </nav>

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden focus:outline-none text-white focus:ring-2 focus:ring-white rounded p-2"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav
          role="navigation"
          aria-label="Menu mobile"
          className="md:hidden flex flex-col mt-2 space-y-2 text-center bg-black/80 p-4 rounded-lg backdrop-blur-md"
        >
          <a href="#propos" className="block py-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded" onClick={() => setIsOpen(false)}>Présentation</a>
          <a href="#tarifs" className="block py-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded" onClick={() => setIsOpen(false)}>Service</a>
          <a href="#contact" className="block py-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}