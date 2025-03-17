import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-4 ">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">© {new Date().getFullYear()} - Tous droits réservés</p>
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
    </footer>
  );
}