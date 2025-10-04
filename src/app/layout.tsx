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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
