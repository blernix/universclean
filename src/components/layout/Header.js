"use client";
import { useState } from "react";
import Image from "next/image"; // Ajoute cette ligne en haut


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Titre */}
        <div className="flex items-center gap-3">
        <Image src="/logo_univers_clean.png" alt="Logo" width={80} height={80} />
                  <h1 className="text-xl font-bold">Univers Clean</h1>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#propos" className="hover:text-gray-300">Présentation</a>
          <a href="#tarifs" className="hover:text-gray-300">Service</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col mt-2 space-y-2 text-center">
          <a href="#propos" className="block py-2 bg-gray-700 rounded">Présentation</a>
          <a href="#tarifs" className="block py-2 bg-gray-700 rounded">Service</a>
          <a href="#contact" className="block py-2 bg-gray-700 rounded">Contact</a>
        </nav>
      )}
    </header>
  );
}