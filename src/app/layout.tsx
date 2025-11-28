import type { Metadata } from "next";
import { Playfair_Display, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Korona - Luxury Castle Resort in Crimea | Sea Views & Fine Dining",
  description: "Experience castle-style luxury at Hotel Korona in Utes, Crimea. Just 150m from pristine beaches, featuring sea view rooms, 3 restaurants, pool, and 24/7 service. Book your unforgettable getaway.",
  keywords: "Hotel Korona, Crimea hotel, castle hotel, luxury resort, sea view rooms, Utes, Alushta, beach hotel",
  openGraph: {
    title: "Hotel Korona - Luxury Castle Resort in Crimea",
    description: "Experience castle-style luxury at Hotel Korona. Sea views, fine dining, pool, and pristine beaches.",
    type: "website",
    locale: "en_US",
  },
};

import LoadingOverlay from '@/components/layout/LoadingOverlay';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingBar from '@/components/layout/BookingBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lora.variable} ${montserrat.variable} font-body antialiased`}
        style={{
          fontFamily: 'var(--font-lora), Georgia, serif',
        }}
      >
        <LoadingOverlay />
        <Header />
        <BookingBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
