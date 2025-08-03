// src/app/layout.tsx

import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import { CartProvider } from "@/context/CartContext";


const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: " الراحة لصناعة الاسفنج والمراتب",
  description: "راحة تستحقها",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans animated-gradient text-white`}>

        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
