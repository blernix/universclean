"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-[#0d1216] text-white overflow-hidden">
      {/* Effet de parallaxe avec image de fond */}
      <Parallax speed={-10} className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/photo_hero.jpg')" }}
          initial={{ opacity: 0, filter: "brightness(0.4)" }}
          animate={{ opacity: 1, filter: "brightness(1)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>
      </Parallax>

      {/* Texte avec effet d'apparition */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }} // Décalage pour apparaître après l’image
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          L'excellence du nettoyage haut de gamme
        </h1>
        <p className="text-lg text-gray-300 mt-4">Automobile • Canapé • Terrasse</p>

        <a
          href="#tarifs"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-full font-semibold text-lg transition-transform hover:scale-105 hover:bg-gray-200"
        >
          Découvrir nos services
        </a>
      </motion.div>
    </section>
  );
}