import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121826",
          borderRadius: 112,
          color: "#eef1f6",
          fontSize: 230,
          fontWeight: 700,
          letterSpacing: -12,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 46,
            borderRadius: 9999,
            border: "14px solid #5b4bff",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 233,
            width: 46,
            height: 46,
            borderRadius: 9999,
            background: "#0fb5c9",
            display: "flex",
          }}
        />
        JG
      </div>
    ),
    size,
  )
}
