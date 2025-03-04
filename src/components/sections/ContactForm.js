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

  // 📌 Fonction qui envoie le formulaire vers l'API `/api/sendEmail`
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
      setFormData({ name: "", email: "", service: "", message: "" }); // Réinitialisation du formulaire
    } else {
      alert("Erreur lors de l'envoi du formulaire.");
    }
  };

  return (
    <section id="contact" className="py-12 px-6 bg-gray-900 shadow-md rounded-lg">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Demande de Devis</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nom */}
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-md"
          />

          {/* Sélection du service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="p-3 border rounded-md bg-white"
          >
            <option value="">Sélectionner un service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Décrivez votre demande"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border rounded-md h-32"
          />

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </section>
  );
}