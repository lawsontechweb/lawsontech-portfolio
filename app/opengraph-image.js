import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17181b",
          backgroundImage:
            "linear-gradient(135deg, #17181b 0%, #2b2eb0 100%)",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#f6f4ef",
            letterSpacing: -2,
          }}
        >
          LawsonTech
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#d5e94c",
            marginTop: 20,
          }}
        >
          Websites for Local Small Businesses
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}