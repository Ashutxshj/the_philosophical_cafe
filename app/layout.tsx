import type { Metadata } from "next";
import { Alegreya, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBook from "@/components/StickyBook";

const display = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Philosophical Cafe - A safe space to unlearn the noise",
  description:
    "One-on-one philosophical counselling with Chetna. Honest, unhurried online conversations for the questions about work, meaning, identity and everything in between. Sessions across India, from ₹300.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${karla.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBook />
      </body>
    </html>
  );
}
