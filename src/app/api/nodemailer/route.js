import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, service, vehicleClass, surface, message } = body;

    if (!name || !email || !service || !message) {
      return new Response(JSON.stringify({ message: "Tous les champs obligatoires ne sont pas remplis." }), { status: 400 });
    }

    let additionalInfo = "";
    if (service === "Nettoyage Intérieur" ||service === "Nettoyage Extérieur" || service === "Car Staging") {
      additionalInfo = `<p><strong>Classe du véhicule :</strong> ${vehicleClass}</p>`;
    } else if (service === "Nettoyage Terrasse") {
      additionalInfo = `<p><strong>Surface :</strong> ${surface} m²</p>`;
    }

    await transporter.sendMail({
      from: `"Demande de contact - Univers Clean" <${process.env.SMTP_USER}>`,
      to: "universclean77@gmail.com",
      replyTo: email,
      subject: `Demande de devis - ${service}`,
      html: `
        <p><strong>Nouvelle demande de devis reçue :</strong></p>
        <hr>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Service :</strong> ${service}</p>
        ${additionalInfo}
        <p><strong>Message :</strong></p>
        <blockquote style="margin: 10px 0; padding: 10px; background: #f4f4f4; border-left: 4px solid #ccc;">
          ${message}
        </blockquote>
        <p style="font-size: 12px; color: #666;">Vous pouvez répondre directement à cet email.</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email envoyé avec succès !" }), { status: 200 });

  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email." }), { status: 500 });
  }
}