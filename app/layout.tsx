import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "MARKET OPS | Scaling Brands Through Strategy, Creativity & Performance",
  description:
    "MARKET OPS is a premium digital agency creating websites, mobile apps, ecommerce systems, performance marketing, brand building, SEO, and overseas growth strategies.",
  keywords: [
    "MARKET OPS",
    "digital agency",
    "performance marketing",
    "web development",
    "mobile application",
    "brand building",
    "SEO",
  ],
  openGraph: {
    title: "MARKET OPS | Premium Digital Growth Agency",
    description: "Scaling brands through strategy, creativity, and performance.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
