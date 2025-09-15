import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Area9 Coffee — Kopi Spesialti Modern",
    template: "%s | Area9 Coffee",
  },
  description:
    "Nikmati kopi spesialti dengan cita rasa seimbang, diseduh oleh barista berpengalaman. Temukan menu espresso, manual brew, dan signature kami.",
  keywords: [
    "kopi",
    "coffee shop",
    "specialty coffee",
    "espresso",
    "manual brew",
    "latte",
    "cappuccino",
    "cold brew",
  ],
  authors: [{ name: "Area9 Coffee" }],
  creator: "Area9 Coffee",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Area9 Coffee — Kopi Spesialti Modern",
    description:
      "Nikmati kopi spesialti dengan cita rasa seimbang, diseduh oleh barista berpengalaman.",
    url: "/",
    siteName: "Area9 Coffee",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Area9 Coffee — Kopi Spesialti Modern",
    description:
      "Nikmati kopi spesialti dengan cita rasa seimbang, diseduh oleh barista berpengalaman.",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0d0b] text-[#f5f5f5] selection:bg-[#b37a46]/50`}
      >
        {children}
      </body>
    </html>
  );
}
