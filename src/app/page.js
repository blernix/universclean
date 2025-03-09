import { ImageCarousel, Hero } from "@/components/layout";
import { Propos, Tarifs, Contact, ContactForm, Avis } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Propos />
      <div className="w-full h-px bg-gray-700 my-12 opacity-90"></div>
      <Tarifs />
      <div className="w-full h-px bg-gray-700 my-12 opacity-90"></div>
      <Avis />
      <div className="w-full h-px bg-gray-700 my-12 opacity-90"></div>
      <Contact />
      <div className="w-full h-px bg-gray-700 my-12 opacity-90"></div>
      <ContactForm />
    </>
  );
}