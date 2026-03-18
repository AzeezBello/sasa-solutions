import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(232,244,238,1) 0%, rgba(244,248,239,1) 55%, rgba(222,240,228,1) 100%)",
          color: "#16332d",
          padding: "64px",
          fontFamily:
            '"Avenir Next", "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(22,51,45,0.12)",
            borderRadius: "36px",
            padding: "48px",
            background: "rgba(255,255,255,0.78)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "74px",
                width: "74px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "22px",
                background: "#2f7a67",
                color: "white",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.28em",
              }}
            >
              SA
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.shortName}
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "rgba(22,51,45,0.75)",
                }}
              >
                Residential and commercial cleaning support
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "860px",
            }}
          >
            <div
              style={{
                fontSize: "68px",
                lineHeight: 1.02,
                fontWeight: 700,
              }}
            >
              {siteConfig.socialImage.title}
            </div>
            <div
              style={{
                fontSize: "28px",
                lineHeight: 1.35,
                color: "rgba(22,51,45,0.8)",
              }}
            >
              {siteConfig.socialImage.subtitle}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "22px",
              color: "rgba(22,51,45,0.75)",
            }}
          >
            <div>Home cleaning</div>
            <div>Office cleaning</div>
            <div>Deep cleaning</div>
            <div>Quote-ready service briefs</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
