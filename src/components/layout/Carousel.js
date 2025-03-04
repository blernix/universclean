"use client";
import * as React from "react";
import Image from "next/image"; 
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function ImageCarousel() {
  const [index, setIndex] = React.useState(0);
  const images = [
    "/carrousel1.jpg",
    "/carrousel2.jpg",
    "/carrousel3.jpg",
    "/carrousel4.jpg",
  ];

  // Défilement automatique toutes les 4 secondes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]); // Ajout de la dépendance correcte

  return (
    <Carousel className="w-full max-w-none h-[60vh] overflow-hidden">
      <CarouselContent
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <CarouselItem key={i} className="w-full h-[100vh]">
            <Image 
              src={src} 
              alt={`Slide ${i + 1}`} 
              width={1920} 
              height={1080} 
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}