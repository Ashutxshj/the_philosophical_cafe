import type { Metadata, Viewport } from "next";
import { Fraunces, Karla } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK"],
});

const body = Karla({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Philosophical Cafe | Chetna · Philosophical Counselor",
  description:
    "An unhurried hour to sort out the noise. One-on-one philosophical counselling with Chetna, online across India. Pay what feels right.",
  metadataBase: new URL("https://thephilosophicalcafe.in"),
  openGraph: {
    title: "The Philosophical Cafe",
    description:
      "An unhurried hour to sort out the noise. Practical philosophy, one conversation at a time.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
