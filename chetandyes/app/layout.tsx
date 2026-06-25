import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chetan Dyes & Chemical Company | Premium Dye Distributors Since 1975",
  description:
    "Chetan Dyes & Chemical Company - India's trusted partner for premium textile dyes and chemicals. 50+ years serving the textile industry. Authorized distributor for Spectrum Dye & Chemical Pvt Ltd, Surat. 190+ products including VIBRASPERSE disperse dyes and CHROMAZOL reactive dyes.",
  keywords:
    "dyes, chemicals, textile dyes, disperse dyes, reactive dyes, VIBRASPERSE, CHROMAZOL, CHROMAFIX, CHROMACTIVE, CHROMACION, India, textile industry, Surat, polyester dyes, cotton dyes, fabric dyes",
  openGraph: {
    title: "Chetan Dyes & Chemical Company",
    description:
      "Premium textile dyes & chemicals. Trusted since 1975. 190+ products for India's textile industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
