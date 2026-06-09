# Portafolio de Jesús Morales

Portafolio profesional construido con Next.js App Router, React, TypeScript y una API de contacto propia.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Configurar el envío de correos

1. Crea una cuenta gratuita en Resend.
2. Genera una API key.
3. Copia `.env.example` como `.env.local`.
4. Completa `RESEND_API_KEY`.
5. Durante las pruebas, Resend permite enviar desde `onboarding@resend.dev` al correo asociado a la cuenta.
6. Para producción, verifica un dominio y actualiza `RESEND_FROM_EMAIL`.

Despliega gratuitamente en Vercel y agrega las mismas variables de entorno al proyecto.
