import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jesús Morales | Software, datos y producto",
    short_name: "Jesús Morales",
    description: "Portafolio profesional de Jesús Morales.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b12",
    theme_color: "#080b12",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
