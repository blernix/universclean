import "./globals.css";
import { Header, Footer } from "@/components/layout";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900">
        <Header />
        
        <main>
          {children} {/* Chaque page affichera son propre contenu ici */}
        </main>

        <Footer />
      </body>
    </html>
  );
}