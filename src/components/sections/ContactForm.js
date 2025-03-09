"use client";
import { useState } from "react";
import { services } from "@/data/Services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📌 Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Envoi du formulaire avec :", formData); // ✅ Debug

    const response = await fetch("/api/nodemailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Votre demande a bien été envoyée !");
      setFormData({ name: "", email: "", service: "", message: "" });
    } else {
      alert("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <section id="contact" className="py-12 px-6 bg-neutral-900 shadow-md rounded-lg">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Demande de Devis</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nom */}
          <input
            type="text"
            name="name"
            placeholder="Nom *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          {/* Sélection du service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          >
            <option value="" className="text-gray-900">Sélectionner un service *</option>
            {services.map((service, index) => (
              <option key={index} value={service.title} className="text-gray-900">
                {service.title}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Votre message *"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition h-32"
          />

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200  text-black py-3 rounded-lg transition text-lg font-semibold"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}