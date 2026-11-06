import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vitor Lima | Engenheiro de Software",
    short_name: "Vitor Lima",
    description:
      "Engenheiro de Software com experiência em back-end e front-end e especialização em APIs RESTful.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0C11",
    theme_color: "#0A0C11",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
