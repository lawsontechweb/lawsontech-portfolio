import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

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
          background: "#17181b",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            color: "#d5e94c",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          L
        </div>
      </div>
    ),
    { ...size }
  );
}