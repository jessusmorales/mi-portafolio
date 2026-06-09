import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesús Morales | Software, datos y producto",
  description: "Portafolio de Jesús Morales, estudiante de Ingeniería Informática en la UPCH y desarrollador frontend y backend.",
  keywords: ["Jesús Morales", "Ingeniería Informática", "Frontend", "Backend", "Data Science", "UPCH"],
  applicationName: "Portafolio de Jesús Morales",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  openGraph: {
    title: "Jesús Morales | Software, datos y producto",
    description: "Desarrollo frontend y backend, datos, IoT y sistemas.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
