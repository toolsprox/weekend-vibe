import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Preloader from "@/components/shared/Preloader";
import MobileCTA from "@/components/shared/MobileCTA";
import TouchRipple from "@/components/shared/TouchRipple";
import AmbientAura from "@/components/shared/AmbientAura";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import ReservationModal from "@/components/shared/ReservationModal";

export const metadata: Metadata = {
  title: "Masakali | Weekend Vibe",
  description: "The Ultimate Weekend Vibe at London's premier Indian restaurant. Book your table for Friday nights and weekend brunches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID; 
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="en" className={`${poppins.variable} antialiased h-full`}>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative cursor-pointer overflow-x-hidden">
        <AmbientAura />
        <TouchRipple />
        <Preloader />
        
        <Header />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <Footer />
        
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {adsId && (
          <Script id="google-ads-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', '${adsId}');
            `}
          </Script>
        )}
        <MobileCTA />
        <ReservationModal />
      </body>
    </html>
  );
}


