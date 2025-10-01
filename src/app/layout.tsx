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

        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                      if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,
                  k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104337600', 'ym');

              ym(104337600, 'init', {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104337600"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
