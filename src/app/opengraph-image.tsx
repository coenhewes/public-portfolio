import { ImageResponse } from "next/og";

import { site } from "../data/site";

export const runtime = "edge";
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#a1a1aa",
          }}
        >
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#d4d4d8",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#71717a",
          }}
        >
          AI products · SaaS platforms · technical systems
        </div>
      </div>
    ),
    size,
  );
}
