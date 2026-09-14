import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBook from "@/components/StickyBook";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
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
    <html lang="en">
      <body className={`${fraunces.variable} ${karla.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBook />
      </body>
    </html>
  );
}
