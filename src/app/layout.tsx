import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Header } from "@/components/ui/Header";

import { Footer } from "@/components/ui/Footer";
import { Cactus_Classical_Serif } from 'next/font/google'

const cactus = Cactus_Classical_Serif({
  subsets: ['latin'],
  weight: ['400'], 
  display: 'swap',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Cabare & Bar Мюзикл — Ночь в стиле кабаре, Псков",
  description:
    "Живые шоу, музыка и авторские коктейли в самом атмосферном месте Пскова — Cabare & Bar «Мюзикл».",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
      </head>
      <body
        className={`${cactus.className} min-h-screen flex flex-col`}
      >
        <Header/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer/>
       <Script src="https://ticketscloud.com/static/scripts/widget/tcwidget.js"/>
      </body>
    </html>
  );
}
