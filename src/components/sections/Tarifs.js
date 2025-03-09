"use client";

import { services } from "@/data/Services";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CheckCircle } from 'lucide-react';

export default function Tarifs() {
  // Séparer les services en deux groupes
  const topServices = services.filter(service => ["Nettoyage Intérieur", "Nettoyage Extérieur", "Car Staging"].includes(service.title));
  const bottomServices = services.filter(service => ["Nettoyage Terrasse", "Nettoyage Canapé"].includes(service.title));

  return (
    <section id="tarifs" className="py-12 px-6 bg-neutral-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Tarifs</h2>

        {/* Cartes alignées (haut) */}
        <div className="flex flex-wrap gap-8 justify-center items-start mb-8">
          {topServices.map((service, index) => (
            <TarifCard key={index} service={service} />
          ))}
        </div>

        {/* Cartes alignées (bas) */}
        <div className="flex flex-wrap gap-8 justify-center items-start">
          {bottomServices.map((service, index) => (
            <TarifCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TarifCard({ service }) {
  return (
    <Card className="bg-neutral-900 text-white shadow-xl hover:shadow-2xl transition-shadow w-full md:w-[30%] overflow-hidden rounded-xl p-8">
      {service.beforeAfter && (
        <ImageCarousel before={service.beforeAfter.before} after={service.beforeAfter.after} />
      )}
      <h3 className="text-xl font-normal text-center text-primary my-4">{service.title}</h3>
      <ul className="mt-2 text-sm text-gray-400 space-y-2">
        {service.details.map((detail, i) => (
          <li key={i} className="flex items-start">
          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
          <span className="ml-2">{detail}</span>
        </li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-normal text-center text-primary">
        {service.price}
      </p>
    </Card>
  );
}

// Composant du mini-carousel pour switcher entre l’image Avant et Après
function ImageCarousel({ before, after }) {
  const [index, setIndex] = useState(0);
  const images = [before, after];
  const labels = ["Avant", "Après"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-md">
      <Image
        src={images[index]}
        alt={labels[index]}
        width={500}
        height={250}
        className="w-full h-full object-cover transition-opacity duration-700"
      />
      <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 px-3 py-1 text-xs rounded-full text-white">
        {labels[index]}
      </span>
    </div>
  );
}