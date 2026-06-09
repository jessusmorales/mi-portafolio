import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(10).max(3000),
  company: z.string().max(0).optional()
});

export async function POST(request: Request) {
  try {
    const input = contactSchema.safeParse(await request.json());

    if (!input.success) {
      return NextResponse.json({ error: "Revisa los datos ingresados." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      return NextResponse.json({ error: "El correo aún no está configurado." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { name, email, message } = input.data;
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portafolio <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `Nueva oportunidad para Jesús - ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`
    });

    if (error) {
      return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Ocurrió un error inesperado." }, { status: 500 });
  }
}
