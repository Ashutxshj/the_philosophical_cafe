import type { Metadata, Viewport } from "next";
import { Fraunces, Karla } from "next/font/google";
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
    "One-on-one philosophical counselling with Chetna, M.A. Philosophy (JNU). A quiet place to think through work, meaning, decisions and the questions you keep carrying. Sessions online, across India.",
  metadataBase: new URL("https://thephilosophicalcafe.in"),
  openGraph: {
    title: "The Philosophical Cafe",
    description:
      "A safe space to unlearn the noise. One-on-one philosophical counselling, online across India.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f2eb",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
