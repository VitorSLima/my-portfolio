import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Vitor Lima | Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Linhas coloridas decorativas, no mesmo estilo do fundo do site
const bars = [
  { top: 70, left: -40, width: 300, color: "#82BC4F" },
  { top: 120, left: 40, width: 180, color: "#3996DB" },
  { top: 520, left: -60, width: 340, color: "#BB72E9" },
  { top: 570, left: 20, width: 200, color: "#EABD5F" },
  { top: 90, left: 960, width: 320, color: "#3996DB" },
  { top: 140, left: 1040, width: 200, color: "#E74C3C" },
  { top: 500, left: 940, width: 340, color: "#82BC4F" },
  { top: 550, left: 1020, width: 220, color: "#BB72E9" },
];

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0D0E11",
          color: "#E2E4E9",
          fontFamily: "sans-serif",
        }}
      >
        {bars.map((bar) => (
          <div
            key={`${bar.top}-${bar.left}`}
            style={{
              position: "absolute",
              top: bar.top,
              left: bar.left,
              width: bar.width,
              height: 14,
              borderRadius: 7,
              background: bar.color,
              opacity: 0.45,
            }}
          />
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 64 }}>
          <img
            src={photoSrc}
            width={260}
            height={260}
            alt=""
            style={{
              width: 260,
              height: 260,
              borderRadius: 130,
              border: "4px solid #292C34",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 30, color: "#3996DB" }}>
              Vitor dos Santos Lima
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                fontWeight: 700,
                lineHeight: 1.05,
                marginTop: 12,
              }}
            >
              Fullstack Developer
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#878EA1",
                marginTop: 24,
              }}
            >
              Node.js · TypeScript · React · PostgreSQL
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
