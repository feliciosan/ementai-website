import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Otimização para carregamento de fonte
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Otimização para carregamento de fonte
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ementai - Menus Online com QR Code para Restaurantes",
  description:
    "Transforme seu menu em uma experiência digital. Crie menus online, gere QR codes e ofereça atendimento sem contato aos seus clientes.",
  keywords:
    "menu online, QR code, restaurante, menu digital, cardápio online, cardápio digital, atendimento sem contato",
  openGraph: {
    title: "Ementai - Menus Online para Restaurantes",
    description: "Transforme seu menu em uma experiência digital com QR codes",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para Google Fonts e Analytics */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google Analytics - Otimizado */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
