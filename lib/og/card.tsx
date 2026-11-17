import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }

type OgCardProps = {
  eyebrow: string
  title: string
  footer?: string
}

/** Shared Open Graph card: ink background, loop ring, signal-violet + cyan accents. */
export function renderOgCard({ eyebrow, title, footer = "gobiel.online" }: OgCardProps) {
  const titleSize = title.length > 80 ? 52 : title.length > 50 ? 62 : 76
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0b0f1a 0%, #141a33 60%, #0d2a33 100%)",
          color: "#eef1f6",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            border: "3px solid rgba(91,75,255,0.55)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -40,
            width: 400,
            height: 400,
            borderRadius: 9999,
            border: "2px dashed rgba(15,181,201,0.55)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 248,
            top: 150,
            width: 26,
            height: 26,
            borderRadius: 9999,
            background: "#f2a33a",
            boxShadow: "0 0 30px 8px rgba(242,163,58,0.5)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 4, color: "#9aa3bf" }}>
          <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#0fb5c9", display: "flex" }} />
          {eyebrow.toUpperCase()}
        </div>
        <div style={{ display: "flex", fontSize: titleSize, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "#5b4bff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 26,
              }}
            >
              JG
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 700 }}>Jonathan Gobiel</span>
              <span style={{ fontSize: 22, color: "#9aa3bf" }}>Product Engineer · AI loop engineering</span>
            </div>
          </div>
          <span style={{ color: "#0fb5c9" }}>{footer}</span>
        </div>
      </div>
    ),
    ogSize,
  )
}
