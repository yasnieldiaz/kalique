import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // Per minute

function getRateLimitKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation
function validateInput(body: Record<string, unknown>): { valid: boolean; error?: string } {
  const { name, email, message } = body;

  if (!name || typeof name !== "string" || name.length < 2 || name.length > 100) {
    return { valid: false, error: "Invalid name" };
  }

  if (!email || typeof email !== "string" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return { valid: false, error: "Invalid email" };
  }

  if (!message || typeof message !== "string" || message.length < 10 || message.length > 5000) {
    return { valid: false, error: "Invalid message" };
  }

  // Check for spam patterns
  const spamPatterns = [
    /\[url=/i,
    /\[link=/i,
    /<a\s+href/i,
    /viagra|cialis|casino|lottery|winner|congratulations.*won/i,
  ];

  const fullText = `${name} ${message}`;
  for (const pattern of spamPatterns) {
    if (pattern.test(fullText)) {
      return { valid: false, error: "Spam detected" };
    }
  }

  return { valid: true };
}

// Sanitize input to prevent XSS
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const clientKey = getRateLimitKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check - if "website" field is filled, it's a bot
    if (body.website) {
      // Silently reject but return success to confuse bots
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    }

    // Validate input
    const validation = validateInput(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    const { name, email, phone, company, subject, message } = body;

    // Sanitize inputs
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone || "No proporcionado");
    const safeCompany = sanitize(company || "No proporcionada");
    const safeSubject = sanitize(subject || "Contacto general");
    const safeMessage = sanitize(message);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "gazda@xnetik.hu",
      replyTo: safeEmail,
      subject: `[Formulario Web] ${safeSubject}`,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safePhone}</p>
        <p><strong>Empresa:</strong> ${safeCompany}</p>
        <p><strong>Asunto:</strong> ${safeSubject}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">IP: ${clientKey}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
