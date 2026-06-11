import nodemailer from "nodemailer";

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP credentials are not configured");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

export async function sendFormEmail({ subject, html, replyTo }) {
  const to = process.env.EMAIL_TO || process.env.SMTP_USER;
  const from =
    process.env.EMAIL_FROM || `"Ramadhiraj Website" <${process.env.SMTP_USER}>`;

  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    html,
  });
}

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
