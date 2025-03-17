"use client";
import { useState } from "react";
import { services } from "@/data/Services";

const vehicleClasses = [
  { value: "1", label: "Classe 1 : Citadine / Compact (Audi A1, Fiat 500...)" },
  { value: "2", label: "Classe 2 : Berline / Break (Audi A3, VW Passat...)" },
  { value: "3", label: "Classe 3 : SUV / Prestige (BMW X5, Porsche Macan...)" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    vehicleClass: "",
    surface: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 📌 Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Envoi du formulaire avec :", formData);

    const response = await fetch("/api/nodemailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Votre demande a bien été envoyée !");
      setFormData({ name: "", email: "", service: "", vehicleClass: "", surface: "", message: "" });
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
<label htmlFor="name" className="sr-only">Nom</label>
<input
  id="name"
  type="text"
  name="name"
  placeholder="Nom *"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

{/* Email */}
<label htmlFor="email" className="sr-only">Email</label>
<input
  type="email"
  name="email"
  id="email"
  placeholder="Email *"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
/>

{/* Sélection Service */}
<label htmlFor="service" className="sr-only">Sélectionner un service</label>
<select
  name="service"
  id="service"
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

{/* Classe du véhicule (si applicable) */}
{["Nettoyage Intérieur", "Nettoyage Extérieur", "Car Staging"].includes(formData.service) && (
  <>
    <label htmlFor="vehicleClass" className="sr-only">Classe du véhicule</label>
    <select
      name="vehicleClass"
      id="vehicleClass"
      value={formData.vehicleClass}
      onChange={handleChange}
      required
      className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
    >
      <option value="" className="text-gray-900">Classe du véhicule *</option>
      {vehicleClasses.map((vehicle, index) => (
        <option key={index} value={vehicle.value} className="text-gray-900">
          {vehicle.label}
        </option>
      ))}
    </select>
  </>
)}

{/* Surface en m² (Terrasse) */}
{formData.service === "Nettoyage Terrasse" && (
  <>
    <label htmlFor="surface" className="sr-only">Surface en mètre carré</label>
    <input
      type="number"
      name="surface"
      id="surface"
      placeholder="Surface en m² *"
      value={formData.surface}
      onChange={handleChange}
      required
      className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
    />
  </>
)}

{/* Message */}
<label htmlFor="message" className="sr-only">Message</label>
<textarea
  name="message"
  id="message"
  placeholder="Votre message *"
  value={formData.message}
  onChange={handleChange}
  required
  className="w-full bg-transparent text-white p-4 border border-white/30 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition h-32"
/>

{/* Bouton d'envoi */}
<button
  type="submit"
  className="mt-4 bg-primary hover:bg-primary/90 transition text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
>
  Envoyer la demande
</button>
</form>
      </div>
    </section>
  );
}