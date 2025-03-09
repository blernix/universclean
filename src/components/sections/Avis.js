"use client";
import { useEffect, useState } from "react";

export default function Avis() {
  const [avis, setAvis] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/avis.json") // Charger les avis localement
      .then((response) => response.json())
      .then((data) => setAvis(data))
      .catch((error) => console.error("Erreur lors du chargement des avis :", error));
  }, []);

  // ⏳ Défilement automatique des avis toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % avis.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [avis]);

  return (
    <section className="bg-neutral-900 py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">💬 Avis Clients</h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {avis.length > 0 ? (
              avis.map((review, i) => (
                <div key={i} className="min-w-full px-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    {/* Auteur & Date */}
                    <h3 className="font-semibold text-gray-800">{review.author}</h3>
                    <span className="text-sm text-gray-500">{review.date}</span>

                    {/* Étoiles */}
                    <div className="flex justify-center my-2">
                      {Array(5)
                        .fill("⭐")
                        .map((star, j) => (
                          <span key={j} className="text-yellow-500 text-lg">
                            {star}
                          </span>
                        ))}
                    </div>

                    {/* Texte de l’avis */}
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">Aucun avis disponible.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}