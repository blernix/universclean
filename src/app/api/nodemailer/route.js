import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json(); // Récupérer les données du formulaire

  const { name, email, service, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Demande de contact - Univers Clean" <${process.env.SMTP_USER}>`,
      to: "killian.lecrut@gmail.com",
      replyTo: email,
      subject: `Demande de devis - ${service}`,
      html: `
          <p><strong>Nouvelle demande de devis reçue :</strong></p>
        <hr>
        <p><strong>La personne qui vous contact se nomme :</strong> ${name}</p>
        <p><strong>Message :</strong></p>
        <blockquote style="margin: 10px 0; padding: 10px; background: #f4f4f4; border-left: 4px solid #ccc;">
          ${message}
        </blockquote>
        <p style="font-size: 12px; color: #666;">Vous pouvez répondre directement à cet email.</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Email envoyé avec succès !" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Erreur lors de l'envoi de l'email." }), { status: 500 });
  }
}