import "./globals.css";
import { Header, Footer } from "@/components/layout";
import Providers from "@/components/Providers";

export const metadata = {
  metadataBase: new URL("https://univers-clean77.fr"),
  title: "Univers Clean - Nettoyage professionnel",
  description: "Univers Clean, spécialiste du nettoyage haut de gamme (voitures, terrasses, canapés). Service premium et sur mesure en Île-de-France.",  keywords: ["nettoyage voiture", "car staging", "nettoyage terrasse", "lavage auto", "detailing"],
  authors: [{ name: "Univers Clean" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://univers-clean77.fr/",
    title: "Univers Clean - Nettoyage professionnel",
    description: "Découvrez nos services de nettoyage pour voitures, terrasses et bien plus. Univers Clean, votre expert du nettoyage.",
    images: ["/photo_hero.webp"],
    siteName: "Univers Clean",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://univers-clean77.fr/",
    title: "Univers Clean - Nettoyage professionnel",
    description: "Découvrez nos services de nettoyage pour voitures, terrasses et bien plus.",
    images: ["/photo_hero.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-neutral-900">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}