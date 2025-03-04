export default function Contact() {
  return (
    <section className="py-12 px-6 bg-gray-900 shadow-md rounded-lg">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-white mb-6 text-center md:text-left">Nous contacter</h2>

          {/* Adresse */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Adresse</h3>
            <p className="text-white">6 rue de la Bernache, Samoreau, 77210</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=6+rue+de+la+Bernache,+Samoreau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              📍 Voir sur Google Maps
            </a>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p>
              📞 <a href="tel:+33782364263" className="text-blue-500 hover:underline">07 82 36 42 63</a>
            </p>
            <p>
              📧 <a href="mailto:universclean77@gmail.com" className="text-blue-500 hover:underline">universclean77@gmail.com</a>
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-semibold text-white">Heures d&apos;ouverture</h3>
            <p className="text-white">Lundi - Vendredi : <strong>8h - 18h</strong></p>
            <p className="text-white">Samedi : <strong>Sur RDV</strong></p>
          </div>
        </div>

        {/* Carte Google Maps à droite */}
        <div className="w-full md:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.786857015097!2d2.7695103766742646!3d48.42223617127623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef61847db368cb%3A0x1522ec84ea783c3!2sUnivers%20Clean%2077%20-%20Nettoyage%20Voiture%20-%20Canap%C3%A9%20-%20Terrasse!5e0!3m2!1sfr!2sfr!4v1740503783881!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}