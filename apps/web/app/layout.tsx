import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "ChatVentas AI — Vende 24/7 por WhatsApp e Instagram con IA (Chile)",
  description:
    "Atención y ventas 24/7 con IA, scoring Cold/Warm/Hot, promociones por intereses y pagos Webpay/Mercado Pago. Ideal para PYMEs de Chile.",
  keywords: "chatbot, WhatsApp, Instagram, IA, ventas, Chile, PYME, Webpay, Mercado Pago",
  authors: [{ name: "ChatVentas AI" }],
  creator: "ChatVentas AI",
  publisher: "ChatVentas AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://chatventas.cl",
    siteName: "ChatVentas AI",
    title: "ChatVentas AI — Vende 24/7 por WhatsApp e Instagram con IA",
    description:
      "Atención y ventas 24/7 con IA, scoring Cold/Warm/Hot, promociones por intereses y pagos Webpay/Mercado Pago.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "ChatVentas AI - Vende 24/7 con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatVentas AI — Vende 24/7 por WhatsApp e Instagram con IA",
    description: "Atención y ventas 24/7 con IA para PYMEs de Chile",
    images: ["/api/og"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es-CL"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${montserrat.variable}`}
    >
  <body className="font-sans antialiased px-4">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
