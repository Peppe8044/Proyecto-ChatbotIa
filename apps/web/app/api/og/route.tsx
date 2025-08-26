import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        backgroundImage:
          "linear-gradient(45deg, #f8fafc 25%, transparent 25%), linear-gradient(-45deg, #f8fafc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8fafc 75%), linear-gradient(-45deg, transparent 75%, #f8fafc 75%)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6366f1",
          borderRadius: "20px",
          padding: "40px 60px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            color: "white",
            marginRight: "20px",
          }}
        >
          💬
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 900,
            color: "white",
          }}
        >
          ChatVentas AI
        </div>
      </div>
      <div
        style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#374151",
          textAlign: "center",
          maxWidth: "800px",
          lineHeight: 1.2,
        }}
      >
        Vende 24/7 por WhatsApp e Instagram con IA
      </div>
      <div
        style={{
          fontSize: "24px",
          color: "#6b7280",
          textAlign: "center",
          maxWidth: "600px",
          marginTop: "20px",
        }}
      >
        Scoring automático • Pagos Webpay • Hecho para PYMEs de Chile
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
