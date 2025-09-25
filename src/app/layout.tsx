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
      <head>
        {/* Font Awesome CDN (free) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0d0b] text-[#f5f5f5] selection:bg-[#b37a46]/50`}
      >
        {children}
        {/* Back to top button */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{const btn=document.createElement('button');btn.setAttribute('type','button');btn.setAttribute('aria-label','Kembali ke atas');btn.style.position='fixed';btn.style.right='1.25rem';btn.style.bottom='1.25rem';btn.style.zIndex='60';btn.style.width='46px';btn.style.height='46px';btn.style.borderRadius='50%';btn.style.background='radial-gradient(circle at 30% 25%, #c48952, #8b5a2b)';btn.style.color='#0f0d0b';btn.style.fontWeight='600';btn.style.display='flex';btn.style.alignItems='center';btn.style.justifyContent='center';btn.style.boxShadow='0 6px 26px -8px rgba(0,0,0,0.65)';btn.style.cursor='pointer';btn.style.border='1px solid rgba(255,255,255,0.15)';btn.style.transition='opacity .4s, transform .4s, box-shadow .4s';btn.style.opacity='0';btn.style.transform='translateY(12px) scale(.9)';btn.style.backdropFilter='blur(4px)';btn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#1a110b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>';let showing=false;function toggle(){const y=window.scrollY||document.documentElement.scrollTop;if(y>320 && !showing){showing=true;btn.style.opacity='1';btn.style.transform='translateY(0) scale(1)';}else if(y<=320 && showing){showing=false;btn.style.opacity='0';btn.style.transform='translateY(12px) scale(.9)';}}window.addEventListener('scroll',toggle,{passive:true});btn.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});btn.addEventListener('keydown',e=>{if(e.key==='Enter' || e.key===' ') {e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});}});document.addEventListener('DOMContentLoaded',()=>{document.body.appendChild(btn);toggle();});})();`,
          }}
        />
      </body>
    </html>
  );
}
